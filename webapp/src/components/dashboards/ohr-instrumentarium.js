import {define, html, LitElement} from "../common/commons.js";

import "../qlik/dashboard.js";
import viz_klachten from "../config/klachten.json" assert {type: "json"};
import filters from "../config/klachten-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import {vlElementsStyle} from "@domg-wc/elements";

class OhrInstrumentarium extends LitElement {

  static get styles() {
    return [...vlElementsStyle];
  }

  static get properties() {
    return {
      initialized: {type: Boolean}
    }
  }

  render() {
    return html`
      <vl-functional-header
          data-vl-back="Terug"
          data-vl-back-link="/"
          data-vl-title="Omgevingshandhavingsrapportage"
          data-vl-sub-title="Instrumentarium"
          data-vl-link="/instrumentarium">
      </vl-functional-header>
      <div style="margin: 0px 25px">
        <dashboard-page
            title="Instrumentarium"
            url="omgevingsloketrapport.omgeving.vlaanderen.be"
            appId="cb35931b-212b-4003-bf44-484e23fcc6e7"
            selectedView="gewest"
            .views="${viz_klachten}"
            .filters="${filters}"
            @initialized="${() => this.initialized = true}">
          ${this.__renderIntroduction()}
        </dashboard-page>
      </div></section>`;
  }

  __renderIntroduction() {
    if (!this.initialized) {
      return html`
        <vl-loader
            data-vl-text="Pagina is aan het laden"
        ></vl-loader>`;
    }
    return html`
      <vl-typography slot="introduction">
        <p>
          Aanvullen
        </p>
      </vl-typography>
    `;
  }
}

define("ohr-instrumentarium", OhrInstrumentarium);
    