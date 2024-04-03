import {html, LitElement} from "../common/commons.js";

import viz from "../config/hogeraad.json" assert {type: "json"};
import filters from "../config/hogeraad-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/dashboard-page";
import {vlElementsStyle} from "@domg-wc/elements";

class OhrHogeRaadDashboard extends LitElement {

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
          data-vl-sub-title="Hoge Raad"
          data-vl-link="/hogeraad">
      </vl-functional-header>
      <div style="margin: 3rem 0px">
        <vl-qlik-dashboard-page
            title="Hoge Raad"
            export-id="JgmbA"
            url="omgevingsloketrapport.omgeving.vlaanderen.be"
            app-id="4202d739-538c-4d7f-8d92-3950359a3602"
            selected-view="Instroom"
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
        Op dit dashboard vind je verschillende visualisaties die je kunt bekijken door een optie te kiezen uit het dropdown-menu hierboven. Deze visualisaties bieden inzicht in verschillende aspecten van de Hoge Raad.

        Daarnaast kun je filters vinden aan de linkerkant van het dashboard, waarmee je de gegevens verder kunt verfijnen en specifieke informatie kunt vinden.
        
        Ontdek de gegevens en trends van de Hoge Raad en gebruik de filters om de informatie te vinden die voor jou relevant is. Veel ontdekplezier!
        </p>
      </vl-typography>
    `;
  }
}

customElements.define("ohr-hogeraaddashboard", OhrHogeRaadDashboard);
    