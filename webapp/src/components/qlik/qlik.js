import enigma from "enigma.js";
import schema from "enigma.js/schemas/12.170.2.json" assert {type: 'json'};
import {docMixin} from "enigma-mixin";
import {DEFAULT} from "../config/qlik_resources.js";


export class Qlik {
  host;
  appId;
  connection;
  app;
  filters;
  cubes;
  cubeDefs;
  filterValues;

  constructor(host, appId) {
    this.host = host;
    this.appId = appId;
    this.filters = {};
    this.cubes = {};
    this.cubeDefs = {};
    this.filterValues = {};
  }

  async init() {
    let URL = `wss://${this.host}/app/${this.appId}`;
    if (!this.connection && !this.app) {
      this.connection = await enigma.create({
        schema,
        mixins: docMixin,
        url: URL,
        createSocket: (url) => new WebSocket(url),
      });
      let session = await this.connection.open();
      this.app = await session.openDoc(this.appId);
    }
  }

  async getQCSHeaders({webIntegrationId, url}) {
    const response = await fetch(`${url}`, {
      // credentials: "include",
    });
    if (response.status === 401) {
      const loginUrl = new URL(`${url}/login`);
      loginUrl.searchParams.append("returnto", window.location.href);
      /* loginUrl.searchParams.append("qlik-web-integration-id", webIntegrationId);*/
      window.location.href = loginUrl;
      return undefined;
    }
    const csrfToken = new Map(response.headers).get("qlik-csrf-token");
    return {
      "qlik-web-integration-id": webIntegrationId,
      "qlik-csrf-token": csrfToken,
    };
  }

  async end() {
    await this.app.clearAll(false);
    this.connection.close();
  }

  async addFilters(...filterObj) {
    return Promise.all(
        filterObj.map(async (filter) => {
          this.filters[filter.name] = await this.app.createSessionObject({
            qInfo: {qType: "filter"},
            qListObjectDef: {
              qDef: {
                qFieldDefs: [filter.field],
              },
              qInitialDataFetch: [
                {
                  qLeft: 0,
                  qWidth: 1,
                  qTop: 0,
                  qHeight: filter.nrOfValues,
                },
              ],
              qShowAlternatives: true,
            },
          });
        })
    );
  }

  async getFilterValues(filterName, force = false) {
    if (this.filterValues[filterName] && !force) {
      return this.filterValues[filterName];
    }
    let layout = await this.filters[filterName].getLayout();
    this.filterValues[filterName] = layout.qListObject.qDataPages[0].qMatrix.map(
        (v) => {
          return {
            label: v[0].qText,
            value: v[0].qElemNumber,
            state: this.__getState(v[0].qState),
          };
        });
    return this.filterValues[filterName];
  }

  async getFilterValueBasedOnLabel(filterName, filterLabel) {
    return (await this.getFilterValues(filterName)).find(
        v => v.label === filterLabel).value;
  }

  async selectFilters(filterName, filterValues) {
    await this.filters[filterName].selectListObjectValues(
        "/qListObjectDef",
        await Promise.all(filterValues.map(
            fv => this.getFilterValueBasedOnLabel(filterName, fv))),
        false
    );
  }

  async toggleFilters(filterName, filterValues) {
    await this.filters[filterName].selectListObjectValues(
        "/qListObjectDef",
        await Promise.all(filterValues.map(
            fv => this.getFilterValueBasedOnLabel(filterName, fv))),
        true
    );
  }

  async clearFilter(filterName) {
    await this.filters[filterName].clearSelections("/qListObjectDef");
  }

  __getState(v) {
    if (v === "O") {
      return "optional";
    }
    if (v === "X") {
      return "excluded";
    }
    if (v === "S") {
      return "selected";
    }
    if (v === "A") {
      return "alternate";
    }
  }

  async addCubes(...cubes) {
    return Promise.all(
        cubes.map(async (cube) => {
          this.cubeDefs[cube.name] = cube;
          this.cubes[cube.name] = await this.app.createSessionObject({
            qInfo: {qType: "table"},
            qHyperCubeDef: {
              qShowTotalsAbove: true,
              qDimensions: cube.dimensions.map((d) => {
                return {
                  qShowAll: true,
                  qShowTotal: true,
                  qDef: {
                    qGrouping: d.grouping || "N",
                    qFieldLabels: [d.name],
                    qFieldDefs: [d.field],
                  },
                };
              }),
              qMeasures: cube.measures.map((m) => {
                return {
                  qDef: {qDef: m.expression, qLabel: m.name, autoSort: false},
                  qSortBy: {qSortByNumeric: -1},
                };
              }),
              qInitialDataFetch: [
                {
                  qTop: 0,
                  qLeft: 0,
                  qWidth: cube.dimensions.length + cube.measures.length,
                  qHeight: Math.floor(
                      cube.dimensions.length + cube.measures.length / 10_000
                  ),
                },
              ],
            },
          });
        })
    );
  }

  async getCubeValues(cubeName) {
    let table = await this.cubes[cubeName].getLayout();

    let data = table.qHyperCube.qDataPages[0].qMatrix;
    let cubeDef = this.cubeDefs[cubeName];

    const totalheight = table.qHyperCube.qSize.qcy;
    const PAGEWIDTH = cubeDef.dimensions.length + cubeDef.measures.length;
    const PAGEHEIGHT = Math.floor(
        cubeDef.dimensions.length + cubeDef.measures.length / 10_000
    );
    const numberOfPages = Math.ceil(totalheight / PAGEHEIGHT);

    let promises = [];
    for (let i = 1; i < numberOfPages; i++) {
      const page = {
        qTop: PAGEHEIGHT * i,
        qLeft: 0,
        qWidth: PAGEWIDTH,
        qHeight: PAGEHEIGHT,
      };

      let hyperCubeDataPromise = this.cubes[cubeName].getHyperCubeData(
          "/qHyperCubeDef",
          [page]
      );
      promises.push(hyperCubeDataPromise);
      hyperCubeDataPromise.then((row) => {
        data.push(...row[0].qMatrix);
      });
    }

    await Promise.all(promises);

    // when there's just the default dimension, this does not show up as a value in the cube response
    if (cubeDef.dimensions.length === 1 && cubeDef.dimensions[0] === DEFAULT) {
      return this.__mapToJson(data, [...cubeDef.measures]);
    }

    return this.__mapToJson(data, [...cubeDef.dimensions, ...cubeDef.measures]);
  }

  __mapToJson(data, measuresAndDimensions) {
    return data
    .map(
        (v) =>
            v
            .map((vi, i) => {
              let temp = {};
              // if any dimension is excluded, add state to object
              if (vi.qState === "X") {
                temp.state = "excluded";
              }
              if (
                  typeof vi[measuresAndDimensions[i].fieldQualifier] ===
                  "undefined"
              ) {
                temp[measuresAndDimensions[i].name] = "null";
              } else {
                temp[measuresAndDimensions[i].name] =
                    vi[measuresAndDimensions[i].fieldQualifier];
              }
              return temp;
            })
            .reduce((result, item) => {
              return {...result, ...item};
            }, {})
        // filter results with excluded dimensions
    )
    .filter((d) => !("state" in d) || d.state !== "excluded");
  }

  async export() {
    return await this.app.exportData('CSV_C', '/qHyperCubeDef');
  }
}
