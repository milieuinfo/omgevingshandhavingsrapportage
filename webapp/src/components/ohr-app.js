import {Router} from "@vaadin/router";
import {html, LitElement, queryById} from "./common/commons.js";

import "@domg-wc/sections/header";
import "@domg-wc/sections/footer";
import "@domg-wc/components/template"

import "./ohr-start.js";
import "./dashboards/ohr-personeel.js";
import "./viewpages/ohr-inleiding.js";
import "./ohr-cookie.js";
import "./dashboards/ohr-klachten.js";
import "./dashboards/ohr-controles.js";
import "./dashboards/ohr-instrumentarium.js";
import "./ohr-accessibility.js";
import "./ohr-privacy.js";
import "./ohr-view404.js";
import "./viewpages/ohr-gewest.js";
import "./viewpages/ohr-provinciaalanalyse.js";
import "./viewpages/ohr-gemeenten-analyse.js";
import "./viewpages/ohr-hoge-raad-analyse.js";
import "./viewpages/ohr-gemeenten.js";
import "./viewpages/ohr-hoge-raad.js";
import "./viewpages/ohr-provincie.js";
import "./viewpages/ohr-a-gewest.js";
import "./viewpages/ohr-download.js";
import "./viewpages/ohr-strafrechtelijk-analyse.js";
import "./viewpages/ohr-strafrechtelijk.js";
import "./viewpages/gemeenten-op-kaart.js";
import "./viewpages/ohr-provincie-op-kaart.js";

import {getHeaderFooterId} from "./config/header.js";

class OhrApp extends LitElement {

  constructor() {
    super();
  }
  render() {
    return html`
      <vl-template>
        <vl-header
            slot="header"
            data-vl-identifier="${getHeaderFooterId().headerId}"
            ?data-vl-development="${getHeaderFooterId().development}"
            data-vl-simple>
        </vl-header>
        <div
            style="min-height: calc(100vh - 43px - 128px)"
            slot="main"
            id="outlet">
        </div>
        <vl-footer
            slot="footer"
            ?data-vl-development="${getHeaderFooterId().development}"
            data-vl-identifier="${getHeaderFooterId().footerId}">
        </vl-footer>
      </vl-template>
    `;
  }

  firstUpdated(_changedProperties) {
    this._outlet = queryById(this)("outlet");
    const router = new Router(this._outlet);
    router.setRoutes([
      {path: "/", component: "ohr-start"},
      {path: "/cookieverklaring", component: "ohr-cookie"},
      {path: "/toegankelijkheid", component: "ohr-accessibility"},
      {path: "/personeel", component: "ohr-personeel"},
      {path: "/klachten", component: "ohr-klachten"},
      {path: "/controles", component: "ohr-controles"},
      {path: "/instrumentarium", component: "ohr-instrumentarium"},
      {path: "/privacy", component: "ohr-privacy"},
      {path: "/dataverzameling-en-data-interpretatie", component: "ohr-inleiding"},
      {path: "/gewest", component: "ohr-gewest"},
      {path: "/a_gewest", component: "ohr-agewest"},
      {path: "/download-cijfers-en-meer", component: "ohr-download"},
      {path: "/provincie", component: "ohr-provincie"},
      {path: "/hoge-raad", component: "ohr-hogeraad"},
      {path: "/hoge-raad-analyse", component: "ohr-hogeraadanalyse"},
      {path: "/strafrechtelijk", component: "ohr-strafrechtelijk"},
      {path: "/strafrechtelijk-analyse",component: "ohr-strafrechtelijkanalyse"},
      {path: "/gemeenten-analyse", component: "ohr-gemeentenanalyse"},
      {path: "/gemeenten", component: "ohr-gemeenten"},
      {path: "/gemeenten-op-kaart", component: "ohr-opkaart"},
      {path: "/provincie-op-kaart", component: "ohr-opkaartprovincies"},
      {path: "/provincie-jaar-analyse", component: "ohr-provincieanalyse"},
      {path: "(.*)", component: "ohr-view404"},
    ]);
    Router.go(window.location.pathname)
  }
}
customElements.define("ohr-app", OhrApp, {});
