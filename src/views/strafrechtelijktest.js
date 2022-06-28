import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import { analysis } from "../templates/analysis";
import { embed } from '@nebula.js/stardust';
import { page } from "../templates/page";
export class StrafrechtelijktestView extends LitElement {
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
              <svg xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink" 
              version="1.1" viewBox="-0.5 -0.5 831 401">
              <defs/>
              <g>
              <path d="M 120 40 L 393.63 40" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke"/>
              <path d="M 398.88 40 L 391.88 43.5 L 393.63 40 L 391.88 36.5 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/>
              <rect x="0" y="10" width="120" height="60" fill="#d86623" stroke="none" pointer-events="all"/>
              <g transform="translate(-0.5 -0.5)"><switch>
              <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
              <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 40px; margin-left: 1px;">
              <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><font color="#ffffff">Proces-verbaal</font></div></div></div></foreignObject><text x="60" y="44" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">Proces-verbaal</text></switch></g><rect x="400" y="0" width="160" height="80" fill="#6e8c2b" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 158px; height: 1px; padding-top: 40px; margin-left: 401px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><font color="#ffffff">Parketten bij de rechtbanken van eerste aanleg</font></div></div></div></foreignObject><text x="480" y="44" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">Parketten bij de rechtbank...</text></switch></g><path d="M 120 200 L 393.63 200" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 398.88 200 L 391.88 203.5 L 393.63 200 L 391.88 196.5 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/><rect x="0" y="170" width="120" height="60" fill="#d86623" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 200px; margin-left: 1px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><font color="#ffffff">Verslag van vastelling</font></div></div></div></foreignObject><text x="60" y="204" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">Verslag van vastelli...</text></switch></g><rect x="400" y="160" width="160" height="80" fill="#6e8c2b" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 158px; height: 1px; padding-top: 200px; margin-left: 401px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><font color="#ffffff">Gewestelijke beboetingsentiteit (GBE)</font></div></div></div></foreignObject><text x="480" y="204" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">Gewestelijke beboetingsent...</text></switch></g><rect x="400" y="320" width="160" height="80" fill="#6e8c2b" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 158px; height: 1px; padding-top: 360px; margin-left: 401px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><font color="#ffffff">Handhavingscollege (HHC)</font></div></div></div></foreignObject><text x="480" y="364" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">Handhavingscollege (HHC)</text></switch></g><rect x="125" y="10" width="260" height="30" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 25px; margin-left: 255px;"><div data-drawio-colors="color: #FFFFFF; " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: nowrap;"><font color="#000000">door handhaver overgemaakt aan het parket <br />met oog op strafrechtelijke afhandeling<br /></font></div></div></div></foreignObject><text x="255" y="29" fill="#FFFFFF" font-family="Helvetica" font-size="12px" text-anchor="middle">door handhaver overgemaakt aan het parket...</text></switch></g><rect x="135" y="170" width="240" height="30" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 185px; margin-left: 255px;"><div data-drawio-colors="color: #000000; " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: nowrap;">door handhaver overgemaakt aan de GBE<br />met oog op bestuurlijke afhandeling</div></div></div></foreignObject><text x="255" y="189" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">door handhaver overgemaakt aan de GBE...</text></switch></g><path d="M 560 80 L 560 153.63" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 560 158.88 L 556.5 151.88 L 560 153.63 L 563.5 151.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/><rect x="560" y="80" width="250" height="80" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 120px; margin-left: 685px;"><div data-drawio-colors="color: #FFFFFF; " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: nowrap;"><font color="#000000">Het parket kan (al het dit niet zelf wenst te <br />behandelen) een proces-verbaal overmaken<br />aan GBE met het oog op het opleggen van<br />een alternatieve bestuurlijke geldboete<br /><br /></font></div></div></div></foreignObject><text x="685" y="124" fill="#FFFFFF" font-family="Helvetica" font-size="12px" text-anchor="middle">Het parket kan (al het dit niet zelf wens...</text></switch></g><rect x="560" y="255" width="270" height="50" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 280px; margin-left: 695px;"><div data-drawio-colors="color: #FFFFFF; " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: nowrap;"><font color="#000000">Als de GBE een alternatieve of exclusieve <br />bestuurlijke geldboete heeft opgelegd, kan hier <br />tegen in beroep worden gegaan bij het HHC<br /></font></div></div></div></foreignObject><text x="695" y="284" fill="#FFFFFF" font-family="Helvetica" font-size="12px" text-anchor="middle">Als de GBE een alternatieve of exclusieve...</text></switch></g><path d="M 559 240 L 559 313.63" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 559 318.88 L 555.5 311.88 L 559 313.63 L 562.5 311.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text></a></switch></svg>
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
  
  <div is="vl-column" data-vl-size="12" data-vl-medium-size="6">
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
