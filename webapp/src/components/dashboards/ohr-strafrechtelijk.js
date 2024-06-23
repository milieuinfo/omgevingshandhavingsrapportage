import {html, LitElement} from "../common/commons.js";

import viz from "../config/strafrechtelijkvervolgtraject.json" assert {type: "json"};
import filters from "../config/strafrechtelijk-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/dashboard-page";
import {vlElementsStyle} from "@domg-wc/elements";
import "@domg-wc/components/alert";

class OhrStrafrechtelijkvervolgtraject extends LitElement {

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
          data-vl-sub-title="Strafrechtelijk sanctionering"
          data-vl-link="/strafrechtelijk-analyse">
      </vl-functional-header>
      <div style="margin: 3rem 0px">
        <vl-qlik-dashboard-page
            title="Strafrechtelijk sanctionering"
            export-id="mkWEU"
            url="omgevingsloketrapport.omgeving.vlaanderen.be"
            app-id="1b3c1014-cde6-4969-92fb-68fc10753f88"
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
 
Deze pagina geeft via een interactieve tool de cijfers van het bestuurlijk vervolgtraject over de jaren heen weer. De cijfers zullen wijzigen naargelang de gekozen filtering.
 
Het standaard beeld geeft de totale cijfers tot en met het voorgaande jaar weer voor het bestuurlijk vervolgtraject in heel Vlaanderen.
        </p>
         <vl-accordion data-vl-toggle-text="Informatie over het gebruik van het dashboard">
          <span>
          Het standaard beeld geeft de totale cijfers van 2021 tot en met het voorgaande jaar weer voor de omgevingsinspectie in heel Vlaanderen. <br>
          Via de filters kan u kiezen om de cijfers van één jaar,  één beleidsniveau of één actor weer te geven.
          De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn.<br>
          De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. <br>
          Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn.</span>
        </vl-accordion>
      </vl-typography>
    `;
  }
}
customElements.define("ohr-strafrechtelijkvervolgtraject", OhrStrafrechtelijkvervolgtraject);
    