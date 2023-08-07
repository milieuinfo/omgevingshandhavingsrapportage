import {define, html, LitElement, renderStack} from "../common/commons.js";
import {Router} from "@vaadin/router";
import {Qlik} from "../qlik/qlik.js";

class OhrAGewest extends LitElement {

constructor() {
    super();
    this.initialized = false;
  }

async connectedCallback() {
    this.connection = new Qlik("omgevingsloketrapport.omgeving.vlaanderen.be","9b0d0715-eee5-41b0-bd90-addafee7e99e");
    await this.connection.init();
    this.connection.app.on('closed', () => this.closed = true);
    this.connected = true;
    super.connectedCallback();
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
    const elementsIdPairsGewest = [
        { element: document.querySelector('.MIL-KPI-Toezichthouder'), id: "vFyjB" },
        { element: document.querySelector('.MIL-KPI-VTE'), id: "GcHdjK" }
        
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
      pageInfo = [ {
        size: 12, template: this.__renderPage(),
      }];
    }
    return [...pageInfo];
  }

  __renderPage() {
    return html`
                    <section id="content-1-2" is="vl-region">
                        <h2 is="vl-h2">Cijfers milieuhandhaving</h2>
                        <div is="vl-grid">
                            <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                <vl-infoblock data-vl-title="Gewestelijke toezichthouders en VTE"
                                    data-vl-icon="business-graph-bar">
                                </vl-infoblock>
                            </div>
                        </div>

                        <div is="vl-grid">
                            <div is="vl-column" data-vl-size=6 class="data-top-bot">
                                <vl-info-tile data-vl-auto-open=true>
                                    <span slot="title">Aantal toezichthouders</span>
                                    <div slot="content">
                                        <img class="icon" src="assets/icons/PNG-natuurlijke persoon.png">
                                        <div class="MIL-KPI-Toezichthouder object"></div>
                                    </div>
                                </vl-info-tile>
                            </div>
                            <div is="vl-column" data-vl-size=6 class="data-top-bot">
                                <vl-info-tile data-vl-auto-open=true>
                                    <span slot="title">Totaal VTE</span>
                                    <div slot="content">
                                        <img class="icon" src="assets/icons/PNG-trainer_B.png">
                                        <div class="MIL-KPI-VTE object"></div>
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
                                        <div class="MIL-Barchart-VTE chartGewest chart"></div>
                                    </div>
                                </vl-info-tile>
                            </div>
                        </div>
                    </section>

                  
</section>`;
  }
}
define("ohr-agewest", OhrAGewest);
