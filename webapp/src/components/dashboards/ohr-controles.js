import {html, LitElement,} from "../common/commons.js";

import charts from "../config/controles.json" assert {type: "json"};
import filters from "../config/controles-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/dashboard-page";
import {vlElementsStyle} from "@domg-wc/elements";

class OhrControles extends LitElement {

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
          data-vl-title="Thema - Controles"
          data-vl-sub-title="Omgevingshandhavingsrapportage"
          data-vl-link="/controles">
      </vl-functional-header>

      <div style="margin: 3rem 0px">
        <vl-qlik-dashboard-page
            title="Controles"
            export-id="JgmbA"
            url="omgevingsloketrapport.omgeving.vlaanderen.be"
            app-id="e994d176-7ee5-49af-b193-d79672df9d04"
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
    De omgevingsinspectie wordt uitgevoerd op verschillende beleidsniveaus uitgevoerd, namelijk door gewestelijke, provinciale en gemeentelijke handhavingsactoren.</p> 

    Deze pagina geeft via een interactieve tool de ontvangen klachten weer die over de jaren heen ingezet worden door de handhavingsactoren voor de omgevingshandhaving in Vlaanderen. <br>
    De cijfers zullen wijzigen naargelang de gekozen filtering.</p>

    <p><a href="/download-cijfers-en-meer">Download hier alle cijfers</a></p>
      <vl-info-tile data-vl-toggleable>
        <span slot="title">Informatie over het gebruik van het dashboard</span>
        <div slot="content">Het standaard beeld geeft de totale cijfers van 2021 tot en met het voorgaande jaar weer voor de omgevingsinspectie in heel Vlaanderen. <br>
        Via de filters kan u kiezen om de cijfers van één jaar,  één beleidsniveau of één actor weer te geven.
        De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn.<br>
        De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. <br>
        Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn.</div>
      </vl-info-tile>
    </vl-typography>
    </p>
    </vl-typography>`;
  }
}

customElements.define("ohr-controles", OhrControles);
    