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
      `
      <vl-functional-header data-vl-back="Terug" data-vl-back-link="/gewestelijk"
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
                          <h2 is="vl-h2">Een wegwijzer doorheen de cijfers en grafieken</h2>
                          <p>
                              Deze pagina toont een inzichtelijke beeld over de cijfers van gewestelijke
                              handhavingsactoren.
                              De grafieken zijn volledig interactief en de cijfers zullen worden gewijzigd naargelang de
                              gekozen filtering.
                              Uw aangeduide filtering kan op elk moment verwijderd worden met de selectiebalk hieronder.
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
                                      Hierboven staan uw actieve selecties op de pagina en zullen de cijfers aangepast
                                      worden op basis van
                                      de geselecteerde
                                      gewestelijke handhavingsactor. Dit selectiebalk is interactief en u kunt selecties
                                      aanpassen of
                                      toevoegen.
                                  </vl-infoblock>
  
  
                                  <vl-infoblock data-vl-title="Uw selectie mogelijkheden"
                                      data-vl-icon="cursor-finger-left">
                                      In de filterpaneel staan de mogelijke selecties dat u kunt uitvoeren op de pagina.
                                      U kunt meerdere gewestelijke handhavingsactoren aanduiden en de cijfers en grafieken
                                      zullen
                                      aangepast worden
                                      op basis van uw selecties.
                                  </vl-infoblock>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-2" is="vl-region">
                          <h3 is="vl-h3">Cijfers voor milieu handhaving</h3>
                          <div is="vl-grid">
                          <div is="vl-column data-vl-size=12 class="data-top-bot">
                              <vl-infoblock data-vl-title="Gewestelijke toezichthouders en VTE"
                                  data-vl-icon="business-graph-bar">
                                  In deze sectie worden de aantal gewestelijke toezichthouders aangegeven met de totaal
                                  aantal besteed
                                  aan VTE.
                                  De grafiek toont de verdeling aan van de VTE toezicthouders ten opzichte van de
                                  administratieve en
                                  jurisdische ondersteuning.
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
                                      <span slot="title">Verdeling van VTE toezichthouders en administratieve en
                                          juridische ondersteuning
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
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Klachten" data-vl-icon="business-graph-bar">
                                      De klachten voor milieu worden onderverdeeld in negen milieucategoriën.
                                      In de grafiek wordt de verdeling van de totale hoeveelheid klachten onderverdeeld in
                                      de
                                      overeenkomstige milieucategoriën.
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
                                      <span slot="title">Aantal klachten per milieucategorie</span>
  
                                      <div slot="content">
                                          <div class="MIL-Barchart-Klachten chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                      </section>
  
                      <section id="content-1-4" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Controles" data-vl-icon="business-graph-bar">
                                      Hieronder bevindt zich een overzicht van de cijfers voor de controles van de
                                      omgevingshandhavingsrapportage.
                                      De grafiek wordt toont de verdeling van controles per controletype.
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
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Verdeling controles per
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
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Aanvankelijke controles met overtreding"
                                      data-vl-icon="business-graph-bar">
                                      Hierbij worden de controles weergegeven met een overtreding. De grafiek toont aan
                                      de cateogriën met de meeste overtredingen.
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verdeling controles per categorie</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-fout.png">
                                          <div class="MIL-KPI-Aanvankelijke-Controles object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verdeling controles per categorie</span>
                                      <div slot="content">
                                          <div class="MIL-bar-Aanvankelijke-Controles chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-6" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Instrumentarium" data-vl-icon="business-graph-bar">
                                      De instrumentarium is een verzameling van verschillende handelingen die worden
                                      uitgevoerd in kader
                                      van milieuhandhaving.
  
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Raadgeving</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="MIL-KPI-Raadgeving object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aanmaning</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="MIL-KPI-Aanmaning object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verslag van vaststelling</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="MIL-KPI-Verslag-van-vastelling object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid">
  
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Proces-verbaal</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-time-out.png">
                                          <div class="MIL-KPI-Proces-verbaal object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijk maatregel</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div class="MIL-KPI-Bestuurlijk-maatregel object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Bestuurlijk maatregel met
                                          dwangsom </span>
  
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div class="MIL-KPI-Bestuurlijk-maatregel-met-dwangsom object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijk maatregel zonder dwangsom</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div class="MIL-KPI-Bestuurlijk-maatregel-zonder-dwangsom object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Bestuurlijk maatregel zonder
                                          dwangsom </span>
  
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div class="MIL-KPI-Bestuurlijk-maatregel-zonder-dwangsom-percent object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Veiligheidsmaatregel</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-opgepast.png">
                                          <div class="MIL-KPI-Veiligheidsmaatregel object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid">
  
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Veiligheidsmaatregel</span>
  
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-opgepast.png">
                                          <div class="MIL-KPI-Veiligheidsmaatregel-percent object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Overtredingsgraad</span>
  
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-barometer.png">
                                          <div class="MIL-KPI-Overtredingsgraad object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
  
                      </section>
  
                      <section id="content-2" is="vl-region">
  
                      </section>
                      <section is="vl-region">
                          <div is="vl-grid" id="content-3">
                              <h2 is="vl-h2">Cijfers voor ruimtelijke ordening</h2>
                          </div>
  
                          <div is="vl-grid" id="content-3-1">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Verbalitisanten en stedenbouwkundige inspecteurs"
                                      data-vl-icon="business-graph-bar">
                                      Hieronder bevindt zich een overzicht van de cijfers voor de controles van de
                                      omgevingshandhavingsrapportage.
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
                                          <div class="RO-KPI-Stedenbouwkundige object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Stedenbouwkundige inspecteurs/Verbalitisanten<span
                                              slot="subtitle">
                                          </span></span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-natuurlijke persoon.png">
                                          <div class="RO-KPI-Verbalitisanten object"></div>
  
  
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
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
                      </section>
  
                      <section id="content-3-2" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Totaal VTE" data-vl-icon="business-graph-bar">
                                      Hieronder bevindt zich een overzicht van de cijfers voor de controles van de
                                      omgevingshandhavingsrapportage.
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
                                          <div class="RO-KPI-VTE object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Totaal VTE<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
  
                                          <div class="RO-Barchart-VTE chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-3-3" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Een overzicht voor ruimtelijke ordening"
                                      data-vl-icon="business-graph-bar">
                                      Hieronder bevindt zich een overzicht van de cijfers voor de controles van de
                                      omgevingshandhavingsrapportage.
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Klachten<span
                                              slot="subtitle"><img src="">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Meld_verdachte_handelingen.png">
                                          <div class="RO-KPI-Klachten object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Controles<span
                                              slot="subtitle"><img src="">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-onderzoek.png">
                                          <div class="RO-KPI-Controles object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Aanvankelijke controles met
                                          overtreding<span slot="subtitle"><img src="">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-onderzoek.png">
                                          <div class="RO-KPI-Aanvankelijke-Controles object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-3-4" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Controles" data-vl-icon="business-graph-bar">
                                      Hieronder bevindt zich een overzicht van de cijfers voor de controles van de
                                      omgevingshandhavingsrapportage.
                                  </vl-infoblock>
                              </div>
                          </div>
  
  
                          <div is="vl-grid">
  
  
                              <div is="vl-column" data-vl-size=12>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Verdeling van controles<span
                                              slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
  
                                          <div class="RO-Barchart-Controles chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                      </section>
                      <section id="content-3-5" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Instrumentarium" data-vl-icon="business-graph-bar">
                                      Hieronder bevindt zich een overzicht van de cijfers voor de controles van de
                                      omgevingshandhavingsrapportage.
                                  </vl-infoblock>
                              </div>
                          </div>
  
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Raadgeving<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="RO-KPI-Raadgeving object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Aanmaning<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="RO-KPI-Aanmaning object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Verslag van vaststelling<span
                                              slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="RO-KPI-Verslag-van-vastelling object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid">
  
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Proces-verbaal<span
                                              slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-time-out.png">
                                          <div class="RO-KPI-Proces-verbaal object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijk maatregel</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div class="RO-KPI-Bestuurlijk-maatregel object"></div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijk maatregel zonder dwangsom</span>
                                      <div slot="content">
  
                                          <div class="RO-KPI-Bestuurlijk-maatregel-zonder-dwangsom object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Bestuurlijk maatregel zonder
                                          dwangsom
                                      </span>
                                      <div slot="content">
  
                                          <div class="RO-KPI-Bestuurlijk-maatregel-zonder-dwangsom-percent object">
                                          </div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Bestuurlijk maatregel met
                                          dwangsom<span slot="subtitle"><img src="">
                                          </span>
                                      </span>
                                      <div slot="content">
  
                                          <div class="RO-KPI-Bestuurlijk-maatregel-met-dwangsom object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Bestuurlijk maatregel met
                                          dwangsom<span slot="subtitle"><img src="">
                                          </span>
                                      </span>
                                      <div slot="content">
  
                                          <div class="RO-KPI-Bestuurlijk-maatregel-met-dwangsom-percent object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section is="vl-region" id="content-4">
                          <h3 is="vl-h3">Bekijk cijfers voor andere thema's</h3>
                          <vl-alert data-vl-closable=false data-vl-icon="info-circle"
                              data-vl-title="Bekijk de cijfers van andere thema's" data-vl-type="info">
                              <p>
                                  <a is="vl-link-button" href="/provinciaalAnalyse">Provinciaal</a>
                                  <a is="vl-link-button" href="/provinciaalAnalyse">Gemeentelijk</a>
                                  <a is="vl-link-button" href="/provinciaalAnalyse">Strafrechtelijk en bestuurlijk
                                      vervolgtraject</a>
                              </p>
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
                                                  met overtreding</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-6" data-vl-parent="content-1">Instrumentarium</a>
                                          </div>
                                      </li>
                                  </ul>
                              </li>
                              <li is="vl-side-navigation-item" data-vl-parent="content-3">
                                  <a is="vl-side-navigation-toggle" href="#content-3" data-vl-child="content-3">
                                      Cijfers voor ruimtelijke ordening
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                                  <ul>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-1" data-vl-parent="content-3">Verbalitisanten en
                                                  stedenbouwkundige inspecteurs</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-2" data-vl-parent="content-3">VTE</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-3" data-vl-parent="content-3">Overzicht</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-4" data-vl-parent="content-3">Controles</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-5" data-vl-parent="content-3">Instrumentarium</a>
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
  </section>
      `,
      title: "GewestelijkAnalyseView",
    });
  }
  
  createRenderRoot() {
    return this;
  }
}
customElements.define("gewestelijkanalyse-view", GewestelijkAnalyseView);
