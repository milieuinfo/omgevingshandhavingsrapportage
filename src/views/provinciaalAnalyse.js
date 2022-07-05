import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import { analysis } from "../templates/analysis";
import { embed } from '@nebula.js/stardust';
export class ProvinciaalAnalyseView extends LitElement {
  render() {
    return analysis({
      children: html`
      <vl-functional-header data-vl-back="Terug" data-vl-back-link="/Provinciaal"
      data-vl-title="Cijfers van provinciale handhavingsactoren"
      data-vl-sub-title="Een analyse van de provinciale handhavingsactoren" data-vl-link="Provinciale handhavingsactoren">
  </vl-functional-header>
  
  
  <section is="vl-region">
      <div is="vl-layout">
          <div is="vl-grid" data-vl-is-stacked>
              <div is="vl-column" data-vl-size="8" data-vl-medium-size="8" data-vl-small-size="8"
                  data-vl-extra-small-size="12">
                  <div is="vl-side-navigation-reference">
                      <section id="content-1" is="vl-region">
                          <h2 is="vl-h2">Cijfers voor provinciale handhavingsactoren</h2>
                      </section>
  
                      <section id="content-1-1" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12>
                                  <div class="toolbar"></div>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <div slot="content">
                                          <div class="listboxProv"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=8>
                                  <vl-infoblock data-vl-title="Selectiebalk" data-vl-icon="cursor-finger-up">
                                      Hierboven staan uw actieve selecties op de pagina en zullen de cijfers aangepast
                                      worden op basis van de geselecteerde
                                      gewestelijke handhavingsactor. Dit selectiebalk is interactief en u kunt selecties
                                      aanpassen of toevoegen.
                                  </vl-infoblock>
                                  <vl-infoblock data-vl-title="Uw selectie mogelijkheden"
                                      data-vl-icon="cursor-finger-left">
                                      In de filterpaneel staan de mogelijke selecties dat u kunt uitvoeren op de pagina.
                                      U kunt meerdere gewestelijke handhavingsactoren aanduiden en de cijfers en grafieken
                                      zullen aangepast worden
                                      op basis van uw selecties.
                                  </vl-infoblock>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-2" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Provinciale toezichthouders en VTE"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
  
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Provinciegouverneur</span>
                                      <div slot="content">
                                         
                                          <vl-info-tile data-vl-auto-open=true>
                                          
                                          <span slot="title">
                                          <img src="assets/icons/PNG-natuurlijke persoon.png">
                                          Bestuurlijke maatregelen</span>
                                          <div slot="content">
                                             
                                              <div class="BESTM object"></div>
                                          </div>
                                      </vl-info-tile>

                                      <vl-info-tile data-vl-auto-open=true>
                                          
                                      <span slot="title">
                                      <img src="assets/icons/PNG-natuurlijke persoon.png">
                                      Bestuurlijke maatregelen zonder dwangsom</span>
                                      <div slot="content">
                                         
                                          <div class="BESTM-zonderdw object"></div>
                                      </div>
                                  </vl-info-tile>
                                  <vl-info-tile data-vl-auto-open=true>
                                          
                                  <span slot="title">
                                  <img src="assets/icons/PNG-natuurlijke persoon.png">
                                  Bestuurlijke maatregelen met dwangsom</span>
                                  <div slot="content">
                                     
                                      <div class="BESTM-metdwangsom object"></div>
                                  </div>
                              </vl-info-tile>
                              <vl-info-tile data-vl-auto-open=true>
                                          
                              <span slot="title">
                              <img src="assets/icons/PNG-natuurlijke persoon.png">
                              Veiligheidsmaatregel</span>
                              <div slot="content">
                                 
                                  <div class="Veiligheidsmaatregel object"></div>
                              </div>
                          </vl-info-tile>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal toezichthouders</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-natuurlijke persoon.png">
                                          <div class="ToezichthoudersProv object"></div>
                                         
                                      </div>
                                  </vl-info-tile>
                                  <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Totaal VTE</span>
                                  <div slot="content">
                                      <img class="icon" src="assets/icons/PNG-klipbord.png">
                                      <div class="TotaalVTEChart chart"></div>
                                  </div>
                              </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Totaal VTE</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="VTEHandhaving object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-push=4>
                               
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-3" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Klachten" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal klachten</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="Klachten object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=8 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verdeling van aantal klachten per categorie</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="KlachtenChart chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-4" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Controles" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Totaal VTE</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="Controles object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=8 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Totaal VTE</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="ControlesChart chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                      </section>
  
                      <section id="content-2" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Aanvankelijke controles met schending"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aanvankelijke controles met schending</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="Aanvankelijkecontrolesmetovertreding object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=8 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verdeling aanvankelijke controles met schending</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="AAControlesbarchart chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                      </section>
  
                      <section id="content-3" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Instrumentarium" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=3 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Raadgeving</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="Raadgeving object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=3 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aanmaning</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="Aanmaning object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=3 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verslag van vaststelling</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="Aanvankelijkecontrolesmetovertreding object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=3 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Proces-verbaal</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="Procesverbaal object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijke maatregel</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="BESTM object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
  
                              <div is="vl-grid">
                                  <div is="vl-column" data-vl-size=6 class="data-top-bot">
                                      <vl-info-tile data-vl-auto-open=true>
                                          <span slot="title">Veiligheidsmaatregel</span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-klipbord.png">
                                              <div class="Veiligheidsmaatregel object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
                                  <div is="vl-column" data-vl-size=6 class="data-top-bot">
                                      <vl-info-tile data-vl-auto-open=true>
                                          <span slot="title">Veiligheidsmaatregel</span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-klipbord.png">
                                              <div class="Veiligheidsmaatregel-percent object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
  
                      </section>
  
                      <section id="content-3-2" is="vl-region">
                      <div is="vl-grid">
                         <h3 is="vl-h3">Andere beschikbare analyses</h3>
                  </div>
                          <div is="vl-grid">
                              <div is="vl-column" id="content-3-1" vl-data-size=3>
                                  <div style="max-width: 200px">
                                      <a is="vl-doormat" href="/gewestelijkAnalyse"
                                          data-vl-alt="Ga naar gewestelijke actoren">
                                          <h2 is="vl-doormat-title">Cijfers van handhaving voor het gewest</h2>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section id="content-3-3" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" id="content-3-2" vl-data-size=3>
                                  <div style="max-width: 200px">
                                      <a is="vl-doormat" href="/" data-vl-alt="Ga naar cijfers voor gemeenten">
                                          <h2 is="vl-doormat-title">Cijfers voor handhaving in gemeenten</h2>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section id="content-3-4" is="vl-region">
  
  
                          <div is="vl-grid">
                              <div is="vl-column" id="content-3-2" vl-data-size=3>
                                  <div style="max-width: 200px">
                                      <a is="vl-doormat" href="/" data-vl-alt="Ga naar cijfers voor vervolgtraject">
                                          <h2 is="vl-doormat-title">Cijfers voor strafrechtelijk en bestuurlijk
                                              vervolgtraject</h2>
                                      </a>
                                  </div>
                              </div>
                          </div>
  
  
  
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
                                      Uw selecties
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                                  <ul>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-1" data-vl-parent="content-1">Toezichthouders en VTE</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-2" data-vl-parent="content-1">Klachten</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-3" data-vl-parent="content-1">Controles</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-4" data-vl-parent="content-1">Aanvankelijke controles
                                                  met schending</a>
                                          </div>
                                      </li>
                                  </ul>
                              </li>
                              <li is="vl-side-navigation-item" data-vl-parent="content-2">
                                  <a is="vl-side-navigation-toggle" href="#content-2" data-vl-child="content-2">
                                      Instrumenatarium
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                              </li>
                              <li is="vl-side-navigation-item" data-vl-parent="content-3">
                                  <a is="vl-side-navigation-toggle" href="#content-3" data-vl-child="content-3">
                                      Bekijk ook andere thema's
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                                  <ul>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-1" data-vl-parent="content-3">Gewestelijke
                                                  handhavingsactoren</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-2" data-vl-parent="content-3">Handhaving in
                                                  gemeenten</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-3" data-vl-parent="content-3">Strafrechtelijk en
                                                  bestuurlijk vervolgtraject</a>
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
      title: "ProvinciaalAnalyseView",
    });
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define("provinciaalanalyse-view", ProvinciaalAnalyseView);
