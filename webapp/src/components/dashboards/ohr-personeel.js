import {html, LitElement} from "../common/commons.js";

import viz_personeel from "../config/personeel.json" assert {type: "json"};
import filters from "../config/personeel-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/dashboard-page";
import {vlElementsStyle} from "@domg-wc/elements";

class OhrPersoneel extends LitElement {

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
          data-vl-title="Analyseer de cijfers - personeel"
          data-vl-sub-title="Omgevingshandhavingsrapportage"
          data-vl-link="/personeel">
      </vl-functional-header>
      <div style="margin: 3rem 0px">
        <vl-qlik-dashboard-page
            title="Personeel"
            url="omgevingsloketrapport.omgeving.vlaanderen.be"
            app-id="fb547101-5462-497e-bc76-09725dd596c8"
            .views="${viz_personeel}"
            .filters = "${filters}"
            @initialized="${() => this.initialized = true}"
        >
          ${this.__renderIntroduction()}
        </vl-qlik-dashboard-page>
      </div>
      </section>`;
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
        De omgevingsinspectie wordt uitgevoerd op verschillende beleidsniveaus uitgevoerd, namelijk door gewestelijke, provinciale en gemeentelijke handhavingsactoren.

        Deze pagina geeft via een interactieve tool de personele middelen weer die over de jaren heen ingezet worden door de handhavingsactoren voor de omgevingshandhaving in Vlaanderen. De cijfers zullen wijzigen naargelang de gekozen filtering.
        
        Het standaard beeld geeft de cijfers van het voorgaande jaar weer voor de omgevingsinspectie in heel Vlaanderen. 
        
        Via de filters kan u kiezen om de cijfers van andere jaren te bekijken. Daarnaast kan u via de filters verder inzoemen op de cijfers van één beleidsniveau of één actor.
        De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn.
        
        </p>
      </vl-typography>
    `;
  }
}

customElements.define("ohr-personeel", OhrPersoneel);
  