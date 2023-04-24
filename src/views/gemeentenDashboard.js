import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import { analysis } from "../templates/analysis";
import { embed } from '@nebula.js/stardust';
export class GemeentenDashboardView extends LitElement {
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
                      <section id="content-1" is="vl-region">
                          <h2 is="vl-h2">Een wegwijzer doorheen de cijfers en grafieken</h2>
                          <p>
                          Deze pagina toont een overzichtelijk beeld van de handhavingsactiviteiten van de gemeenten.
                          De grafieken zijn interactief en de cijfers zullen wijzigen naargelang de gekozen filtering. 
                          De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder.
                        
                          </p>
                      </section>
  
                      <section id="content-1-1" is="vl-region">
                          <div class="toolbar"></div>
                          <div is="vl-grid" class="gemmil">
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
                      <section>
                            <vl-infoblock data-vl-title="Organisatie lokale handhaving" data-vl-icon="business-graph-bar"></vl-infoblock>
                      </section>

                      <section>
                      <div is="vl-grid">
                      <div is="vl-column" data-vl-size=6 class="data-top-bot">
                      <vl-info-tile data-vl-auto-open=true>
                          <span slot="title">Naam <br/>gemeente<br/><span class="hidden">.</span></span>
                          <div slot="content">
                              <div class="Gem-ORG-NaamGEM object"></div>
                          </div>
                      </vl-info-tile>
                  </div>
                  <div is="vl-column" data-vl-size=6 class="data-top-bot">
                      <vl-info-tile data-vl-auto-open=true>
                          <span slot="title">Inwonersaantal<span class="hidden"><br/>.<br/>.</span></span>
                          <div slot="content">
                              <div class="Gem-ORG-INW object"></div>
                          </div>
                      </vl-info-tile>
                  </div>

                      </div>
                      <div is="vl-grid">
                      <div is="vl-column" data-vl-size = "12">
                      <vl-typography>
                            <h4>Milieuhandhaving</<h4><hr/>
                      </vl-typography>
                      </div>
                      </div>
                      <div is="vl-grid" data-vl-v-stretch>
                      <div is="vl-column" data-vl-size=3 class="data-top-bot">
                      <vl-info-tile data-vl-auto-open=true>
                          <span slot="title">Gemeente<br/><span class="hidden">.<br/>.</span></span>
                          <div slot="content">
                              <div class="Gem-ORG-GEM object"></div>
                          </div>
                      </vl-info-tile>
                  </div>
                  <div is="vl-column" data-vl-size=3 class="data-top-bot">
                  <vl-info-tile data-vl-auto-open=true>
                      <span slot="title">Intergemeentelijk<br/> samenwerkings-<br/>verband</span>
                      <div slot="content">
                          <div class="Gem-ORG-IGS object"></div>
                      </div>
                  </vl-info-tile>
              </div>
              <div is="vl-column" data-vl-size=3 class="data-top-bot">
                  <vl-info-tile data-vl-auto-open=true>
                      <span slot="title">Lokale politie<br/><span class="hidden">.<br/>.</span></span>
                      <div slot="content">
                          <div class="Gem-ORG-LP object"></div>
                      </div>
                  </vl-info-tile>
              </div>
              <div is="vl-column" data-vl-size=3 class="data-top-bot">
                  <vl-info-tile data-vl-auto-open=true>
                      <span slot="title">Andere gemeente<br/><span class="hidden">.<br/>.</span></span>
                      <div slot="content">
                          <div class="Gem-ORG-Mil-And object"></div>
                      </div>
                  </vl-info-tile>
              </div>
                  </div>
                  <div is="vl-grid">
                  <div is="vl-column" data-vl-size = "12">
                  <vl-typography>
                        <h4>Handhaving ruimtelijke ordening (RO)<h4><hr/>
                  </vl-typography>
                  </div>
                  </div>
                  <div is="vl-grid" data-vl-v-stretch>
                  <div is="vl-column" data-vl-size=3 class="data-top-bot">
                  <vl-info-tile data-vl-auto-open=true>
                      <span slot="title">Gemeente<span class="hidden"><br/>.<br/>.</span></span>
                      <div slot="content">
                          <div class="GemORGlokaal object"></div>
                      </div>
                  </vl-info-tile>
              </div>
              <div is="vl-column" data-vl-size=3 class="data-top-bot">
              <vl-info-tile data-vl-auto-open=true>
                  <span slot="title">Intergemeentelijk samenwerkings-<br/>verband</span>
                  <div slot="content">
                      <div class="Gem-ORG-RO-IGS object"></div>
                  </div>
              </vl-info-tile>
          </div>
          <div is="vl-column" data-vl-size=3 class="data-top-bot">
              <vl-info-tile data-vl-auto-open=true>
                  <span slot="title">Lokale politie<br/><span class="hidden">.<br/>.</span></span>
                  <div slot="content">
                      <div class="Gem-ORG-RO-LP object"></div>
                  </div>
              </vl-info-tile>
          </div>
          <div is="vl-column" data-vl-size=3 class="data-top-bot">
          <vl-info-tile data-vl-auto-open=true>
              <span slot="title">Andere gemeente<br/><span class="hidden">.<br/>.</span></span>
              <div slot="content">
                  <div class="Gem-ORG-RO-And object"></div>
              </div>
          </vl-info-tile>
      </div>
              </div>
                      </section>
                      <section id="content-1-2" is="vl-region">
                      <div is="vl-grid">
                      <h3 is="vl-h3">Cijfers voor milieu handhaving</h3>
                          <div is="vl-column data-vl-size=12 class="data-top-bot">
                              <vl-infoblock data-vl-title="GAS-reglement - milieugerelateerde overlast "
                                  data-vl-icon="business-graph-bar">
                              </vl-infoblock>
                          </div>
                      </div>

