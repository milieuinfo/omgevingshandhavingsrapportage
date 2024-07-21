import {html, LitElement, renderStack} from "../common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";

import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/elements/image";
import "@domg-wc/elements/link-list";
import "@domg-wc/elements/link";
import "@domg-wc/components/accordion";

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
        <a is="vl-link" href="/">Analyseer de cijfers</a>
      </li>  
    </ul>`;
  }
  __renderLinkList() {
    return html`
      <h3 is="vl-h3">Data van de rapportage</h3>
        <p><a href="/datafiles/omgevingshandhavingscijfers_2021.zip" download">Download de data van 2021</a></p>
        <p><a href="/datafiles/omgevingshandhavingscijfers_2022.zip" download">Download de data van 2022</a></p>
        <p><a href="/datafiles/omgevingshandhavingscijfers_2023.zip" download>Download de data van 2023</a></p>
        <br>
     
      <h3 is="vl-h3">Downloadbare afbeeldingen van geconsolideerd beeld</h3>
        <p><a href="/images/Geconsolideerd beeld 2022.zip" download>Download de weergave van 2022</a></p>
        <p><a href="/images/Geconsolideerd beeld 2023.zip" download>Download de weergave van 2023</a></p>
      </vl-accordion>`;
  }
}

customElements.define("ohr-download", OhrDownload);
