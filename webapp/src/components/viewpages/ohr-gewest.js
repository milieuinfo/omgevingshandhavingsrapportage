import {html, LitElement, renderStack} from "../common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/elements/doormat";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";
import "@domg-wc/components/content-header";
import "@domg-wc/components/typography";

class OhrGewest extends LitElement {

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
      <vl-content-header>
        <img is="vl-image"
             slot="image"
             src="/images/header.jpg"
             alt="Hoofding afbeelding website"/>
        <a slot="context-link" href="/">Omgevingshandhavingsrapportage</a>
        <a slot="title-link" href="/">Handhaving</a>
      </vl-content-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
              {
                size: 8,
                template: html`<h1 is="vl-h1" data-vl-no-space-bottom>
                  Gewestelijke handhavingsactoren
                </h1>`,
              },
              {
                size: 8,
                template: this.__renderTable(),
              },
              {
                size: 4,
                template: this.__renderSideNavigation(),
              },
              {
                size: 8,
                template: this.__renderDoorMat(),
              }
          )}
        </div>
      </section>`;
  }

  __renderTable() {
    return html`
      <div is="vl-grid">
        <vl-typography>
          <table>
          <caption>
          Overzichtstabel gewestelijke handhavingsactoren
    </caption>
            <thead>
              <tr>
                <th>Handhavingsactor</th>
                <th>Bevoegdheden</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Departement Omgeving, Afdeling Handhaving</td>
                <td><a
                    href="https://navigator.emis.vito.be/mijn-navigator?woId=25212&woLang=nl&woVersion=2022-03-11"
                    target="_blank">Milieu</a>
                  | <a
                      href="https://navigator.emis.vito.be/mijn-navigator?woId=74714&woLang=nl&woVersion=2022-03-11"
                      target="_blank">Ruimtelijke ordening</a>
                </td>
              </tr>
              <tr>
                <td>Agentschap voor Natuur en Bos</td>
                <td><a
                    href="https://navigator.emis.vito.be/mijn-navigator?woId=25216&woLang=nl&woVersion=2022-03-11"
                    target="_blank">Milieu en Ruimtelijke ordening</a></td>
              </tr>
              <tr>
                <td>Vlaamse Landmaatschappij</td>
                <td><a
                    href="https://navigator.emis.vito.be/mijn-navigator?woId=25221&woLang=nl&woVersion=2022-03-11"
                    target="_blank">Milieu</a></td>
              </tr>
              <tr>
                <td>Openbare Vlaamse Afvalstoffenmaatschappij</td>
                <td><a
                    href="https://navigator.emis.vito.be/mijn-navigator?woId=25217&woLang=nl&woVersion=2022-03-11"
                    target="_blank">Milieu</a></td>
              </tr>
              <tr>
                <td>Departement Omgeving, Afdeling Gebiedsontwikkeling,
                  Omgevingsplanning en
                  -projecten
                </td>
                <td><a
                    href="https://navigator.emis.vito.be/mijn-navigator?woId=25213&woLang=nl&woVersion=2022-03-11"
                    target="_blank">Milieu</a></td>
              </tr>
              <tr>
                <td>Departement Omgeving, Vlaams Planbureau voor Omgeving</td>
                <td><a
                    href="https://navigator.emis.vito.be/mijn-navigator?woId=25215&woLang=nl&woVersion=2022-03-11"
                    target="_blank">Milieu</a></td>
              </tr>
              <tr>
                <td>Departement Mobiliteit en Openbare Werken</td>
                <td><a
                    href="https://navigator.emis.vito.be/mijn-navigator?woId=25225&woLang=nl&woVersion=2022-03-11"
                    target="_blank">Milieu</a></td>
              </tr>
              <tr>
                <td>Vlaams Agentschap Zorg en Gezondheid</td>
                <td><a
                    href="https://navigator.emis.vito.be/mijn-navigator?woId=25223&woLang=nl&woVersion=2022-03-11"
                    target="_blank">Milieu</a></td>

              </tr>
              <tr>
                <td>De Vlaamse Waterweg</td>
                <td><a
                    href="https://navigator.emis.vito.be/mijn-navigator?woId=25225&woLang=nl&woVersion=2022-03-11"
                    target="_blank">Milieu</a></td>
              </tr>
              <tr>
                <td>Agentschap Wonen Vlaanderen - Afdeling Woonkwaliteit -
                  Vlaamse
                  Wooninspectie
                </td>
                <td><a
                    href="https://navigator.emis.vito.be/mijn-navigator?woId=74328&woLang=nl&woVersion=2022-03-11"
                    target="_blank">Ruimtelijke ordening</a></td>
              </tr>
              <tr>
                <td>Agentschap Maritieme Dienstverlening en Kust</td>
                <td><a
                    href="https://navigator.emis.vito.be/mijn-navigator?woId=25225&woLang=nl&woVersion=2022-03-11"
                    target="_blank">Milieu</a></td>
              </tr>
              <tr>
                <td>Agentschap Wegen en Verkeer</td>
                <td><a
                    href="https://navigator.emis.vito.be/mijn-navigator?woId=25224&woLang=nl&woVersion=2022-03-11µ"
                    target="_blank">Milieu</a></td>
              </tr>
              <tr>
                <td>Vlaams Energie- en Klimaatagentschap</td>
                <td><a
                    href="https://navigator.emis.vito.be/mijn-navigator?woId=25220&woLang=nl"
                    target="_blank">Milieu</a></td>
              </tr>
            </tbody>
          </table>
        </vl-typography>
      </div>`;
  }

  __renderDoorMat() {
    return html`
      <div is="vl-grid">
          <div is="vl-column">
              <div style="max-width: 600px">
                  <a is="vl-doormat" href="/gemeenten-analyse">
                      <h2 is="vl-doormat-title">Analyseer de cijfers</h2>
                      <div is="vl-doormat-text">
                        De cijfers geven een totaalbeeld van de handhavingsactiviteiten van de provincies samen in het voorgaande jaar. Bij selectie van een provincie, wordt in de individuele handhavingsfiche van deze provincie gerapporteerd over de uitvoering van de handhavingsactiviteiten in het voorgaande jaar.
                      </div>
                  </a>
              </div>
          </div>
      </div>`
  }

  __renderSideNavigation() {
    return html`    
      <h5 is="vl-h5" data-vl-alt>Interresante links</h5>
      <ul is="vl-link-list">
      <li is="vl-link-list-item">
      <a is="vl-link"
         href="/a_gewest">
        Analyseer de cijfers
      </a>
    </li>
        <li is="vl-link-list-item">
          <a is="vl-link"
             href="/">
            Terug naar beginpagina
          </a>
        </li>
      </ul>`;
  }
}

customElements.define("ohr-gewest", OhrGewest);
