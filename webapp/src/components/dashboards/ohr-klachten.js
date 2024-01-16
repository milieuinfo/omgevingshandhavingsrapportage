import {html, LitElement,} from "../common/commons.js";

import charts from "../config/klachten.json" assert {type: "json"};
import filters from "../config/klachten-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/dashboard-page";
import {vlElementsStyle} from "@domg-wc/elements";
import "@domg-wc/components/alert";

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
          data-vl-title="Analyseer de cijfers - Klachten"
          data-vl-sub-title="Omgevingshandhavingsrapportage"
          data-vl-link="/klachten">
      </vl-functional-header>
      <div style="margin: 3rem 0px">
        <vl-qlik-dashboard-page
            title="Klachten"
            url="omgevingsloketrapport.omgeving.vlaanderen.be"
            app-id="488784e3-1d65-4427-85e9-0b720dafb800"
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

      De omgevingsinspectie wordt uitgevoerd op verschillende beleidsniveaus uitgevoerd, namelijk door gewestelijke, provinciale en gemeentelijke handhavingsactoren.

Deze pagina geeft via een interactieve tool de ontvangen klachten weer die over de jaren heen ingezet worden door de handhavingsactoren voor de omgevingshandhaving in Vlaanderen. De cijfers zullen wijzigen naargelang de gekozen filtering.

Het standaard beeld geeft de totale cijfers van 2021 tot en met het voorgaande jaar weer voor de omgevingsinspectie in heel Vlaanderen. 

Via de filters kan u kiezen om de cijfers van één jaar,  één beleidsniveau of één actor weer te geven.
De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn.




      </p>
      </vl-typography>`;
  }
}

customElements.define("ohr-klachten", OhrKlachten);
    