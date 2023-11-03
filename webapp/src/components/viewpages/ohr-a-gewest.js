import "../qlik/visual";
import "../qlik/infoblock";

import {define, html, LitElement, renderStack} from "../common/commons.js";
import {Qlik, STARDUST} from "@domg/qlik-lib";
import {vlElementsStyle} from "@domg-wc/elements";
import viz_gewest from "../config/milieuhandhaving.json" assert {type: "json"};

import "@domg-wc/components/content-header";
import "@domg-wc/components/loader";
import "@domg-wc/components/infoblock";
import "@domg-wc/components/info-tile";

class OhrAGewest extends LitElement {

  static get styles() {
    return [
      vlElementsStyle
    ]
  }

  static get properties() {
    return {
      connected: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.initialized = false;
    this.connected = false;
  }

  async connectedCallback() {
    this.connection = new Qlik("omgevingsloketrapport.omgeving.vlaanderen.be",
        "9b0d0715-eee5-41b0-bd90-addafee7e99e");
    await this.connection.init();
    this.connection.app.on('closed', () => this.closed = true);

    this.connected = true;

    super.connectedCallback();
  }

  render() {
    return html`
      <vl-content-header>
        <img is="vl-image"
             slot="image"
             src="/images/header.jpg"
             alt="Hoofding afbeelding website"/>
        <a slot="context-link" href="/">Omgevingshandhavingsrapportage</a>
        <a slot="title-link" href="/">Handhaving</a>
      </vl-content-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${this.__renderPage()}
        </div>
      </section>`;
  }

  // __renderPageInfo() {
  //   if (!this.connected) {
  //     return {};
  //   }
  //   const elementsIdPairsGewest = [
  //     {element: document.querySelector('.MIL-KPI-Toezichthouder'), id: "vFyjB"},
  //     {element: document.querySelector('.MIL-KPI-VTE'), id: "GcHdjK"}
  //
  //   ];
  //   elementsIdPairsGewest.forEach(async (item) => {
  //     const model = await this.connection.app.getObject(item.id);
  //     const modelLayout = await model.getLayout();
  //     const data = [];
  //     const columns = modelLayout.qHyperCube.qSize.qcx;
  //     const totalheight = modelLayout.qHyperCube.qSize.qcy;
  //     const pageheight = 5;
  //     const numberOfPages = 3;
  //     for (let i = 0; i < numberOfPages; i++) {
  //       const page = {
  //         qTop: pageheight * i,
  //         qLeft: 0,
  //         qWidth: columns,
  //         qHeight: pageheight,
  //       };
  //       const row = await model.getHyperCubeData("/qHyperCubeDef", [page]);
  //       data.push(...row[0].qMatrix);
  //       console.log(data);
  //     }
  //   });
  //
  //   this.initialized = true;
  //   let pageInfo = []
  //   if (!this.initialized) {
  //     pageInfo = [{
  //       size: 12, template: html`
  //         <vl-loader
  //             data-vl-text="Pagina is aan het laden"
  //         ></vl-loader>`,
  //     }];
  //   } else {
  //     pageInfo = [{
  //       size: 12, template: this.__renderPage(),
  //     }];
  //   }
  //   return [...pageInfo];
  // }

  __renderPage() {
    if (!this.connected) {
      return html`
        <vl-loader
            data-vl-text="Pagina is aan het laden"
        ></vl-loader>`;
    }
    return html`
      <h2 is="vl-h2">Cijfers milieuhandhaving</h2>
      <div is="vl-grid">
        <div is="vl-column" data-vl-size="12">
          <qlik-infoblock title="Gewestelijke toezichthouders en VTE" 
                          icon="business-graph-bar" 
                          .visuals="${viz_gewest}" 
                          .connection="${this.connection}">
            <span>Slot</span>
          </qlik-infoblock>
        </div>
      </div>`;
  }
}

define("ohr-agewest", OhrAGewest);
