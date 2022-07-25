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
                              Deze pagina toont een inzichtelijke beeld over de cijfers van gemeentelijke
                              handhavingsactoren.
                              De grafieken zijn volledig interactief en de cijfers zullen worden gewijzigd naargelang de
                              gekozen filtering.
                              Uw aangeduide filtering kan op elk moment verwijderd worden met de selectiebalk hieronder.
                          </p>
                      </section>
  
                      <section id="content-1-1" is="vl-region">
                          <div class="toolbar"></div>
                          <div is="vl-grid">
                          <div is="vl-column" data-vl-size=12>
                          <vl-infoblock data-vl-title="Selectiebalk" data-vl-icon="cursor-finger-up">
                              Hierboven staan uw actieve selecties op de pagina en zullen de cijfers aangepast
                              worden op basis van
                              de geselecteerde
                              gemeenten. Dit selectiebalk is interactief en u kunt selecties
                              aanpassen of
                              toevoegen.
                          </vl-infoblock>
                          <vl-infoblock data-vl-title="Uw selectie mogelijkheden"
                              data-vl-icon="cursor-finger-down">
                              In de filterpaneel staan de mogelijke selecties dat u kunt uitvoeren op de pagina.
                              U kunt meerdere gewestelijke handhavingsactoren aanduiden en de cijfers en grafieken
                              zullen
                              aangepast worden
                              op basis van uw selecties.
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
                              <div is="vl-column" data-vl-size=6>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <div slot="content">
                                          <div class="listboxGEMGAS listboxProvStyle"></div>
                                      </div>
                                  </vl-info-tile>
                              </div></div>
                      </section>
                      <section id="content-1-2" is="vl-region">
                      <h3 is="vl-h3">Cijfers voor milieu handhaving</h3>
                      <div is="vl-grid">
                          <div is="vl-column data-vl-size=12 class=" data-top-bot">
                              <vl-infoblock data-vl-title="Burgemeester"
                                  data-vl-icon="business-graph-bar">
                              </vl-infoblock>
                          </div>
                      </div>

                      <div is="vl-grid">
                          <div is="vl-column" data-vl-size=12 class="data-top-bot">
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Bestuurlijke maatregelen</span>
                                  <div slot="content">
                                      <img class="icon" src="assets/icons/PNG-natuurlijke persoon.png">
                                      <div class="GEM-burgbestm object"></div>
                                  </div>
                              </vl-info-tile>
                          </div></div>

                          <div is="vl-grid">
                          <div is="vl-column" data-vl-size=4 class="data-top-bot">
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Bestuurlijke maatregel zonder dwangsom</span>
                                  <div slot="content">
                                      <img class="icon" src="">
                                      <div class="GEM-burgbestzonder object"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                          <div is="vl-column" data-vl-size=4 class="data-top-bot">
                          <vl-info-tile data-vl-auto-open=true>
                              <span slot="title">Bestuurlijke maatregel met dwangsom</span>
                              <div slot="content">
                                  <img class="icon" src="">
                                  <div class="GEM-burgbestmet object"></div>
                              </div>
                          </vl-info-tile>
                      </div>
                      <div is="vl-column" data-vl-size=4 class="data-top-bot">
                      <vl-info-tile data-vl-auto-open=true>
                          <span slot="title">Veiligheidsmaatregelen met % tijdig uitgevoerd</span>
                          <div slot="content">
                              <img class="icon" src="">
                              <div class="GEM-burgveilig object"></div>
                          </div>
                      </vl-info-tile>
                  </div>
                      </div>
                  </section>
  
                      <section id="content-1-2" is="vl-region">
                          <h3 is="vl-h3">Cijfers voor milieuhandhaving</h3>
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Gemeentelijke toezichthouders en VTE"
                                      data-vl-icon="business-graph-bar">
                                      In deze sectie worden de aantal gemeentelijke toezichthouders aangegeven met de
                                      totaal
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
                                          <div class="GEM-Toezicthouders object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=6 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Totaal VTE</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-trainer_B.png">
                                          <div class="GEM-TotaalVTE object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=5>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Toezicthouders onderverdeling<br>Hover op de grafiek voor meer info
                                      </span>
                                      <div slot="content">
                                          <div class="GEM-PieToezicthouders chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=7>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verdeling van VTE toezichthouders en administratieve en
                                          juridische ondersteuning
                                      </span>
                                      <div slot="content">
                                          <div class="GEM-VTEBar chart"></div>
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
                                          <div class="GEM-klachten object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal klachten per milieucategorie</span>
  
                                      <div slot="content">
                                          <div class="GEM-KlachtenBar chart"></div>
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
                                          <div class="GEM-controles object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Verdeling controles per
                                          categorie</span>
                                      <div slot="content">
                                          <div class="GEM-ControlesBar chart"></div>
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
                                          <div class="GEM-AAControles object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=8>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verdeling controles per categorie</span>
                                      <div slot="content">
                                          <div class="GEM-AAControlesBar chart"></div>
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
                              <div is="vl-column" data-vl-size=3>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Raadgeving</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="GEM-Raadgeving object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=3>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aanmaning</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="GEM-Aanmaning object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
  
  
                              <div is="vl-column" data-vl-size=3>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Proces-verbaal</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-time-out.png">
                                          <div class="GEM-pv object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=3>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verslag van vaststelling</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="GEM-verslagvastelling objectinstrumentarium"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <br>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijk maatregel</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div class="GEM-bestuurlijkmaatregel object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Bestuurlijk maatregel met
                                          dwangsom </span>
  
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div class="GEM-bestuurlijkmaatregelmet objectinstrumentarium">
                                          </div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijk maatregel zonder dwangsom</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div
                                              class="GEM-bestuurlijkmaatregelzonder objectinstrumentarium">
                                          </div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                          <br>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Veiligheidsmaatregel</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-opgepast.png">
                                          <div class="GEM-veiligheids object"></div>
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
                                      Hieronder bevindt zich een overzicht van de cijfers voor verbalitisanten en
                                      inspecteurs voor ruimtelijke ordening.
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
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Stedenbouwkundige inspecteurs<span slot="subtitle">
                                          </span></span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-natuurlijke persoon.png">
                                          <div class="GEM-stedenbouwkundige objectinstrumentarium"></div>
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
                                          <div class="GEM-stedenbouwkundigeinspec objectinstrumentarium"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-3-2" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Totaal VTE" data-vl-icon="business-graph-bar">
                                      In deze sectie wordt de Totaal besteed aan VTE weergegeven voor ruimtelijke
                                      ordening.
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
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Totaal VTE<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
  
                                          <div class="GEM-charttotaalvtero chart"></div>
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
                                      Hieronder bevindt zich een overzicht voor de klachten en controles voor ruimtelijk
                                      ordening.
                                      Bij de aanvankelijk controles wordt ook de overtredingsgraad weergegeven.
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Klachten<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Meld_verdachte_handelingen.png">
                                          <div class="Gem-ro-klachten object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
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
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Aanvankelijke controles met
                                          overtreding<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-onderzoek.png">
                                          <div class="Gem-ro-AAcontroles objectinstrumentarium"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-3-4" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Controles" data-vl-icon="business-graph-bar">
                                      Hieronder bevindt zich een verdeling van de controles voor ruimtelijke ordening
                                      onderverdeeld in verschillende categoriën.
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
  
                                          <div class="Gem-ro-barcontroles chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                      </section>
                      <section id="content-3-5" is="vl-region">
                      <div is="vl-grid">
                          <div is="vl-column" data-vl-size=12 class="data-top-bot">
                              <vl-infoblock data-vl-title="Overtredingsgraad" data-vl-icon="business-graph-bar">
                                  
                              </vl-infoblock>
                          </div>
                      </div>


                      <div is="vl-grid">


                          <div is="vl-column" data-vl-size=12>
                              <vl-info-tile data-vl-auto-open=true><span slot="title">Overtredingsgraad<span
                                          slot="subtitle">
                                      </span>
                                  </span>
                                  <div slot="content">

                                      <div class="Gem-ro-overtredingsgraad object"></div>
                                  </div>
                              </vl-info-tile>
                          </div>
                      </div>

                  </section>
                      <!--
                      <section id="content-3-5" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Instrumentarium" data-vl-icon="business-graph-bar">
                                      De instrumentarium is een verzameling van verschillende handelingen die worden
                                      uitgevoerd in kader
                                      van ruimtelijke ordening.
                                  </vl-infoblock>
                              </div>
                          </div>
  
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=3>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Raadgeving<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="RO-KPI-Raadgeving object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=3>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Aanmaning<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="RO-KPI-Aanmaning object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=3>
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
                              <div is="vl-column" data-vl-size=3>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Verslag van vaststelling<span
                                              slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="RO-KPI-Verslag-van-vastelling objectinstrumentarium"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <br>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=3>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Bestuurlijk maatregel<span
                                              slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="RO-KPI-Bestuurlijk-maatregel object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Bestuurlijk maatregel met
                                          dwangsom<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="RO-KPI-Bestuurlijk-maatregel-met-dwangsom object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=5>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Bestuurlijk maatregel zonder
                                          dwangsom<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-time-out.png">
                                          <div class="RO-KPI-Bestuurlijk-maatregel-zonder-dwangsom object"></div>
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                          <br />
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=3>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Bevel tot staking<span
                                              slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="RO-KPI-Beveltotstaking object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=4>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Afgesloten minnelijke
                                          schikking<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="RO-KPI-minnelijk objectinstrumentarium"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=5>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Ambtshalve uitvoering
                                          gerechtelijke herstelvordering<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="RO-KPI-gerechtambt objectinstrumentarium"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                          </div>
                          <br>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=6>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Herstelvordering: openbaar
                                          ministerie<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="RO-KPI-openbaarmin object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=6>
                                  <vl-info-tile data-vl-auto-open=true><span slot="title">Herstelvordering: burgerlijk
                                          rechter<span slot="subtitle">
                                          </span>
                                      </span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="RO-KPI-burgerlijkrechter object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                          </div>
  
                      </section>-->
  
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
      title: "GemeentenDashboardView",
    });
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define("gemeentendashboard-view", GemeentenDashboardView);
