import {define, html, LitElement} from "../common/commons.js";

import "../qlik/dashboard-page.js";
import viz_personeel from "../config/personeel.json" assert {type: "json"};
import filtersPersoneel from "../config/personeel-filters.js";

import "@domg-wc/components/typography"
import "@domg-wc/components/functional-header"

class OhrPersoneel extends LitElement {

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
          data-vl-sub-title="Meerjarenrapportage personeel"
          data-vl-link="/personeel">
      </vl-functional-header>
        <dashboard-page
            title="Personeel"
            url="omgevingsloketrapport.omgeving.vlaanderen.be"
            appId="6960c6d8-493a-4489-a428-367b779be6f9"
            .views="${viz_personeel}"
            @initialized="${() => this.initialized = true}"
        >
          ${this.__renderIntroduction()}
        </dashboard-page>
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
        <p>
          Ons dashboard geeft helder en gedetailleerd beeld van de
          personeelsstructuur binnen onze organisatie, met een bijzondere focus
          op onze toezichthouders.</br>
          Toezichthouders spelen een cruciale rol in de milieuhandhaving en het
          is daarom essentieel om de evolutie van deze functies nauwkeurig te
          monitoren.
        </p>
        <p>
          Dankzij dit dashboard kunt u de verdeling van voltijdsequivalenten
          (VTE) binnen onze organisatie volgen, van het totale aaantal
          werknemers tot het specifieke aantal VTE's toegewezen aan toezichtende
          rollen.<br/>
          Het biedt ook inzicht in de ontwikkeling van deze cijfers over de
          jaren, wat ons helpt om trends in personeelsbezetting en -groei te
          identificeren.
        </p>
        <p>
          Het monitoren van deze gegevens is cruciaal voor ons: het stelt ons in
          staat om onze personeelsbezetting optimaal te beheren, mogelijke
          tekortkomingen te identificeren en <br/> proactieve maatregelen te
          nemen om ervoor te zorgen dat we altijd over het juiste aantal
          gekwalificeerde toezichthouders beschikken om onze
          milieuhandhavingsopdracht effectief uit te voeren.
        </p>
      </vl-typography>
    `;
  }
}

define("ohr-personeel", OhrPersoneel);
  