                      <div is="vl-grid">
                          <div is="vl-column" data-vl-size=12 class="data-top-bot">
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">GAS-reglement - milieugerelateerde overlast </span>
                                  <div slot="content">
                                      
                                      <div class="GEM-Bar-GAS chart"></div>
                                  </div>
                              </vl-info-tile>
                          </div></div>
                          <div is="vl-grid">
                          <div is="vl-column data-vl-size=12 class=" data-top-bot">
                              <vl-infoblock data-vl-title="Hinderlijke inrichtingen"
                                  data-vl-icon="business-graph-bar">
                              </vl-infoblock>
                          </div>
                      </div>

                      
                          <div is="vl-grid">
                          <div is="vl-column" data-vl-size=3 class="data-top-bot">
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Klasse 1 - Inrichtingen<br/><span class="hidden">.</span></span>
                                  <div slot="content">
                                      <img class="icon" src="assets/icons/Klas1.png">
                                      <div class="GEM-KPI-Klasse1 object"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                          <div is="vl-column" data-vl-size=3 class="data-top-bot">
                          <vl-info-tile data-vl-auto-open=true>
                              <span slot="title">Klasse 2 - Inrichtingen<br/><span class="hidden">.</span></span>
                              <div slot="content">
                                  <img class="icon" src="assets/icons/Klas2.png">
                                  <div class="GEM-KPI-Klasse2 object"></div>
                              </div>
                          </vl-info-tile>
                      </div>
                      <div is="vl-column" data-vl-size=3 class="data-top-bot">
                      <vl-info-tile data-vl-auto-open=true>
                          <span slot="title">Klasse 3 - Inrichtingen<br/><span class="hidden">.</span></span>
                          <div slot="content">
                              <img class="icon" src="assets/icons/Klas3.png">
                              <div class="GEM-KPI-Klasse3 object"></div>
                          </div>
                      </vl-info-tile>
                  </div>
                  <div is="vl-column" data-vl-size=3 class="data-top-bot">
                      <vl-info-tile data-vl-auto-open=true>
                          <span slot="title">Hinderlijke maar niet vergunde inrichtingen</span>
                          <div slot="content">
                              <img class="icon" src="assets/icons/Klas3.png">
                              <div class="GEM-Hinderlijk object"></div>
                          </div>
                      </vl-info-tile>
                  </div>
                      </div>
                  </section>
                      <section id="content-1-3" is="vl-region">
                     
