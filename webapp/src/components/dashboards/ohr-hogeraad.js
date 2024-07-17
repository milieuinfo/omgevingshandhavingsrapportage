import {html, LitElement} from "../common/commons.js";

import viz from "../config/hogeraad.json" assert {type: "json"};
import filters from "../config/hogeraad-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/dashboard-page";
import {vlElementsStyle} from "@domg-wc/elements";
import "@domg-wc/components/alert";
import yearofanalsysis from "../config/yearofanalysis.json" assert {type: "json"};

class OhrHogeRaadDashboard extends LitElement {

  static get styles() {
    return [...vlElementsStyle];
  }

  static get properties() {
    return {
      initialized: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.yearofanalysis = yearofanalsysis.value;
  }

  render() {
    return html`
      <vl-functional-header
          data-vl-back="Terug"
          data-vl-back-link="/"
          data-vl-title="Omgevingshandhavingsrapportage"
          data-vl-sub-title="Hoge Raad voor de Handhavingsuitvoering"
          data-vl-link="/hogeraad">
      </vl-functional-header>
      <div style="margin: 3rem 0px">
        <vl-qlik-dashboard-page
            title="Hoge Raad voor de Handhavingsuitvoering"
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
       De Hoge Raad voor de Handhavingsuitvoering adviseert over de inzet van bepaalde handhavingsinstrumenten van de ruimtelijke ordening. Deze pagina geeft via een interactieve tool de cijfers van de opdrachten van de Hoge Raad voor de Handhavingsuitvoering over de jaren heen weer.
       De cijfers worden weergegeven per bevoegdheid: adviesverlening en bemiddeling.
      De cijfers zullen wijzigen naargelang de gekozen filtering. 
       </p>
          <vl-accordion data-vl-toggle-text="Informatie over het gebruik van het dashboard">
          <span>
          Het standaard beeld geeft de totale cijfers van 2021 tot en met ${this.yearofanalysis}.
          Via de filters kan u kiezen om de cijfers van één jaar, één adviesaanvrager of één adviesverkrijger weer te geven. De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn. Bij een evolutie weergave zal de lijn onderbroken zijn.
          </span>
        </vl-accordion>
      </vl-typography>
    `;
  }
}

customElements.define("ohr-hogeraaddashboard", OhrHogeRaadDashboard);
    