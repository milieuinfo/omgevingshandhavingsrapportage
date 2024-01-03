import {html, LitElement} from "../common/commons.js";
import {Qlik} from "@domg/qlik-lib";
import {vlElementsStyle} from "@domg-wc/elements";
import viz_gewest from "../config/milieuhandhaving.json" assert {type: "json"};

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/components/content-header";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/infoblock";

class OhrHogeRaadAnalyse extends LitElement {

  static get styles() {
    return [
      ...vlElementsStyle
    ]
  }

  static get properties() {
    return {
      connected: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.initialized = false;
    this.connected = false;
  }

  async connectedCallback() {
    this.connection = new Qlik("omgevingsloketrapport.omgeving.vlaanderen.be",
        "9b0d0715-eee5-41b0-bd90-addafee7e99e");
    await this.connection.init();
    this.connection.app.on('closed', () => this.closed = true);

    this.connected = true;

    this.tiles = [
      {
        title: "Gewestelijke toezichthouders en VTE",
        vis: viz_gewest,
        intro: ""
      },
      {
        title: "Klachten",
        vis: viz_gewest,
        intro: "Sjakamak2"
      }
    ]

    super.connectedCallback();
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
          ${this.__renderPage()}
        </div>
      </section>`;
  }

  __renderPage() {
    if (!this.connected) {
      return html`
        <vl-loader
            data-vl-text="Pagina is aan het laden"
        ></vl-loader>`;
    }
    return html`
      <h2 is="vl-h2">Cijfers milieuhandhaving TEST Hoge raad</h2>
      <div is="vl-grid">
        <div is="vl-column" data-vl-size="12">
          ${this.tiles.map(tile => html`
            <vl-qlik-infoblock title="${tile.title}"
                            icon="business-graph-bar"
                            .visuals="${tile.vis}"
                            .connection="${this.connection}">
              <span>${tile.intro}</span>
            </vl-qlik-infoblock>
          `)}
        </div>
      </div>`;
  }
}

customElements.define("ohr-hogeraadanalyse", OhrHogeRaadAnalyse);