                      <div is="vl-grid">
                          <div is="vl-column data-vl-size=12 class=" data-top-bot">
                              <vl-infoblock data-vl-title="Burgemeester"
                                  data-vl-icon="business-graph-bar">
                              </vl-infoblock>
                          </div>
                      </div>

                      <div is="vl-grid" class="data-top-bot">
                      <div is="vl-column" data-vl-size=12>
                          <vl-info-tile data-vl-auto-open=true>
                              <span slot="title">Bestuurlijke maatregelen</span>
                              <div slot="content">
                                  <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                  <div class="GEM-burgbestm object"></div>
                                  <div is="vl-grid">
                                      <div is="vl-column" data-vl-size=6>
                                          <vl-info-tile data-vl-auto-open=true>
                                              <span slot="title">Met dwangsom</span>
                                              <div slot="content">
                                              <div class="GEM-burgbestmet object"></div>
                                              </div>
                                          </vl-info-tile>
                                      </div>
                                      <div is="vl-column" data-vl-size=6>
                                          <vl-info-tile data-vl-auto-open=true>
                                              <span slot="title">Zonder dwangsom</span>
                                              <div slot="content">
                                              <div class="GEM-burgbestzonder object"></div>
                                              </div>
                                          </vl-info-tile>
                                      </div>
                                  </div>
                              </div>

                          </vl-info-tile>

                      </div>
                  </div>

                    <div is="vl-grid">
                      <div is="vl-column" data-vl-size=12 class="data-top-bot">
                      <vl-info-tile data-vl-auto-open=true>
                          <span slot="title">Veiligheidsmaatregelen</span>
                          <div slot="content">
                              <img class="icon" src="assets/icons/PNG-opgepast.png">
                              <div class="GEM-burgveilig object"></div>
                          </div>
                      </vl-info-tile>
                  </div>
                      </div>
                  </section>
  
                      <section id="content-1-4" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Lokale toezichthouders en VTE"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=5 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal toezichthouders</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-natuurlijke persoon.png">
                                          <div class="GEM-Toezicthouders object toezicht"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=7 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Totaal VTE</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-trainer_B.png">
                                          <div class="GEM-TotaalVTE object toezicht"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=5>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Toezichthouders onderverdeling
                                      </span>
                                      <span slot="subtitle">Hover over de grafiek voor meer informatie</span>
                                      <div slot="content">
                                          <div class="GEM-PieToezicthouders chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=7>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Classificatie VTE
                                      </span>
                                      <span slot="subtitle">Hover over de staafdiagram voor de absolute waarden</span>
                                      <div slot="content">
                                          <div class="GEM-VTEBar chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-5" is="vl-region">
  
                          <div is="vl-grid">
                          <vl-tooltip data-vl-placement=bottom>De som van de gegevens uit de verschillende categorieën
                                  kan verschillen van het totaal aantal aangezien niet alle actoren het totaal aantal
                                  kennen, maar wel gegevens aanleveren in de categorieën.
                              </vl-tooltip>
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Klachten" data-vl-icon="business-graph-bar">
                                      De klachten voor milieu worden in de grafiek onderverdeeld in negen thematische categorieën.
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=5>
  
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal klachten
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Meld_verdachte_handelingen.png">
                                          <div class="GEM-klachten object toezicht"></div>
                                      </div>
                                  </vl-info-tile>
                                  <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Klachten onderverdeling</span>
                                  <span slot="subtitle">Hover over de grafiek voor meer informatie</span>
                                  <div slot="content">
                                      <div class="GEM-Klachten-pie chartTabelsm"></div>
                                  </div>
                              </vl-info-tile>
                                  
                              </div>
                              <div is="vl-column" data-vl-size=7>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal klachten per categorie</span>
  
                                      <div slot="content">
                                          <div class="GEM-KlachtenBar chartgemeenten"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                      </section>
  
                      <section id="content-1-6" is="vl-region">
  
