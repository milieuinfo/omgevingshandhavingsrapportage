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
    const selections = await nebbie.selections();
  selections.unmount('.toolbar');
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

   /*Set theme to charts*/
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
  nebbie.render({ 
    element: document.querySelector('.PROV-KPI-GOV-zonder-dwangsom'),
    id: "RXcjfDd",
  });
  nebbie.render({ 
    element: document.querySelector('.PROV-KPI-GOV-met-dwangsom'),
    id: "czJPhQ",
  });
  nebbie.render({ 
    element: document.querySelector('.PROV-KPI-Overtredingsgraad'),
    id: "sFGJrvB",
  });
  nebbie.render({ 
    element: document.querySelector('.PROV-Opmerking'),
    id: "qgGXNW",
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
  nebbieNoselectionProv.render({ 
    element: document.querySelector('.TotaalVTEChart'),
    id: "FPsjMJ",
  });
  nebbieNoselectionProv.render({ 
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
      type: 'table',
      element: document.querySelector('.Tabelvooruitgangstaat'),
      properties: {
        qHyperCubeDef: {
          qDimensions: [
            { qDef: { qFieldDefs: ['categorieVooruitgangsstraat'], qFallbackTitle: 'Categorie vooruitgangsstaat'},  qNullSuppression: true },
          ],
          qMeasures: [
            { qDef: { qDef: 'Sum([VGSAfval])', autoSort: false, qLabel: 'Afval'}},
            { qDef: { qDef: 'Sum([VGSMest])', autoSort: false, qLabel: 'Mest'}},
            { qDef: { qDef: 'Sum([VGSVegunningen])', autoSort: false, qLabel: 'Vergunningen'},},
            { qDef: { qDef: 'Sum([VGSMilieubeheerrecht])', autoSort: false, qLabel: 'Milieubeheerrecht'}},
            { qDef: { qDef: 'Sum([VGSEmissies])', autoSort: false, qLabel: 'Emissies'} },
            { qDef: { qDef: 'Sum([VGSRuimtelijkeOrdening])', autoSort: false, qLabel: 'Ruimtelijke ordening'}},
            { qDef: { qDef: 'Sum([VGSH])', autoSort: false, qLabel: 'Totaal'}},
          ],
          qInitialDataFetch: [{
            qWidth: 3,
            qHeight: 3000,
          }],
        },
      },
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
    nebbieNoselection.render({ 
      element: document.querySelector('.Tabelseponering'),
      id: "mDDkX",
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

 nebbie.render({ 
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
nebbie.render({ 
  element: document.querySelector('.GEM-Controles-pie'),
  id: "wvuFWcw",
});

nebbie.render({ 
  element: document.querySelector('.GEM-AAControles-pie'),
  id: "FKJAgf",
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

nebbieNoselectionGem.render({ 
  element: document.querySelector('.GEM-KlachtenBar'),
  id: "NChXtq",
  
});
nebbie.render({ 
  element: document.querySelector('.GEM-ControlesBar'),
  id: "RgmLzT",
});
nebbie.render({ 
  element: document.querySelector('.GEM-AAControlesBar'),
  id: "WhgamS",
});

nebbie.render({ 
  element: document.querySelector('.GEM-RaadgevingGEM'),
  id: "EqXUZq",
});
nebbie.render({ 
  element: document.querySelector('.GEM-RaadgevingIGS'),
  id: "AgXjnnC",
});
nebbie.render({ 
  element: document.querySelector('.GEM-RaadgevingLP'),
  id: "AcQWjU",
});

nebbie.render({ 
  element: document.querySelector('.GEM-AanmaningGEM'),
  id: "QxmppR",
});
nebbie.render({ 
  element: document.querySelector('.GEM-AanmaningIGS'),
  id: "UxkmGT",
});
nebbie.render({ 
  element: document.querySelector('.GEM-AanmaningLP'),
  id: "mtVpjT",
});

nebbie.render({ 
  element: document.querySelector('.GEM-pvGEM'),
  id: "MQxJKJ",
});
nebbie.render({ 
  element: document.querySelector('.GEM-pvIGS'),
  id: "HYQSX",
});
nebbie.render({ 
  element: document.querySelector('.GEM-pvLP'),
  id: "pdXc",
});

nebbie.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelGEM'),
  id: "ywktLz",
});
nebbie.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelIGS'),
  id: "QpqBt",
});
nebbie.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelLP'),
  id: "PeVCcVw",
});

nebbie.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelzonderGEM'),
  id: "ptTCeM",
});
nebbie.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelzonderIGS'),
  id: "jebuf",
});
nebbie.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelzonderLP'),
  id: "eVSmDJy",
});

