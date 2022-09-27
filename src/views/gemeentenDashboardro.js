import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import { analysis } from "../templates/analysis";
import { embed } from '@nebula.js/stardust';
export class GemeentenDashboardroView extends LitElement {
    
render() {
    return analysis({
      children: html`

      <vl-functional-header data-vl-back="Terug" data-vl-back-link="/public/gemeenten"
      data-vl-title="Cijfers van gemeentelijke handhavingsactoren"
      data-vl-sub-title="Een analyse van de gemeentelijke handhavingsactoren"
      data-vl-link="Gemeentelijke handhavingsactoren">
  </vl-functional-header>
  <section is="vl-region">
      <div is="vl-layout">
          <div is="vl-grid" data-vl-is-stacked>
              <div is="vl-column" data-vl-size="8" data-vl-medium-size="8" data-vl-small-size="8"
                  data-vl-extra-small-size="12">
                  <div is="vl-side-navigation-reference">
                      <section is="vl-region">
                          <h2 is="vl-h2">Een wegwijzer doorheen de cijfers en grafieken</h2>
                          <p>
                          Deze pagina toont een overzichtelijk beeld van de handhavingsactiviteiten van de gemeenten.
                          De grafieken zijn interactief en de cijfers zullen wijzigen naargelang de gekozen filtering. 
                          De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder.
                          Als de gegevens niet gekend zijn, verschijnt - of wordt aangegeven dat de data niet beschikbaar zijn.
                          </p>
                      </section>
  
                      <section id="content-1" is="vl-region">
                          <div class="toolbar"></div>
                          <div is="vl-grid">
                          <div is="vl-column" data-vl-size=12>
                          <vl-infoblock data-vl-title="Selectiebalk" data-vl-icon="cursor-finger-up">
                          Hierboven staan de actieve selecties op deze pagina. De cijfers worden aangepast op basis van de geselecteerde gemeeenten. Deze selectiebalk is interactief; er kunnen selecties worden aangepast of toegevoegd.
                          </vl-infoblock>
                          <vl-infoblock data-vl-title="Uw selectie mogelijkheden"
                              data-vl-icon="cursor-finger-down">
                              In het filterpaneel staan de mogelijke selecties die kunnen worden uitgevoerd op deze pagina. Er kunnen meerdere provincies aangeduid worden.
                                     De cijfers en grafieken zullen worden aangepast op basis van de selecties.
                          </vl-infoblock>
                              </div>
                              </div>
                                <br/>
                                <div is="vl-grid">

                                  <div is="vl-column" data-vl-size=6>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <div slot="content">
                                          <div class="listboxGEM listboxProvStyle"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              </div>
                      </section>

                      <section id="content-1-1" is="vl-region">
                          <div is="vl-grid" id="content-1-1">
                              <h2 is="vl-h2">Cijfers voor ruimtelijke ordening</h2>
                          </div>
  
                          <div is="vl-grid" id="content-1-1">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Verbalitisanten en stedenbouwkundige inspecteurs"
                                      data-vl-icon="business-graph-bar">
                                     
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verbalitisanten<span slot="subtitle">
                                          </span></span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-natuurlijke persoon.png">
                                          <div class="GEM-Vebalitisanten object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=8>
                              <vl-info-tile data-vl-auto-open=true>
                                 
                                  <div slot="content">
                                      
                                      <div class="GEM-PIE-Verbalitisanten chartTabelsm"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                          </div>
                          <div is="vl-grid" class="data-top-bot">
                             
                          <div is="vl-column" data-vl-size=4>
                              <vl-info-tile data-vl-auto-open=true>
                              <span slot="title">Stedenbouwkundige inspecteurs<span
                                          slot="subtitle">
                                      </span></span>
                                  <div slot="content">
                                      <div class="GEM-stedenbouwkundige object"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                          <div is="vl-column" data-vl-size=8>
                              <vl-info-tile data-vl-auto-open=true>
                                  
                                  <div slot="content">
                                      <div class="GEM-PIE-StedenBKVerb chartTabelsm"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                      </div>
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Stedenbouwkundige inspecteurs/Verbalisanten<span
                                              slot="subtitle">
                                          </span></span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-natuurlijke persoon.png">
                                          <div class="GEM-stedenbouwkundigeinspec objectinstrumentarium"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true>
                                      
                                      <div slot="content">
                                       
                                          <div class="GEM-PIE-StedenBK chartTabelsm"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                         
                      </section>
  
                      <section id="content-1-2" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Totaal VTE" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Totaal VTE<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-trainer_B.png">
                                          <div class="GEM-totaalvtero object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Classificatie VTE<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
  
                                          <div class="GEM-charttotaalvtero chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-3" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Klachten"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Klachten<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Meld_verdachte_handelingen.png">
                                          <div class="Gem-ro-klachten object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              </div>

                                </section>

  
                      <section id="content-1-4" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Controles" data-vl-icon="business-graph-bar">
                                  De controles worden in de grafiek onderverdeeld in categorieën:
                                  <br/>
                                  initiële en navolgende controles; en controles naar aanleiding van klachten en meldingen en controles op eigen initiatief.
                                  </vl-infoblock>
                              </div>
                          </div>
  
  
                          <div is="vl-grid">
                          <div is="vl-column" data-vl-size=4>
                          <vl-info-tile data-vl-auto-open=true><span slot="title">Controles<span slot="subtitle">
                                  </span>
                              </span>
                              <div slot="content">
                                  <img class="icon" src="assets/icons/PNG-onderzoek.png">
                                  <div class="Gem-ro-controles object"></div>
                              </div>
                          </vl-info-tile>
                      </div>
  
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Verdeling van controles<span
                                              slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
  
                                          <div class="Gem-ro-barcontroles chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                      </section>
                      <section id="content-1-5" is="vl-region">
                      <div is="vl-grid">
                          <div is="vl-column" data-vl-size=12 class="data-top-bot">
                              <vl-infoblock data-vl-title="Aanvankelijke controles" data-vl-icon="business-graph-bar">
                                 
                              </vl-infoblock>
                          </div>
                      </div>


                      <div is="vl-grid">
                      <div is="vl-column" data-vl-size=6>
                      <vl-info-tile data-vl-auto-open=true><span slot="title">Aanvankelijke controles met
                              schending<span slot="subtitle">
                              </span>
                          </span>
                          <div slot="content">
                              <img class="icon" src="assets/icons/PNG-onderzoek.png">
                              <div class="Gem-ro-AAcontroles object"></div>
                          </div>
                      </vl-info-tile>
                  </div>

                  <div is="vl-column" data-vl-size=6>
                  <vl-info-tile data-vl-auto-open=true><span slot="title">Overtredingsgraad<span slot="subtitle">
                          </span>
                      </span>
                      <div slot="content">
                          <img class="icon" src="assets/icons/PNG-barometer.png">
                          <div class="Gem-ro-overtredingsgraad object"></div>
                      </div>
                  </vl-info-tile>
              </div>
                      </diV>
                    
                  </section>
                  <section id="content-1-6" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Instrumentarium" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>

                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Raadgeving</span>
                                      
                                      <div slot="content">
                                      <img class="icon" src="assets/icons/PNG-Informatie.png">
                                          <div class="Gem-ro-inst-raadgeving object"></div>
                                      </div>
                                  </vl-info-tile>
                                </div>
                                  <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Onderverdeling raadgevingen</span>
                                      
                                      <div slot="content">
                                          <div class="Gem-ro-onder-raadgeven chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              </div>
                              <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aanmaningen</span>
                                      
                                      <div slot="content">
                                      <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="Gem-ro-inst-aanmaning object"></div>
                                      </div>
                                  </vl-info-tile>
                                </div>
                                  <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Onderverdeling aanmaningen</span>
                                      <div slot="content">
                                          <div class="Gem-ro-onder-aanmaning chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              </div>
                                <div is="vl-grid" class="data-top-bot">
                                <div is="vl-column" data-vl-size=4>
                                <vl-info-tile data-vl-auto-open=true>
                                    <span slot="title">Verslag van vaststelling</span>
                                    
                                    <div slot="content">
                                    <img class="icon" src="assets/icons/PNG-klipbord.png">
                                        <div class="Gem-ro-inst-verslagvaststelling object"></div>
                                    </div>
                                </vl-info-tile>
                            </div>
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verslag van vaststelling</span>
                                      
                                      <div slot="content">
                                          
                                          <div class="Gem-ro-onder-verslag chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              </div>
                              <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=4>
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Proces-verbaal</span>
                                  
                                  <div slot="content">
                                  <img class="icon" src="assets/icons/PNG-PV.png">
                                      <div class="Gem-ro-inst-pv object"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                            <div is="vl-column" data-vl-size=8>
                                <vl-info-tile data-vl-auto-open=true>
                                    <span slot="title">Proces-verbaal</span>
                                    
                                    <div slot="content">
                                       
                                        <div class="Gem-ro-onder-PV chart"></div>
                                    </div>
                                </vl-info-tile>
                            </div>
                            </div>

                            <div is="vl-grid" class="data-top-bot">
                            <div is="vl-column" data-vl-size=4>
                            <vl-info-tile data-vl-auto-open=true>
                                <span slot="title">Bevel tot staking</span>
                                <span slot="subtitle">Cijfer voor gemeente</span>
                                <div slot="content">
                                <img class="icon" src="assets/icons/PNG-time-out.png">
                                    <div class="Gem-ro-inst-beveltotstaking object"></div>
                                </div>
                            </vl-info-tile>
                        </div>
                        <div is="vl-column" data-vl-size=8>
                        <vl-info-tile data-vl-auto-open=true>
                            <span slot="title">Proces-verbaal</span>
                            
                            <div slot="content">
                               
                                <div class="Gem-ro-onder-staking chart"></div>
                            </div>
                        </vl-info-tile>
                    </div>
                        </div>
                             
                          <div is="vl-grid" class="data-top-bot">
                          <div is="vl-column" data-vl-size=6>
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Bestuurlijke maatregelen</span>
                                 
                                  <div slot="content">
                                      <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                      <div class="Gem-ro-bestm-kpi object"></div>
                                      <div is="vl-grid">
                                      <div is="vl-column" data-vl-size=6>
                                      <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Met<br/> dwangsom</span>
                                      <div slot="content">
                                      <div class="Gem-ro-bestm-kpi-mdw objectinstrumentarium">
                                      </div></div>
                                  </vl-info-tile></div>
                                  <div is="vl-column" data-vl-size=6>
                                  <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Zonder dwangsom</span>
                                  <div slot="content">
                                  <div class="Gem-ro-bestm-kpi-zwd objectinstrumentarium"></div>
                                  </div>
                              </vl-info-tile></div>
                                  </div></div>
                              </vl-info-tile>
                          </div>
                          <div is="vl-column" data-vl-size=6>
                                <vl-info-tile data-vl-auto-open=true>
                                    <span slot="title">Onderverdeling bestuurlijke maatregel</span>
                                    
                                    <div slot="content">
                                       
                                        <div class="Gem-ro-bestm-onder chart"></div>
                                    </div>
                                </vl-info-tile>
                            </div>
                          </div>
                          
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Afgesloten minnelijke schikking</span>
                                
                                      <div slot="content">
                                      <img class="icon" src="assets/icons/PNG-overeenkomst.png">
                                          <div class="Gem-ro-inst-afgeslotenminschik object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=8>
                              <vl-info-tile data-vl-auto-open=true><span slot="title">Afgesloten minnelijke schikking</span>
                              
                                  <div slot="content">
                                      
                                      <div class="Gem-ro-onder-afgeslotenmin chart"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                          </div>

                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Herstelvordering</span>
                                  <span slot="subtitle">Ingeleid bij Openbaar ministerie</span>
                                      <div slot="content">
                                      <img class="icon" src="assets/icons/PNG-EHBO.png">
                                          <div class="Gem-ro-inst-ingeleidOM object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=8>
                              <vl-info-tile data-vl-auto-open=true><span slot="title">Afgesloten minnelijke schikking</span>
                             
                                  <div slot="content">
                                    
                                      <div class="Gem-ro-onder-ingeleid chart"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                          </div>
                          <div is="vl-grid" class="data-top-bot">
                          <div is="vl-column" data-vl-size=4>
                              <vl-info-tile data-vl-auto-open=true><span slot="title">Herstelvordering</span>
                              <span slot="subtitle">Gevorderd bij Burgelijke rechter</span>
                                  <div slot="content">
                                  <img class="icon" src="assets/icons/PNG-EHBO.png">
                                      <div class="Gem-ro-inst-ingeleidBR object"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                          <div is="vl-column" data-vl-size=8>
                          <vl-info-tile data-vl-auto-open=true><span slot="title">Onderverdeling</span>
                        
                              <div slot="content">
                                
                                  <div class="Gem-ro-onder-burgelijkrechter chart"></div>
                              </div>
                          </vl-info-tile>
                      </div>
                      </div>

                          <div is="vl-grid" class="data-top-bot">
                          <div is="vl-column" data-vl-size=4>
                              <vl-info-tile data-vl-auto-open=true><span slot="title">Ambtshalve uitvoering gerechtelijke herstelvordering</span>
                              <span slot="subtitle">Cijfer voor gemeente</span>
                                  <div slot="content">
                                  <img class="icon" src="assets/icons/PNG-justitie.png">
                                      <div class="Gem-ro-kpi-ambachts object"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                          <div is="vl-column" data-vl-size=8>
                              <vl-info-tile data-vl-auto-open=true><span slot="title">Ambtshalve uitvoering gerechtelijke herstelvordering</span>
                              
                                  <div slot="content">
                                      
                                      <div class="Gem-ro-onder-ambachts chart"></div>
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
                            <vl-typography>
                                <h3>Gemeente</h3>
                            </vl-typography>
                          </div>
                          <div is="vl-grid">
                          <div is="vl-column" data-vl-size=12 class="data-top-bot">
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Opmerking handhavingsactor</span>
                                  <div slot="content">
                                  <div class="Gem-ro-opmerking-gem chartTabelsm"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                          </div>
                          <div is="vl-grid">
                            <vl-typography>
                                <h3>Intergemeentelijke vereniging</h3>
                            </vl-typography>
                          </div>
                          <div is="vl-grid">
                          <div is="vl-column" data-vl-size=12 class="data-top-bot">
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Opmerking handhavingsactor</span>
                                  <div slot="content">
                                  <div class="Gem-ro-opmerking-igs chartTabelsm"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                          </div>
                          <div is="vl-grid">
                            <vl-typography>
                                <h3>Lokale politie</h3>
                            </vl-typography>
                          </div>
                          <div is="vl-grid">
                          <div is="vl-column" data-vl-size=12 class="data-top-bot">
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Opmerking handhavingsactor</span>
                                  <div slot="content">
                                  <div class="Gem-ro-opmerking-lp chartTabelsm"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                          </div>
                          </section>
                      <section is="vl-region" id="content-4">
                          <h3 is="vl-h3">Bekijk cijfers voor andere thema's</h3>
                          <vl-alert data-vl-icon="info-circle" data-vl-title="Bekijk de cijfers van andere thema's"
                              data-vl-type="info">
                              <p>
                                  <a is="vl-link-button" href="/public/gewestelijk">Gewest</a>
                                  <a is="vl-link-button" href="/public/provinciaal">Provinciaal</a>
                                  <a is="vl-link-button" href="/public/hogeraad">Hoge raad</a>
                                  <a is="vl-link-button" href="/public/strafrechtelijk">Strafrechtelijk en bestuurlijk
                                      vervolgtraject</a>
                              </p>
                          </vl-alert>
                          <vl-alert
                                data-vl-title="Download de data">
                                <p><a href="data/data gemeenten qlik.xlsx" download>Klik hier om de data te downloaden</a></p>
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
                                      Cijfers voor ruimtelijke ordening
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                                  <ul>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-1" data-vl-parent="content-1">Verbalitisanten en
                                                  stedenbouwkundige inspecteurs</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-2" data-vl-parent="content-1">VTE</a>
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
                                              <a href="#content-1-5" data-vl-parent="content-1">Aanvankelijke controles met overtreding</a>
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
                                  <a is="vl-side-navigation-toggle" href="#content-2" data-vl-child="content-4">
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
  </section>
      `,
      title: "GemeentenDashboardroView",
    });
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define("gemeentendashboardro-view", GemeentenDashboardroView);