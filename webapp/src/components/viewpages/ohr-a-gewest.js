import "../qlik/visual";

import {define, html, LitElement, renderStack} from "../common/commons.js";
import {Qlik, STARDUST} from "@domg/qlik-lib";
import {vlElementsStyle} from "@domg-wc/elements";

import "@domg-wc/components/content-header";
import "@domg-wc/components/loader";
import "@domg-wc/components/infoblock";
import "@domg-wc/components/info-tile";

class OhrAGewest extends LitElement {

  static get styles() {
    return [
      vlElementsStyle
    ]
  }

  static get properties() {
    return {
      connected: {type: Boolean},
      title: {type: String}
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

    this.stardust = await STARDUST(this.connection.app);
    this.connected = true;
    this.title='TEST';
    setTimeout(() => this.title = "ietsanders", 1000);

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
          ${renderStack(...this.__renderPageInfo())}
        </div>
      </section>`;
  }

  __renderPageInfo() {
    if (!this.connected) {
      return {};
    }
    const elementsIdPairsGewest = [
      {element: document.querySelector('.MIL-KPI-Toezichthouder'), id: "vFyjB"},
      {element: document.querySelector('.MIL-KPI-VTE'), id: "GcHdjK"}

    ];
    elementsIdPairsGewest.forEach(async (item) => {
      const model = await this.connection.app.getObject(item.id);
      const modelLayout = await model.getLayout();
      const data = [];
      const columns = modelLayout.qHyperCube.qSize.qcx;
      const totalheight = modelLayout.qHyperCube.qSize.qcy;
      const pageheight = 5;
      const numberOfPages = 3;
      for (let i = 0; i < numberOfPages; i++) {
        const page = {
          qTop: pageheight * i,
          qLeft: 0,
          qWidth: columns,
          qHeight: pageheight,
        };
        const row = await model.getHyperCubeData("/qHyperCubeDef", [page]);
        data.push(...row[0].qMatrix);
        console.log(data);
      }
    });

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
      pageInfo = [{
        size: 12, template: this.__renderPage(),
      }];
    }
    return [...pageInfo];
  }

  __renderPage() {
    return html`
        <h2 is="vl-h2">Cijfers milieuhandhaving</h2>
        <div is="vl-grid">
          <div is="vl-column" data-vl-size="12" class="data-top-bot">
            <vl-infoblock data-vl-title="${this.title}"
                          data-vl-icon="business-graph-bar">
              <div is="vl-grid">
                <div is="vl-column" data-vl-size="6" class="data-top-bot">
                  <vl-info-tile data-vl-auto-open="true">
                    <span slot="title">Aantal toezichthouders</span>
                    <div slot="content">
                      <img class="icon"
                           src="assets/icons/PNG-natuurlijke persoon.png"/>
                      <qlik-visual id="vFyjB"
                                   type="kpi"
                                   height="50px"
                                   .stardust="${this.stardust}"
                                   @visual-changed="${this.__visualChanged}"></qlik-visual>
                    </div>
                  </vl-info-tile>
                </div>
              </div>
            </vl-infoblock>
          </div>
          <div is="vl-column" data-vl-size=6 class="data-top-bot">
            <vl-info-tile data-vl-auto-open=true>
              <span slot="title">Totaal VTE</span>
              <div slot="content">
                <img class="icon" src="assets/icons/PNG-trainer_B.png">
                <qlik-visual id="GcHdjK"
                             type="kpi"
                             height="50px"
                             .stardust="${this.stardust}"
                             @visual-changed="${this.__visualChanged}"></qlik-visual>
              </div>
            </vl-info-tile>
          </div>
        </div>
        <div is="vl-grid">
          <div is="vl-column" data-vl-size=12>
            <vl-info-tile data-vl-auto-open=true>
                                    <span slot="title">Classificatie VTE
                                    </span>
              <div slot="content">
              </div>
            </vl-info-tile>
          </div>
        </div>`;
  }
}

define("ohr-agewest", OhrAGewest);
