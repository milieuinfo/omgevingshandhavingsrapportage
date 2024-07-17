import {html, LitElement, renderStack} from "../common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/text";
import "@domg-wc/elements/title";
import "@domg-wc/elements/doormat";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";
import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import yearofanalsysis from "../config/yearofanalysis.json" assert {type: "json"};

class OhrHogeRaad extends LitElement {

  static get styles() {
    return [
      ...vlElementsStyle
    ]
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
    data-vl-title="Jaarrapportage Hoge Raad voor de Handhavingsuitvoering"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/hoge-raad">
</vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
              {
                size: 8,
                template: html`<h1 is="vl-h1" data-vl-no-space-bottom>
                Hoge Raad voor de Handhavingsuitvoering
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
      <div is="vl-grid">
        <p is="vl-text">
          Deze pagina toont een beeld van de activiteiten van de Hoge Raad voor de Handhavingsuitvoering in ${this.yearofanalysis}.</p>
             <p is="vl-text">
        De Hoge Raad voor de Handhavingsuitvoering adviseert over de inzet van bepaalde handhavingsinstrumenten in het kader van de handhaving van de ruimtelijke ordening.
        </p>
        </div>
        <br>
        <div is="vl-grid">
        <p is="vl-text">
        Meer informatie hieromtrent kan u terugvinden op de website van <a href="https://www.hogeraadvoordehandhavingsuitvoering.be" target="_blank">Hoge Raad voor de Handhavingsuitvoering</a> 
        </p>
          </div>`;
  }

  __renderSideNavigation() {
    return html`    
    <a is="vl-link-button" href="/hoge-raad-analyse">Bekijk de cijfers voor dit thema</a>
    <h5 is="vl-h5" data-vl-alt>Interessante links</h5>
    <ul is="vl-link-list">
    <li is="vl-link-list-item">
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
customElements.define("ohr-hogeraad", OhrHogeRaad);
