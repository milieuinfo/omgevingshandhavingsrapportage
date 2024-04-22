import {html, LitElement} from "../common/commons.js";

import viz from "../config/hogeraad.json" assert {type: "json"};
import filters from "../config/hogeraad-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/dashboard-page";
import {vlElementsStyle} from "@domg-wc/elements";
import "@domg-wc/components/alert";

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
          data-vl-sub-title="Hoge raad voor de handhavingsuitvoering"
          data-vl-link="/hogeraad">
      </vl-functional-header>
      <div style="margin: 3rem 0px">
        <vl-qlik-dashboard-page
            title="Hoge raad voor de handhavingsuitvoering"
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
        De Hoge Raad voor de Handhavingsuitvoering adviseert over de inzet van bepaalde handhavingsinstrumenten van de ruimtelijke ordening.
Deze pagina geeft via een interactieve tool de cijfers van de opdrachten van de Hoge Raad voor de Handhavingsuitvoering over de jaren heen weer. De cijfers zullen wijzigen naargelang de gekozen filtering.
Het standaard beeld geeft de totale cijfers van 2021 tot en met het voorgaande jaar weer voor de Hoge Raad voor de Handhavingsuitvoering in heel Vlaanderen.
        </p>
        <vl-info-tile data-vl-toggleable>
        <span slot="title">Informatie over het gebruik van het dashboard</span>
        <div slot="content">Via de filters kan u kiezen om de cijfers van één jaar of één aanvrager weer te geven.
        De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn.</div>
      </vl-info-tile>
      </vl-typography>
    `;
  }
}

customElements.define("ohr-hogeraaddashboard", OhrHogeRaadDashboard);
    