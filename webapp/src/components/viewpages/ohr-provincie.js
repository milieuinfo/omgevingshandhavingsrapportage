import {define, html, LitElement, renderStack} from "../common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";

import "@domg-wc/components/content-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/alert";

class OhrProvincie extends LitElement {

  static get styles() {
    return [
      vlElementsStyle
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
        De provincies hebben handhavingsbevoegdheden ten aanzien van de milieuregelgeving. De
        provinciegouverneur of zijn plaatsvervanger is in bepaalde gevallen bevoegd voor het
        opleggen van bestuurlijke maatregelen en kan veiligheidsmaatregelen nemen in geval van
        een aanzienlijk risico voor mens of milieu. De provinciale toezichthouders oefenen
        daarnaast het toezicht uit op de toepassing van specifieke milieuvoorschriften.
        In de individuele handhavingsfiches wordt per provincie gerapporteerd over de uitvoering
        van hun handhavingsactiviteiten in het voorgaand jaar.
        </p>
                    
                    <section id="content-1-2" is="vl-region">
                        <div is="vl-grid">
                            <div is="vl-column">
                                <div style="max-width: 600px">
                                    <a is="vl-doormat" href="/provincie_jaar_analyse">
                                        <h2 is="vl-doormat-title">Analyseer de cijfers</h2>
                                        <div is="vl-doormat-text">
                                          De cijfers geven een totaalbeeld van de handhavingsactiviteiten van de provincies samen in het voorgaande jaar. Bij selectie van een provincie, wordt in de individuele handhavingsfiche van deze provincie gerapporteerd over de uitvoering van de handhavingsactiviteiten in het voorgaande jaar.
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>`;
  }

  __renderSideNavigation() {
    return html`    
      <h5 is="vl-h5" data-vl-alt>Interresante links</h5>
      <ul is="vl-link-list">
      <li is="vl-link-list-item">
      <a is="vl-link"
         href="/provincie_jaar_analyse">
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

define("ohr-provincie", OhrProvincie);
