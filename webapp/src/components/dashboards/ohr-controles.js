import {html, LitElement} from "../common/commons.js";
import charts from "../config/controles.json" assert {type: "json"};
import filters from "../config/controles-filters.js";
import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/dashboard-page";
import {vlElementsStyle} from "@domg-wc/elements";
import "@domg-wc/components/alert";
import yearofanalsysis from "../config/yearofanalysis.json" assert {type: "json"};

class OhrControles extends LitElement {

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
          data-vl-title="Controles"
          data-vl-sub-title="Omgevingshandhavingsrapportage"
          data-vl-link="/controles">
      </vl-functional-header>

      <div style="margin: 3rem 0px">
        <vl-qlik-dashboard-page
            title="Controles"
            export-id="eubkp"
            url="omgevingsloketrapport.omgeving.vlaanderen.be"
            app-id="18471668-8b52-493d-85fd-52034601ca9f"
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
        <p is="vl-text">
        De omgevingsinspectie wordt op verschillende beleidsniveaus uitgevoerd, namelijk door gewestelijke, provinciale en gemeentelijke handhavingsactoren.
        Deze pagina geeft via een interactieve tool de controles weer die over de jaren heen ingezet worden door de handhavingsactoren voor de omgevingshandhaving in Vlaanderen. 
        <br>
        De cijfers worden weergegeven per beleidsdomein:<b> milieu en ruimtelijke ordening.</b><br>
        
        
        <br>De cijfers zullen wijzigen naargelang de gekozen filtering.<br></p>
        <vl-accordion data-vl-toggle-text="Informatie over het gebruik van het dashboard">
          <span>
           Het standaard beeld geeft de totale cijfers van 2021 tot en met ${this.yearofanalysis} weer voor de omgevingsinspectie in heel Vlaanderen.
Via de filters kan u kiezen om de cijfers van één jaar, één beleidsniveau of één actor weer te geven. De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn. Bij een evolutie weergave zal de lijn onderbroken zijn
</span>
        </vl-accordion>
      </vl-typography>`;
  }
}

customElements.define("ohr-controles", OhrControles);
    