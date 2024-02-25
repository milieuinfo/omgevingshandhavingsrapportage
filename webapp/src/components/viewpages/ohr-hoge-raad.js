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
    <vl-functional-header
    data-vl-back="Terug"
    data-vl-back-link="/"
    data-vl-title="Hoge Raad"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/hoge-raad">
</vl-functional-header>
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
      <br>`;
  }

  __renderSideNavigation() {
    return html`    
    <a is="vl-link-button" href="/hoge-raad">Bekijk de cijfers voor dit thema</a>`;
  }
}

customElements.define("ohr-hogeraad", OhrHogeRaad);
