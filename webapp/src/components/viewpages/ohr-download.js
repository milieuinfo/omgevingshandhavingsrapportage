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
    data-vl-title="Download cijfers"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/download-cijfers-en-meer">
    </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
              {
                size: 8,
                template: this.__renderLinkList(),
              },
              {
                size:4,
                template: this.__renderSideNavigation(),
              }
          )}
        </div>
      </section>`;
  }

  __renderSideNavigation() {
    return html`
    <h5 is="vl-h5" data-vl-alt>Interessante links</h5>
    <ul is="vl-link-list">
      <li is="vl-link-list-item">
        <a is="vl-link"
           href="/">
           Laatst bekende cijfers per actor
        </a>
      </li>
      <li is="vl-link-list-item">
        <a is="vl-link" href="/">Analyseer de cijfers</a>
      </li>   
      <li is="vl-link-list-item">
        <a is="vl-link"
           href="/download-cijfers-en-meer">
          Downloads
        </a>
      </li>
      <li is="vl-link-list-item">
        <a target="_new_blank" is="vl-link"
           href=https://indicatoren.omgeving.vlaanderen.be/>
          Indicatoren website<span is="vl-icon" data-vl-before="" data-vl-link="" data-vl-icon="external"></span>
        </a>
      </li>
    </ul>`;
  }
  __renderLinkList() {
    return html`
      <h1 is="vl-h1">Download cijfers en meer</h1>
      <vl-accordion data-vl-icon="file-download"
      data-vl-default-open
          data-vl-toggle-text="Data van de rapportage">
        <p><a href="https://omgeving.vlaanderen.be/sites/default/files/2022-11/drive-download-20221117T123910Z-001.zip" download">Download de data van 2021</a></p>
        <p><a href="https://omgeving.vlaanderen.be/sites/default/files/2023-04/Data%20Omgevingshandhavingsrapportage%202022.zip" download">Download de data van 2022</a></p>
        <p><a href="#">Download de data van 2023</a></p>
      </vl-accordion>
      <vl-accordion data-vl-icon="file-image" data-vl-default-open
          data-vl-toggle-text="Downloadbare afbeeldingen van geconsolideerd beeld"
          data-vl-toggle-text="Geconsolideerd beeld">
        <p><a href="#">Download de weergave van 2021</a></p>
        <p><a href="#">Download de weergave van 2022</a></p>
        <p><a href="#">Download de weergave van 2023</a></p>
      </vl-accordion>`;
  }
}

customElements.define("ohr-download", OhrDownload);
