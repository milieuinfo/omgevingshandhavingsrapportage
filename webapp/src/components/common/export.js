import {Parser} from "@json2csv/plainjs";
import * as XLSX from 'xlsx/xlsx.mjs';

function saveFile(csv, type, exportedFilenmae) {
  var blob = new Blob([csv],
      {type: type+';charset=utf-8;'});
  if (navigator.msSaveBlob) { // IE 10+
    navigator.msSaveBlob(blob, exportedFilenmae);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) { // feature detection
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", exportedFilenmae);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

export async function exportExcelFile(id, fileTitle, connection) {
  const items = await getData(id, connection);

  const worksheet = XLSX.utils.json_to_sheet(items);
  const workbook = {Sheets: {}};
  workbook["Sheets"][fileTitle] = worksheet;
  workbook["SheetNames"] = [fileTitle];

  const csv = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});

  const exportedFilename = fileTitle + '.xlsx' || 'export.xlsx';

  saveFile(csv, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', exportedFilename);
}

export async function exportCSVFile(id, fileTitle, connection) {
  const items = await getData(id, connection);

  const header = Object.keys(items[0]);

  const csv = new Parser({header: header, delimiter: ',', quote: '"'}).parse(items);

  const exportedFilename = fileTitle + '.csv' || 'export.csv';
  saveFile(csv, 'text/csv', exportedFilename);
}

export async function getData(id, connection) {
  let model = await connection.app.getObject(id);
  let table = await model.getLayout();

  let dims = table.qHyperCube.qDimensionInfo.map(d => d.qFallbackTitle);
  let measures = table.qHyperCube.qMeasureInfo.map(m => m.qFallbackTitle);

  const totalheight = table.qHyperCube.qSize.qcy;
  const PAGEWIDTH = table.qHyperCube.qSize.qcx;
  const PAGEHEIGHT = Math.floor(
      10_000 / PAGEWIDTH
  );
  const numberOfPages = Math.ceil(
      (totalheight * PAGEWIDTH) / (PAGEWIDTH * PAGEHEIGHT));

  let promises = [];
  let data = [];
  for (let i = 0; i < numberOfPages; i++) {
    const page = {
      qTop: PAGEHEIGHT * i,
      qLeft: 0,
      qWidth: PAGEWIDTH,
      qHeight: PAGEHEIGHT,
    };

    let hyperCubeDataPromise = model.getHyperCubeData(
        "/qHyperCubeDef",
        [page]
    );
    promises.push(hyperCubeDataPromise);
    hyperCubeDataPromise.then((row) => {
      data.push(...row[0].qMatrix);
    });
  }

  await Promise.all(promises);
  return __mapToJson(data, [...dims, ...measures]);
}

function __mapToJson(data, measuresAndDimensions) {
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
            if (typeof vi.qText === "undefined") {
              temp[measuresAndDimensions[i]] = "null";
            } else {
              temp[measuresAndDimensions[i]] = vi.qText;
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