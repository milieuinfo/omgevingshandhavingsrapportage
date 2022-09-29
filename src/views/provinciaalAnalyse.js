import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import { analysis } from "../templates/analysis";
import { embed } from '@nebula.js/stardust';
export class ProvinciaalAnalyseView extends LitElement {
  render() {
    return analysis({
      children: html`
      <vl-functional-header data-vl-back="Terug" data-vl-back-link="/public/provinciaal"
      data-vl-title="Cijfers van provinciale handhavingsactoren"
      data-vl-sub-title="Een analyse van de provinciale handhavingsactoren" data-vl-link="Provinciale handhavingsactoren">
  </vl-functional-header>
  <section is="vl-region" >
      <div is="vl-layout">
          <div is="vl-grid" data-vl-is-stacked>
              <div is="vl-column" data-vl-size="8" data-vl-medium-size="8" data-vl-small-size="8"
                  data-vl-extra-small-size="12">
                  <div is="vl-side-navigation-reference">
                      <section id="content-1" is="vl-region">
                          <h2 is="vl-h2">Een wegwijzer doorheen de cijfers</h2>
                          <p>
                              Deze pagina toont een overzichtelijk beeld van de handhavingsactiviteiten van de provinciale handhavingsactoren.
                              De grafieken zijn interactief en de cijfers zullen wijzigen naargelang de gekozen filtering. 
                              De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder.
                              Als de gegevens niet gekend zijn, verschijnt - of wordt aangegeven dat de data niet beschikbaar zijn.
                          </p>
                          <br>
                         
                      </section>
  
                      <section is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12>
                                  <div class="toolbar"></div>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <div slot="content">
                                          <div class="listboxProv listboxProvStyle"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=8>
                                  <vl-infoblock data-vl-title="Selectiebalk" data-vl-icon="cursor-finger-up">
                                     Hierboven staan de actieve selecties op deze pagina. De cijfers worden aangepast op basis van de geselecteerde provincie(s). Deze selectiebalk is interactief; er kunnen selecties worden aangepast of toegevoegd.
                                  </vl-infoblock>
                                  <vl-infoblock data-vl-title="Uw selectie mogelijkheden"
                                      data-vl-icon="cursor-finger-left">
                                     In het filterpaneel staan de mogelijke selecties die kunnen worden uitgevoerd op deze pagina. Er kunnen meerdere provincies aangeduid worden.
                                     De cijfers en grafieken zullen worden aangepast op basis van de selecties.
                                  </vl-infoblock>
                              </div>
                          </div>
                      </section>
                      <section id="content-1-1" is="vl-region">
                      <div is="vl-grid">
                     
    <p><a is="vl-link"
    href="https://navigator.emis.vito.be/mijn-navigator?woId=25226&woLang=nl&woVersion=2022-03-11"
    target="_blank">Bekijk de bevoegheden van de provincies</a></p>
                     </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Provinciegouverneur" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijke maatregelen</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div class="BESTM object"></div>
                                          <div is="vl-grid">
                                          <div is="vl-column" data-vl-size=6>
                                          <vl-info-tile data-vl-auto-open=true>
                                          <span slot="title">Met dwangsom</span>
                                          <div slot="content">
                                              <div class="PROV-KPI-GOV-met-dwangsom object"></div>
                                          </div>
                                      </vl-info-tile></div>
                                      <div is="vl-column" data-vl-size=6>
                                      <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Zonder dwangsom</span>
                                      <div slot="content">
                                          
                                          <div class="PROV-KPI-GOV-zonder-dwangsom object"></div>
                                      </div>
                                  </vl-info-tile></div>
                                      </div></div>
                                  
                                  </vl-info-tile>
                                
                              </div>
                              <div is="vl-column" data-vl-size=4>
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Veiligheidsmaatregelen</span>
                                  <div slot="content">
                                      <img class="icon" src="assets/icons/PNG-opgepast.png">
                                      <div class="PROV-KPI-GOV-veiligsheidsmaatregel object"></div>
                                  </div>
                              </vl-info-tile>
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
                              <div is="vl-column" data-vl-size=6>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal toezichthouders</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-natuurlijke persoon.png">
                                          <div class="ToezichthoudersProv object"></div>
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=6>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Totaal VTE</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="VTEHandhaving object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                          </div>
                          <div is="vl-grid">
  
                              <div is="vl-column" data-vl-size=12>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Classificatie VTE</span>
                                      <div slot="content">
                                          <div class="TotaalVTEChart chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-3" is="vl-region">
                          <div is="vl-grid">
                          <vl-tooltip data-vl-placement=bottom
      >De som van de gegevens uit de verschillende categorieën kan verschillen van het totaal aantal aangezien niet alle actoren het totaal aantal kennen, maar wel gegevens aanleveren in de categorieën.</vl-tooltip
    >
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                            
                                  <vl-infoblock data-vl-title="Klachten" data-vl-icon="business-graph-bar">
                                     De klachten voor milieu worden in de grafiek onderverdeeld in negen thematische categorieën.
                                    
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
  
                                      <span slot="title">Aantal klachten</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Meld_verdachte_handelingen.png">
                                          <div class="Klachten object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=8 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal klachten per categorie</span>
                                      <div slot="content">
                                          <div class="KlachtenChart chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-4" is="vl-region">
                          <div is="vl-grid">
                          <vl-tooltip data-vl-placement=bottom
      >De som van de gegevens uit de verschillende categorieën kan verschillen van het totaal aantal aangezien niet alle actoren het totaal aantal kennen, maar wel gegevens aanleveren in de categorieën.</vl-tooltip
    >
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Controles" data-vl-icon="business-graph-bar">
                                  De controles worden in de grafiek onderverdeeld in categorieën:
                                  <br/>
                                  initiële en navolgende controles; en controles naar aanleiding van klachten en meldingen en controles op eigen initiatief.
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                          <vl-tooltip data-vl-placement=bottom
                          >De som van de gegevens uit de verschillende categorieën kan verschillen van het totaal aantal aangezien niet alle actoren het totaal aantal kennen, maar wel gegevens aanleveren in de categorieën.
                         </vl-tooltip>
                        </div>
                        <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal controles</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-onderzoek.png">
                                          <div class="Controles object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=8 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal controles per categorie</span>
                                      <div slot="content">
                                          <div class="ControlesChart chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                      </section>
  
                      <section id="content-1-5" is="vl-region">
                          <div is="vl-grid">
                          <vl-tooltip data-vl-placement=bottom
                          >De som van de gegevens uit de verschillende categorieën kan verschillen van het totaal aantal aangezien niet alle actoren het totaal aantal kennen, maar wel gegevens aanleveren in de categorieën.
                         </vl-tooltip>
                        
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Aanvankelijke controles met schending"
                                      data-vl-icon="business-graph-bar">
                                   De aanvankelijke controles met schending worden in de grafiek onderverdeeld in negen thematische categorieën. De overtredingsgraad wordt - indien de data gekend zijn - berekend aan de hand van de verhouding van het totaal aanvankelijke controles met overtreding ten opzichte van het aantal aanvankelijke controles naar aanleiding van klachten en meldingen en het aantal aanvankelijke controles op eigen initiatief.
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aanvankelijke controles met schending</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-fout.png">
                                          <div class="Aanvankelijkecontrolesmetovertreding object"></div>
                                      </div>
                                  </vl-info-tile>
                                  <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Overtredingsgraad</span>
                                  <div slot="content">
                                      <img class="icon" src="assets/icons/PNG-barometer.png">
                                      <div class="PROV-KPI-Overtredingsgraad object"></div>
                                  </div>
                              </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=8 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanvankelijke controles met schending per categorie</span>
                                      <div slot="content">
                                          <div class="PROV-BAR-Controles chart2"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-6" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Instrumentarium" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>

                          <!--Instrumentarium-->
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=6 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Raadgeving</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Informatie.png">
                                          <div class="Raadgeving object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=6 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aanmaning</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="Aanmaning object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              </div>
                              <div is="vl-grid">
                              <div is="vl-column" data-vl-size=6 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verslag van vaststelling</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="PROV-KPI-verslagvanvastelling object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=6 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Proces-verbaal</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-PV.png">
                                          <div class="Procesverbaal object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>

                          <div is="vl-grid">
                          <div is="vl-column" data-vl-size=12>
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Bestuurlijke maatregelen</span>
                                  <div slot="content">
                                      <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                      <div class="PROV-KPI-BestuurlijkmaatregelInstrumentarium object"></div>
                                      <div is="vl-grid">
                                      <div is="vl-column" data-vl-size=6>
                                      <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Met dwangsom</span>
                                      <div slot="content">
                                          <div class="PROV-KPI-BestuurlijkmaatregelInstrumentariummetdwangsom object"></div>
                                      </div>
                                  </vl-info-tile></div>
                                  <div is="vl-column" data-vl-size=6>
                                  <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Zonder dwangsom</span>
                                  <div slot="content">
                                      
                                      <div class="PROV-KPI-BestuurlijkmaatregelInstrumentariumzonderdwangsom object"></div>
                                  </div>
                              </vl-info-tile></div>
                                  </div></div>
                              
                              </vl-info-tile>
                            
                          </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Veiligheidsmaatregel</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-opgepast.png">
                                          <div class="Veiligheidsmaatregel object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              </div>                             
                              </section>


                              <section id="content-1-7" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Opmerking handhavingsactor" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                          <div is="vl-column" data-vl-size=12 class="data-top-bot">
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Opmerking handhavingsactor</span>
                                  <div slot="content">
                                  <div class="PROV-Opmerking chartTabelsm"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                          </div>
                          </section>
                    
                      <section is="vl-region" id="content-2">
                          <h3 is="vl-h3">Cijfers andere handhavingsactoren</h3>
                          <vl-alert
                              data-vl-type="info">
                              <p>
                              <a is="vl-link-button" href="/public/gewestelijk">Gewest</a>
                              <a is="vl-link-button" href="/public/gemeenten">Gemeenten</a>
                              <a is="vl-link-button" href="/public/hogeraad">Hoge raad</a>
                              <a is="vl-link-button" href="/public/strafrechtelijk">Strafrechtelijk en bestuurlijk
                                  vervolgtraject</a>
                          </p>
                          </vl-alert>
                          <vl-alert data-vl-type="info"
                          data-vl-title="Download de data">
                          <p><a href="https://drive.google.com/drive/folders/1WTo0_wMdlJxqIuW4lSV8-fK8DuHRI3_w?usp=sharing" target="_blank">Klik hier om de download te starten</a></p>
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
                                      Provinciale handhavingsactoren
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                                  <ul>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-1" data-vl-parent="content-1">Provinciegouverneur</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-2" data-vl-parent="content-1">Provinciale toezichthouders en VTE</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-3" data-vl-parent="content-1">Klachten</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-4" data-vl-parent="content-1">Controles</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-5" data-vl-parent="content-1">Aanvankelijke controles
                                                  met schending</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-6" data-vl-parent="content-1">Instrumentarium</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-7" data-vl-parent="content-1">Opmerking handhavingsactor</a>
                                          </div>
                                      </li>
                                  </ul>
                              </li>
                              <li is="vl-side-navigation-item" data-vl-parent="content-2">
                                  <a is="vl-side-navigation-toggle" href="#content-2" data-vl-child="content-2">
                                      Cijfers andere handhavingsactoren
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
      title: "ProvinciaalAnalyseView",
    });
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define("provinciaalanalyse-view", ProvinciaalAnalyseView);
