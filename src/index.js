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
 
  if(!classExists) {
    //Get toolbar of application and define it as a class of toolbar => To be used in HTML page
  (await nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar')))); 

  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Gecombi'),
    id: "YpMjdkH",
  });

  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Beveltotstaking'),
    id: "mCPXYJ",
  });

  nebbie.render({ 
    element: document.querySelector('.RO-KPI-minnelijk'),
    id: "ANNZETg",
  });

  nebbie.render({ 
    element: document.querySelector('.RO-KPI-openbaarmin'),
    id: "TFxWKk",
  });

  nebbie.render({ 
    element: document.querySelector('.RO-KPI-burgerlijkrechter'),
    id: "WxpfLj",
  });

  nebbie.render({ 
    element: document.querySelector('.RO-KPI-gerechtambt'),
    id: "JjNJFP",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-Barchart-VTE'),
    id: "cPNUApf",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-VTE'),
    id: "HmeFbmd",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Toezichthouder'),
    id: "yjAMg",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Klachten'),
    id: "JFzHHx",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Controles'),
    id: "QqPsxa",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Aanvankelijke-Controles'),
    id: "kxjKVfR",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-bar-Aanvankelijke-Controles'),
    id: "mPuBHk",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Raadgeving'),
    id: "DdSpDj",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Aanmaning'),
    id: "JaKhF",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Verslag-van-vastelling'),
    id: "YmmVmY",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Proces-verbaal'),
    id: "cBUU",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Bestuurlijk-maatregel'),
    id: "jXa",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Bestuurlijk-maatregel-zonder-dwangsom'),
    id: "MGcspm",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Bestuurlijk-maatregel-zonder-dwangsom-percent'),
    id: "JhfJ",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Bestuurlijk-maatregel-met-dwangsom'),
    id: "HjDSC",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Bestuurlijk-maatregel-met-dwangsom-percent'),
    id: "fYhpTj",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Veiligheidsmaatregel'),
    id: "KNCw",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Veiligheidsmaatregel-percent'),
    id: "nUWpf",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-KPI-Overtredingsgraad'),
    id: "wrJUxb",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-Barchart-Klachten'),
    id: "fjPmJQ",
  });
  nebbie.render({ 
    element: document.querySelector('.MIL-Barchart-Controles'),
    id: "FrnBLn",
  });
  /********** Ruimtelijke ordening ************** */
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Stedenbouwkundige'),
    id: "590fe9ed-596a-47be-9b8f-8f183e9dcb2c",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-VTE'),
    id: "547c2be7-842f-4c0e-a092-a14552a62b43",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-Barchart-VTE'),
    id: "fa4bd7f8-77a9-429f-9117-cf3bdfc62fd9",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Klachten'),
    id: "cdd825e1-08a0-4a90-89ad-09deef2c5a5b",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Controles'),
    id: "f4306632-1e0c-4262-bf5a-3e2b262704ea",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Aanvankelijke-Controles'),
    id: "dc23a492-5c6f-4143-b7aa-5490b2913564",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Raadgeving'),
    id: "c7e581e9-c70c-4060-8872-2415b00b8afa",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Aanmaning'),
    id: "4fbef0ac-ccda-4fbe-8ba8-07691fb730fd",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Verslag-van-vastelling'),
    id: "c838cdf0-098f-400a-8219-a4636db4a0df",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Proces-verbaal'),
    id: "34c6cdc5-adff-439b-b9c9-1f83366580f4",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Bestuurlijk-maatregel'),
    id: "755ce05d-5c46-4ce6-97a5-41997abaa387",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Bestuurlijk-maatregel-zonder-dwangsom'),
    id: "7b1c2234-b5f4-4a61-b9e6-83731632525a",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Bestuurlijk-maatregel-zonder-dwangsom-percent'),
    id: "1f83ab34-d3a0-441a-9ccb-80d4a9cc14f3",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Bestuurlijk-maatregel-met-dwangsom'),
    id: "f3858870-dce3-47a3-9836-30a6aa676057",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Bestuurlijk-maatregel-met-dwangsom-percent'),
    id: "e71feba5-90df-4f90-b8c0-ac14b12cdf29",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Veiligheidsmaatregel'),
    id: "39444ce5-84e1-4964-be44-1d791438e603",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Verbalitisanten'),
    id: "ZZxXrq",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Overtredingsgraad'),
    id: "wrJUxb",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-Barchart-Controles'),
    id: "AwzbN",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Herstelbaar'),
    id: "WTBuPU",
  });

  nebbie.render({ 
    element: document.querySelector('.RO-KPI-Herstelvordering'),
    id: "JqwMRw",
  });
  nebbie.render({ 
    element: document.querySelector('.RO-KPI-ambtshaleveuitvoering'),
    id: "GTvAFY",
  });

  /* Get fieldvalues of the field Naam Handhavingsinstantie in Qlik model and mount it in placeholder listbox*/
  const fieldName = 'Naam Handhavinginstantie'; // Should refer to a field in your app
  (await nebbie.field(fieldName))
  .mount(document.querySelector('.listbox'),{search:false,title:"Gewestelijke handhavingsactoren",checkboxes:false});
}
}

