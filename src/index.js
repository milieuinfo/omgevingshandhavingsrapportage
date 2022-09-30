import { Router } from "@vaadin/router"
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
import "uig-webcomponents/lib/components/content-header"
import "uig-webcomponents/lib/components/contact-card"
import "uig-webcomponents/lib/components/properties/styles.css"
import "uig-webcomponents/lib/components/body/styles.css"
import "uig-webcomponents/lib/components/footer"
import "uig-webcomponents/lib/components/info-tile"
import "uig-webcomponents/lib/components/accordion"
import "uig-webcomponents/lib/components/typography"
import "uig-webcomponents/lib/components/grid"
import "uig-webcomponents/lib/components/doormat"
import "uig-webcomponents/lib/components/doormat/styles.css"
import "uig-webcomponents/lib/components/side-navigation"
import "uig-webcomponents/lib/components/side-navigation/styles.css"
import "uig-webcomponents/lib/components/header"
import "uig-webcomponents/lib/components/titles"
import "uig-webcomponents/lib/components/titles/styles.css"
import "uig-webcomponents/lib/components/button"
import "uig-webcomponents/lib/components/button/styles.css"
import "uig-webcomponents/lib/components/accessibility"
import "uig-webcomponents/lib/components/http-error-message"
import 'bootstrap/js/dist/button'
import "uig-webcomponents/lib/components/link-list"
import "uig-webcomponents/lib/components/link-list/styles.css"
import "uig-webcomponents/lib/components/loader"
import "uig-webcomponents/lib/components/accessibility"
import "uig-webcomponents/lib/components/alert"
import "uig-webcomponents/lib/components/breadcrumb"
import "uig-webcomponents/lib/components/functional-header"
import "uig-webcomponents/lib/components/infoblock"
import "uig-webcomponents/lib/components/info-tile"
import "uig-webcomponents/lib/components/map"
import "uig-webcomponents/lib/components/description-data"
import "uig-webcomponents/lib/components/icon"
import "uig-webcomponents/lib/components/icon/styles.css"
import "uig-webcomponents/lib/components/document"
import "uig-webcomponents/lib/components/accessibility"
import "uig-webcomponents/lib/components/tooltip"
import "uig-webcomponents/lib/components/tooltip/styles.css"
//Imports API calls
import * as stardust from '@nebula.js/stardust'
import barChart from '@nebula.js/sn-bar-chart';
import connect from './connect';
import snKpi from "@nebula.js/sn-kpi"
import table from '@nebula.js/sn-table';
import pivotTable from '@nebula.js/sn-pivot-table';
import snPieChart from "@nebula.js/sn-pie-chart"



// when cliclk hamburger menu
/*
document.querySelector('.navbar-toggler').onclick = function() {
  // if menu is opening, close menu
  if(document.getElementById('navbar').classList.contains('show')) {
      document.querySelector('#navbar').classList.remove('show');
  } else {
    document.querySelector('#navbar').classList.add('show');
  }
}
*/

