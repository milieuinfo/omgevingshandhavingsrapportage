import { Router } from "@vaadin/router";
import { define, queryById, html, LitElement } from "./common/commons.js";

import "@domg-wc/components"
import "@domg-wc/elements"
import "@domg-wc/sections"

import "./olr-start.js";
import "./dashboards/olr-windturbine.js";
import "./dashboards/ohr-personeel.js";
import "./viewpages/ohr-inleiding.js";
import "./dashboards/olr-iframe.js";
import "./olr-cookie.js";
import "./olr-accessibility.js";
import "./olr-privacy.js";
import "./olr-view404.js";
import "./viewpages/ohr-gewest.js";
import "./viewpages/ohr-a-gewest.js";
import "./viewpages/ohr-download.js";
import {getHeaderFooterId} from "./config/header.js";

class OlrApp extends LitElement {

  constructor() {
    super();
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <vl-template>
        <vl-header
          slot="header"
          data-vl-identifier="${getHeaderFooterId().headerId}"
          ?data-vl-development="${getHeaderFooterId().development}"
          data-vl-simple
        ></vl-header>
        <div
          style="min-height: calc(100vh - 43px - 128px)"
          slot="main"
          id="outlet"
        ></div>
        <vl-footer
          slot="footer"
          ?data-vl-development="${getHeaderFooterId().development}"
          data-vl-identifier="${getHeaderFooterId().footerId}"
        ></vl-footer>
      </vl-template>
    `;
  }

  firstUpdated(_changedProperties) {
    this._outlet = queryById(this)("outlet");
    const router = new Router(this._outlet);
    router.setRoutes([
        { path: "/", component: "olr-start" },
        { path: "/projecten", component: "olr-iframe" },
        { path: "/aanvragen", component: "olr-iframe" },
        { path: "/meldingen", component: "olr-iframe" },
        { path: "/beroepen", component: "olr-iframe" },
        { path: "/doorlooptijden", component: "olr-iframe" },
        { path: "/windturbine", component: "olr-windturbine" },
        { path: "/personeel", component: "ohr-personeel" },
        { path: "/cookieverklaring", component: "olr-cookie" },
        { path: "/toegankelijkheid", component: "olr-accessibility" },
        { path: "/privacy", component: "olr-privacy" },
        { path: "/inleiding", component: "ohr-inleiding" },
        { path: "/gewest", component: "ohr-gewest" },
        { path: "/a_gewest", component: "ohr-agewest" },
        { path: "/download", component: "ohr-download" },
        { path: "(.*)", component: "olr-view404" },
    ]);
    Router.go(window.location.pathname)
  }
}
define("olr-app", OlrApp, {});