                          <div is="vl-grid">
                          <vl-tooltip data-vl-placement=bottom>De som van de gegevens uit de verschillende categorieën
                          kan verschillen van het totaal aantal aangezien niet alle actoren het totaal aantal
                          kennen, maar wel gegevens aanleveren in de categorieën.
                      </vl-tooltip>
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Controles" data-vl-icon="business-graph-bar">
                                  De controles worden in de grafiek onderverdeeld in categorieën:
                                  <br/>
                                  initiële en navolgende controles; en controles naar aanleiding van klachten en meldingen en controles op eigen initiatief.
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=5>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal controles
  
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-onderzoek.png">
                                          <div class="GEM-controles object"></div>
                                      </div>
                                  </vl-info-tile>
                                  <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Controles onderverdeling</span>
                                  <span slot="subtitle">Hover over de grafiek voor meer informatie</span>
                                  <div slot="content">
                                      <div class="GEM-Controles-pie chartTabelsm"></div>
                                  </div>
                              </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=7>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Aantal controles per
                                          categorie</span>
                                      <div slot="content">
                                          <div class="GEM-ControlesBar chartgemeenten"></div>
                                      </div>
                                  </vl-info-tile>
                                 
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-7" is="vl-region">
                          <div is="vl-grid">
                          <vl-tooltip data-vl-placement=bottom>De som van de gegevens uit de verschillende categorieën
                          kan verschillen van het totaal aantal aangezien niet alle actoren het totaal aantal
                          kennen, maar wel gegevens aanleveren in de categorieën.
                      </vl-tooltip>
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Aanvankelijke controles met schending"
                                      data-vl-icon="business-graph-bar">
                                      De aanvankelijke controles met schending worden in de grafiek onderverdeeld in negen thematische categorieën. De overtredingsgraad wordt - indien de data gekend zijn - berekend aan de hand van de verhouding van het totaal aantal aanvankelijke controles met schending ten opzichte van het aantal aanvankelijke controles naar aanleiding van klachten en meldingen en het aantal aanvankelijke controles op eigen initiatief.
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=5>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aanvankelijke controles met schending</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-fout.png">
                                          <div class="GEM-AAControles object"></div>
                                      </div>
                                  </vl-info-tile>
                                  <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Aanvankelijke controles met schending onderverdeling</span>
                                  <span slot="subtitle">Hover over de grafiek voor meer informatie</span>
                                  <div slot="content">
                                      <div class="GEM-AAControles-pie chartTabelsm"></div>
                                  </div>
                              </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=7>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanvankelijke controles met schending per categorie</span>
                                      <div slot="content">
                                          <div class="GEM-AAControlesBar chartgemeenten"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                          <div is="vl-grid" class="data-top-bot">
                          <div is="vl-column" data-vl-size=12>
                          <vl-info-tile data-vl-auto-open=true>
                              <span slot="title">Overtredingsgraad</span>
                              <div slot="content">
                              <img class="icon" src="assets/icons/PNG-barometer.png">
                                  <div class="Gem-overtredingsgraad-edit object"></div>
                              </div>
                          </vl-info-tile>
                      </div>
                          </div>
                      </section>
                      <section id="content-1-8" is="vl-region">
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
                                          <div class="GEM-RaadgevingGEM object"></div>
                                      </div>
                                  </vl-info-tile>
                                </div>
                                  <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Onderverdeling raadgevingen</span>
                                      