//Routes
const routes = [
  {
    path: "/public/",
    component: "start-view",
    action: async () => {
      await import("./views/start");
    },
  },
  {
    path: "/public/home",
    component: "home-view",
    action: async () => {
      await import("./views/home");
    },
  },
  {
    path: "/public/gewestelijk",
    component: "gewestelijk-view",
    action: async () => {
      await import("./views/gewestelijk");
    },
  },
  {
    path: "/public/provinciaal",
    component: "provinciaal-view",
    action: async () => {
      await import("./views/provinciaal");
    },
  },
  {
    path: "/map",
    component: "map-view",
    action: async () => {
      await import("./views/map");
    },
  },
  {
    path: "/public/gewestelijkAnalyse",
    component: "GewestelijkAnalyse-view",
    action: async () => {
      await import("./views/gewestelijkAnalyse");
      gewestelijkanalyserendering();
      
    },
  },
  {
    path: "/public/gemeenten",
    component: "gemeenten-view",
    action: async () => {
      await import("./views/gemeenten");
    },
  },
  {
    path: "/toegankelijkheid",
    component: "toegankelijkheid-view",
    action: async () => {
      await import("./views/toegankelijkheid");
    },
  },
  {
    path: "/privacy",
    component: "privacy-view",
    action: async () => {
      await import("./views/privacy");
    },
  },
  {
    path: "/cookieverklaring",
    component: "cookieverklaring-view",
    action: async () => {
      await import("./views/cookieverklaring");
    },
  },
  {
    path: "/public/provinciaalAnalyse",
    component: "provinciaalAnalyse-view",
    action: async () => {
      await import("./views/provinciaalAnalyse");
      provinciaalanalyserendering();
    },
  },
  {
    path:"/public/gemeentenAnalyse",
    component: "gemeentenAnalyse-view",
    action: async() => {
      await import ("./views/gemeentenAnalyse");
    }
  },
  {
    path:"/public/gemeentenDashboard",
    component: "gemeentenDashboard-view",
    action: async() => {
      await import ("./views/gemeentenDashboard");
      gemeentendashboard();
    }
  },
  {
    path:"/public/hogeraadAnalyse",
    component: "hogeraadAnalyse-view",
    action: async() => {
      await import ("./views/hogeraadAnalyse");
      hogeraadanalyserendering();
    }
  },
  {
    path:"/public/strafrechtelijk",
    component: "strafrechtelijkAnalyse-view",
    action: async() => {
      await import ("./views/strafrechtelijk")
    
    }
  },
  {
    path:"/public/hogeraad",
    component: "hogeraad-view",
    action: async() => {
      await import ("./views/hogeraad");
    }
  },
  {
    path:"/public/strafrechtelijkAnalyse",
    component: "strafrechtelijkanalyseanalyse-view",
    action: async() => {
      await import ("./views/strafrechtelijkAnalyse");
      strafrechtelijkanalyserendering();
    }
  },
  {
    path:"/public/gemeentenDashboardro",
    component: "gemeentendashboardro-view",
    action: async() => {
      await import ("./views/gemeentenDashboardro");
      gemeentendashboardro();
  }
}
];
export const router = new Router(document.getElementById("app"));
router.setRoutes(routes);


