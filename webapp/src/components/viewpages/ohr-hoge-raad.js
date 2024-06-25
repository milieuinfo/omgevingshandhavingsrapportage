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


class OhrHogeRaad extends LitElement {

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
    data-vl-title="Jaarrapportage Hoge raad voor de handhavingsuitvoering"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/hoge-raad">
</vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
              {
                size: 8,
                template: html`<h1 is="vl-h1" data-vl-no-space-bottom>
                Hoge raad voor de handhavingsuitvoering
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
          Deze pagina toont een beeld van de activiteiten van de Hoge Raad voor
          de
          Handhavingsuitvoering in het voorafgaande jaar.</p>
             <p is="vl-text">
        De Hoge Raad voor Handhavingsuitvoering adviseert over de inzet van bepaalde handhavingsinstrumenten in het kader van de handhaving van de ruimtelijke ordening, namelijk: 

        </p><br>
          </div>

      <div is="vl-grid">
        <vl-typography>
          <ul>

          <li>bindend advies verlenen aan de stedenbouwkundige inspecteurs en de burgemeesters over de herstelvordering die zij op basis van hun vaststellingen willen inleiden bij het Openbaar Ministerie of de burgerlijke rechtbank</li>
          <li>bindend advies verlenen over de gemotiveerde verzoeken tot heroverweging van de door de HRH geformuleerde negatieve adviezen</li>
          <li>bindend advies verlenen aan de stedenbouwkundige inspecteurs en de burgemeesters over een opeenvolgende herstelvordering</li>
          <li>bindend advies verlenen aan de stedenbouwkundige inspecteurs en de burgemeesters vooraleer zij kunnen overgaan tot een ambtshalve uitvoering van een door de rechter bevolen herstelmaatregel</li>
          <li>bindend advies verlenen aan de stedenbouwkundige inspecteurs en de burgemeesters voorafgaand aan sommige betekeningen van vonnissen of arresten waarin de rechter hen heeft gemachtigd om ambtshalve in de uitvoering ervan te voorzien</li>
          <li>advies verlenen aan de Vlaamse Regering of het college van burgemeester en schepenen over het gemotiveerd verzoek om tijdelijk of definitief af te zien van verdere inning van een opeisbaar geworden dwangsomschuld</li>
          <li>advies verlenen aan de Vlaamse Regering of het college van burgemeester en schepenen over de herstelmaatregelen in het kader van een beroep ingesteld door de vermoedelijke overtreder tegen de beslissing tot toepassing van bestuursdwang of tot het opleggen van een last onder dwangsom.</li>
                  </ul>
        </vl-typography>
        <br>
          <p>
          Daarnaast bemiddelt de Hoge Raad voor Handhavingsuitvoering op verzoek van een vermoedelijke overtreder of de rechtbank.
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
      <li is="vl-link-list-item">
        <a target="_new_blank" is="vl-link"
           href=https://www.hogeraadvoordehandhavingsuitvoering.be/>
          Website Hoge Raad<span is="vl-icon" data-vl-before="" data-vl-link="" data-vl-icon="external"></span>
        </a>
      </li>
    </ul>
    
    
    `;
  }
}

customElements.define("ohr-hogeraad", OhrHogeRaad);
