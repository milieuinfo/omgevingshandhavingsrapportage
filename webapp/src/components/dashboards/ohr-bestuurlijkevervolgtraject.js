import {html, LitElement} from "../common/commons.js";

import viz from "../config/bestuurlijkevervolgtrajet.json" assert {type: "json"};
import filters from "../config/bestuurlijkevervolgtraject-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/dashboard-page";
import {vlElementsStyle} from "@domg-wc/elements";
import "@domg-wc/components/alert";

import yearofanalsysis from "../config/yearofanalysis.json" assert {type: "json"};

class OhrBestuurlijkevervolgtraject extends LitElement {

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
          data-vl-title="Bestuurlijke sanctionering"
          data-vl-sub-title="Omgevingshandhavingsrapportage"
          data-vl-link="/bestuurlijkevervolg-analyse">
      </vl-functional-header>
      <div style="margin: 3rem 0px">
        <vl-qlik-dashboard-page
            title="Bestuurlijke sanctionering"
            export-id="HwSaGq"
            url="omgevingsloketrapport.omgeving.vlaanderen.be"
            app-id="fdb16cce-7388-4b02-84d0-7f31e29fef29"
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
          De gewestelijke beboetingsentiteit heeft kennis van alle verslagen van vaststelling en alle processen-verbaal die door het openbaar ministerie naar hen werden doorgestuurd voor het opleggen van een bestuurlijke geldboete. Ze staat in voor de verdere bestuurlijke afhandeling van de dossiers. 
          Het Handhavingscollege is een onafhankelijk Vlaams administratief rechtscollege. Dit college behandelt de beroepen die ingesteld worden tegen beslissingen omtrent een bestuurlijke geldboete in het kader van milieu- en stedenbouwreglementering, in het kader van omgevingsvergunningen of in het kader van onroerend erfgoed. 
          Deze pagina geeft via een interactieve tool de cijfers van het bestuurlijk vervolgtraject over de jaren heen weer.

        </p>
       <vl-accordion data-vl-toggle-text="Informatie over het gebruik van het dashboard">
          <span>
          Het standaard beeld geeft de totale cijfers van 2021 tot en met ${this.yearofanalysis}.
          Via de filters kan u kiezen om de cijfers van één jaar, één beleidsdomein of één thema weer te geven. De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn. Bij een evolutie weergave zal de lijn onderbroken zijn.
          </span>
        </vl-accordion>
      </vl-typography>
    `;
  }
}

customElements.define("ohr-bestuurlijkevervolgtraject", OhrBestuurlijkevervolgtraject);
    