                                      <div slot="content">
                                          <div class="Gem-pie-raadgeving chart"></div>
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
                                          <div class="GEM-AanmaningGEM object"></div>
                                      </div>
                                  </vl-info-tile>
                                </div>
                                  <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Onderverdeling aanmaningen</span>
                                      <div slot="content">
                                          <div class="Gem-pie-aanmaning chart"></div>
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
                                        <div class="GEM-verslagvastellingGEM object"></div>
                                    </div>
                                </vl-info-tile>
                            </div>
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Onderverdeling verslag van vaststelling</span>
                                      <div slot="content">
                                          <div class="Gem-pie-verslag chart"></div>
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
                                      <div class="GEM-pvGEM object"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                            <div is="vl-column" data-vl-size=8>
                                <vl-info-tile data-vl-auto-open=true>
                                    <span slot="title">Onderverdeling proces-verbaal</span>
                                    <div slot="content">
                                        <div class="Gem-pie-pv chart"></div>
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
                                      <div class="GEM-bestuurlijkmaatregelGEM object"></div>
                                      <div is="vl-grid">
                                      <div is="vl-column" data-vl-size=6>
                                      <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Met<br/> dwangsom</span>
                                      <div slot="content">
                                      <div class="GEM-bestuurlijkmaatregelmetGEM objectinstrumentarium">
                                      </div></div>
                                  </vl-info-tile></div>
                                  <div is="vl-column" data-vl-size=6>
                                  <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Zonder dwangsom</span>
                                  <div slot="content">
                                  <div class="GEM-bestuurlijkmaatregelzonderGEM objectinstrumentarium"></div>
                                  </div>
                              </vl-info-tile></div>
                                  </div></div>
                              </vl-info-tile>
                          </div>
                          <div is="vl-column" data-vl-size=6>
                                <vl-info-tile data-vl-auto-open=true>
                                    <span slot="title">Onderverdeling bestuurlijke maatregel</span>
                                    
                                    <div slot="content">
                                       
                                        <div class="Gem-pie-bestmaatregel chart"></div>
                                    </div>
                                </vl-info-tile>
                            </div>
                          </div>
                          <div is="vl-grid" class=data-top-bot">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Veiligheidsmaatregelen</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-opgepast.png">
                                          <div class="GEM-veiligheidsGEM object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=8>
                              <vl-info-tile data-vl-auto-open=true><span slot="title">Onderverdeling veiligheidsmaatregelen</span>
                              
                                  <div slot="content">
                                      
                                      <div class="Gem-pie-veiligheids chart"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                          </div>
                      </section>
                      <section id="content-1-9" is="vl-region">
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
                                  <div class="Gem-opmerking-gem chartTabelsm"></div>
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
                                  <div class="Gem-opmerking-igs chartTabelsm"></div>
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
                                  <div class="Gem-opmerking-lp chartTabelsm"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                          </div>
                          </section>
                      <section is="vl-region" id="content-2">
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
                          <vl-typography>
                          <ul>
                          <li>
                            Data van 2022
                            <ul>
                            <li><a href="https://omgeving.vlaanderen.be/sites/default/files/2023-04/Data%20Omgevingshandhavingsrapportage%202022.zip" download>Klik hier om de data te downloaden</a> </li>
                            </ul>
                          </li>
                          <li>
                            Data van 2021
                            <ul>
                            <li><a href="https://omgeving.vlaanderen.be/sites/default/files/2022-11/drive-download-20221117T123910Z-001.zip" download>Klik hier om de data te downloaden</a> </li>
                            </ul>
                          </li>
                        </ul>
                        <ul>
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
                                      Cijfers voor milieu
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                                  <ul>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-1" data-vl-parent="content-1">Selecties</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-2" data-vl-parent="content-1">GAS-reglement</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-3" data-vl-parent="content-1">Burgemeester</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-4" data-vl-parent="content-1">Lokale toezichthouders en VTE</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-5" data-vl-parent="content-1">Klachten</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-6" data-vl-parent="content-1">Controles</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-7" data-vl-parent="content-1">Aanvankelijke controles met schending</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                      <div>
                                          <a href="#content-1-8" data-vl-parent="content-1">Instrumentarium</a>
                                      </div>
                                  </li>
                                  <li is="vl-side-navigation-item">
                                      <div>
                                          <a href="#content-1-9" data-vl-parent="content-1">Opmerking handhavingsactor</a>
                                      </div>
                                  </li>
                                      
                                  </ul>
                              </li>
                              <li is="vl-side-navigation-item" data-vl-parent="content-2">
                                  <a is="vl-side-navigation-toggle" href="#content-4" data-vl-child="content-4">
                                      Andere thema's
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                              </li>
                              <li is="vl-side-navigation-item" data-vl-parent="content-3">
                              <a is="vl-side-navigation-toggle" href="/public/gemeentendashboardro" data-vl-child="content-4">
                                  Bekijk cijfers voor ruimtelijke ordening
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
      title: "GemeentenDashboardView",
    });
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define("gemeentendashboard-view", GemeentenDashboardView);
