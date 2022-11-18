import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import { analysis } from "../templates/analysis";
import { embed, useEffect } from "@nebula.js/stardust";
import { render } from 'lit';


export class HogeraadAnalyseView extends LitElement {
  render() {
    return analysis({
      children: html
      `<vl-functional-header data-vl-back="Terug" data-vl-back-link="/public/hogeraad"
      data-vl-title="Cijfers voor hoge raad van handhavingsactoren"
      data-vl-sub-title="Een analyse van hoge raad van handhavingsactoren"
      data-vl-link="Hoge raad van handhavingsactoren">
  </vl-functional-header>
  <section is="vl-region">
      <div is="vl-layout">
          <div is="vl-grid" data-vl-is-stacked>
              <div is="vl-column" data-vl-size="8" data-vl-medium-size="8" data-vl-small-size="8"
                  data-vl-extra-small-size="12">
                  <div is="vl-side-navigation-reference">
                      <section id="content-1" is="vl-region">
                          <h2 is="vl-h2">Een wegwijzer doorheen de cijfers en grafieken</h2>
                          <p>
                              Deze pagina toont een overzichtelijk beeld van de activiteiten van de Hoge Raad voor 
                              de Handhavingsuitvoering in het voorafgaande jaar.
                          </p>
                      </section>
  
                      <section id="content-1-1" is="vl-region">
                          <div is="vl-grid" id="content-1-2">
                              <vl-infoblock data-vl-icon="business-graph-bar" id="content-1-2">
                                  <h2 slot="title">Instroom</h2>
  
                              </vl-infoblock>
                              <div class="HRCInstroom chartTabel"></div>
                          </div>
                      </section>
  
                      <section id="content-1-3" is="vl-region">
                      <div class="toolbar"></div>
                          <div is="vl-grid">
                          
                              <vl-infoblock data-vl-icon="business-graph-bar">
                                  <h2 slot="title">Behandeling - bindende adviezen</h2>
                              </vl-infoblock>
                              <div class="HRCBindendeadviesChart chart"></div>
                          </div>
                      </section>
  
                      <section id="content-1-4" is="vl-region">
                          <div is="vl-grid">
                              <vl-infoblock data-vl-icon="business-graph-bar">
                                  <h2 slot="title">Adviezen</h2>
                              </vl-infoblock>
                              <div class="HRCAdviezen chartTabelsm"></div>
                          </div>
                      </section>
  
                      <section id="content-1-5" is="vl-region">
                          <div is="vl-grid">
                              <vl-infoblock data-vl-icon="business-graph-bar">
                                  <h2 slot="title">Bemiddelingsopdrachten</h2>
                              </vl-infoblock>
                              <div class="HRCBemiddeling chartTabelsm"></div>
                          </div>
                      </section>
  
                      <section is="vl-region" id="content-4">
                      <vl-typography>
                        <h4>Cijfers andere handhavingsactoren</h4></vl-typography>
                          <vl-alert>
                              <p>
                                  <a is="vl-link-button" href="/public/gewestelijk">Per gewest</a>
                                  <a is="vl-link-button" href="/public/provinciaal">Per provincie</a>
                                  <a is="vl-link-button" href="/public/gemeenten">Per gemeenten</a>
                              </p>
                              <br>
                              <p>
                                  <a is="vl-link-button" href="/public/strafrechtelijk">Strafrechtelijk en bestuurlijk
                                      vervolgtraject</a>
                              </p>
                          </vl-alert>
                          <vl-alert
                          data-vl-title="Download de data">
                          <p><a href="https://omgeving.vlaanderen.be/sites/default/files/2022-11/drive-download-20221117T123910Z-001.zip" download>Klik hier om de data te downloaden</a></p>
                        </vl-alert>
                      </section>
                  </div>
              </div>
              <div is="vl-column" data-vl-size="4" data-vl-medium-size="4" data-vl-small-size="4"
                  data-vl-extra-small-size="0">
                  <nav is="vl-side-navigation" aria-label="inhoudsopgave">
                      <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
                      <div is="vl-side-navigation-content">
                          <ul is="vl-side-navigation-group">
                              <li is="vl-side-navigation-item" data-vl-parent="content-1">
                                  <a is="vl-side-navigation-toggle" href="#content-1" data-vl-child="content-1">
                                      Hoge raad voor handhavingsuitvoering
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                                  <ul>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-2" data-vl-parent="content-1">Instroom</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-3" data-vl-parent="content-1">Behandeling - bindende
                                                  adviezen</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-4" data-vl-parent="content-1">Adviezen</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-5" data-vl-parent="content-1">Bemiddelingsopdrachten</a>
                                          </div>
                                      </li>
                                  </ul>
                              </li>
                              <li is="vl-side-navigation-item" data-vl-parent="content-4">
                                  <a is="vl-side-navigation-toggle" href="#content-4" data-vl-child="content-4">
                                      Andere thema's
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>
      </div>
  </section>`,
      title: "HogeraadAnalyseView",
    });
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define("hogeraadanalyse-view", HogeraadAnalyseView);
