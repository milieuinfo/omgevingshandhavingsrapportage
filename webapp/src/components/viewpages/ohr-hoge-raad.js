import {html, LitElement, renderStack} from "../common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/text";
import "@domg-wc/elements/title";
import "@domg-wc/elements/doormat";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";
import "@domg-wc/components/content-header";

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
                  Hoge Raad
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
          Handhavingsuitvoering in het voorafgaande jaar.</p></div>
      <br>

      <div is="vl-grid">
        <p is="vl-text">
          Voor meer informatie over de Hoge raad voor de Handhavingsuitvoering:
          <br/>
          <a is="vl-link"
             href="https://www.hogeraadvoordehandhavingsuitvoering.be/over-de-hoge-raad-voor-de-handhavingsuitvoering"
             target="_blank"
             data-vl-block=true>Hoge raad voor de Handhavingsuitvoering</a></p>
      </div>
      <br>

      <div is="vl-grid">
        <div is="vl-column">
          <div style="max-width: 400px" id="content-2" class="data-top-bot">
            <a is="vl-doormat" href="/hoge-raad-analyse">
              <h2 is="vl-doormat-title">Analyseer de cijfers</h2>
              <div is="vl-doormat-text">
                Bekijk de cijfers van de Hoge Raad voor de Handhavingsuitvoering
              </div>
            </a>
          </div>
        </div>
      </div>`;
  }

  __renderSideNavigation() {
    return html`    
      <h5 is="vl-h5" data-vl-alt>Interresante links</h5>
      <ul is="vl-link-list">
      <li is="vl-link-list-item">
      <a is="vl-link"
         href="/hoge-raad-analayse">
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

customElements.define("ohr-hogeraad", OhrHogeRaad);