nebbie.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelmetGEM'),
  id: "pBwU",
});
nebbie.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelmetIGS'),
  id: "BxmSrM",
});
nebbie.render({ 
  element: document.querySelector('.GEM-bestuurlijkmaatregelmetLP'),
  id: "VFjDssL",
});
nebbie.render({ 
  element: document.querySelector('.GEM-veiligheidsGEM'),
  id: "hSjPNuJ",
});
nebbie.render({ 
  element: document.querySelector('.GEM-veiligheidsIGS'),
  id: "pswvgAp",
});
nebbie.render({ 
  element: document.querySelector('.GEM-veiligheidsLP'),
  id: "aNCJtYU",
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
  element: document.querySelector('.GEM-verslagvastellingGEM'),
  id: "YBbmqpJ",
});
nebbie.render({ 
  element: document.querySelector('.GEM-verslagvastellingIGS'),
  id: "ackyug",
});
nebbie.render({ 
  element: document.querySelector('.GEM-verslagvastellingLP'),
  id: "QrkRHsD",
});

nebbie.render({ 
  element: document.querySelector('.Gem-veiligheidsmaatregel-igs'),
  id: "bTCRdV",
});
nebbie.render({ 
  element: document.querySelector('.Gem-overtredingsgraad-edit'),
  id: "zRspBS",
});
nebbie.render({ 
  element: document.querySelector('.Gem-opmerking-gem'),
  id: "jFgHzvw",
});
nebbie.render({ 
  element: document.querySelector('.Gem-opmerking-igs'),
  id: "hQJkPB",
});
nebbie.render({ 
  element: document.querySelector('.Gem-opmerking-lp'),
  id: "aDveZHw",
});


//instrumentarium
nebbieNoselectionGem.render({ 
  element: document.querySelector('.Gem-pie-raadgeving'),
  id: "PXYJP",
});
nebbie.render({ 
  element: document.querySelector('.Gem-pie-aanmaning'),
  id: "vmckAq",
});
nebbie.render({ 
  element: document.querySelector('.Gem-pie-verslag'),
  id: "RhGcVr",
});
nebbie.render({ 
  element: document.querySelector('.Gem-pie-pv'),
  id: "MzdR",
});
nebbie.render({ 
  element: document.querySelector('.Gem-pie-bestmaatregel'),
  id: "WdpDMs",
});
nebbie.render({ 
  element: document.querySelector('.Gem-pie-veiligheids'),
  id: "ZEQGgeD",
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
  (await nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar'))));


 /* Get fieldvalues of the field Naam Gemeente in Qlik model and mount it in placeholder listbox*/
 
 const fieldNameProvincie = 'Gemeente'; // Should refer to a field in your app
 (await nebbie.field(fieldNameProvincie))
 .mount(document.querySelector('.listboxGEM'),{search:true,title:"Gemeente",checkboxes:false});

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
  element: document.querySelector('.GEM-BARKlachten'),
  id: "EJUvZWY",
});
nebbie.render({ 
  element: document.querySelector('.GEM-BARControles'),
  id: "MXVjp",
});
nebbie.render({ 
  element: document.querySelector('.GEM-BARAAControles'),
  id: "fSgdsk",
});

nebbie.render({ 
  element: document.querySelector('.GEM-charttotaalvtero'),
  id: "sjckS",
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

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-raadgeving'),
  id: "TxMejt",
});
nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-aanmaning'),
  id: "RJszj",
});
nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-verslagvaststelling'),
  id: "mSkpJ",
});

nebbie.render({ 
  element: document.querySelector('.GEM-PIE-Verbalitisanten'),
  id: "YKcxBs",
});
nebbie.render({ 
  element: document.querySelector('.GEM-PIE-StedenBK'),
  id: "MazX",
});
nebbie.render({ 
  element: document.querySelector('.GEM-PIE-StedenBKVerb'),
  id: "JpbAjkH",
});
nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-pv'),
  id: "PUkJxcn",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-vvt'),
  id: "mSkpJ",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-beveltotstaking'),
  id: "jcqGSD",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-afgeslotenminschik'),
  id: "jFqSu",
});
nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-ambtshalve'),
  id: "JYeCdB",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-raadgeving-igs'),
  id: "LuMZJT",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-aanmaning-igs'),
  id: "FJCSAND",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-verslagvanvastelling-igs'),
  id: "EGYPF",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-PV-igs'),
  id: "JzzZjnC",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-beveltotstaking-igs'),
  id: "LajcS",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-afgeslotenminnelijke-igs'),
  id: "npvDrPz",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-herstelvorderingOM-igs'),
  id: "KPukVKS",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-herstelvorderingBR-igs'),
  id: "WPZdtc",
});
nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-ambsthalvei-igs'),
  id: "WyVumvu",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-raadgeving-lp'),
  id: "KHUnM",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-verslagvastelling-lp'),
  id: "TWJjJ",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-pv-lp'),
  id: "rJjf",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-beveltotstaking-lp'),
  id: "UpBZR",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-ingeleidOM'),
  id: "EuufvjC",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-ingeleidBR'),
  id: "bHHWpyh",
});
nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-bestmaatregel'),
  id: "EfxBZV",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-bestmaatregel-zdwsm'),
  id: "hpuvuu",
});
nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-bestmaatregel-mdwsom'),
  id: "epPFzCU",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-bestmaatregel-igs-mdwsom'),
  id: "JJUvm",
});

nebbie.render({ 
  element: document.querySelector('.Gem-ro-inst-bestmaatregel-igs'),
  id: "qDrufGR",
});

nebbie.render({ 
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
} 
}