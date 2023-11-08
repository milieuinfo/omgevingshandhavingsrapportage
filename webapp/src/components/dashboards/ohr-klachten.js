import {
  define,
  html,
  LitElement,
} from "../common/commons.js";

import "../qlik/dashboard-page.js";
import viz_klachten from "../config/klachten.json" assert {type: "json"};
import filters from "../config/klachten-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";

class OhrKlachten extends LitElement {

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
          data-vl-sub-title="Meerjarenrapportage personeel"
          data-vl-link="/klachten">
      </vl-functional-header>
      <div style="margin: 0px 25px">
        <dashboard-page
            title="Klachten"
            url="omgevingsloketrapport.omgeving.vlaanderen.be"
            appId="a1cf8b4f-ac0b-4fa9-a0b2-7dabbe0960d2"
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

define("ohr-klachten", OhrKlachten);
    