import {html, LitElement} from "../common/commons.js";

import viz from "../config/bestuurlijkevervolgtrajet.json" assert {type: "json"};
import filters from "../config/bestuurlijkevervolgtraject-filters.js";

import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/dashboard-page";
import {vlElementsStyle} from "@domg-wc/elements";
import "@domg-wc/components/alert";

class OhrBestuurlijkevervolgtraject extends LitElement {

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
          data-vl-sub-title="Bestuurlijke vervolgtraject"
          data-vl-link="/bestuurlijkevervolg-analyse">
      </vl-functional-header>
      <div style="margin: 3rem 0px">
        <vl-qlik-dashboard-page
            title="Bestuurlijke vervolgtraject"
            export-id="JgmbA"
            url="omgevingsloketrapport.omgeving.vlaanderen.be"
            app-id="9865ab27-e0a5-4c1f-96b9-6cafc9d14a61"
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
        Dit efficiënte hulpmiddel biedt een gestructureerd overzicht van cruciale informatie en middelen om het besluitvormingsproces te ondersteunen in het bestuurlijke vervolgtraject. Met slechts een eenvoudige klik kunt u naadloos schakelen tussen verschillende bestuursaspecten, zoals financiën en juridische kwesties. Diverse filters en andere functionaliteiten staan tot uw beschikking om gegevens te verfijnen en diepgaande analyses uit te voeren. Dit dashboard is speciaal ontworpen om uw planning en beleidsvorming te optimaliseren en zo bij te dragen aan een effectiever bestuur en een duurzamere toekomst.
        </p>
        <vl-info-tile data-vl-toggleable>
          <span slot="title">Informatie over het gebruik van het dashboard</span>
          <div slot="content">Het standaard beeld geeft de totale cijfers van 2021 tot en met het voorgaande jaar weer voor de omgevingsinspectie in heel Vlaanderen. <br>
          Via de filters kan u kiezen om de cijfers van één jaar,  één beleidsniveau of één actor weer te geven.
          De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn.<br>
          De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. <br>
          Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn.</div>
        </vl-info-tile>
      </vl-typography>
    `;
  }
}

customElements.define("ohr-bestuurlijkevervolgtraject", OhrBestuurlijkevervolgtraject);
    