//Rendering Provinciaalanalyse
async function provinciaalanalyserendering() {
  const classExists = document.getElementsByClassName(
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
 
  if(!classExists) {
    //Get toolbar of application and define it as a class of toolbar => To be used in HTML page
  (await nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar')))); 
  nebbie.render({ 
    element: document.querySelector('.PROV-BAR-Controles'),
    id: "tabKzVP",
  });
  nebbie.render({ 
    element: document.querySelector('.PROV-KPI-GOV-zonder-dwangsom'),
    id: "RXcjfDd",
  });

  nebbie.render({ 
    element: document.querySelector('.PROV-KPI-GOV-met-dwangsom'),
    id: "czJPhQ",
  });

  nebbie.render({ 
    element: document.querySelector('.PROV-KPI-GOV-veiligsheidsmaatregel'),
    id: "mwzmBf",
  });
  nebbie.render({ 
    element: document.querySelector('.PROV-KPI-verslagvanvastelling'),
    id: "HTUwQG",
  });
  nebbie.render({ 
    element: document.querySelector('.PROV-KPI-BestuurlijkmaatregelInstrumentarium'),
    id: "QcUjLd",
  });
  nebbie.render({ 
    element: document.querySelector('.PROV-KPI-BestuurlijkmaatregelInstrumentariumzonderdwangsom'),
    id: "PBLBHyp",
  });
  nebbie.render({ 
    element: document.querySelector('.PROV-KPI-BestuurlijkmaatregelInstrumentariummetdwangsom'),
    id: "FPvJJ",
  });
  nebbie.render({ 
    element: document.querySelector('.ToezichthoudersProv'),
    id: "vtQuSsz",
  });
  nebbie.render({ 
    element: document.querySelector('.Bestuurlijk-maatregel-provinciegouverneur'),
    id: "XjBqeE",
  });
  nebbie.render({ 
    element: document.querySelector('.Veiligheidsmaatregelen-provinciegouverneur'),
    id: "Gchmsr",
  });
  nebbie.render({ 
    element: document.querySelector('.VTEHandhaving'),
    id: "CptELfD",
  });
  
  nebbie.render({ 
    element: document.querySelector('.Klachten'),
    id: "JvKBje",
  });
  nebbie.render({ 
    element: document.querySelector('.Controles'),
    id: "JAGuhL",
  });
  nebbie.render({ 
    element: document.querySelector('.Aanvankelijkecontrolesmetovertreding'),
    id: "JPctuae",
  });
  nebbie.render({ 
    element: document.querySelector('.Bestuurlijkmaatregelen'),
    id: "XjBqeE",
  });
  nebbie.render({ 
    element: document.querySelector('.Bestuurlijkmaatregelen-zonder-dwangsom'),
    id: "RXcjfDd",
  });
  nebbie.render({ 
    element: document.querySelector('.Bestuurlijkmaatregelen-tijdig-uitgevoerd'),
    id: "gTxNP",
  });
  nebbie.render({ 
    element: document.querySelector('.Bestuurlijkmaatregelen-metdwangsom'),
    id: "czJPhQ",
  });
  nebbie.render({ 
    element: document.querySelector('.Bestuurlijkmaatregelen-tijdig'),
    id: "aPHqXZ",
  });
  nebbie.render({ 
    element: document.querySelector('.Bestuurlijkmaatregelen-veiligheidsmaatregelen'),
    id: "mwzmBf",
  });
  nebbie.render({ 
    element: document.querySelector('.Bestuurlijkmaatregelen-veiligheidsmaatregelen-tijdig'),
    id: "hcsvJ",
  });
  nebbie.render({ 
    element: document.querySelector('.Provincialetoezichthouders'),
    id: "fpdhcD",
  });
  nebbie.render({ 
    element: document.querySelector('.TotaalVTE'),
    id: "QCjyv",
  });
  nebbie.render({ 
    element: document.querySelector('.TotaalVTEChart'),
    id: "FPsjMJ",
  });
  nebbie.render({ 
    element: document.querySelector('.KlachtenChart'),
    id: "skLPSt",
  });
  nebbie.render({ 
    element: document.querySelector('.ControlesChart'),
    id: "UxdjFsS",
  });
  nebbie.render({ 
    element: document.querySelector('.Raadgeving'),
    id: "ZjSzs",
  });
  nebbie.render({ 
    element: document.querySelector('.Aanmaning'),
    id: "MqRzq",
  });
  nebbie.render({ 
    element: document.querySelector('.Procesverbaal'),
    id: "ZncUmUP",
  });
  nebbie.render({ 
    element: document.querySelector('.BESTM'),
    id: "QcUjLd",
  });
  nebbie.render({ 
    element: document.querySelector('.BESTM-zonderdw'),
    id: "PBLBHyp",
  });
  nebbie.render({ 
    element: document.querySelector('.BESTM-zonderdw-percent'),
    id: "KVpU",
  });
  nebbie.render({ 
    element: document.querySelector('.BESTM-metdwangsom'),
    id: "FPvJJ",
  });
  nebbie.render({ 
    element: document.querySelector('.BESTM-metdwangsom-percent'),
    id: "Pwq",
  });
  nebbie.render({ 
    element: document.querySelector('.Veiligheidsmaatregel'),
    id: "PjxFwJ",
  });
  nebbie.render({ 
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
 
  if(!classExistsHR) {
    //Get toolbar of application and define it as a class of toolbar => To be used in HTML page
  (await nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar'))));
    nebbie.render({ 
      element: document.querySelector('.HRCInstroom'),
      id: "hMQjGg",
    });
    nebbie.render({ 
      element: document.querySelector('.HRCAdviezen'),
      id: "mQsBhY",
    });
    nebbie.render({ 
      element: document.querySelector('.HRCBemiddeling'),
      id: "YjpufbM",
    });
    nebbie.render({ 
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
  if(!classExistsInit) {
    //Get toolbar of application and define it as a class of toolbar => To be used in HTML page
  (await nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar'))));
    nebbie.render({ 
      element: document.querySelector('.Tabel1'),
      id: "XBDmJ",
    });
    nebbie.render({
      type: 'table',
      element: document.querySelector('.Tabel2'),
      fields: ['subrubriek','hoofdrubriek', '=Sum(waarde)'],
    });
    nebbie.render({
      type: 'table',
      element: document.querySelector('.Tabelvooruitgangstaat'),
      fields: ['categorieVooruitgangsstraat','VGSAfval','VGSMest','VGSVegunningen','VGSMilieubeheerrecht', 'VGSEmissies', 'VGSRuimtelijkeOrdening', 'VGSH'],
    });
    nebbie.render({
      type: 'table',
      element: document.querySelector('.GewestBB'),
      fields: ['Beboetingscategorie', 'Misdrijven - ontvangen PV OM', 'Misdrijven - onvangen veslag van vastelling'],
    });
    nebbie.render({
      type: 'table',
      element: document.querySelector('.GewestBH'),
      fields: ['Behandelingscategorie', 'Aantal behandelde PV', 'Aantal behandelde verslagen van vaststelling'],
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
    nebbie.render({ 
      element: document.querySelector('.GewestelijkBBBehandeling'),
      id: "wLLgTk",
      footnote: "Hello"
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
  if(!classExistsInit) {
    //Get toolbar of application and define it as a class of toolbar => To be used in HTML page
  (await nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar'))));
}

 /* Get fieldvalues of the field Naam Gemeente in Qlik model and mount it in placeholder listbox*/
 
 const fieldNameProvincie = 'Gemeente'; // Should refer to a field in your app
 (await nebbie.field(fieldNameProvincie))
 .mount(document.querySelector('.listboxGEM'),{search:true,title:"Gemeente",checkboxes:false});

 const fieldNameGAS = 'Gas-Regelement - Milieugerelateerde overlast'; // Should refer to a field in your app
 (await nebbie.field(fieldNameGAS))
 .mount(document.querySelector('.listboxGEMGAS'),{search:false,title:"GAS - milieugerelateerde overlast",checkboxes:false});

 nebbie.render({ 
  element: document.querySelector('.GEM-Toezicthouders'),
  id: "GtNeXHa",
});

nebbie.render({ 
  element: document.querySelector('.GEM-TotaalVTE'),
  id: "PcZq",
});

nebbie.render({ 
  element: document.querySelector('.GEM-klachten'),
  id: "pYNrv",
});
nebbie.render({ 
  element: document.querySelector('.GEM-controles'),
  id: "pVsppX",
});
nebbie.render({ 
  element: document.querySelector('.GEM-AAControles'),
  id: "mSpEef",
});
nebbie.render({ 
  element: document.querySelector('.GEM-PieToezicthouders'),
  id: "QRJzm",
});

nebbie.render({ 
  element: document.querySelector('.GEM-VTEBar'),
  id: "Kareq",
});

nebbie.render({ 
  element: document.querySelector('.GEM-KlachtenBar'),
  id: "WhgamS",
  
});

nebbie.render({ 
  element: document.querySelector('.GEM-ControlesBar'),
  id: "RgmLzT",
});
nebbie.render({ 
  element: document.querySelector('.GEM-AAControlesBar'),
  id: "NChXtq",
});

nebbie.render({ 
  element: document.querySelector('.GEM-Raadgeving'),
  id: "EqXUZq",
});

nebbie.render({ 
  element: document.querySelector('.GEM-Aanmaning'),
  id: "QxmppR",
});

nebbie.render({ 
  element: document.querySelector('.GEM-pv'),
  id: "LDtznSZ",
});

nebbie.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregel'),
  id: "PzymKk",
});

nebbie.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelzonder'),
  id: "FktUZc",
});

nebbie.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelmet'),
  id: "nKRnXj",
});
nebbie.render({ 
  element: document.querySelector('.GEM-veiligheids'),
  id: "PdFpSe",
});

nebbie.render({ 
  element: document.querySelector('.GEM-burgbestm'),
  id: "Jpmwen",
});
nebbie.render({ 
  element: document.querySelector('.GEM-burgbestzonder'),
  id: "PQJZuSS",
});

nebbie.render({ 
  element: document.querySelector('.GEM-burgbestmet'),
  id: "emApAF",
});

nebbie.render({ 
  element: document.querySelector('.GEM-burgveilig'),
  id: "QJFCBz",
});


nebbie.render({ 
  element: document.querySelector('.GEM-verslagvastelling'),
  id: "bJJPTT",
});

nebbie.render({ 
  element: document.querySelector('.GEM-Vebalitisanten'),
  id: "VmPkER",
});

nebbie.render({ 
  element: document.querySelector('.GEM-stedenbouwkundige'),
  id: "cKYxLcB",
});

nebbie.render({ 
  element: document.querySelector('.GEM-stedenbouwkundigeinspec'),
  id: "mXXuFgn",
});

nebbie.render({ 
  element: document.querySelector('.GEM-totaalvtero'),
  id: "Svt",
});

nebbie.render({ 
  element: document.querySelector('.GEM-charttotaalvtero'),
  id: "fdrJW",
});
nebbie.render({ 
  element: document.querySelector('.Gem-ro-klachten'),
  id: "GBZEvm",
});
nebbie.render({ 
  element: document.querySelector('.Gem-ro-controles'),
  id: "pYcZZVf",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-AAcontroles'),
  id: "sPvuYp",
});
nebbie.render({ 
  element: document.querySelector('.Gem-ro-barcontroles'),
  id: "myXZwVj",
});
nebbie.render({ 
  element: document.querySelector('.Gem-ro-overtredingsgraad'),
  id: "VRpG",
});

}
