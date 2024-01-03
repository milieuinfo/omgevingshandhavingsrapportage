import {html, LitElement,} from "../common/commons.js";

import charts from "../config/klachten.json" assert {type: "json"};
import filters from "../config/klachten-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/dashboard-page";
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
      <div style="margin: 3rem 0px">
        <vl-qlik-dashboard-page
            title="Klachten"
            url="omgevingsloketrapport.omgeving.vlaanderen.be"
            app-id="e994d176-7ee5-49af-b193-d79672df9d04"
            .views="${charts}"
            .filters="${filters}"
            @initialized="${() => this.initialized = true}">
          ${this.__renderIntroduction()}
        </vl-qlik-dashboard-page>
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

customElements.define("ohr-klachten", OhrKlachten);
    