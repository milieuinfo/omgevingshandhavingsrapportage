import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import { analysis } from "../templates/analysis";
import { embed, useEffect } from "@nebula.js/stardust";
import { render } from 'lit';

export class StrafrechtelijkAnalyseAnalyseView extends LitElement {
  render() {
    return analysis({
      children: html
      `<vl-functional-header data-vl-back="Terug" data-vl-back-link="/public/strafrechtelijk"
      data-vl-title="Cijfers voor het strafrechtelijk en bestuurlijk vervolgtraject"
      data-vl-sub-title="Een analyse van het strafrechtelijk en bestuurlijk vervolgtraject"
      data-vl-link="Strafrechtelijk en bestuurlijk vervolgtraject">
  </vl-functional-header>
  <section is="vl-region">
      <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
          <div
            is="vl-column"
            data-vl-size="8"
            data-vl-medium-size="8"
            data-vl-small-size="8"
            data-vl-extra-small-size="12">
            <div is="vl-side-navigation-reference">
              <section id="content-1" is="vl-region">
                <h2 is="vl-h2">Een wegwijzer doorheen de cijfers en grafieken</h2>
                <p>
                    Deze pagina toont een overzichtelijk beeld van he strafrechtelijke en bestuurlijke vervolgtraject van de instrumenten
                    proces-verbaal en verslag van vaststelling. De grafieken zijn interactief en de cijfers zullen wijzigen naargelang de gekozen filtering.
                    De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk.
                    
                </p>
              </section>
              <section id="content-1-1" is="vl-region">
              <h3 is="vl-h3">Bekijk de cijfers</h3>
              <hr>
              <vl-infoblock data-vl-icon="business-graph-bar">
              <h2 slot="title">Openbaar ministerie</h2>
              Hieronder kan een bestand worden gedownload met duiding bij de statistische bijdrage van het Openbaar Ministerie:
              <span slot="type">URL</span>
              <p>
              <span slot="title"><a href="https://drive.google.com/drive/folders/1WTo0_wMdlJxqIuW4lSV8-fK8DuHRI3_w?usp=sharing" target="_blank">Duiding bij de statistische bijdrage</a></span></p>
            </vl-infoblock>
            <hr>
            <div is="vl-grid" class="data-top-bot">
            <h5 is="vl-h5">
            Instroom - herkomst</h5>
            <div class="Tabel1 chart"></div></div>
            <div class="toolbar"></div>
            <div is="vl-grid">
            <h5 is="vl-h5">Instroom - thematisch</h5></div>
            <div is="vl-grid">
            <vl-typography>
            <p><span class="ondertitel">Selecteer een thema voor gedetailleerdere informatie</span></p></vl-typography>
            <div class="DrillBar chart"></div>
            </div>

            <div class="Tabelseponering chartTabel"></div>
            </div>
            <div is="vl-grid" class="data-top-bot">
            <h5 is="vl-h5">
            Vooruitgangsstaat
            </h5>
            <div class="Tabelvooruitgangstaat chartTabel"></div>
            </div>

            <div is="vl-grid" class="data-top-bot">
            <vl-typography>
            <h5>Motieven tot seponering </h5>
            <p><span class="ondertitel">Selecteer een thema voor gedetailleerdere informatie</span></p></vl-typography>
         
              </section>
              <section id="content-1-2" is="vl-region">
              <hr>
              <vl-infoblock data-vl-icon="business-graph-bar">
              <h2 slot="title">Gewestelijke beboetingsentiteit</h2>
              Voor informatie over de gewestelijke beboetingsentiteit kan u navigeren naar
              <vl-document>
              <span slot="type">URL</span>
              <span slot="title"><a href="https://navigator.emis.vito.be/mijn-navigator?woId=39023">Naar regelgeving</a></span>
            </vl-document>
            </vl-infoblock>
            <hr>
            </vl-infoblock>
            <div is="vl-grid">
            <h5
            is="vl-h5">Instroom</h5>
            <div class="GewestBB chart"></div>
            </div>
            <h5
            is="vl-h5">Behandeling</h5>
            <div is="vl-grid">
            <div class="GewestBH chartTabelsm"></div></div>
            <div is="vl-grid">
            <vl-typography>
            <h5 is="vl-h5">Behandeling - thematisch</h5>
            <h6>Milieu</h6></vl-typography>
            <div class="milieubehandelingthem chartTabel"></div></div>
            <div is="vl-grid">
            <vl-typography>
            <h6>Ruimtelijke ordening</h6></vl-typography>
            <div class="RObehandelingthem chartTabelsm"></div></div>
              </section>
              <section id="content-1-3" is="vl-region">
              <hr>
              <vl-infoblock data-vl-icon="business-graph-bar">
              <h2 slot="title">Handhavingscollege  – beroepen tav bestuurlijke geldboeten</h2>
              Voor informatie over het Handhavingscollege kan u navigeren naar
              <vl-document>
              <span slot="type">URL</span>
              <span slot="title"><a href="https://navigator.emis.vito.be/mijn-navigator?woId=22487" target="_blank">Naar regelgeving</a></span>
            </vl-document>
            </vl-infoblock>
            <hr>
            <div is="vl-grid">
            <h5
            is="vl-h5">Instroom</h5>
            <div class="HHCTabel1 object"></div></div>
            <div is="vl-grid">
            <h5
            is="vl-h5">Behandeling</h5>
            <div class="HHCTabel2 chartTabelmd"></div></div>
              </section>
              <section is="vl-region" id="content-4">
              <h3 is="vl-h3">Bekijk cijfers voor andere thema's</h3>
              <vl-alert data-vl-title="Cijfers andere handhavingsactoren"
                  data-vl-type="info">
                  <p>
                      <a is="vl-link-button" href="/public/gewestelijk">per gewest</a>
                      <a is="vl-link-button" href="/public/provinciaal">per provincie</a>
                      <a is="vl-link-button" href="/public/gemeenten">per gemeenten</a>
                      <a is="vl-link-button" href="/public/hogeraad">Hoge raad</a>
                  </p>
              </vl-alert>
              <vl-alert             
              data-vl-title="Download de data"
              data-vl-type="info">
              <p><a href="https://omgeving.vlaanderen.be/sites/default/files/2022-11/drive-download-20221117T123910Z-001.zip" download>Klik hier om de data te downloaden</a></p>
            </vl-alert>
          </section>
            </div>
          </div>
          <div
            is="vl-column"
            data-vl-size="4"
            data-vl-medium-size="4"
            data-vl-small-size="4"
            data-vl-extra-small-size="0">
            <nav is="vl-side-navigation" aria-label="inhoudsopgave">
              <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
              <div is="vl-side-navigation-content">
                <ul is="vl-side-navigation-group">
                  <li is="vl-side-navigation-item" data-vl-parent="content-1">
                    <a
                      is="vl-side-navigation-toggle"
                      href="#content-1"
                      data-vl-child="content-1">
                      Strafrechtelijk en bestuurlijk vervolgtraject
                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                    </a>
                    <ul>
                      <li is="vl-side-navigation-item">
                        <div>
                          <a href="#content-1-1" data-vl-parent="content-1"
                            >Openbaar ministerie</a>
                        </div>
                      </li>
                      <li is="vl-side-navigation-item">
                        <div>
                          <a href="#content-1-2" data-vl-parent="content-1"
                            >Gewestelijke beboetingsentiteit</a>
                        </div>
                      </li>
                      <li is="vl-side-navigation-item">
                        <div>
                          <a href="#content-1-3" data-vl-parent="content-1"
                            >Handhavingscollege</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>`,
      title: "StrafrechtelijkAnalyseAnalyseView",
    });
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define("strafrechtelijkanalyseanalyse-view", StrafrechtelijkAnalyseAnalyseView);
