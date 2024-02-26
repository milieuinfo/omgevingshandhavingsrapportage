import {html, LitElement, renderStack} from "../common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/elements/text";
import "@domg-wc/elements/doormat";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";
import "@domg-wc/components/content-header";

class OhrProvincie extends LitElement {

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
    data-vl-title="Provinciale handhavingsactoren"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/provincie">
</vl-functional-header>
  <section is="vl-region">
    <div is="vl-layout">
          ${renderStack(
            {
              size: 8,
              template: html`<h1 is="vl-h1" data-vl-no-space-bottom>
              Provinciale handhavingsactoren
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
        De provincies hebben handhavingsbevoegdheden ten aanzien van de
        milieuregelgeving. De
        provinciegouverneur of zijn plaatsvervanger is in bepaalde gevallen
        bevoegd voor het
        opleggen van bestuurlijke maatregelen en kan veiligheidsmaatregelen
        nemen in geval van
        een aanzienlijk risico voor mens of milieu. De provinciale
        toezichthouders oefenen
        daarnaast het toezicht uit op de toepassing van specifieke
        milieuvoorschriften.
        In de individuele handhavingsfiches wordt per provincie gerapporteerd
        over de uitvoering
        van hun handhavingsactiviteiten in het voorgaand jaar.
      </p>`;
  }

  __renderSideNavigation() {
    return html`
    <h5 is="vl-h5" data-vl-alt>Interessante links</h5>
    <ul is="vl-link-list">
    <li is="vl-link-list-item">
    <a is="vl-link-button" href="/provincie-analyse">Bekijk de cijfers voor dit thema</a>
      </li>
      <li is="vl-link-list-item">
      <a is="vl-link" href="/provincie-op-kaart">Kaartweergave rapportage provincie</a>
    </li>
      <li is="vl-link-list-item">
        <a is="vl-link" href="/">Meerjarenrapportage</a>
      </li>   
      <li is="vl-link-list-item">
        <a is="vl-link" href="/download-cijfers-en-meer">Download de cijfers</a>
      </li> 
      <li is="vl-link-list-item">
        <a target="_new_blank" is="vl-link"
           href=https://indicatoren.omgeving.vlaanderen.be/>
          Indicatoren website<span is="vl-icon" data-vl-before="" data-vl-link="" data-vl-icon="external"></span>
        </a>
      </li>
    </ul>
    `; 
  }
}

customElements.define("ohr-provincie", OhrProvincie);
