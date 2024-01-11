import {html, LitElement, renderStack} from "../common/commons.js";
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
    <vl-functional-header
    data-vl-back="Terug"
    data-vl-back-link="/"
    data-vl-title="Download de cijfers"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/download-cijfers-en-meer">
    </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
              {
                size: 8,
                template: this.__renderLinkList(),
              }
          )}
        </div>
      </section>`;
  }

  __renderLinkList() {
    return html`
      <h1 is="vl-h1">Download de cijfers en meer</h1>
      <vl-accordion data-vl-icon="file-download"
          data-vl-default-open
          data-vl-toggle-text="Data van de rapportage">
        <p><a href="#">Download de data van 2021</a></p>
        <p><a href="#">Download de data van 2022</a></p>
        <p><a href="#">Download de data van 2023</a></p>
      </vl-accordion>
      <vl-accordion data-vl-default-open data-vl-icon="file-image"
          data-vl-toggle-text="Downloadbare afbeeldingen van geconsolideerd beeld"
          data-vl-toggle-text="Geconsolideerd beeld">
        <p><a href="#">Download de weergave van 2021</a></p>
        <p><a href="#">Download de weergave van 2022</a></p>
        <p><a href="#">Download de weergave van 2023</a></p>
      </vl-accordion>`;
  }
}

customElements.define("ohr-download", OhrDownload);
