import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import { analysis } from "../templates/analysis";
import { embed } from '@nebula.js/stardust';
import { page } from "../templates/page";
export class StrafrechtelijktestView extends LitElement {
  constructor() {
    super();
   
  }
  firstUpdated() {
  const chart1 = 
  nebbie.render({ 
    element: document.querySelector('.Tabel1'),
    id: "XBDmJ",
  });
  }
  render() {
    return page({
      children: html`   
      <section is="vl-region">
      <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
          <div
            is="vl-column"
            data-vl-size="8"
            data-vl-medium-size="8"
            data-vl-small-size="8"
            data-vl-extra-small-size="12"
          >
            <div is="vl-side-navigation-reference">
              <section id="content-1" is="vl-region">
                <h2 is="vl-h2">Strafrechtelijk en bestuurlijk vervolgtraject</h2>
              </section>
    
              <section id="content-1-1" is="vl-region">
                <h3 is="vl-h3">Over de cijfers en procedure</h3>
                <vl-typography>
                <p>
                In deze datasets wordt het verdere verloop van twee handhavingsinstrumenten weergegeven:
              </p>
              <ul>
              <li>Het proces-verbaal dat werd opgemaakt bij de vaststelling van een misdrijf en dat wordt overgemaakt aan de parketten bij de rechtebanken van eerste aanleg met het oog op een strafrechtelijke afhandeling</li>
              <li>
              het verslag van vastelling dat werd opgemaakt bij de vastelling van een inbreuk en dat wordt overgemaakt aan de gewestelijke beboetingsentiteit met het oog op een bestuurlijke afhandeling.
              </li>
            </ul>
              <p>Rudimentaire schematische voorstelling van deze trajecten:</p></vl-typography>
              <br>
              
              </section>
    
             
              <section id="content-2" is="vl-region">
                <h3 is="vl-h3">Bekijk de cijfers</h3>
                <div class="toolbar"></div>
                <vl-infoblock data-vl-icon="data-download">
                <h2 slot="title">Openbaar ministerie</h2>
                Hieronder kan u de bestand downloaden in PDF formaat van de duiding van strafrechtelijk 
                <vl-document data-vl-href="documents/Duiding bij de statistische bijdrage van het Openbaar Ministerie.pdf">
                <span slot="type">PDF</span>
                <span slot="title">Duiding bij de statische bijdrage</span>
                <span slot="metadata">PDF - 580 kB</span>
              </vl-document>
              </vl-infoblock>
               
                <div is="vl-grid">
  <div is="vl-column" data-vl-size="8" data-vl-medium-size="6">
  <p>Instroom - herkomst</p>
  <div class="Tabel1 chart"></div></div>
  
  <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
  <p>Instroom - herkomst</p>
  <div class="Tabel2 chart"></div></div>
  <div is="vl-column" data-vl-size="12" data-vl-medium-size="6">
  <p>Instroom - herkomst</p>
  <div class="TabelVooruitgangs chart"></div></div>
  <div is="vl-column" data-vl-size="12" data-vl-medium-size="6">
  <p>Instroom - herkomst</p>
  <div class="TabelSeponering chart"></div></div>
 


                </div>
              </section>
    
              <section id="content-3" is="vl-region">
              <vl-infoblock data-vl-icon="data-download">
              <h2 slot="title">Gewestelijke beboetingsentiteit en bestuurlijke geldboeten</h2>
              <p>Navigeer naar de externe pagina's</p>
              <ul
              is="vl-link-list">
              <li is="vl-link-list-item">
                <a is="vl-link" href="https://navigator.emis.vito.be/mijn-navigator?woId=39023"> Ga naar gewestelijke beboetingsentiteit - bestuurlijke geldboeten</a>
              </li>
            </ul>
            </vl-infoblock>
              </section>
    
              <section id="content-3-1" is="vl-region">
                <h3 is="vl-h3">Instroom</h3>
                <div class="GewestelijkBBInstroom chart"></div>
              </section>
    
              <section id="content-3-2" is="vl-region">
                <h3 is="vl-h3">Behandeling - algemeen</h3>
                <div class="GewestelijkBBBehandeling chart"></div>
              </section>
    
              <section id="content-3-3" is="vl-region">
                <h3 is="vl-h3">Behandeling - Thematisch</h3>
             
              </section>
    
              <section id="content-4" is="vl-region">
                <h3 is="vl-h3">Handhavingscollege - beroepen tav bestuurlijke geldboeten</h3>
               
              </section>
    
              <section is="vl-region">
              
              </section>
            </div>
          </div>
          <div
            is="vl-column"
            data-vl-size="4"
            data-vl-medium-size="4"
            data-vl-small-size="4"
            data-vl-extra-small-size="0"
          >
            <nav is="vl-side-navigation" aria-label="inhoudsopgave">
              <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
              <div is="vl-side-navigation-content">
                <ul is="vl-side-navigation-group">
                  <li is="vl-side-navigation-item" data-vl-parent="content-1">
                    <a
                      is="vl-side-navigation-toggle"
                      href="#content-1"
                      data-vl-child="content-1"
                    >
                      Over de cijfers en procedures
                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                    </a>
                  </li>
                  <li is="vl-side-navigation-item" data-vl-parent="content-2">
                    <a
                      is="vl-side-navigation-toggle"
                      href="#content-2"
                      data-vl-child="content-2"
                    >
                      Bekijk de cijfers
                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                    </a>
                  </li>
                  <li is="vl-side-navigation-item" data-vl-parent="content-3">
                    <a
                      is="vl-side-navigation-toggle"
                      href="#content-3"
                      data-vl-child="content-3"
                    >
                      Beboetingsentiteit en bestuurlijke geldboeten
                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                    </a>
                    <ul>
                      <li is="vl-side-navigation-item">
                        <div>
                          <a href="#content-3-1" data-vl-parent="content-3"
                            >content 3 - 1</a
                          >
                        </div>
                      </li>
                      <li is="vl-side-navigation-item">
                        <div>
                          <a href="#content-3-2" data-vl-parent="content-3"
                            >content 3 - 2</a
                          >
                        </div>
                      </li>
                      <li is="vl-side-navigation-item">
                        <div>
                          <a href="#content-3-3" data-vl-parent="content-3"
                            >content 3 - 3</a
                          >
                        </div>
                      </li>
                      <li is="vl-side-navigation-item">
                        <div>
                          <a href="#content-3-4" data-vl-parent="content-3"
                            >content 3 - 4</a
                          >
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li is="vl-side-navigation-item" data-vl-parent="content-4">
                  <a
                    is="vl-side-navigation-toggle"
                    href="#content-4"
                    data-vl-child="content-4"
                  >
                    Handhavingscollege
                    <i class="vl-vi vl-vi-arrow-right-fat"></i>
                  </a>
                </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
      `,
      title: "StrafrechtelijktestView",
    });
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define("strafrechtelijktest-view", StrafrechtelijktestView);
