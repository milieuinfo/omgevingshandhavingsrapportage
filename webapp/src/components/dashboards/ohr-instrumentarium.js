import {html, LitElement} from "../common/commons.js";

import viz from "../config/instrumentarium.json" assert {type: "json"};
import filters from "../config/instrumentarium-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/dashboard-page";
import {vlElementsStyle} from "@domg-wc/elements";
import "@domg-wc/components/alert";

import yearofanalsysis from "../config/yearofanalysis.json" assert {type: "json"};

class OhrInstrumentarium extends LitElement {

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
          data-vl-sub-title="Instrumentarium"
          data-vl-link="/instrumentarium">
      </vl-functional-header>
      <div style="margin: 3rem 0px">
        <vl-qlik-dashboard-page
            title="Instrumentarium"
            export-id="CdmbBP"
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
        De omgevingsinspectie wordt uitgevoerd op verschillende beleidsniveaus uitgevoerd, namelijk door gewestelijke, provinciale en gemeentelijke handhavingsactoren.
Deze pagina geeft via een interactieve tool het gebruikte instrumentarium weer dat over de jaren heen ingezet wordt door de handhavingsactoren voor de omgevingshandhaving in Vlaanderen. De cijfers zullen wijzigen naargelang de gekozen filtering.
</p>    
<b>Weetje:</b>
        <ul>
          <li><b>Zachte instrumenten:</b> Onder zachte handhaving vallen bestuurlijke instrumenten zoals de raadgeving en de aanmaning</li>
          <li><b>Repressieve instrumenten:</b> Als preventieve instrumenten geen of te weinig effect hebben, dan kunnen repressieve instrumenten een uitkomst bieden.
          <ul>
            <li>Verslag van vaststelling, proces-verbaal, bestuurlijke maatregel, bevel tot staking, minnelijke schikking, herstelvordering, ambtshalve uitvoering.</li></ul>
          </li>

        </ul>
        <vl-accordion data-vl-toggle-text="Informatie over het gebruik van het dashboard">
        <span>
          Het standaard beeld geeft de totale cijfers van 2021 tot en met ${this.yearofanalysis} voor de omgevingsinspectie in heel Vlaanderen.
          Via de filters kan u kiezen om de cijfers van één jaar, één beleidsniveau of één actor weer te geven. 
          De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. 
          Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn. 
          Bij een evolutie weergave zal de lijn onderbroken zijn
        </span>
  </vl-accordion>
      </vl-typography>
    `;
  }
}

customElements.define("ohr-instrumentarium", OhrInstrumentarium);
    