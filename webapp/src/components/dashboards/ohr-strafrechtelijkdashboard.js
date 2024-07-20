import {html, LitElement} from "../common/commons.js";

import viz from "../config/strafrechtelijkvervolgtraject.json" assert {type: "json"};
import filters from "../config/strafrechtelijk-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/dashboard-page";
import {vlElementsStyle} from "@domg-wc/elements";
import "@domg-wc/components/alert";

import yearofanalsysis from "../config/yearofanalysis.json" assert {type: "json"};

class OhrStrafrechtelijkvervolgtraject extends LitElement {

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
        Het Openbaar Ministerie heeft kennis van alle processen-verbaal die worden opgesteld in het kader van de omgevingshandhaving. 
        Ze staat in voor de verdere strafrechtelijke afhandeling van de dossiers. <br>
        Deze pagina geeft via een interactieve tool de cijfers van het strafrechtelijk vervolgtraject over de jaren heen weer.
        </p>

         <vl-accordion data-vl-toggle-text="Informatie over het gebruik van het dashboard">
          <span>
            Het standaardbeeld geeft de totale cijfers van 2002 voor milieu en 2010 voor ruimtelijke ordening tot en met ${this.yearofanalysis} weer.
            Via de filters kan u kiezen om de cijfers van één jaar, één beleidsdomein, één thema of één tenlastenleggingscode weer te geven. 
            De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. 
            Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn. 
            Bij een evolutie weergave zal de lijn onderbroken zijn.
          </span>
        </vl-accordion>
      </vl-typography>
    `;
  }
}
customElements.define("ohr-strafrechtelijkvervolgtraject", OhrStrafrechtelijkvervolgtraject);
    