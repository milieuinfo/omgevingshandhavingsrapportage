import {define, html, LitElement, renderStack} from "../common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";

import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/elements/image";
import "@domg-wc/elements/link-list";
import "@domg-wc/elements/link";
import "@domg-wc/components/accordion";
import "@domg-wc/components/content-header";
class OhrDownload extends LitElement {

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
                template: this.__renderIntroduction(),
              },
              {
                size: 4,
                template: this.__renderSideNavigation(),
              }
          )}
        </div>
      </section>`;
  }

  __renderIntroduction() {
    return html`
      <h1 is="vl-h1">Nuttige downloads</h1>
      <vl-accordion
          data-vl-toggle-text="Data van de rapportage"
          data-vl-open-toggle-text="Data van de rapportage"
          data-vl-close-toggle-text="Data van de rapportage"
      >

        <p><a href="#">Download de data van 2021</a></p>
        <p><a href="#">Download de data van 2022</a></p>
        <p><a href="#">Download de data van 2023</a></p>

      </vl-accordion>
      <vl-accordion
          data-vl-toggle-text="Downloadbare afbeeldingen van geconsolideerd beeld"
          data-vl-open-toggle-text="Geconsolideerd beeld"
          data-vl-close-toggle-text="Geconsolideerd beeld"
      >

        <p><a href="#">Download de weergave van 2021</a></p>
        <p><a href="#">Download de weergave van 2022</a></p>
        <p><a href="#">Download de weergave van 2023</a></p>

      </vl-accordion>
    `;
  }

  __renderSideNavigation() {
    return html`
      <h5 is="vl-h5" data-vl-alt>Interessante links</h5>
      <ul is="vl-link-list">
        <li is="vl-link-list-item">
          <a is="vl-link"
             href="/">
            Terug naar beginpagina
          </a>
        </li>
      </ul>`;
  }
}

define("ohr-download", OhrDownload);
