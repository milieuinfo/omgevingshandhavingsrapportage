import {define, html, LitElement, renderStack} from "../common/commons.js";

class OhrDownload extends LitElement {

constructor() {
    super();
    this.initialized = false;
  }
  
  createRenderRoot() {
    return this;
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
        ${renderStack(...this.__renderPageInfo())}
        </div>
      </section>`;
  }
  __renderPageInfo() {
    this.initialized = true;
    let pageInfo = []
    if (!this.initialized) {
      pageInfo = [{
        size: 12, template: html`
          <vl-loader
              data-vl-text="Pagina is aan het laden"
          ></vl-loader>`,
      }];
    } else {
      pageInfo = [ {
        size: 12, template: this.__renderPage(),
      }];
    }
    return [...pageInfo];
  }

  __renderPage() {
    return html`
    <section id="content-1-7" is="vl-region">
    <div is="vl-grid">
        <div is="vl-column" data-vl-size=12>
            <vl-infoblock data-vl-title="Downloadpagina" data-vl-icon="business-graph-bar">
            </vl-infoblock>
        </div>
    <div is="vl-column" data-vl-size=12 class="data-top-bot">
    <vl-accordion
    data-vl-toggle-text="Data van de rapportage"
    data-vl-open-toggle-text="Data van de rapportage"
    data-vl-close-toggle-text="Data van de rapportage"
  >
  
    <p><a href="#">Download de data van 2021</a></p>
    <p><a href="#">Download de data van 2022</a></p>
    <p><a href="#">Download de data van 2023</a></p>
   
  </vl-accordion>
  </div>
  </div>

  <div is="vl-grid">
  <div is="vl-column" data-vl-size=12 class="data-top-bot">
    <vl-accordion
    data-vl-toggle-text="Downloadbare afbeeldingen van geconsolideerd beeld"
    data-vl-open-toggle-text="Geconsolideerd beeld"
    data-vl-close-toggle-text="Geconsolideerd beeld"
  >
  
    <p><a href="#">Download de weergave van 2021</a></p>
    <p><a href="#">Download de weergave van 2022</a></p>
    <p><a href="#">Download de weergave van 2023</a></p>
   
  </vl-accordion>
  </div>
  </div>

  `;
  }
}
define("ohr-download", OhrDownload);
