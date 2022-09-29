import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import { analysis } from "../templates/analysis";
import { embed, useEffect } from "@nebula.js/stardust";
import { render } from 'lit';


export class GewestelijkAnalyseView extends LitElement {
  render() {
    return analysis({
      children: html
      `<vl-functional-header data-vl-back="Terug" data-vl-back-link="/public/gewestelijk"
      data-vl-title="Cijfers van gewestelijke handhavingsactoren"
      data-vl-sub-title="Een analyse van de gewestelijke handhavingsactoren"
      data-vl-link="Gewestelijke handhavingsactoren">
  </vl-functional-header>
  
  <section is="vl-region">
      <div is="vl-layout">
          <div is="vl-grid" data-vl-is-stacked>
              <div is="vl-column" data-vl-size="8" data-vl-medium-size="8" data-vl-small-size="8"
                  data-vl-extra-small-size="12">
                  <div is="vl-side-navigation-reference">
                      <section id="content-1" is="vl-region">
                          <h2 is="vl-h2">Een wegwijzer doorheen de cijfers</h2>
                          <p>
                              Deze pagina toont een overzichtelijk beeld van de handhavingsactiviteiten van de
                              gewestelijke handhavingsactoren.
                              De grafieken zijn interactief en de cijfers zullen wijzigen naargelang de gekozen filtering.
                              De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk
                              hieronder.
                              Als de gegevens niet gekend zijn, verschijnt - of wordt aangegeven dat de data niet beschikbaar zijn.
                          </p>
                      </section>
  
                      <section id="content-1-1" is="vl-region">
                          <div class="toolbar"></div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <div slot="content">
                                          <div class="listbox"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column">
                                  <vl-infoblock data-vl-title="Selectiebalk" data-vl-icon="cursor-finger-up">
                                      Hierboven staan de actieve selecties op deze pagina.
                                      De cijfers worden aangepast op basis van de geselecteerde gewestelijke
                                      handhavingsactoren.
                                      Deze selectiebalk is interactief; er kunnen selecties worden aangepast of
                                      toegevoegd.
                                  </vl-infoblock>
  
  
                                  <vl-infoblock data-vl-title="Uw selectie mogelijkheden"
                                      data-vl-icon="cursor-finger-left">
                                      In het filterpaneel staan de mogelijke selecties die kunnen worden uitgevoerd op
                                      deze pagina. Er kunnen meerdere gewestelijke handhavingsactoren aangeduid worden.
                                      De cijfers en grafieken zullen worden aangepast op basis van de selecties.
                                  </vl-infoblock>
                              </div>
                          </div>
                      </section>
  
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
                                          <div class="MIL-Barchart-VTE chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-3" is="vl-region">
  
                          <div is="vl-grid">
                              <vl-tooltip data-vl-placement=bottom>De som van de gegevens uit de verschillende categorieën
                                  kan verschillen van het totaal aantal aangezien niet alle actoren het totaal aantal
                                  kennen, maar wel gegevens aanleveren in de categorieën.
                              </vl-tooltip>
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Klachten" data-vl-icon="business-graph-bar">
                                      De klachten voor milieu worden in de grafiek onderverdeeld in negen thematische
                                      categorieën.
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
  
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal klachten
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Meld_verdachte_handelingen.png">
                                          <div class="MIL-KPI-Klachten object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal klachten per categorie</span>
  
                                      <div slot="content">
                                          <div class="MIL-Barchart-Klachten chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                      </section>
  
                      <section id="content-1-4" is="vl-region">
  
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
  
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal controles
  
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-onderzoek.png">
                                          <div class="MIL-KPI-Controles object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Aantal controles per
                                          categorie</span>
                                      <div slot="content">
                                          <div class="MIL-Barchart-Controles chart"></div>
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
                                  <vl-infoblock data-vl-title="Aanvankelijke controles met schending"
                                      data-vl-icon="business-graph-bar">
                                      De aanvankelijke controles met schending worden in de grafiek onderverdeeld in negen
                                      thematische categorieën. De overtredingsgraad wordt - indien de data gekend zijn -
                                      berekend aan de hand van de verhouding van het totaal aantal aanvankelijke controles
                                      met schending ten opzichte van het aantal aanvankelijke controles naar aanleiding
                                      van klachten en meldingen en het aantal aanvankelijke controles op eigen initiatief.
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanvankelijke controles met schending</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-fout.png">
                                          <div class="MIL-KPI-Aanvankelijke-Controles object"></div>
                                      </div>
                                  </vl-info-tile>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Overtredingsgraad</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-barometer.png">
                                          <div class="MIL-KPI-Overtredingsgraad object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanvankelijke controles met schending per categorie</span>
                                      <div slot="content">
                                          <div class="MIL-bar-Aanvankelijke-Controles chart2"></div>
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
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=6>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Raadgeving</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Informatie.png">
                                          <div class="MIL-KPI-Raadgeving object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=6>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aanmaning</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="MIL-KPI-Aanmaning object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class=data-top-bot>
  
                              <div is="vl-column" data-vl-size=6>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verslag van vaststelling</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="MIL-KPI-Verslag-van-vastelling object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=6>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Proces-verbaal</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-PV.png">
                                          <div class="MIL-KPI-Proces-verbaal object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                          </div>
                          <div is="vl-grid" class=data-top-bot>
                              <div is="vl-column" data-vl-size=12>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijke maatregelen</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div class="MIL-KPI-Bestuurlijk-maatregel object"></div>
                                          <div is="vl-grid">
                                              <div is="vl-column" data-vl-size=6>
                                                  <vl-info-tile data-vl-auto-open=true>
                                                      <span slot="title">Met dwangsom</span>
                                                      <div slot="content">
                                                          <div class="MIL-KPI-Bestuurlijk-maatregel-met-dwangsom object">
                                                          </div>
                                                      </div>
                                                  </vl-info-tile>
                                              </div>
                                              <div is="vl-column" data-vl-size=6>
                                                  <vl-info-tile data-vl-auto-open=true>
                                                      <span slot="title">Zonder dwangsom</span>
                                                      <div slot="content">
  
                                                          <div
                                                              class="MIL-KPI-Bestuurlijk-maatregel-zonder-dwangsom object">
                                                          </div>
                                                      </div>
                                                  </vl-info-tile>
                                              </div>
                                          </div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                          <div is="vl-grid" class=data-top-bot>
                              <div is="vl-column" data-vl-size=12>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Veiligheidsmaatregel</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-opgepast.png">
                                          <div class="MIL-KPI-Veiligheidsmaatregel object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                      </section>
  
                      <section id="content-1-7" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Opmerking handhavingsactor"
                                      data-vl-icon="business-graph-bar">
                                      <div class="opmerking-mil-hha chartTabelsm"></div>
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <section  is="vl-region">
                              <div is="vl-grid" id="content-3">
                                  <h2 is="vl-h2">Cijfers handhaving ruimtelijke ordening</h2>
                              </div>
  
                              <div is="vl-grid" id="content-3-1">
                                  <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                      <vl-infoblock data-vl-title="Verbalisanten en stedenbouwkundige inspecteurs en VTE"
                                          data-vl-icon="business-graph-bar">
                                      </vl-infoblock>
                                  </div>
                              </div>
  
                              <div is="vl-grid" class="data-top-bot">
                                  <div is="vl-column" data-vl-size=5>
                                      <vl-info-tile data-vl-auto-open=true>
                                          <span slot="title">Verbalisanten<span slot="subtitle">
                                              </span></span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-natuurlijke persoon.png">
                                              <div class="RO-KPI-Stedenbouwkundige object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
                                  <div is="vl-column" data-vl-size=7>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verbalisanten/stedenbouwkundige inspecteurs<span
                                              slot="subtitle">
                                          </span></span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-natuurlijke persoon.png">
                                          <div class="RO-KPI-Gecombi object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                                 
                              </div>
                              <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12>
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Stedenbouwkundige inspecteurs<span slot="subtitle">
                                      </span></span>
                                  <div slot="content">
                                      <img class="icon" src="assets/icons/PNG-natuurlijke persoon.png">
                                      <div class="RO-KPI-Verbalitisanten object"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                              </div>
                              <div is="vl-grid" class="data-top-bot">
                                  <div is="vl-column" data-vl-size=4>
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Totaal VTE<span
                                                  slot="subtitle">
                                              </span>
                                          </span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-trainer_B.png">
                                              <div class="RO-KPI-VTE object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
                                  <div is="vl-column" data-vl-size=8>
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Classificatie VTE<span
                                                  slot="subtitle">
                                              </span>
                                          </span>
                                          <div slot="content">
  
                                              <div class="RO-Barchart-VTE chart"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
                              </div>
                          </section>
                          <section id="content-3-2" is="vl-region">
                              <div is="vl-grid">
                                  <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                      <vl-infoblock data-vl-title="Klachten" data-vl-icon="business-graph-bar">
  
                                      </vl-infoblock>
                                  </div>
                              </div>
  
                              <div is="vl-grid">
  
                                  <div is="vl-column" data-vl-size=12>
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Klachten<span
                                                  slot="subtitle">
                                              </span>
                                          </span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-Meld_verdachte_handelingen.png">
                                              <div class="RO-KPI-Klachten object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
  
                              </div>
                          </section>
  
                          <section id="content-3-3" is="vl-region">
                              <div is="vl-grid">
                              <vl-tooltip data-vl-placement=bottom>
                                          De som van de gegevens uit de verschillende categorieën kan verschillen van het
                                          totaal aantal aangezien niet alle actoren het totaal aantal kennen, maar wel
                                          gegevens aanleveren in de categorieën
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
  
                                  <div is="vl-column" data-vl-size=4>
                                      
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Controles<span
                                                  slot="subtitle">
                                              </span>
                                          </span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-onderzoek.png">
                                              <div class="RO-KPI-Controles object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
                                  <div is="vl-column" data-vl-size=8>
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Aantal controles per
                                              categorie<span slot="subtitle">
                                              </span>
                                          </span>
                                          <div slot="content">
  
                                              <div class="RO-Barchart-Controles chart"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
  
                              </div>
                          </section>
  
                          <section id="content-3-4" is="vl-region">
                              <div is="vl-grid">
                                  <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                      <vl-infoblock data-vl-title="Aantal aanvankelijke controles met schending"
                                          data-vl-icon="business-graph-bar">
                                          De overtredingsgraad wordt - indien de data gekend zijn - berekend aan de hand
                                          van de verhouding van het totaal aantal aanvankelijke controles met schending
                                          ten opzichte van het aantal aanvankelijke controles naar aanleiding van klachten
                                          en meldingen en het aantal aanvankelijke controles op eigen initiatief.
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
                                              <img class="icon" src="assets/icons/PNG-fout.png">
                                              <div class="RO-KPI-Aanvankelijke-Controles object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
                                  <div is="vl-column" data-vl-size=6>
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Overtredingsgraad<span
                                                  slot="subtitle">
                                              </span>
                                          </span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-barometer.png">
                                              <div class="RO-KPI-Overtredingsgraad object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
                              </div>
                          </section>
                          <section id="content-3-5" is="vl-region">
  
                              <div is="vl-grid">
                                  <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                      <vl-infoblock data-vl-title="Instrumentarium" data-vl-icon="business-graph-bar">
  
                                      </vl-infoblock>
                                  </div>
                              </div>
  
  
                              <div is="vl-grid">
                                  <div is="vl-column" data-vl-size=6>
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Raadgeving<span
                                                  slot="subtitle">
                                              </span>
                                          </span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-Informatie.png">
                                              <div class="RO-KPI-Raadgeving object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
  
                                  <div is="vl-column" data-vl-size=6>
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Aanmaning<span
                                                  slot="subtitle">
                                              </span>
                                          </span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-Kalender.png">
                                              <div class="RO-KPI-Aanmaning object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
                              </div>
  
                              <div is="vl-grid" class="data-top-bot">
  
                                  <div is="vl-column" data-vl-size=6>
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Verslag van
                                              vaststelling<span slot="subtitle">
                                              </span>
                                          </span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-klipbord.png">
                                              <div class="RO-KPI-Verslag-van-vastelling object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
                                  <div is="vl-column" data-vl-size=6>
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Proces-verbaal<span
                                                  slot="subtitle">
                                              </span>
                                          </span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-PV.png">
                                              <div class="RO-KPI-Proces-verbaal object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
                              </div>
  
  
                              <div is="vl-grid" class="data-top-bot">
                                  <div is="vl-column" data-vl-size=12>
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Bevel tot staking<span
                                                  slot="subtitle">
                                              </span>
                                          </span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-time-out.png">
                                              <div class="RO-KPI-Beveltotstaking object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
                              </div>
  
                              <div is="vl-grid" class="data-top-bot">
                                  <div is="vl-column" data-vl-size=12>
                                      <vl-info-tile data-vl-auto-open=true>
                                          <span slot="title">Bestuurlijke maatregelen</span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                              <div class="RO-KPI-Bestuurlijk-maatregel object"></div>
                                              <div is="vl-grid">
                                                  <div is="vl-column" data-vl-size=6>
                                                      <vl-info-tile data-vl-auto-open=true>
                                                          <span slot="title">Met dwangsom</span>
                                                          <div slot="content">
                                                              <div
                                                                  class="RO-KPI-Bestuurlijk-maatregel-met-dwangsom object">
                                                              </div>
                                                          </div>
                                                      </vl-info-tile>
                                                  </div>
                                                  <div is="vl-column" data-vl-size=6>
                                                      <vl-info-tile data-vl-auto-open=true>
                                                          <span slot="title">Zonder dwangsom</span>
                                                          <div slot="content">
  
                                                              <div
                                                                  class="RO-KPI-Bestuurlijk-maatregel-zonder-dwangsom object">
                                                              </div>
                                                          </div>
                                                      </vl-info-tile>
                                                  </div>
                                              </div>
                                          </div>
  
                                      </vl-info-tile>
  
                                  </div>
                              </div>
  
                              <div is="vl-grid">
                                  <div is="vl-column" data-vl-size=5>
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Afgesloten minnelijke
                                              schikking<span slot="subtitle">
                                              </span>
                                          </span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-overeenkomst.png">
                                              <div class="RO-KPI-minnelijk object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
  
                                  <div is="vl-column" data-vl-size=7>
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Ingeleide herstelvordering
                                              bij Openbaar Ministerie
                                          </span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-EHBO.png">
                                              <div class="RO-KPI-openbaarmin object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
                              </div>
  
                              <div is="vl-grid" class="data-top-bot">
                                  <div is="vl-column" data-vl-size=5>
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Herstel gevorderd bij
                                              burgelijke rechter
                                          </span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-EHBO.png">
                                              <div class="RO-KPI-burgerlijkrechter object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
                                  <div is="vl-column" data-vl-size=7>
                                      <vl-info-tile data-vl-auto-open=true><span slot="title">Ambtshalve uitvoering
                                              gerechtelijke<br /> herstelmaatregel
                                          </span>
                                          <div slot="content">
                                              <img class="icon" src="assets/icons/PNG-justitie.png">
                                              <div class="RO-KPI-gerechtambt object"></div>
                                          </div>
                                      </vl-info-tile>
                                  </div>
                              </div>
                          </section>
  
  
  
                          <section id="content-3-6" is="vl-region">
                              <div is="vl-grid">
                                  <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                      <vl-infoblock data-vl-title="Opmerking handhavingsactor"
                                          data-vl-icon="business-graph-bar">
                                          <div class="opmerking-ro-hha chartTabelsm"></div>
                                      </vl-infoblock>
                                  </div>
                              </div>
  
                              <section is="vl-region" id="content-4">
                              <vl-typography>
                              <h4>Cijfers andere handhavingsactoren</h4></vl-typography>
                                <vl-alert>
                                    <p>
                                        <a is="vl-link-button" href="/public/provinciaal">Per provincie</a>
                                        <a is="vl-link-button" href="/public/gemeenten">Per gemeenten</a>
                                        <a is="vl-link-button" href="/public/hogeraad">Hoge Raad</a>
                                    </p>
                                    <br>
                                    <p>
                                        <a is="vl-link-button" href="/public/strafrechtelijk">Strafrechtelijk en bestuurlijk
                                            vervolgtraject</a>
                                    </p>
                                </vl-alert>
                                <vl-alert
                                data-vl-title="Download de data">
                                <p><a href="https://drive.google.com/drive/folders/1WTo0_wMdlJxqIuW4lSV8-fK8DuHRI3_w?usp=sharing" target="_blank">Klik hier om de data te downloaden</a></p>
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
                                      Cijfers milieuhandhaving
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
                                              <a href="#content-1-2" data-vl-parent="content-1">Toezichthouders en VTE</a>
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
                              <li is="vl-side-navigation-item" data-vl-parent="content-3">
                                  <a is="vl-side-navigation-toggle" href="#content-3" data-vl-child="content-3">
                                      Cijfers handhaving ruimtelijke ordening
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                                  <ul>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-1" data-vl-parent="content-3">Verbalisanten en
                                                  stedenbouwkundige inspecteurs en VTE</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-2" data-vl-parent="content-3">Klachten</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-3" data-vl-parent="content-3">Controles</a>
                                          </div
                                          <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-4" data-vl-parent="content-3">Aanvankelijke controles met schending</a>
                                          </div>
                                      </li>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-5" data-vl-parent="content-3">Instrumentarium</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-6" data-vl-parent="content-3">Opmerking handhavingsactor</a>
                                          </div>
                                      </li>
                                      
                                  </ul>
                              </li>
                              <li is="vl-side-navigation-item" data-vl-parent="content-4">
                                  <a is="vl-side-navigation-toggle" href="#content-4" data-vl-child="content-4">
                                      Bekijk ook andere thema's
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
      title: "GewestelijkAnalyseView",
    });
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define("gewestelijkanalyse-view", GewestelijkAnalyseView);
