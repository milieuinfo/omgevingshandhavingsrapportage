import { Router } from "@vaadin/router"
import {LitElement, html} from 'lit';
import "uig-webcomponents/lib/components/body"
import "uig-webcomponents/lib/components/header"
import "uig-webcomponents/lib/components/footer"
import "uig-webcomponents/lib/components/grid"
import "uig-webcomponents/lib/components/body/styles.css"
import "uig-webcomponents/lib/components/template"
import "uig-webcomponents/lib/components/content-header"
import "uig-webcomponents/lib/components/image"
import "uig-webcomponents/lib/components/image/styles.css"
import "uig-webcomponents/lib/components/titles/styles.css"
import "uig-webcomponents/lib/components/titles"
import "uig-webcomponents/lib/components/typography"
import "uig-webcomponents/lib/components/properties/styles.css"
import "uig-webcomponents/lib/components/info-tile"
import "uig-webcomponents/lib/components/accordion"
import "uig-webcomponents/lib/components/doormat"
import "uig-webcomponents/lib/components/doormat/styles.css"
import "uig-webcomponents/lib/components/side-navigation"
import "uig-webcomponents/lib/components/side-navigation/styles.css"
import "uig-webcomponents/lib/components/button"
import "uig-webcomponents/lib/components/button/styles.css"
import "uig-webcomponents/lib/components/accessibility"
import "uig-webcomponents/lib/components/link-list"
import "uig-webcomponents/lib/components/link-list/styles.css"
import "uig-webcomponents/lib/components/alert"
import "uig-webcomponents/lib/components/functional-header"
import "uig-webcomponents/lib/components/infoblock"
import "uig-webcomponents/lib/components/description-data"
import "uig-webcomponents/lib/components/icon"
import "uig-webcomponents/lib/components/icon/styles.css"
import "uig-webcomponents/lib/components/document"
import "uig-webcomponents/lib/components/tooltip"
import "uig-webcomponents/lib/components/tooltip/styles.css"
import * as stardust from '@nebula.js/stardust'
import barChart from '@nebula.js/sn-bar-chart';
import connect from '../connect';
import snKpi from "@nebula.js/sn-kpi"
import table from '@nebula.js/sn-table';
import snPieChart from "@nebula.js/sn-pie-chart"


//Routes
const routes = [
  {
    path: "/",
    component: "start-view",
    action: async () => {
      await import("../views/start");
    },
  },
  {
    path: "/public/home",
    component: "home-view",
    action: async () => {
      await import("../views/home");
    },
  },
  {
    path: "/public/gewestelijk",
    component: "gewestelijk-view",
    action: async () => {
      await import("../views/gewestelijk");
    },
  },
  {
    path: "/public/provinciaal",
    component: "provinciaal-view",
    action: async () => {
      await import("../views/provinciaal");
    },
  },
  {
    path: "/map",
    component: "map-view",
    action: async () => {
      await import("../views/map");
    },
  },
  {
    path: "/public/gewestelijkAnalyse",
    component: "GewestelijkAnalyse-view",
    action: async () => {
      await import("../views/gewestelijkAnalyse");
      gewestelijkanalyserendering();
      
    },
  },
  {
    path: "/public/gemeenten",
    component: "gemeenten-view",
    action: async () => {
      await import("../views/gemeenten");
    },
  },
  {
    path: "/toegankelijkheid",
    component: "toegankelijkheid-view",
    action: async () => {
      await import("../views/toegankelijkheid");
    },
  },
  {
    path: "/privacy",
    component: "privacy-view",
    action: async () => {
      await import("../views/privacy");
    },
  },
  {
    path: "/cookieverklaring",
    component: "cookieverklaring-view",
    action: async () => {
      await import("../views/cookieverklaring");
    },
  },
  {
    path: "/public/provinciaalAnalyse",
    component: "provinciaalAnalyse-view",
    action: async () => {
      await import("../views/provinciaalAnalyse");
      provinciaalanalyserendering();
    },
  },
  {
    path:"/public/gemeentenAnalyse",
    component: "gemeentenAnalyse-view",
    action: async() => {
      await import ("../views/gemeentenAnalyse");
    }
  },
  {
    path:"/public/gemeentenDashboard",
    component: "gemeentenDashboard-view",
    action: async() => {
      await import ("../views/gemeentenDashboard");
      gemeentendashboard();
    }
  },
  {
    path:"/public/hogeraadAnalyse",
    component: "hogeraadAnalyse-view",
    action: async() => {
      await import ("../views/hogeraadAnalyse");
      hogeraadanalyserendering();
    }
  },
  {
    path:"/public/strafrechtelijk",
    component: "strafrechtelijkAnalyse-view",
    action: async() => {
      await import ("../views/strafrechtelijk")
    
    }
  },
  {
    path:"/public/hogeraad",
    component: "hogeraad-view",
    action: async() => {
      await import ("../views/hogeraad");
    }
  },
  {
    path:"/public/strafrechtelijkAnalyse",
    component: "strafrechtelijkanalyseanalyse-view",
    action: async() => {
      await import ("../views/strafrechtelijkAnalyse");
      strafrechtelijkanalyserendering();
    }
  },
  {
    path:"/public/gemeentenDashboardro",
    component: "gemeentendashboardro-view",
    action: async() => {
      await import ("../views/gemeentenDashboardro");
      gemeentendashboardro();
  }
}
];
export const router = new Router(document.getElementById("app"));
router.setRoutes(routes);



