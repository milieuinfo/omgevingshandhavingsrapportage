import {html, LitElement} from "../common/commons.js";

import viz from "../config/instrumentarium.json" assert {type: "json"};
import filters from "../config/instrumentarium-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/dashboard-page";
import {vlElementsStyle} from "@domg-wc/elements";
import "@domg-wc/components/alert";

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
      <div style="margin: 3rem 0px">
        <vl-qlik-dashboard-page
            title="Instrumentarium"
            export-id="JgmbA"
            url="omgevingsloketrapport.omgeving.vlaanderen.be"
            app-id="4e2b7e4c-70df-4e58-a44d-234e18cb0739"
            selected-view="Milieu"
            .views="${viz}"
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
        Dit krachtige instrument biedt een gestructureerd overzicht van essentiële informatie en tools om besluitvorming te ondersteunen. Met een eenvoudige dropdown-menu kunt u moeiteloos schakelen tussen milieu- en ruimtelijke ordeningsaspecten. Filters en andere functionaliteiten staan tot uw beschikking om gegevens te verfijnen en analyses uit te voeren. Dit dashboard is ontworpen om uw planning en beleidsvorming te verbeteren en bij te dragen aan een duurzamere toekomst. 
        </p>
      </vl-typography>
    `;
  }
}

customElements.define("ohr-instrumentarium", OhrInstrumentarium);
    