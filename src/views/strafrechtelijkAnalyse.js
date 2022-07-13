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
      `
      <vl-functional-header data-vl-back="Terug" data-vl-back-link="/public/strafrechtelijk"
      data-vl-title="Cijfers voor strafrechtelijk en bestuurlijk vervolgtraject"
      data-vl-sub-title="Een analyse van strafrechtelijk en bestuurlijk vervolgtraject"
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
            data-vl-extra-small-size="12"
          >
            <div is="vl-side-navigation-reference">
              <section id="content-1" is="vl-region">
                <h2 is="vl-h2">Een wegwijzer doorheen de cijfers en grafieken</h2>
                <p>
                    Deze pagina toont een inzichtelijke beeld over de cijfers van hoge raad van
                    handhavingsuitvoeringen.
                    De grafieken zijn volledig interactief en de cijfers zullen worden gewijzigd naargelang de
                    gekozen filtering.
                    Uw aangeduide filtering kan op elk moment verwijderd worden met de selectiebalk hieronder.
                </p>
              </section>
    
              <section id="content-1-1" is="vl-region">
              <h3 is="vl-h3">Bekijk de cijfers</h3>
             
              <div class="toolbar"></div>
              <vl-infoblock data-vl-icon="business-graph-bar">
              <h2 slot="title">Openbaar ministerie</h2>
              Hieronder kan u de bestand downloaden in PDF formaat van de duiding van strafrechtelijk 
              <vl-document data-vl-href="documents/Duiding bij de statistische bijdrage van het Openbaar Ministerie.pdf">
              <span slot="type">PDF</span>
              <span slot="title">Duiding bij de statische bijdrage</span>
              <span slot="metadata">PDF - 580 kB</span>
            </vl-document>
            </vl-infoblock>
            <div is="vl-grid">
           
            <p>Instroom - herkomst</p>
            <div class="Tabel1 chart"></div>
            </div>

            <div is="vl-grid">
            <vl-infoblock data-vl-icon="business-graph-bar">
            <h2 slot="title">Instroom -thematisch</h2>
            Hieronder kan u de bestand downloaden in PDF formaat van de duiding van strafrechtelijk 
            <vl-document data-vl-href="">
            <span slot="type">CSV</span>
            <span slot="title">Download data van onderstaande visualisatie</span>
            <span slot="metadata">CSV - 580 kB</span>
          </vl-document>
          </vl-infoblock>
            <div class="DrillBar chart"></div>
          
            </div>
            <div is="vl-grid">
            <vl-infoblock data-vl-icon="business-graph-bar">
            <h2 slot="title">Vooruitgangsstaat</h2>
            Hieronder kan u de bestand downloaden in PDF formaat van de duiding van strafrechtelijk 
            <vl-document data-vl-href="">
            <span slot="type">CSV</span>
            <span slot="title">Download data van onderstaande visualisatie</span>
            <span slot="metadata">CSV - 580 kB</span>
          </vl-document>
          </vl-infoblock>
            <div class="Tabelvooruitgangstaat chartTabel"></div>
            </div>

            <div is="vl-grid">
            <vl-infoblock data-vl-icon="business-graph-bar">
            <h2 slot="title">Motieven tot seponering</h2>
            Hieronder kan u de bestand downloaden in PDF formaat van de duiding van strafrechtelijk 
            <vl-document data-vl-href="">
            <span slot="type">CSV</span>
            <span slot="title">Download data van onderstaande visualisatie</span>
            <span slot="metadata">CSV - 580 kB</span>
          </vl-document>
          </vl-infoblock>

            </div>
              </section>
    
              <section id="content-1-2" is="vl-region">
              <vl-infoblock data-vl-icon="business-graph-bar">
              <h2 slot="title">Gewestelijke beboetingsentiteit - Instroom</h2>
              Hieronder kan u navigeren naar de regelgeving van dit thema.
              <vl-document>
              <span slot="type">URL</span>
              <span slot="title"><a href="https://navigator.emis.vito.be/mijn-navigator?woId=39023">Naar regelgeving</a></span>
             
            </vl-document>
            </vl-infoblock>
            <div is="vl-grid">
            <div class="GewestBB chart"></div></div>

            <vl-infoblock data-vl-icon="business-graph-bar">
              <h2 slot="title">Gewestelijke beboetingsentiteit - Behandeling</h2>
              Hieronder kan u navigeren naar de regelgeving van dit thema.
              <vl-document>
              <span slot="type">URL</span>
              <span slot="title"><a href="https://navigator.emis.vito.be/mijn-navigator?woId=39023">Naar regelgeving</a></span>
             
            </vl-document>
            </vl-infoblock>
            <div is="vl-grid">

            <div class="GewestBH chart"></div></div>
              </section>
    
              <section id="content-1-3" is="vl-region">
              <vl-infoblock data-vl-icon="business-graph-bar">
              <h2 slot="title">Handhavingscollege  – beroepen tav bestuurlijke geldboeten</h2>
              Hieronder kan u navigeren naar de regelgeving van dit thema.
              <vl-document>
              <span slot="type">URL</span>
              <span slot="title"><a href="https://navigator.emis.vito.be/mijn-navigator?woId=22487" target="_blank">Naar regelgeving</a></span>
             
            </vl-document>
            </vl-infoblock>
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
                      Strafrechtelijk en bestuurlijk vervolgtraject
                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                    </a>
                    <ul>
                      <li is="vl-side-navigation-item">
                        <div>
                          <a href="#content-1-1" data-vl-parent="content-1"
                            >Openbaar ministerie</a
                          >
                        </div>
                      </li>
                      <li is="vl-side-navigation-item">
                        <div>
                          <a href="#content-1-2" data-vl-parent="content-1"
                            >Gewestelijke beboetingsentiteiten</a
                          >
                        </div>
                      </li>
                      <li is="vl-side-navigation-item">
                        <div>
                          <a href="#content-1-3" data-vl-parent="content-1"
                            >Handhavingscollege</a
                          >
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
    </section>


      `,
      title: "StrafrechtelijkAnalyseAnalyseView",
    });
  }
  
  createRenderRoot() {
    return this;
  }
}
customElements.define("strafrechtelijkanalyseanalyse-view", StrafrechtelijkAnalyseAnalyseView);