const config_Gemeenten_MIL = {
  url: "https://omgevingsloketrapport.omgeving.vlaanderen.be",
  appId: "5cda9727-1b60-4a77-8b10-c0a93f5b5123",
};
const config_HogeRaadAnalyse = {
  url: "https://omgevingsloketrapport.omgeving.vlaanderen.be",
  appId: "e4c1bc8d-d5b5-4b26-8f78-6214626ba5eb",
};
const config_Provinciaal = {
  url: "https://omgevingsloketrapport.omgeving.vlaanderen.be",
  appId: "cf33bec5-f5a5-4554-abd0-b6c002b3ac5c",

};
const config_Strafrechtelijk = {
  url: "https://omgevingsloketrapport.omgeving.vlaanderen.be",
  appId: "4005eea8-13a5-4c22-b186-9bd92f8252db",
};
const config_Gewest = {
  url: "https://omgevingsloketrapport.omgeving.vlaanderen.be",
  appId: "9b0d0715-eee5-41b0-bd90-addafee7e99e",
};
/*Define the types of charts that we want refering to stardust package*/
const types = [
  {
    name: "barchart",
    load: () => Promise.resolve(barChart)
  },
  {
    name: "kpi",
    load: () => Promise.resolve(snKpi)
  },
  {
    name: 'table',
    load: () => Promise.resolve(table)
  },
  {
    name: 'pivot-table',
    load: () => Promise.resolve(pivotTable),
  },
  {
    name: "piechart",
    load: () => Promise.resolve(snPieChart),
  }
];
async function gewestelijkanalyserendering() {

const classExists = document.getElementsByClassName(
    'chartGewest'
).length > 0;
let app;
app = await connect(config_Gewest);

const nebbie = stardust.embed(app, {
    types,
    context: {
      language: 'nl-NL',
      theme: 'light',
    },
  });
  const nebbieNodebbie = stardust.embed(app, {
    types,
    context: {
      language: 'nl-NL',
      theme: 'light',
      constraints: { select: true },
    },
  });
  if(!classExists) {
    //Get toolbar of application and define it as a class of toolbar => To be used in HTML page
    (await nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar')))); 
       /* Get fieldvalues of the field Naam Handhavingsinstantie in Qlik model and mount it in placeholder listbox*/
 const fieldNameProvincie = 'Naam Handhavinginstantie'; // Should refer to a field in your app
 (await nebbie.field(fieldNameProvincie))
 .mount(document.querySelector('.listbox'),{search:false,title:"Gewestelijke handhavingsactoren",checkboxes:false});
    const elementsIdPairsGewest = [
      { element: document.querySelector('.MIL-KPI-Toezichthouder'), id: "vFyjB" },
      { element: document.querySelector('.MIL-KPI-VTE'), id: "GcHdjK" },
      { element: document.querySelector('.MIL-Barchart-VTE'), id: "SFdpsd" },
      { element: document.querySelector('.MIL-KPI-Klachten'), id: "nVQPBm" },
      { element: document.querySelector('.MIL-Barchart-Klachten'), id: "RJzG" },
      { element: document.querySelector('.MIL-KPI-Controles'), id: "yDCurj" },
      { element: document.querySelector('.MIL-Barchart-Controles'), id: "mGbGjm" },
      { element: document.querySelector('.MIL-KPI-Aanvankelijke-Controles'), id: "WPwAxT" },
      { element: document.querySelector('.MIL-KPI-Overtredingsgraad'), id: "qJBnrn" },
      { element: document.querySelector('.MIL-bar-Aanvankelijke-Controles'), id: "DEUkp" },
      { element: document.querySelector('.MIL-KPI-Raadgeving'), id: "mPjrm" },
      { element: document.querySelector('.MIL-KPI-Aanmaning'), id: "UYNdmn" },
      { element: document.querySelector('.MIL-KPI-Verslag-van-vastelling'), id: "XejJS" },
      { element: document.querySelector('.MIL-KPI-Proces-verbaal'), id: "BJRcRZ" },
      { element: document.querySelector('.MIL-KPI-Bestuurlijk-maatregel'), id: "ffVSmTa" },
      { element: document.querySelector('.MIL-KPI-Bestuurlijk-maatregel-met-dwangsom'), id: "jHmKf" },
      { element: document.querySelector('.MIL-KPI-Bestuurlijk-maatregel-zonder-dwangsom'), id: "gcnM" },
      { element: document.querySelector('.MIL-KPI-Veiligheidsmaatregel'), id: "rVWpfY" },
      { element: document.querySelector('.opmerking-mil-hha'), id: "frEb" },
      //Ruimtelijke ordening...
      { element: document.querySelector('.RO-KPI-Stedenbouwkundige'), id: "TuPxJr" },
      { element: document.querySelector('.RO-KPI-Gecombi'), id: "JzVmCqa" },
      { element: document.querySelector('.RO-KPI-Verbalitisanten'), id: "vxRNaj" },
      { element: document.querySelector('.RO-KPI-VTE'), id: "UtRdr" },
      { element: document.querySelector('.RO-Barchart-VTE'), id: "pMzmCG" },
      { element: document.querySelector('.RO-KPI-Klachten'), id: "qvzGGX" },
      { element: document.querySelector('.RO-KPI-Controles'), id: "pAngTD" },
      { element: document.querySelector('.RO-Barchart-Controles'), id: "NqAcF" },
      { element: document.querySelector('.RO-KPI-Aanvankelijke-Controles'), id: "sPrA" },
      { element: document.querySelector('.RO-KPI-Overtredingsgraad'), id: "GZmeTr" },
      { element: document.querySelector('.RO-KPI-Raadgeving'), id: "ezmbfUG" },
      { element: document.querySelector('.RO-KPI-Aanmaning'), id: "ELb" },
      { element: document.querySelector('.RO-KPI-Verslag-van-vastelling'), id: "BJUMTa" },
      { element: document.querySelector('.RO-KPI-Proces-verbaal'), id: "VcYTSCv" },
      { element: document.querySelector('.RO-KPI-Beveltotstaking'), id: "TBDgV" },
      { element: document.querySelector('.opmerking-ro-hha'), id: "hPpmmx" },
      { element: document.querySelector('.RO-KPI-Bestuurlijk-maatregel'), id: "RttJdgK" },
      { element: document.querySelector('.RO-KPI-Bestuurlijk-maatregel-met-dwangsom'), id: "QJcnXPM" },
      { element: document.querySelector('.RO-KPI-Bestuurlijk-maatregel-zonder-dwangsom'), id: "jzsrBD" },
      { element: document.querySelector('.RO-KPI-minnelijk'), id: "dNxJzdj" },
      { element: document.querySelector('.RO-KPI-openbaarmin'), id: "wRzVAX" },
      { element: document.querySelector('.RO-KPI-burgerlijkrechter'), id: "ccVXRjV" },
      { element: document.querySelector('.RO-KPI-gerechtambt'), id: "yDSVgJ" }
    ];
        elementsIdPairsGewest.forEach(({ element, id }) => {
        nebbieNodebbie.render({ element, id });
    });
  }
}
//Rendering Provinciaalanalyse
async function provinciaalanalyserendering() {
  const classExists = document.getElementsByClassName(
    'chart'
   ).length > 0;

   let app;
   app = await connect(config_Provinciaal);
 const nebbie = stardust.embed(app, {
     types,
     context: {
       language: 'nl-NL',
     },
   });

   const nebbieNoselectionProv = stardust.embed(app, {
    types,
    //themes,
    context: {
      language: 'nl-NL',
      constraints: { select: true },
    },
  });
 
  if(!classExists) {
  //Get toolbar of application and define it as a class of toolbar => To be used in HTML page
  (await nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar')))); 
  
     /* Get fieldvalues of the field Naam Handhavingsinstantie in Qlik model and mount it in placeholder listbox*/
 const fieldNameProvincie = '[Provincie]'; // Should refer to a field in your app
 (await nebbie.field(fieldNameProvincie))
 .mount(document.querySelector('.listboxProv'),{search:false,title:"Provinciale handhavingsactoren",checkboxes:false});

    const elementsIdPairsProvincie = [
  { element: document.querySelector('.VTEHandhaving'), id: "JjxWn" },
  { element: document.querySelector('.ToezichthoudersProv'), id: "ueUrPBa" },
  { element: document.querySelector('.TotaalVTEChart'), id: "nPpHZ" },
  { element: document.querySelector('.KlachtenChart'), id: "FGDamh" },
  { element: document.querySelector('.Klachten'), id: "mKLrs" },
  { element: document.querySelector('.Aanvankelijkecontrolesmetovertreding'), id: "FwZahE" },
  { element: document.querySelector('.ControlesChart'), id: "eypP" },
  { element: document.querySelector('.Controles'), id: "JQLw" },
  { element: document.querySelector('.PROV-KPI-Overtredingsgraad'), id: "AJvfRDY" },
  { element: document.querySelector('.PROV-BAR-Controles'), id: "wCxFj" },
  { element: document.querySelector('.Raadgeving'), id: "QCdRxrv" },
  { element: document.querySelector('.Aanmaning'), id: "fEjbnM" },
  { element: document.querySelector('.Procesverbaal'), id: "xUjZP" },
  { element: document.querySelector('.PROV-KPI-verslagvanvastelling'), id: "pYjrVP" }
];
    elementsIdPairsProvincie.forEach(({ element, id }) => {
    nebbieNoselectionProv.render({ element, id });
});

    const model4 = await app.getObject("emJyma"); 
    const modelLayout4 = await model4.getLayout();
    const data4 = [];
    const columns4 = modelLayout4.qHyperCube.qSize.qcx;
    const totalheight4 = modelLayout4.qHyperCube.qSize.qcy;
    const pageheight4 = 5;
    const numberOfPages4 = 3; 
    for (let i = 0; i < numberOfPages4; i++) {
      const page4 = {
        qTop: pageheight4 * i,
        qLeft: 0,
        qWidth: columns4,
        qHeight: pageheight4,
      };
      const row4 = await model4.getHyperCubeData("/qHyperCubeDef", [page4]);
      data4.push(...row4[0].qMatrix);
    }
    
    class MyElement4 extends LitElement {
      render() {
        return html`<vl-typography>
      <table>
      <caption>
       Opmerking voor cijfers van 2022
      </caption>
      <thead>
        <tr>
          <th>Provincie</th>
          <th>Opmerking</th>
        </tr>
      </thead>
      <tbody>
      <tr>
     <td>${data4[0][0].qText}</td>
     <td>${data4[0][1].qText}</td>
     </tr>
      </tbody>
    </table>
  </vl-typography>`;
      }
    }
    customElements.define('my-element4', MyElement4);

    class MyElement5 extends LitElement {
      render() {
        return html`<vl-typography>
      <table>
      <caption>
       Opmerking voor cijfers van 2022
      </caption>
      <thead>
        <tr>
          <th>Provincie</th>
          <th>Opmerking</th>
        </tr>
      </thead>
      <tbody>
      <tr>
     <td>${data4[1][0].qText}</td>
     <td>${data4[1][1].qText}</td>
     </tr>
      </tbody>
    </table>
  </vl-typography>`;
      }
    }
    customElements.define('my-element5', MyElement5);
    class MyElement6 extends LitElement {
      render() {
        return html`<vl-typography>
      <table>
      <caption>
       Opmerking voor cijfers van 2022
      </caption>
      <thead>
        <tr>
          <th>Provincie</th>
          <th>Opmerking</th>
        </tr>
      </thead>
      <tbody>
      <tr>
     <td>${data4[2][0].qText}</td>
     <td>${data4[2][1].qText}</td>
     </tr>
      </tbody>
    </table>
  </vl-typography>`;
      }
    }
    customElements.define('my-element6', MyElement6);
    class MyElement7 extends LitElement {
      render() {
        return html`<vl-typography>
      <table>
      <caption>
       Opmerking voor cijfers van 2022
      </caption>
      <thead>
        <tr>
          <th>Provincie</th>
          <th>Opmerking</th>
        </tr>
      </thead>
      <tbody>
      <tr>
     <td>${data4[3][0].qText}</td>
     <td>${data4[3][1].qText}</td>
     </tr>
      </tbody>
    </table>
  </vl-typography>`;
      }
    }
    customElements.define('my-element7', MyElement7);
    class MyElement8 extends LitElement {
      render() {
        return html`<vl-typography>
      <table>
      <caption>
       Opmerking voor cijfers van 2022
      </caption>
      <thead>
        <tr>
          <th>Provincie</th>
          <th>Opmerking</th>
        </tr>
      </thead>
      <tbody>
      <tr>
     <td>${data4[4][0].qText}</td>
     <td>${data4[4][1].qText}</td>
     </tr>
      </tbody>
    </table>
  </vl-typography>`;
      }
    }
    customElements.define('my-element8', MyElement8);
  }
}
//Rendering hoge raad
async function hogeraadanalyserendering() {
  const classExistsHR = document.getElementsByClassName(
    'chart').length > 0;
   let app;
   app = await connect(config_HogeRaadAnalyse);
 const nebbie = stardust.embed(app, {
     types,
     //themes,
     context: {
       language: 'nl-NL',
       theme: 'light',
     },
   });
   const nebbieNoselectionHRC = stardust.embed(app, {
    types,
    //themes,
    context: {
      language: 'nl-NL',
      theme: 'light',
      constraints: { select: true },
    },
  });

  if(!classExistsHR) {
    //Get toolbar of application and define it as a class of toolbar => To be used in HTML page
  (await nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar'))));
    
  const model = await app.getObject("aZbJPN"); 
  const modelLayout = await model.getLayout();
  const data = [];
  const columns = modelLayout.qHyperCube.qSize.qcx;
  const totalheight = modelLayout.qHyperCube.qSize.qcy;
  const pageheight = 5;
  const numberOfPages = 3; 
  for (let i = 0; i < numberOfPages; i++) {
    const page = {
      qTop: pageheight * i,
      qLeft: 0,
      qWidth: columns,
      qHeight: pageheight,
    };
    const row = await model.getHyperCubeData("/qHyperCubeDef", [page]);
    data.push(...row[0].qMatrix);
  }
  class MyElement extends LitElement {  
      render() {
        return html`<vl-typography>
      <table>
      <caption>
        Instroom - 2022
      </caption>
      <thead>
        <tr>
          <th>Instroom</th>
          <th>Aanvragen voor advies inzake herstelvorderingen</th>
          <th>Verzoeken tot heroverweging van een negatief advies inzake herstelvorderingen</th>
          <th>Aanvragen voor advies inzake opeenvolgende herstelvorderingen</th>
          <th>Aanvragen voor advies inzake een ambtshalve uitvoering van een door de rechter bevolen herstelmaatregel</th>
          <th>Aanvragen voor advies inzake betekeningen van vonissen of arresten waarin de rechter het bestuur heeft gematchtigd om ambtshalve in de uitvoering ervan te voorzien</th>
        </tr>
      </thead>
      <tbody>
      <tr>
     <td>${data[0][0].qText}</td>
     <td>${data[0][1].qText}</td>
     <td>${data[0][2].qText}</td>
     <td>${data[0][3].qText}</td>
     <td>${data[0][4].qText}</td>
     <td>${data[0][5].qText}</td>
     </tr>
     <tr>
     <td>${data[1][0].qText}</td>
     <td>${data[1][1].qText}</td>
     <td>${data[1][2].qText}</td>
     <td>${data[1][3].qText}</td>
     <td>${data[1][4].qText}</td>
     <td>${data[1][5].qText}</td>
     </tr>

     <tr>
     <td>${data[2][0].qText}</td>
     <td>${data[2][1].qText}</td>
     <td>${data[2][2].qText}</td>
     <td>${data[2][3].qText}</td>
     <td>${data[2][4].qText}</td>
     <td>${data[2][5].qText}</td>
     </tr>
      </tbody>
    </table>
  </vl-typography>`;
      }
    }
    customElements.define('my-element', MyElement);

    const model2 = await app.getObject("CdDcLcY"); 
    const modelLayout2 = await model2.getLayout();
    const data2 = [];
    const columns2 = modelLayout2.qHyperCube.qSize.qcx;
    const totalheight2 = modelLayout2.qHyperCube.qSize.qcy;
    const pageheight2 = 5;
    const numberOfPages2 = 3; 
    for (let i = 0; i < numberOfPages2; i++) {
      const page2 = {
        qTop: pageheight2 * i,
        qLeft: 0,
        qWidth: columns2,
        qHeight: pageheight2,
      };
      const row2 = await model2.getHyperCubeData("/qHyperCubeDef", [page2]);
      data2.push(...row2[0].qMatrix);
    }

    class MyElement2 extends LitElement {
      render() {
        return html`<vl-typography>
      <table>
      <caption>
        Adviezen - 2022
      </caption>
      <thead>
        <tr>
          <th></th>
          <th>Adviezen over het gemotiveerd verzoek om tijdelijk of definitief af te zien van verdere inning van een opeisbaar geworden dwangomschuld</th>
          <th>Adviezen over de herstelmaatregelen in het kader van een beroep ingesteld door de vermoedelijke overtreder tegen de beslissing tot toepassing van bestuursdwang of tot het opleggen van een last onder dwangsom</th>
        </tr>
      </thead>
      <tbody>
      <tr>
     <td>${data2[0][0].qText}</td>
     <td>${data2[0][1].qText}</td>
     <td>${data2[0][2].qText}</td>
     </tr>
     <tr>
     <td>${data2[1][0].qText}</td>
     <td>${data2[1][1].qText}</td>
     <td>${data2[1][2].qText}</td>
     </tr>
      </tbody>
    </table>
  </vl-typography>`;
      }
    }
    customElements.define('my-element2', MyElement2);

    const model3 = await app.getObject("fLJsje"); 
    const modelLayout3 = await model3.getLayout();
    const data3 = [];
    const columns3 = modelLayout3.qHyperCube.qSize.qcx;
    const totalheight3 = modelLayout3.qHyperCube.qSize.qcy;
    const pageheight3 = 5;
    const numberOfPages3 = 3; 
    for (let i = 0; i < numberOfPages3; i++) {
      const page3 = {
        qTop: pageheight3 * i,
        qLeft: 0,
        qWidth: columns3,
        qHeight: pageheight3,
      };
      const row3 = await model3.getHyperCubeData("/qHyperCubeDef", [page3]);
      data3.push(...row3[0].qMatrix);
    }
    class MyElement3 extends LitElement {
      render() {
        return html`<vl-typography>
      <table>
      <caption>
        Bemiddelingsopdrachten - 2022
      </caption>
      <thead>
        <tr>
          <th>Bemiddelingsopdracht</th>
          <th>Aantal bemiddelingsopdrachten op verzoek van een vermoedelijke overtreder of de rechtbank</th>
        </tr>
      </thead>
      <tbody>
      <tr>
     <td>${data3[0][0].qText}</td>
     <td>${data3[0][1].qText}</td>
     </tr>
     <tr>
     <td>${data3[1][0].qText}</td>
     <td>${data3[1][1].qText}</td>
     </tr>
     <tr>
     <td>${data3[2][0].qText}</td>
     <td>${data3[2][1].qText}</td>
     </tr>
     <tr>
     <td>${data3[3][0].qText}</td>
     <td>${data3[3][1].qText}</td>
     </tr>
      </tbody>
    </table>
  </vl-typography>`;
      }
    }
    customElements.define('my-element3', MyElement3);

    nebbie.render({ 
      element: document.querySelector('.HRCBindendeadviesChart'),
      id: "mhc",
    });

}
}
//Rendering strafrechtelijk
async function strafrechtelijkanalyserendering() {
  const classExistsInit = document.getElementsByClassName('chart').length > 0;
   let app;
   app = await connect(config_Strafrechtelijk);
 const nebbie = stardust.embed(app, {
     types,
     //themes,
     context: {
       language: 'nl-NL',
       theme: 'light',
     },
   });
   const nebbieNoselection = stardust.embed(app, {
    types,
    //themes,
    context: {
      language: 'nl-NL',
      theme: 'light',
      constraints: { select: true },
    },
  });
  if(!classExistsInit) {
    //Get toolbar of application and define it as a class of toolbar => To be used in HTML page
  (await nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar'))));

  const elementsIdPairsProvincie = [
    { element: document.querySelector('.Instroomthema'), id: "zErj" },
    { element: document.querySelector('.GewestBB1'), id: "pCPBM"},
  ];
      elementsIdPairsProvincie.forEach(({ element, id }) => {
      nebbie.render({ element, id });
  });

  nebbieNoselection.render({
    element:document.querySelector('.GewestBB2'),
    id: 'FtGJPts'
  });
  const modelInstroom = await app.getObject("BWsEsqr"); 
  const modelLayoutInstroom = await modelInstroom.getLayout();
  const dataInstroom = [];
  const columnsInstroom = modelLayoutInstroom.qHyperCube.qSize.qcx;
  const totalheight = modelLayoutInstroom.qHyperCube.qSize.qcy;
  const pageheightInstroom = 5;
  const numberOfPages_Instroom = 3; 
  for (let i = 0; i < numberOfPages_Instroom; i++) {
    const pageInstroom = {
      qTop: pageheightInstroom * i,
      qLeft: 0,
      qWidth: columnsInstroom,
      qHeight: pageheightInstroom,
    };
    const rowInstroom = await modelInstroom.getHyperCubeData("/qHyperCubeDef", [pageInstroom]);
    dataInstroom.push(...rowInstroom[0].qMatrix);
  }
  const modelInstroomThema = await app.getObject("YJwDMRv"); 
  const modelLayoutInstroomThema = await modelInstroomThema.getLayout();
  const dataInstroomThema = [];
  const columnsInstroomThema = modelLayoutInstroomThema.qHyperCube.qSize.qcx;
  const totalheightThema = modelLayoutInstroomThema.qHyperCube.qSize.qcy;
  const pageheightInstroomThema = 5;
  const numberOfPages_InstroomThema = 3; 
  for (let i = 0; i < numberOfPages_InstroomThema; i++) {
    const pageInstroomThema = {
      qTop: pageheightInstroomThema * i,
      qLeft: 0,
      qWidth: columnsInstroomThema,
      qHeight: pageheightInstroomThema,
    };
    const rowInstroomThema = await modelInstroomThema.getHyperCubeData("/qHyperCubeDef", [pageInstroomThema]);
    dataInstroomThema.push(...rowInstroomThema[0].qMatrix);
  }
  const modelInstroomHHC = await app.getObject("tfxt"); 
  const modelLayoutInstroomHHC = await modelInstroomHHC.getLayout();
  const dataInstroomHHC = [];
  const columnsInstroomHHC = modelLayoutInstroomHHC.qHyperCube.qSize.qcx;
  const totalheightHHC = modelLayoutInstroomHHC.qHyperCube.qSize.qcy;
  const pageheightInstroomHHC = 5;
  const numberOfPages_InstroomHHC = 3; 
  for (let i = 0; i < numberOfPages_InstroomHHC; i++) {
    const pageInstroomHHC = {
      qTop: pageheightInstroomHHC * i,
      qLeft: 0,
      qWidth: columnsInstroomHHC,
      qHeight: pageheightInstroomHHC,
    };
    const rowInstroomHHC = await modelInstroomHHC.getHyperCubeData("/qHyperCubeDef", [pageInstroomHHC]);
    dataInstroomHHC.push(...rowInstroomHHC[0].qMatrix);
  }
  const modelInstroomHHCBehandeling = await app.getObject("zBgdaes"); 
  const modelLayoutInstroomBehandeling = await modelInstroomHHCBehandeling.getLayout();
  const dataInstroomBehandeling = [];
  const columnsInstroomBehandeling = modelLayoutInstroomBehandeling.qHyperCube.qSize.qcx;
  const totalheightBehandeling = modelLayoutInstroomBehandeling.qHyperCube.qSize.qcy;
  const pageheightInstroomBehandeling = 5;
  const numberOfPages_InstroomBehandeling = 3; 
  for (let i = 0; i < numberOfPages_InstroomBehandeling; i++) {
    const pageInstroomBehandeling = {
      qTop: pageheightInstroomBehandeling * i,
      qLeft: 0,
      qWidth: columnsInstroomBehandeling,
      qHeight: pageheightInstroomBehandeling,
    };
    const rowInstroomBehandeling = await modelInstroomHHCBehandeling.getHyperCubeData("/qHyperCubeDef", [pageInstroomBehandeling]);
    dataInstroomBehandeling.push(...rowInstroomBehandeling[0].qMatrix);
  }
  const modelInstroomVooruit = await app.getObject("gKSTkk"); 
  const modelLayoutInstroomVooruit = await modelInstroomVooruit.getLayout();
  const dataInstroomVooruit = [];
  const columnsInstroomVooruit = modelLayoutInstroomVooruit.qHyperCube.qSize.qcx;
  const totalheightVooruit = modelLayoutInstroomVooruit.qHyperCube.qSize.qcy;
  const pageheightInstroomVooruit = 5;
  const numberOfPages_InstroomVooruit = 3; 
  for (let i = 0; i < numberOfPages_InstroomVooruit; i++) {
    const pageInstroomVooruit = {
      qTop: pageheightInstroomVooruit * i,
      qLeft: 0,
      qWidth: columnsInstroomVooruit,
      qHeight: pageheightInstroomVooruit,
    };
    const rowInstroomVooruit = await modelInstroomVooruit.getHyperCubeData("/qHyperCubeDef", [pageInstroomVooruit]);
    dataInstroomVooruit.push(...rowInstroomVooruit[0].qMatrix);
  }
  const modelAfhandelingOpport = await app.getObject("qyCtSu"); 
  const modelLayoutAfhandelingOpport  = await modelAfhandelingOpport.getLayout();
  const dataAfhandelingOpport  = [];
  const columnsAfhandelingOpport  = modelLayoutAfhandelingOpport.qHyperCube.qSize.qcx;
  const totalheightAfhandeling = modelLayoutAfhandelingOpport.qHyperCube.qSize.qcy;
  const pageheightAfhandeling = 5;
  const numberOfPages_Afhandeling = 3; 
  for (let i = 0; i < numberOfPages_Afhandeling; i++) {
    const pageAfhandeling = {
      qTop: pageheightAfhandeling * i,
      qLeft: 0,
      qWidth: columnsAfhandelingOpport,
      qHeight: pageheightAfhandeling,
    };
    const rowAfhandeling = await modelAfhandelingOpport.getHyperCubeData("/qHyperCubeDef", [pageAfhandeling]);
    dataAfhandelingOpport.push(...rowAfhandeling[0].qMatrix);
  }
  const modelAfhandelingOpport2 = await app.getObject("uWVR"); 
  const modelLayoutAfhandelingOpport2  = await modelAfhandelingOpport2.getLayout();
  const dataAfhandelingOpport2  = [];
  const columnsAfhandelingOpport2  = modelLayoutAfhandelingOpport2.qHyperCube.qSize.qcx;
  const totalheightAfhandeling2 = modelLayoutAfhandelingOpport2.qHyperCube.qSize.qcy;
  const pageheightAfhandeling2 = 5;
  const numberOfPages_Afhandeling2 = 3; 
  for (let i = 0; i < numberOfPages_Afhandeling2; i++) {
    const pageAfhandeling2 = {
      qTop: pageheightAfhandeling2 * i,
      qLeft: 0,
      qWidth: columnsAfhandelingOpport2,
      qHeight: pageheightAfhandeling2,
    };
    const rowAfhandeling2 = await modelAfhandelingOpport2.getHyperCubeData("/qHyperCubeDef", [pageAfhandeling2]);
    dataAfhandelingOpport2.push(...rowAfhandeling2[0].qMatrix);
  }

  //Gewestelijke beboetingsentiteiten
  const modelGewestTabel1= await app.getObject("NqbwMC"); 
  const modelLayoutGewestTabel1  = await modelGewestTabel1.getLayout();
  const dataAGewestTabel1  = [];
  const columnsGewestTabel1 = modelLayoutGewestTabel1.qHyperCube.qSize.qcx;
  const totalheightGewestTabel1 = modelLayoutGewestTabel1.qHyperCube.qSize.qcy;
  const pageheightGewestTabel1 = 5;
  const numberOfPages_GewestTabel1 = 3; 
  for (let i = 0; i < numberOfPages_GewestTabel1; i++) {
    const pageGewestTabel1 = {
      qTop: pageheightGewestTabel1 * i,
      qLeft: 0,
      qWidth: columnsGewestTabel1,
      qHeight: pageheightGewestTabel1,
    };
    const rowGewstTabel1 = await modelGewestTabel1.getHyperCubeData("/qHyperCubeDef", [pageGewestTabel1 ]);
    dataAGewestTabel1.push(...rowGewstTabel1[0].qMatrix);
  }

  const modelGewestBehandeling = await app.getObject("EEGHSs");
  const modelLayoutGewestBehandeling = await modelGewestBehandeling.getLayout();
  const dataGewestBehandeling = [];

  const columnsGewestBehandeling = modelLayoutGewestBehandeling.qHyperCube.qSize.qcx;
  const totalheightGewestBehandeling = modelLayoutGewestBehandeling.qHyperCube.qSize.qcy;

  const pageheightGewestBehandeling = 5;
  const numberOfPages_GewestBehandeling = 3;

  for (let i = 0; i < numberOfPages_GewestBehandeling; i++) {
    const pageGewestBehandeling = {
      qTop: pageheightGewestBehandeling * i,
      qLeft: 0,
      qWidth: columnsGewestBehandeling,
      qHeight: pageheightGewestBehandeling,
    };
    const rowGewestBehandeling = await modelGewestBehandeling.getHyperCubeData("/qHyperCubeDef", [pageGewestBehandeling]);
    dataGewestBehandeling.push(...rowGewestBehandeling[0].qMatrix);
  }

class InstroomAfhandeling extends LitElement {  
    render() {
      return html`<vl-typography>
    <table>
    <caption>
    Afhandeling zonder strafvervolging om opportuniteitsredenen - 2022
    </caption>
    <thead>
      <tr>
        <th>Categorie</th>
        <th>Afval</th>
        <th>Mest</th>
        <th>Vergunning</th>
        <th>Milieubeheerrecht</th>
        <th>Emissies</th>
        <th>Ruimtelijke ordening</th>
      </tr>
    </thead>
    <tbody>
    <tr>
   <td>${dataAfhandelingOpport[0][0].qText}</td>
   <td>${dataAfhandelingOpport[0][1].qText}</td>
   <td>${dataAfhandelingOpport[0][2].qText}</td>
   <td>${dataAfhandelingOpport[0][4].qText}</td>
   <td>${dataAfhandelingOpport[0][5].qText}</td>
   <td>${dataAfhandelingOpport[0][6].qText}</td>
   <td>${dataAfhandelingOpport[0][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport[1][0].qText}</td>
   <td>${dataAfhandelingOpport[1][1].qText}</td>
   <td>${dataAfhandelingOpport[1][2].qText}</td>
   <td>${dataAfhandelingOpport[1][4].qText}</td>
   <td>${dataAfhandelingOpport[1][5].qText}</td>
   <td>${dataAfhandelingOpport[1][6].qText}</td>
   <td>${dataAfhandelingOpport[1][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport[2][0].qText}</td>
   <td>${dataAfhandelingOpport[2][1].qText}</td>
   <td>${dataAfhandelingOpport[2][2].qText}</td>
   <td>${dataAfhandelingOpport[2][4].qText}</td>
   <td>${dataAfhandelingOpport[2][5].qText}</td>
   <td>${dataAfhandelingOpport[2][6].qText}</td>
   <td>${dataAfhandelingOpport[2][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport[3][0].qText}</td>
   <td>${dataAfhandelingOpport[3][1].qText}</td>
   <td>${dataAfhandelingOpport[3][2].qText}</td>
   <td>${dataAfhandelingOpport[3][4].qText}</td>
   <td>${dataAfhandelingOpport[3][5].qText}</td>
   <td>${dataAfhandelingOpport[3][6].qText}</td>
   <td>${dataAfhandelingOpport[3][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport[4][0].qText}</td>
   <td>${dataAfhandelingOpport[4][1].qText}</td>
   <td>${dataAfhandelingOpport[4][2].qText}</td>
   <td>${dataAfhandelingOpport[4][4].qText}</td>
   <td>${dataAfhandelingOpport[4][5].qText}</td>
   <td>${dataAfhandelingOpport[4][6].qText}</td>
   <td>${dataAfhandelingOpport[4][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport[5][0].qText}</td>
   <td>${dataAfhandelingOpport[5][1].qText}</td>
   <td>${dataAfhandelingOpport[5][2].qText}</td>
   <td>${dataAfhandelingOpport[5][4].qText}</td>
   <td>${dataAfhandelingOpport[5][5].qText}</td>
   <td>${dataAfhandelingOpport[5][6].qText}</td>
   <td>${dataAfhandelingOpport[5][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport[6][0].qText}</td>
   <td>${dataAfhandelingOpport[6][1].qText}</td>
   <td>${dataAfhandelingOpport[6][2].qText}</td>
   <td>${dataAfhandelingOpport[6][4].qText}</td>
   <td>${dataAfhandelingOpport[6][5].qText}</td>
   <td>${dataAfhandelingOpport[6][6].qText}</td>
   <td>${dataAfhandelingOpport[6][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport[7][0].qText}</td>
   <td>${dataAfhandelingOpport[7][1].qText}</td>
   <td>${dataAfhandelingOpport[7][2].qText}</td>
   <td>${dataAfhandelingOpport[7][4].qText}</td>
   <td>${dataAfhandelingOpport[7][5].qText}</td>
   <td>${dataAfhandelingOpport[7][6].qText}</td>
   <td>${dataAfhandelingOpport[7][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport[8][0].qText}</td>
   <td>${dataAfhandelingOpport[8][1].qText}</td>
   <td>${dataAfhandelingOpport[8][2].qText}</td>
   <td>${dataAfhandelingOpport[8][4].qText}</td>
   <td>${dataAfhandelingOpport[8][5].qText}</td>
   <td>${dataAfhandelingOpport[8][6].qText}</td>
   <td>${dataAfhandelingOpport[8][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport[9][0].qText}</td>
   <td>${dataAfhandelingOpport[9][1].qText}</td>
   <td>${dataAfhandelingOpport[9][2].qText}</td>
   <td>${dataAfhandelingOpport[9][4].qText}</td>
   <td>${dataAfhandelingOpport[9][5].qText}</td>
   <td>${dataAfhandelingOpport[9][6].qText}</td>
   <td>${dataAfhandelingOpport[9][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport[10][0].qText}</td>
   <td>${dataAfhandelingOpport[10][1].qText}</td>
   <td>${dataAfhandelingOpport[10][2].qText}</td>
   <td>${dataAfhandelingOpport[10][4].qText}</td>
   <td>${dataAfhandelingOpport[10][5].qText}</td>
   <td>${dataAfhandelingOpport[10][6].qText}</td>
   <td>${dataAfhandelingOpport[10][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport[11][0].qText}</td>
   <td>${dataAfhandelingOpport[11][1].qText}</td>
   <td>${dataAfhandelingOpport[11][2].qText}</td>
   <td>${dataAfhandelingOpport[11][4].qText}</td>
   <td>${dataAfhandelingOpport[11][5].qText}</td>
   <td>${dataAfhandelingOpport[11][6].qText}</td>
   <td>${dataAfhandelingOpport[11][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport[12][0].qText}</td>
   <td>${dataAfhandelingOpport[12][1].qText}</td>
   <td>${dataAfhandelingOpport[12][2].qText}</td>
   <td>${dataAfhandelingOpport[12][4].qText}</td>
   <td>${dataAfhandelingOpport[12][5].qText}</td>
   <td>${dataAfhandelingOpport[12][6].qText}</td>
   <td>${dataAfhandelingOpport[12][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport[13][0].qText}</td>
   <td>${dataAfhandelingOpport[13][1].qText}</td>
   <td>${dataAfhandelingOpport[13][2].qText}</td>
   <td>${dataAfhandelingOpport[13][4].qText}</td>
   <td>${dataAfhandelingOpport[13][5].qText}</td>
   <td>${dataAfhandelingOpport[13][6].qText}</td>
   <td>${dataAfhandelingOpport[13][7].qText}</td>
   </tr>
    </tbody>
  </table>
</vl-typography>`;
    }

  }

class Instroomtechnisch extends LitElement {  
    render() {
      return html`<vl-typography>
    <table>
    <caption>
    Afhandeling zonder strafvervolging om technische redenen - 2022
    </caption>
    <thead>
      <tr>
        <th>Categorie</th>
        <th>Afval</th>
        <th>Mest</th>
        <th>Vergunning</th>
        <th>Milieubeheerrecht</th>
        <th>Emissies</th>
        <th>Ruimtelijke ordening</th>
      </tr>
    </thead>
    <tbody>
    <tr>
   <td>${dataAfhandelingOpport2[0][0].qText}</td>
   <td>${dataAfhandelingOpport2[0][1].qText}</td>
   <td>${dataAfhandelingOpport2[0][2].qText}</td>
   <td>${dataAfhandelingOpport2[0][4].qText}</td>
   <td>${dataAfhandelingOpport2[0][5].qText}</td>
   <td>${dataAfhandelingOpport2[0][6].qText}</td>
   <td>${dataAfhandelingOpport2[0][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport2[1][0].qText}</td>
   <td>${dataAfhandelingOpport2[1][1].qText}</td>
   <td>${dataAfhandelingOpport2[1][2].qText}</td>
   <td>${dataAfhandelingOpport2[1][4].qText}</td>
   <td>${dataAfhandelingOpport2[1][5].qText}</td>
   <td>${dataAfhandelingOpport2[1][6].qText}</td>
   <td>${dataAfhandelingOpport2[1][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport2[2][0].qText}</td>
   <td>${dataAfhandelingOpport2[2][1].qText}</td>
   <td>${dataAfhandelingOpport2[2][2].qText}</td>
   <td>${dataAfhandelingOpport2[2][4].qText}</td>
   <td>${dataAfhandelingOpport2[2][5].qText}</td>
   <td>${dataAfhandelingOpport2[2][6].qText}</td>
   <td>${dataAfhandelingOpport2[2][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport2[3][0].qText}</td>
   <td>${dataAfhandelingOpport2[3][1].qText}</td>
   <td>${dataAfhandelingOpport2[3][2].qText}</td>
   <td>${dataAfhandelingOpport2[3][4].qText}</td>
   <td>${dataAfhandelingOpport2[3][5].qText}</td>
   <td>${dataAfhandelingOpport2[3][6].qText}</td>
   <td>${dataAfhandelingOpport2[3][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport2[4][0].qText}</td>
   <td>${dataAfhandelingOpport2[4][1].qText}</td>
   <td>${dataAfhandelingOpport2[4][2].qText}</td>
   <td>${dataAfhandelingOpport2[4][4].qText}</td>
   <td>${dataAfhandelingOpport2[4][5].qText}</td>
   <td>${dataAfhandelingOpport2[4][6].qText}</td>
   <td>${dataAfhandelingOpport2[4][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport2[5][0].qText}</td>
   <td>${dataAfhandelingOpport2[5][1].qText}</td>
   <td>${dataAfhandelingOpport2[5][2].qText}</td>
   <td>${dataAfhandelingOpport2[5][4].qText}</td>
   <td>${dataAfhandelingOpport2[5][5].qText}</td>
   <td>${dataAfhandelingOpport2[5][6].qText}</td>
   <td>${dataAfhandelingOpport2[5][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport2[6][0].qText}</td>
   <td>${dataAfhandelingOpport2[6][1].qText}</td>
   <td>${dataAfhandelingOpport2[6][2].qText}</td>
   <td>${dataAfhandelingOpport2[6][4].qText}</td>
   <td>${dataAfhandelingOpport2[6][5].qText}</td>
   <td>${dataAfhandelingOpport2[6][6].qText}</td>
   <td>${dataAfhandelingOpport2[6][7].qText}</td>
   </tr>
   <tr>
   <td>${dataAfhandelingOpport2[7][0].qText}</td>
   <td>${dataAfhandelingOpport2[7][1].qText}</td>
   <td>${dataAfhandelingOpport2[7][2].qText}</td>
   <td>${dataAfhandelingOpport2[7][4].qText}</td>
   <td>${dataAfhandelingOpport2[7][5].qText}</td>
   <td>${dataAfhandelingOpport2[7][6].qText}</td>
   <td>${dataAfhandelingOpport2[7][7].qText}</td>
   </tr>
    </tbody>
  </table>
</vl-typography>`;
    }
  }

class Instroom extends LitElement {  
      render() {
        return html`<vl-typography>
      <table>
      <caption>
        Instroom - Herkomst - 2022
      </caption>
      <thead>
        <tr>
          <th>Type</th>
          <th>Milieu</th>
          <th>Ruimtelijke Ordening</th>
        </tr>
      </thead>
      <tbody>
      <tr>
     <td>${dataInstroom[0][0].qText}</td>
     <td>${dataInstroom[0][1].qText}</td>
     <td>${dataInstroom[0][2].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroom[1][0].qText}</td>
     <td>${dataInstroom[1][1].qText}</td>
     <td>${dataInstroom[1][2].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroom[2][0].qText}</td>
     <td>${dataInstroom[2][1].qText}</td>
     <td>${dataInstroom[2][2].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroom[3][0].qText}</td>
     <td>${dataInstroom[3][1].qText}</td>
     <td>${dataInstroom[3][2].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroom[4][0].qText}</td>
     <td>${dataInstroom[4][1].qText}</td>
     <td>${dataInstroom[4][2].qText}</td>
     </tr>
      </tbody>
    </table>
  </vl-typography>`;
      }
    }
  class Hhc extends LitElement {  
      render() {
        return html `<vl-typography>
      <table>
      <caption>
        Instroom - HHC - 2022
      </caption>
      <thead>
        <tr>
          <th>Beroepen</th>
          <th>Misdrijven</th>
          <th>Inbreuken</th>
          <th>Niet gekend (M/I)</th>
        </tr>
      </thead>
      <tbody>
      <tr>
     <td>${dataInstroomHHC[0][0].qText}</td>
     <td>${dataInstroomHHC[0][1].qText}</td>
     <td>${dataInstroomHHC[0][2].qText}</td>
     <td>${dataInstroomHHC[0][3].qText}</td>
     </tr>
      </tbody>
    </table>
  </vl-typography>`;
      }
    }

class Hhcbehandeling extends LitElement {  
  render() {
    return html `<vl-typography>
      <table>
      <caption>
        Behandeling - HHC - 2022
      </caption>
      <thead>
        <tr>
          <th>Arresten</th>
          <th>Misdrijven</th>
          <th>Inbreuken</th>
          <th>Niet gekend (M/I)</th>
        </tr>
      </thead>
      <tbody>
      <tr>
     <td>${dataInstroomBehandeling[0][0].qText}</td>
     <td>${dataInstroomBehandeling[0][1].qText}</td>
     <td>${dataInstroomBehandeling[0][2].qText}</td>
     <td>${dataInstroomBehandeling[0][3].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomBehandeling[1][0].qText}</td>
     <td>${dataInstroomBehandeling[1][1].qText}</td>
     <td>${dataInstroomBehandeling[1][2].qText}</td>
     <td>${dataInstroomBehandeling[1][3].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomBehandeling[2][0].qText}</td>
     <td>${dataInstroomBehandeling[2][1].qText}</td>
     <td>${dataInstroomBehandeling[2][2].qText}</td>
     <td>${dataInstroomBehandeling[2][3].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomBehandeling[3][0].qText}</td>
     <td>${dataInstroomBehandeling[3][1].qText}</td>
     <td>${dataInstroomBehandeling[3][2].qText}</td>
     <td>${dataInstroomBehandeling[3][3].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomBehandeling[4][0].qText}</td>
     <td>${dataInstroomBehandeling[4][1].qText}</td>
     <td>${dataInstroomBehandeling[4][2].qText}</td>
     <td>${dataInstroomBehandeling[4][3].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomBehandeling[5][0].qText}</td>
     <td>${dataInstroomBehandeling[5][1].qText}</td>
     <td>${dataInstroomBehandeling[5][2].qText}</td>
     <td>${dataInstroomBehandeling[5][3].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomBehandeling[6][0].qText}</td>
     <td>${dataInstroomBehandeling[6][1].qText}</td>
     <td>${dataInstroomBehandeling[6][2].qText}</td>
     <td>${dataInstroomBehandeling[6][3].qText}</td>
     </tr>
      </tbody>
    </table>
  </vl-typography>`;
      }
    }

class Vooruit extends LitElement {  
      render() {
        return html `<vl-typography>
      <table>
      <caption>
        Vooruitgangsstaat - 2022
      </caption>
      <thead>
        <tr>
          <th></th>
          <th>Afval</th>
          <th>Mest</th>
          <th>Vergunningen</th>
          <th>Milieubeheerrecht</th>
          <th>Emissies</th>
          <th>Ruimtelijke ordening</th>
        </tr>
      </thead>
      <tbody>
      <tr>
     <td>${dataInstroomVooruit[0][0].qText}</td>
     <td>${dataInstroomVooruit[0][1].qText}</td>
     <td>${dataInstroomVooruit[0][2].qText}</td>
     <td>${dataInstroomVooruit[0][3].qText}</td>
     <td>${dataInstroomVooruit[0][4].qText}</td>
     <td>${dataInstroomVooruit[0][5].qText}</td>
     <td>${dataInstroomVooruit[0][6].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomVooruit[1][0].qText}</td>
     <td>${dataInstroomVooruit[1][1].qText}</td>
     <td>${dataInstroomVooruit[1][2].qText}</td>
     <td>${dataInstroomVooruit[1][3].qText}</td>
     <td>${dataInstroomVooruit[1][4].qText}</td>
     <td>${dataInstroomVooruit[1][5].qText}</td>
     <td>${dataInstroomVooruit[1][6].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomVooruit[2][0].qText}</td>
     <td>${dataInstroomVooruit[2][1].qText}</td>
     <td>${dataInstroomVooruit[2][2].qText}</td>
     <td>${dataInstroomVooruit[2][3].qText}</td>
     <td>${dataInstroomVooruit[2][4].qText}</td>
     <td>${dataInstroomVooruit[2][5].qText}</td>
     <td>${dataInstroomVooruit[2][6].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomVooruit[3][0].qText}</td>
     <td>${dataInstroomVooruit[3][1].qText}</td>
     <td>${dataInstroomVooruit[3][2].qText}</td>
     <td>${dataInstroomVooruit[3][3].qText}</td>
     <td>${dataInstroomVooruit[3][4].qText}</td>
     <td>${dataInstroomVooruit[3][5].qText}</td>
     <td>${dataInstroomVooruit[3][6].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomVooruit[4][0].qText}</td>
     <td>${dataInstroomVooruit[4][1].qText}</td>
     <td>${dataInstroomVooruit[4][2].qText}</td>
     <td>${dataInstroomVooruit[4][3].qText}</td>
     <td>${dataInstroomVooruit[4][4].qText}</td>
     <td>${dataInstroomVooruit[4][5].qText}</td>
     <td>${dataInstroomVooruit[4][6].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomVooruit[5][0].qText}</td>
     <td>${dataInstroomVooruit[5][1].qText}</td>
     <td>${dataInstroomVooruit[5][2].qText}</td>
     <td>${dataInstroomVooruit[5][3].qText}</td>
     <td>${dataInstroomVooruit[5][4].qText}</td>
     <td>${dataInstroomVooruit[5][5].qText}</td>
     <td>${dataInstroomVooruit[5][6].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomVooruit[6][0].qText}</td>
     <td>${dataInstroomVooruit[6][1].qText}</td>
     <td>${dataInstroomVooruit[6][2].qText}</td>
     <td>${dataInstroomVooruit[6][3].qText}</td>
     <td>${dataInstroomVooruit[6][4].qText}</td>
     <td>${dataInstroomVooruit[6][5].qText}</td>
     <td>${dataInstroomVooruit[6][6].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomVooruit[7][0].qText}</td>
     <td>${dataInstroomVooruit[7][1].qText}</td>
     <td>${dataInstroomVooruit[7][2].qText}</td>
     <td>${dataInstroomVooruit[7][3].qText}</td>
     <td>${dataInstroomVooruit[7][4].qText}</td>
     <td>${dataInstroomVooruit[7][5].qText}</td>
     <td>${dataInstroomVooruit[7][6].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomVooruit[8][0].qText}</td>
     <td>${dataInstroomVooruit[8][1].qText}</td>
     <td>${dataInstroomVooruit[8][2].qText}</td>
     <td>${dataInstroomVooruit[8][3].qText}</td>
     <td>${dataInstroomVooruit[8][4].qText}</td>
     <td>${dataInstroomVooruit[8][5].qText}</td>
     <td>${dataInstroomVooruit[8][6].qText}</td>
     </tr>
     <tr>
     <td>${dataInstroomVooruit[9][0].qText}</td>
     <td>${dataInstroomVooruit[9][1].qText}</td>
     <td>${dataInstroomVooruit[9][2].qText}</td>
     <td>${dataInstroomVooruit[9][3].qText}</td>
     <td>${dataInstroomVooruit[9][4].qText}</td>
     <td>${dataInstroomVooruit[9][5].qText}</td>
     <td>${dataInstroomVooruit[9][6].qText}</td>
     </tr>

      </tbody>
    </table>
  </vl-typography>`;
      }
    }

class GewestTabelone extends LitElement {  
      render() {
        return html `<vl-typography>
      <table>
      <caption>
        Instroom - 2022
      </caption>
      <thead>
        <tr>
          <th></th>
          <th>Misdrijven - ontvangen processen-verbaal OM</th>
          <th>Inbreuken - ontvangen verslagen van vaststelling</th>
        </tr>
      </thead>
      <tbody>
      <tr>
     <td>${dataAGewestTabel1[0][0].qText}</td>
     <td>${dataAGewestTabel1[0][1].qText}</td>
     <td>${dataAGewestTabel1[0][2].qText}</td>
     </tr>
     <tr>
     <td>${dataAGewestTabel1[1][0].qText}</td>
     <td>${dataAGewestTabel1[1][1].qText}</td>
     <td>${dataAGewestTabel1[1][2].qText}</td>
     </tr>
     <tr>
     <td>${dataAGewestTabel1[2][0].qText}</td>
     <td>${dataAGewestTabel1[2][1].qText}</td>
     <td>${dataAGewestTabel1[2][2].qText}</td>
     </tr>
     <tr>
     <td>${dataAGewestTabel1[3][0].qText}</td>
     <td>${dataAGewestTabel1[3][1].qText}</td>
     <td>${dataAGewestTabel1[3][2].qText}</td>
     </tr>
     <tr>
     <td>${dataAGewestTabel1[4][0].qText}</td>
     <td>${dataAGewestTabel1[4][1].qText}</td>
     <td>${dataAGewestTabel1[4][2].qText}</td>
     </tr>
     <tr>
     <td>${dataAGewestTabel1[5][0].qText}</td>
     <td>${dataAGewestTabel1[5][1].qText}</td>
     <td>${dataAGewestTabel1[5][2].qText}</td>

     </tr>
      </tbody>
    </table>
  </vl-typography>`;
      }
    }

class Gewesttabeltwo extends LitElement {
      render() {
        return html `<vl-typography>
      <table>
      <caption>
        Behandeling - 2022
      </caption>
      <thead>
        <tr>
          <th></th>
          <th>Aantal behandelde processen-verbaal inzake</th>
          <th>Aantal behandelde verslagen van vaststelling inzake</th>
        </tr>
      </thead>
      <tbody>
      <tr>
     <td>${dataGewestBehandeling[0][0].qText}</td>
     <td>${dataGewestBehandeling[0][1].qText}</td>
     <td>${dataGewestBehandeling[0][2].qText}</td>
     </tr>
     <tr>
     <td>${dataGewestBehandeling[1][0].qText}</td>
     <td>${dataGewestBehandeling[1][1].qText}</td>
     <td>${dataGewestBehandeling[1][2].qText}</td>
     </tr>
     <tr>
     <td>${dataGewestBehandeling[2][0].qText}</td>
     <td>${dataGewestBehandeling[2][1].qText}</td>
     <td>${dataGewestBehandeling[2][2].qText}</td>
     </tr>
     <tr>
     <td>${dataGewestBehandeling[3][0].qText}</td>
     <td>${dataGewestBehandeling[3][1].qText}</td>
     <td>${dataGewestBehandeling[3][2].qText}</td>
     </tr>
     <tr>
     <td>${dataGewestBehandeling[4][0].qText}</td>
     <td>${dataGewestBehandeling[4][1].qText}</td>
     <td>${dataGewestBehandeling[4][2].qText}</td>
     </tr>
     <tr>
     <td>${dataGewestBehandeling[5][0].qText}</td>
     <td>${dataGewestBehandeling[5][1].qText}</td>
     <td>${dataGewestBehandeling[5][2].qText}</td>

     </tr>
      </tbody>
    </table>
  </vl-typography>`;
      }
    }
    

//Defining custom html tags
customElements.define('my-instroom', Instroom);
customElements.define('my-hhc', Hhc);
customElements.define('my-hhcbehandeling', Hhcbehandeling);
customElements.define('my-vooruit', Vooruit);
customElements.define('my-instroomafhandeling', InstroomAfhandeling);
customElements.define('my-instroomtechnischereden', Instroomtechnisch);
customElements.define('my-gewestabel', GewestTabelone);
customElements.define('my-gewestabeltwo', Gewesttabeltwo);
   
  }
}
//Rendering Gemeenten Milieu
async function gemeentendashboard() {
  const classExistsInit = document.getElementsByClassName('gemmil').length > 0;
  let app;
  app = await connect(config_Gemeenten_MIL);
  /*Set theme to charts*/
  const nebbie = stardust.embed(app, {
     types,
     //themes,
     context: {
      theme:'light',
       language: 'nl-NL',
     },
   });
  const nebbieNoselectionGem = stardust.embed(app, {
    types,
    //themes,
    context: {
      theme:'light',
      language: 'nl-NL',
      constraints: { select: true },
    },
  });
  if(!classExistsInit) {
  (nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar'))));
  const fieldNameGem = 'Gemeente'; 
  (await nebbie.field(fieldNameGem)).mount(document.querySelector('.listboxGEM'),{search:true,title:"Gemeente",checkboxes:false});
  const elementsIdPairs = [
    //Milieu 28 objecten
    { element: document.querySelector('.GEM-Toezicthouders'), id: "JYqyZke" },
    { element: document.querySelector('.GEM-Bar-GAS'), id: "JPXeWk" },
    { element: document.querySelector('.GEM-KPI-Klasse1'), id: "nawRLV" },
    { element: document.querySelector('.GEM-KPI-Klasse2'), id: "BSvPAHp" },
    { element: document.querySelector('.GEM-Hinderlijk'), id: "BSvPAHp"},
    { element: document.querySelector('.GEM-KPI-Klasse3'), id: "ujXmqs" },
    { element: document.querySelector('.GEM-Klachten-pie'), id: "jQdLF" },
    { element: document.querySelector('.GEM-Controles-pie'), id: "dgDmVP" },
    { element: document.querySelector('.GEM-AAControles-pie'), id: "FKJAgf"},
    { element: document.querySelector('.GEM-TotaalVTE'), id: "YHmmQ"},
    { element: document.querySelector('.GEM-klachten'), id: "mJRrPSJ" },
    { element: document.querySelector('.GEM-controles'), id: "pdWFpj" },
    { element: document.querySelector('.GEM-AAControles'), id: "mSpEef" },
    { element: document.querySelector('.GEM-PieToezicthouders'), id: "aAgZgm" },
    { element: document.querySelector('.GEM-VTEBar'), id: "TFVgMD" },
    { element: document.querySelector('.GEM-KlachtenBar'), id: "brZcTK" },
    { element: document.querySelector('.GEM-ControlesBar'), id: "BMRSrq" },
    { element: document.querySelector('.GEM-AAControlesBar'), id: "WhgamS" },
    { element: document.querySelector('.GEM-RaadgevingGEM'), id: "EqXUZq" },
    { element: document.querySelector('.GEM-RaadgevingIGS'), id: "AgXjnnC" },
    { element: document.querySelector('.GEM-RaadgevingLP'), id: "AcQWjU" },
    { element: document.querySelector('.GEM-AanmaningGEM'), id: "QxmppR" },
    { element: document.querySelector('.GEM-AanmaningIGS'), id: "UxkmGT" },
    { element: document.querySelector('.GEM-AanmaningLP'), id: "mtVpjT" },
    { element: document.querySelector('.GEM-pvGEM'), id: "MQxJKJ" },
    { element: document.querySelector('.GEM-pvIGS'), id: "HYQSX" },
    { element: document.querySelector('.GEM-pvLP'), id: "pdXc" },
    { element: document.querySelector('.GEM-bestuurlijkmaatregelGEM'), id: "ywktLz" },
    { element: document.querySelector('.GEM-bestuurlijkmaatregelIGS'), id: "QpqBt" },
    { element: document.querySelector('.GEM-bestuurlijkmaatregelLP'), id:"PeVCcVw"},
    { element: document.querySelector('.GEM-bestuurlijkmaatregelzonderGEM'), id: "ptTCeM"},
    { element: document.querySelector('.GEM-bestuurlijkmaatregelzonderIGS'), id: "jebuf" },
    { element: document.querySelector('.GEM-bestuurlijkmaatregelzonderLP'), id: "eVSmDJy" },
    { element: document.querySelector('.GEM-bestuurlijkmaatregelmetGEM'), id:"pBwU"},
    { element: document.querySelector('.GEM-bestuurlijkmaatregelmetIGS'), id: "BxmSrM" },
    { element: document.querySelector('.GEM-bestuurlijkmaatregelmetLP'), id: "VFjDssL" },
    { element: document.querySelector('.GEM-veiligheidsGEM'), id: "hSjPNuJ" },
    { element: document.querySelector('.GEM-veiligheidsIGS'), id: "pswvgAp"},
    { element: document.querySelector('.GEM-veiligheidsLP'), id: "aNCJtYU"},
    { element: document.querySelector('.GEM-burgbestm'), id: "Jpmwen"},
    { element: document.querySelector('.GEM-burgbestzonder'), id: "PQJZuSS"},
    { element: document.querySelector('.GEM-burgbestmet'), id: "emApAF"},
    { element: document.querySelector('.GEM-burgveilig'), id: "QJFCBz"},
    { element: document.querySelector('.GEM-verslagvastellingGEM'), id: "YBbmqpJ"},
    { element: document.querySelector('.GEM-verslagvastellingIGS'), id: "ackyug"},
    { element: document.querySelector('.GEM-verslagvastellingLP'), id: "QrkRHsD"},
    { element: document.querySelector('.Gem-veiligheidsmaatregel-igs'), id: "bTCRdV"},
    { element: document.querySelector('.Gem-overtredingsgraad-edit'), id: "zRspBS"},
    { element: document.querySelector('.Gem-opmerking-gem'), id: "jFgHzvw"},
    { element: document.querySelector('.Gem-opmerking-lp'), id: "aDveZHw"},
    { element: document.querySelector('.Gem-opmerking-igs'), id: "ejpsmmn"},
    
    { element: document.querySelector('.Gem-pie-raadgeving'), id: "PXYJP"},
    { element: document.querySelector('.Gem-pie-aanmaning'), id: "vmckAq"},
    { element: document.querySelector('.Gem-pie-verslag'), id: "RhGcVr"},
    { element: document.querySelector('.Gem-pie-pv'), id: "MzdR"},
    { element: document.querySelector('.Gem-pie-bestmaatregel'), id: "WdpDMs"},
    { element: document.querySelector('.Gem-pie-veiligheids'), id: "ZEQGgeD"},
    { element: document.querySelector('.Gem-ORG-NaamGEM'), id: "xDATvX"},
    { element: document.querySelector('.Gem-ORG-GEM'), id: "kwsakS"},
    { element: document.querySelector('.Gem-ORG-IGS'), id: "BDukJu"},
    { element: document.querySelector('.Gem-ORG-LP'), id: "vNPApmL"},
    { element: document.querySelector('.Gem-ORG-INW'), id: "JPBBzB"},
    { element: document.querySelector('.GemORGlokaal'), id: "pueLkze"},
    { element: document.querySelector('.Gem-ORG-RO-IGS'), id: "YCjBKha"},
    { element: document.querySelector('.Gem-ORG-RO-LP'), id: "JjxFhy"},
    { element: document.querySelector('.Gem-ORG-RO-And'), id: "hdhKmJb"},
    { element: document.querySelector('.Gem-ORG-Mil-And'), id: "mBPb"},
  ];
    elementsIdPairs.forEach(({ element, id }) => {
      nebbieNoselectionGem.render({ element, id });
  });
}
}
//Rendering Gemeenten RO
async function gemeentendashboardro() {
  
  const classExistsInit = document.getElementsByClassName(
    'gemro'
   ).length > 0;
   let app;
   app = await connect(config_Gemeenten_MIL);
   
   /*Set theme to charts*/
 const nebbie = stardust.embed(app, {
     types,
     //themes,
     context: {
       language: 'nl-NL',
       theme: 'light',
     },
   });

   const nebbieNoselectionGem = stardust.embed(app, {
    types,
    //themes,
    context: {
      language: 'nl-NL',
      theme: 'light',
      constraints: { select: true },
    },
  });
   
  if(!classExistsInit) {
  //Get toolbar of application and define it as a class of toolbar => To be used in HTML page
  (nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar'))));
  /* Get fieldvalues of the field Naam Gemeente in Qlik model and mount it in placeholder listbox*/
 const fieldNameProvincie = 'Gemeente'; // Should refer to a field in your app
 (await nebbie.field(fieldNameProvincie))
 .mount(document.querySelector('.listboxGEM'),{search:true,title:"Gemeente",checkboxes:false});
 

nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-Vebalitisanten'),
  id: "VmPkER",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-stedenbouwkundige'),
  id: "cKYxLcB",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-stedenbouwkundigeinspec'),
  id: "mXXuFgn",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-totaalvtero'),
  id: "Svt",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-BARKlachten'),
  id: "EJUvZWY",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-BARControles'),
  id: "MXVjp",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-BARAAControles'),
  id: "fSgdsk",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-charttotaalvtero'),
  id: "sjckS",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-klachten'),
  id: "GBZEvm",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-controles'),
  id: "pYcZZVf",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-AAcontroles'),
  id: "sPvuYp",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-barcontroles'),
  id: "myXZwVj",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-overtredingsgraad'),
  id: "VRpG",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-raadgeving'),
  id: "TxMejt",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-aanmaning'),
  id: "RJszj",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-verslagvaststelling'),
  id: "mSkpJ",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-PIE-Verbalitisanten'),
  id: "YKcxBs",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-PIE-StedenBK'),
  id: "MazX",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-PIE-StedenBKVerb'),
  id: "JpbAjkH",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-pv'),
  id: "PUkJxcn",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-vvt'),
  id: "mSkpJ",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-beveltotstaking'),
  id: "jcqGSD",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-afgeslotenminschik'),
  id: "jFqSu",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-ambtshalve'),
  id: "JYeCdB",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-raadgeving-igs'),
  id: "LuMZJT",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-aanmaning-igs'),
  id: "FJCSAND",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-verslagvanvastelling-igs'),
  id: "EGYPF",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-PV-igs'),
  id: "JzzZjnC",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-beveltotstaking-igs'),
  id: "LajcS",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-afgeslotenminnelijke-igs'),
  id: "npvDrPz",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-herstelvorderingOM-igs'),
  id: "KPukVKS",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-herstelvorderingBR-igs'),
  id: "WPZdtc",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-ambsthalvei-igs'),
  id: "WyVumvu",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-raadgeving-lp'),
  id: "KHUnM",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-verslagvastelling-lp'),
  id: "TWJjJ",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-pv-lp'),
  id: "rJjf",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-beveltotstaking-lp'),
  id: "UpBZR",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-ingeleidOM'),
  id: "EuufvjC",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-ingeleidBR'),
  id: "bHHWpyh",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-bestmaatregel'),
  id: "EfxBZV",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-bestmaatregel-zdwsm'),
  id: "hpuvuu",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-bestmaatregel-mdwsom'),
  id: "epPFzCU",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-bestmaatregel-igs-mdwsom'),
  id: "JJUvm",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-bestmaatregel-igs'),
  id: "qDrufGR",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-inst-bestmaatregel-igs-zdwsom'),
  id: "FWbjZh",
});
//instrumentarium
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-onder-raadgeven'),
  id: "QzxjPDU",
});
//instrumentarium
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-onder-aanmaning'),
  id: "tVGPVR",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-onder-verslag'),
  id: "Ezpxd",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-onder-PV'),
  id: "nqCu",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-onder-staking'),
  id: "jNfvTcr",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-onder-afgeslotenmin'),
  id: "yjgjcbE",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-onder-ingeleid'),
  id: "JBjGHpP",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-onder-burgelijkrechter'),
  id: "YVSnmb",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-onder-ambachts'),
  id: "pdky",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-kpi-ambachts'),
  id: "dtRYDjk",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-opmerking-gem'),
  id: "NpUPqP",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-opmerking-igs'),
  id: "CkEstYn",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-opmerking-lp'),
  id: "QgDgFz",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-bestm-kpi'),
  id: "EfxBZV",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-bestm-kpi-zwd'),
  id: "hpuvuu",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-bestm-kpi-mdw'),
  id: "epPFzCU",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ro-bestm-onder'),
  id: "JPARv",
});
//Naam gemeente
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ORG-NaamGEM'),
  id: "xDATvX",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ORG-GEM'),
  id: "kwsakS",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ORG-IGS'),
  id: "BDukJu",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ORG-LP'),
  id: "vNPApmL",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ORG-INW'),
  id: "JPBBzB",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.GemORGlokaal'),
  id: "pueLkze",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ORG-RO-IGS'),
  id: "YCjBKha",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ORG-RO-LP'),
  id: "JjxFhy",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-Onderverdeling-klachten'),
  id: "BQBs",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-Onderverdeling-controles'),
  id: "nhEJPj",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-Onderverdeling-aacontroles'),
  id: "HknzBB",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ORG-RO-And'),
  id: "hdhKmJb",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-ORG-Mil-And'),
  id: "mBPb",
});
  }
}