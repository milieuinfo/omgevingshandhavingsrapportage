import {html, LitElement, renderStack} from "../common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/elements/doormat";
import "@domg-wc/elements/text";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";
import "@domg-wc/components/content-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/alert";

class OhrGemeente extends LitElement {

  static get styles() {
    return [
      ...vlElementsStyle
    ]
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <vl-functional-header
    data-vl-back="Terug"
    data-vl-back-link="/"
    data-vl-title="Gemeentelijke handhavingsactoren"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/gewest">
</vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
              {
                size: 8,
                template: html`<h1 is="vl-h1" data-vl-no-space-bottom>
                  Gemeentelijke handhavingsactoren
                </h1>`,
              },
              {
                size: 8,
                template: this.__renderTable(),
              },
              {
                size: 4,
                template: this.__renderSideNavigation(),
              }
          )}
        </div>
      </section>`;
  }

  __renderTable() {
    return html`
      <p is="vl-text">
        De gemeenten hebben handhavingsbevoegdheden ten aanzien van de <a
          href="https://navigator.emis.vito.be/mijn-navigator?woId=25227"
          target="_blank">milieuregelgeving</a>
        en/of de regelgeving inzake <a
          href="https://navigator.emis.vito.be/mijn-navigator?woId=74714&woLang=nl&woVersion=2022-03-11"
          target="_blank">ruimtelijke ordening</a>. De burgemeester of zijn
        plaatsvervanger is in bepaalde
        gevallen
        bevoegd voor het opleggen van bestuurlijke maatregelen en kan
        veiligheidsmaatregelen nemen in geval
        van een
        aanzienlijk risico voor mens of milieu. De lokale toezichthouders
        oefenen daarnaast het toezicht uit
        op de
        toepassing van specifieke milieuvoorschriften. De lokale verbalisanten,
        de agenten en de officieren
        van
        gerechtelijke politie en de stedenbouwkundige inspecteurs/burgemeesters
        handhaven de regelgeving van
        de
        Vlaamse Codex Ruimtelijke Ordening.
        De gemeenten kunnen hun handhavingsactiviteiten organiseren binnen de
        eigen gemeentelijke
        administratie
        en/of een intergemeentelijke vereniging en/of intergemeentelijke
        vereniging en/of de lokale politie.
        In de individuele handhavingsfiches en in de cartografische weergaves
        wordt gerapporteerd over de
        uitvoering
        van hun handhavingsactiviteiten in het voorgaand jaar.
      </p>`
  }

  __renderSideNavigation() {
    return html`
    <a is="vl-link-button" href="/gemeenten">Bekijk de cijfers voor dit thema</a>`;
  }
}

customElements.define("ohr-gemeenten", OhrGemeente);
