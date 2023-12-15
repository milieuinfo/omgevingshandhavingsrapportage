import {define, html, LitElement,} from "../common/commons.js";

import "../qlik/dashboard-page.js";
import charts from "../config/klachten.json" assert {type: "json"};
import filters from "../config/klachten-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import {vlElementsStyle} from "@domg-wc/elements";

class OhrKlachten extends LitElement {

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
          data-vl-title="Thema - Klachten"
          data-vl-sub-title="Omgevingshandhavingsrapportage"
          data-vl-link="/klachten">
      </vl-functional-header>

      <div style="margin: 0px 0px">
        <dashboard-page
            title="Klachten"
            url="omgevingsloketrapport.omgeving.vlaanderen.be"
            appId="e994d176-7ee5-49af-b193-d79672df9d04"
            .views="${charts}"
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
          Een voorstelling van de klachten die werden ontvangen bij de
          verschillende omgevingshandhavingsactoren op gewestelijk, provinciaal
          en gemeentelijk niveau.
        </p>
      </vl-typography>`;
  }
}

define("ohr-klachten", OhrKlachten);
    