/* Enigma Config met Nebula Stardust*/
/* Enigma Config met Nebula Stardust*/
const config = {
  url: "https://omgevingsloketrapport.omgeving.vlaanderen.be",
  appId: "ef67df6b-e8dc-40f5-a56d-89b65e902609",
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

//Rendering Gewestelijk
async function gewestelijkanalyserendering() {
  const classExists = document.getElementsByClassName(
    'chart').length > 0;
  let app;
  app = await connect(config);
  const nebbie = stardust.embed(app, {
    types,
    //themes,
    context: {
      language: 'nl-NL',
      theme: 'light',
    },
  });
  const nebbieNodebbie = stardust.embed(app, {
    types,
    //themes,
    context: {
      language: 'nl-NL',
      theme: 'light',
      constraints: { select: true },
    },
  });

  if(!classExists) {
  //Get toolbar of application and define it as a class of toolbar => To be used in HTML page
  (await nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar')))); 
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Gecombi'),
    id: "mesXM",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Overtredingsgraad'),
    id: "wrJUxb",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Overtredingsgraad'),
    id: "39444ce5-84e1-4964-be44-1d791438e603",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Beveltotstaking'),
    id: "mCPXYJ",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-minnelijk'),
    id: "ANNZETg",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-openbaarmin'),
    id: "TFxWKk",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-burgerlijkrechter'),
    id: "WxpfLj",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-gerechtambt'),
    id: "JjNJFP",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-Barchart-VTE'),
    id: "cPNUApf",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-VTE'),
    id: "HmeFbmd",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Toezichthouder'),
    id: "yjAMg",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Klachten'),
    id: "JFzHHx",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Controles'),
    id: "QqPsxa",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Aanvankelijke-Controles'),
    id: "kxjKVfR",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-bar-Aanvankelijke-Controles'),
    id: "mPuBHk",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Raadgeving'),
    id: "DdSpDj",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Aanmaning'),
    id: "JaKhF",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Verslag-van-vastelling'),
    id: "YmmVmY",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Proces-verbaal'),
    id: "cBUU",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Bestuurlijk-maatregel'),
    id: "jXa",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Bestuurlijk-maatregel-zonder-dwangsom'),
    id: "MGcspm",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Bestuurlijk-maatregel-zonder-dwangsom-percent'),
    id: "JhfJ",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Bestuurlijk-maatregel-met-dwangsom'),
    id: "HjDSC",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Bestuurlijk-maatregel-met-dwangsom-percent'),
    id: "fYhpTj",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Veiligheidsmaatregel'),
    id: "KNCw",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-KPI-Veiligheidsmaatregel-percent'),
    id: "nUWpf",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.opmerking-mil-hha'),
    id: "XaLjuCF",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.ro-veiligheid'),
    id: "jWadGY",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.opmerking-ro-hha'),
    id: "cEyQB",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-Barchart-Klachten'),
    id: "fjPmJQ",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.MIL-Barchart-Controles'),
    id: "FrnBLn",
  });

  /********** Ruimtelijke ordening ************** */
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Stedenbouwkundige'),
    id: "590fe9ed-596a-47be-9b8f-8f183e9dcb2c",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-VTE'),
    id: "547c2be7-842f-4c0e-a092-a14552a62b43",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-Barchart-VTE'),
    id: "fa4bd7f8-77a9-429f-9117-cf3bdfc62fd9",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Klachten'),
    id: "cdd825e1-08a0-4a90-89ad-09deef2c5a5b",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Controles'),
    id: "f4306632-1e0c-4262-bf5a-3e2b262704ea",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Aanvankelijke-Controles'),
    id: "dc23a492-5c6f-4143-b7aa-5490b2913564",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Raadgeving'),
    id: "c7e581e9-c70c-4060-8872-2415b00b8afa",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Aanmaning'),
    id: "4fbef0ac-ccda-4fbe-8ba8-07691fb730fd",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Verslag-van-vastelling'),
    id: "c838cdf0-098f-400a-8219-a4636db4a0df",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Proces-verbaal'),
    id: "34c6cdc5-adff-439b-b9c9-1f83366580f4",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Bestuurlijk-maatregel'),
    id: "755ce05d-5c46-4ce6-97a5-41997abaa387",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Bestuurlijk-maatregel-zonder-dwangsom'),
    id: "7b1c2234-b5f4-4a61-b9e6-83731632525a",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Bestuurlijk-maatregel-zonder-dwangsom-percent'),
    id: "1f83ab34-d3a0-441a-9ccb-80d4a9cc14f3",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Bestuurlijk-maatregel-met-dwangsom'),
    id: "f3858870-dce3-47a3-9836-30a6aa676057",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Bestuurlijk-maatregel-met-dwangsom-percent'),
    id: "e71feba5-90df-4f90-b8c0-ac14b12cdf29",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Veiligheidsmaatregel'),
    id: "39444ce5-84e1-4964-be44-1d791438e603",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Verbalitisanten'),
    id: "ZZxXrq",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-Barchart-Controles'),
    id: "AwzbN",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Herstelbaar'),
    id: "WTBuPU",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-Herstelvordering'),
    id: "JqwMRw",
  });
  nebbieNodebbie.render({ 
    element: document.querySelector('.RO-KPI-ambtshaleveuitvoering'),
    id: "GTvAFY",
  });
  /* Get fieldvalues of the field Naam Handhavingsinstantie in Qlik model and mount it in placeholder listbox*/
  const fieldName = 'Naam Handhavinginstantie'; // Should refer to a field in your app
  (await nebbie.field(fieldName))
  .mount(document.querySelector('.listbox'),{search:true,title:"Gewestelijke handhavingsactoren",checkboxes:false});
  }
}
//Rendering Provinciaalanalyse
async function provinciaalanalyserendering() {
  const classExists = document.getElementsByClassName(
    'chart'
   ).length > 0;

   let app;
   app = await connect(config);
 const nebbie = stardust.embed(app, {
     types,
     //themes,
     context: {
       language: 'nl-NL',
       theme: 'light',
     },
   });
   const nebbieNoselectionProv = stardust.embed(app, {
    types,
    //themes,
    context: {
      language: 'nl-NL',
      theme: 'light',
      constraints: { select: true },
    },
  });
 
  if(!classExists) {
  //Get toolbar of application and define it as a class of toolbar => To be used in HTML page
  (await nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar')))); 
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.PROV-BAR-Controles'),
    id: "tabKzVP",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.PROV-KPI-GOV-zonder-dwangsom'),
    id: "RXcjfDd",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.PROV-KPI-GOV-met-dwangsom'),
    id: "czJPhQ",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.PROV-KPI-Overtredingsgraad'),
    id: "sFGJrvB",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.PROV-Opmerking'),
    id: "qgGXNW",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.PROV-KPI-GOV-veiligsheidsmaatregel'),
    id: "mwzmBf",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.PROV-KPI-verslagvanvastelling'),
    id: "HTUwQG",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.PROV-KPI-BestuurlijkmaatregelInstrumentarium'),
    id: "QcUjLd",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.PROV-KPI-BestuurlijkmaatregelInstrumentariumzonderdwangsom'),
    id: "PBLBHyp",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.PROV-KPI-BestuurlijkmaatregelInstrumentariummetdwangsom'),
    id: "FPvJJ",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.ToezichthoudersProv'),
    id: "vtQuSsz",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Bestuurlijk-maatregel-provinciegouverneur'),
    id: "XjBqeE",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Veiligheidsmaatregelen-provinciegouverneur'),
    id: "Gchmsr",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.VTEHandhaving'),
    id: "CptELfD",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Klachten'),
    id: "JvKBje",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Controles'),
    id: "JAGuhL",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Aanvankelijkecontrolesmetovertreding'),
    id: "JPctuae",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Bestuurlijkmaatregelen'),
    id: "XjBqeE",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Bestuurlijkmaatregelen-zonder-dwangsom'),
    id: "RXcjfDd",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Bestuurlijkmaatregelen-tijdig-uitgevoerd'),
    id: "gTxNP",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Bestuurlijkmaatregelen-metdwangsom'),
    id: "czJPhQ",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Bestuurlijkmaatregelen-tijdig'),
    id: "aPHqXZ",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Bestuurlijkmaatregelen-veiligheidsmaatregelen'),
    id: "mwzmBf",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Bestuurlijkmaatregelen-veiligheidsmaatregelen-tijdig'),
    id: "hcsvJ",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Provincialetoezichthouders'),
    id: "fpdhcD",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.TotaalVTE'),
    id: "QCjyv",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.TotaalVTEChart'),
    id: "FPsjMJ",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.KlachtenChart'),
    id: "skLPSt",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.ControlesChart'),
    id: "UxdjFsS",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Raadgeving'),
    id: "ZjSzs",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Aanmaning'),
    id: "MqRzq",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Procesverbaal'),
    id: "ZncUmUP",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.BESTM'),
    id: "QcUjLd",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.BESTM-zonderdw'),
    id: "PBLBHyp",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.BESTM-zonderdw-percent'),
    id: "KVpU",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.BESTM-metdwangsom'),
    id: "FPvJJ",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.BESTM-metdwangsom-percent'),
    id: "Pwq",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Veiligheidsmaatregel'),
    id: "PjxFwJ",
  });
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.Veiligheidsmaatregel-percent'),
    id: "rcDAPp",
  });
}
 /* Get fieldvalues of the field Naam Handhavingsinstantie in Qlik model and mount it in placeholder listbox*/
 const fieldNameProvincie = 'Provincie'; // Should refer to a field in your app
 (await nebbie.field(fieldNameProvincie))
 .mount(document.querySelector('.listboxProv'),{search:false,title:"Provinciale handhavingsactoren",checkboxes:false});
}
//Rendering hoge raad
async function hogeraadanalyserendering() {
  const classExistsHR = document.getElementsByClassName(
    'chart'
   ).length > 0;
   let app;
   app = await connect(config);
   /*Set theme to charts*/
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
  nebbieNoselectionHRC.render({ 
      element: document.querySelector('.HRCInstroom'),
      id: "hMQjGg",
    });
    nebbieNoselectionHRC.render({ 
      element: document.querySelector('.HRCAdviezen'),
      id: "mQsBhY",
    });
    nebbieNoselectionHRC.render({ 
      element: document.querySelector('.HRCBemiddeling'),
      id: "YjpufbM",
    });
    nebbieNoselectionHRC.render({ 
      element: document.querySelector('.HRCBindendeadviesTabel'),
      id: "BuWTbhf",
    });
    nebbie.render({ 
      element: document.querySelector('.HRCBindendeadviesChart'),
      id: "vNpDF",
    });
}
}
//Rendering strafrechtelijk
async function strafrechtelijkanalyserendering() {
  const classExistsInit = document.getElementsByClassName(
    'chart'
   ).length > 0;
   let app;
   app = await connect(config);
   /*Set theme to charts*/
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
  //Openbaar Ministerie 
  //Instroom 
    nebbieNoselection.render({ 
      element: document.querySelector('.Tabel1'),
      id: "XBDmJ",
    });
  //Tabel Vooruitgangsstaat
    nebbieNoselection.render({
      element: document.querySelector('.Tabelvooruitgangstaat'),
      id: "FDhFmj"
    });
    nebbieNoselection.render({
      type:'pivot-table',
      element: document.querySelector('.milieubehandelingthem'),
      id: "qPwSv"
    });
    nebbieNoselection.render({
      type:'pivot-table',
      element: document.querySelector('.RObehandelingthem'),
      id: "aNaXzf"
    });
    //Gewestelijke beboetingsentiteit
    //Instroom
    nebbieNoselection.render({
      type: 'table',
      element: document.querySelector('.GewestBB'),
      properties: {
        qHyperCubeDef: {
          qDimensions: [
            { qDef: { qFieldDefs: ['Beboetingscategorie'], qFallbackTitle: 'Categorie'},  qNullSuppression: true },
          ],
          qMeasures: [
            { qDef: { qDef: 'Sum([Misdrijven - ontvangen PV OM])', autoSort: false, qLabel: 'Misdrijven-ontvangen processen-verbaal OM', qShowTotalsAbove:true }},
            { qDef: { qDef: 'Sum([Misdrijven - onvangen veslag van vastelling])', autoSort: false, qLabel: 'Inbreuken-ontvangen verslagen van vaststelling'}},
          ],
          qInitialDataFetch: [{
            qWidth: 3,
            qHeight: 3000,
          }],
        },
      },
    });
    nebbieNoselection.render({
      type: 'table',
      element: document.querySelector('.GewestBH'),
      properties: {
        qHyperCubeDef: {
          qDimensions: [
            { qDef: { qFieldDefs: ['Behandelingscategorie'], qFallbackTitle: 'Categorie'},  qNullSuppression: true },
          ],
          qMeasures: [
            { qDef: { qDef: 'Sum([Aantal behandelde PV])', autoSort: false, qLabel: 'Aantal behandelde processen-verbaal'}, qShowTotalsAbove:true},
            { qDef: { qDef: 'Sum([Aantal behandelde verslagen van vaststelling])', autoSort: false, qLabel: 'Aantal behandelde verslagen van vaststelling'}, qShowTotalsAbove:true},
          ],
          qInitialDataFetch: [{
            qWidth: 3,
            qHeight: 3000,
          }],
        },
      },
    });
    nebbie.render({ 
      element: document.querySelector('.Tabelseponering'),
      id: "AAJvdg",
    });
    nebbieNoselection.render({ 
      element: document.querySelector('.HHCTabel1'),
      id: "ahhjph",
    });
    nebbieNoselection.render({ 
      element: document.querySelector('.HHCTabel2'),
      id: "QznbVm",
    });
    nebbie.render({ 
      element: document.querySelector('.DrillBar'),
      id: "aWqZQtS",
    });
    nebbie.render({ 
      element: document.querySelector('.TabelVooruitgangs'),
      id: "PdSJJ",
    });
    nebbie.render({ 
      element: document.querySelector('.TabelSeponering'),
      id: "cpHFYs",
    });
    nebbie.render({ 
      element: document.querySelector('.GewestelijkBBInstroom'),
      id: "NnTrfSB",
    });
  }
}
async function gemeentendashboard() {
  const classExistsInit = document.getElementsByClassName(
    'chart'
   ).length > 0;
   let app;
   app = await connect(config);
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
  (await nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar'))));
  /* Get fieldvalues of the field Naam Gemeente in Qlik model and mount it in placeholder listbox*/
  const fieldNameGem = 'Gemeente'; // Should refer to a field in your app
  (await nebbie.field(fieldNameGem))
  .mount(document.querySelector('.listboxGEM'),{search:true,title:"Gemeente",checkboxes:false});
  nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-Toezicthouders'),
  id: "GtNeXHa",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-Bar-GAS'),
  id: "JPXeWk",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-KPI-Klasse1'),
  id: "nawRLV",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-KPI-Klasse2'),
  id: "BSvPAHp",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-Hinderlijk'),
  id: "JJtSuw",
});

nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-KPI-Klasse3'),
  id: "ujXmqs",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-Klachten-pie'),
  id: "jQdLF",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-Controles-pie'),
  id: "wvuFWcw",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-AAControles-pie'),
  id: "FKJAgf",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-TotaalVTE'),
  id: "PcZq",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-klachten'),
  id: "pYNrv",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-controles'),
  id: "pVsppX",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-AAControles'),
  id: "mSpEef",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-PieToezicthouders'),
  id: "QRJzm",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-VTEBar'),
  id: "Kareq",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-KlachtenBar'),
  id: "NChXtq",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-ControlesBar'),
  id: "RgmLzT",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-AAControlesBar'),
  id: "WhgamS",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-RaadgevingGEM'),
  id: "EqXUZq",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-RaadgevingIGS'),
  id: "AgXjnnC",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-RaadgevingLP'),
  id: "AcQWjU",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-AanmaningGEM'),
  id: "QxmppR",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-AanmaningIGS'),
  id: "UxkmGT",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-AanmaningLP'),
  id: "mtVpjT",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-pvGEM'),
  id: "MQxJKJ",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-pvIGS'),
  id: "HYQSX",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-pvLP'),
  id: "pdXc",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelGEM'),
  id: "ywktLz",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelIGS'),
  id: "QpqBt",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelLP'),
  id: "PeVCcVw",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelzonderGEM'),
  id: "ptTCeM",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelzonderIGS'),
  id: "jebuf",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelzonderLP'),
  id: "eVSmDJy",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelmetGEM'),
  id: "pBwU",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelmetIGS'),
  id: "BxmSrM",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelmetLP'),
  id: "VFjDssL",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-veiligheidsGEM'),
  id: "hSjPNuJ",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-veiligheidsIGS'),
  id: "pswvgAp",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-veiligheidsLP'),
  id: "aNCJtYU",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-burgbestm'),
  id: "Jpmwen",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-burgbestzonder'),
  id: "PQJZuSS",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-burgbestmet'),
  id: "emApAF",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-burgveilig'),
  id: "QJFCBz",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-verslagvastellingGEM'),
  id: "YBbmqpJ",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-verslagvastellingIGS'),
  id: "ackyug",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-verslagvastellingLP'),
  id: "QrkRHsD",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-veiligheidsmaatregel-igs'),
  id: "bTCRdV",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-overtredingsgraad-edit'),
  id: "zRspBS",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-opmerking-gem'),
  id: "jFgHzvw",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-opmerking-igs'),
  id: "hQJkPB",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-opmerking-lp'),
  id: "aDveZHw",
});
//instrumentarium
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-pie-raadgeving'),
  id: "PXYJP",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-pie-aanmaning'),
  id: "vmckAq",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-pie-verslag'),
  id: "RhGcVr",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-pie-pv'),
  id: "MzdR",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-pie-bestmaatregel'),
  id: "WdpDMs",
});
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-pie-veiligheids'),
  id: "ZEQGgeD",
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



  }
}
async function gemeentendashboardro() {
  
  const classExistsInit = document.getElementsByClassName(
    'chart'
   ).length > 0;
   let app;
   app = await connect(config);
   
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

  }
}