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
  
  
  <section is="vl-region">
      <div is="vl-layout">
          <div is="vl-grid" data-vl-is-stacked>
              <div is="vl-column" data-vl-size="8" data-vl-medium-size="8" data-vl-small-size="8"
                  data-vl-extra-small-size="12">
                  <div is="vl-side-navigation-reference">
                      <section id="content-1" is="vl-region">
                          <h2 is="vl-h2">Een wegwijzer doorheen de cijfers en grafieken</h2>
                          <p>
                              Deze pagina toont een inzichtelijke beeld over de cijfers van provinciale
                              handhavingsactoren.
                              De grafieken zijn volledig interactief en de cijfers zullen worden gewijzigd naargelang de
                              gekozen filtering.
                              Uw aangeduide filtering kan op elk moment verwijderd worden met de selectiebalk hieronder.
                          </p>
                          <br>
                          <p><a is="vl-link"
                                  href="https://navigator.emis.vito.be/mijn-navigator?woId=25226&woLang=nl&woVersion=2022-03-11"
                                  target="_blank">Bekijk de bevoegheden van de provincies</a></p>
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
                      <section id="content-1-1" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Provinciegouverneur" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=3>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijke maatregelen</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div class="BESTM object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=3>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Veiligheids maatregelen</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-opgepast.png">
                                          <div class="PROV-KPI-GOV-veiligsheidsmaatregel object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=3>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijke maatregelen met dwangsom</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div class="PROV-KPI-GOV-met-dwangsom object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=3>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijke maatregelen zonder dwangsom</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div class="PROV-KPI-GOV-zonder-dwangsom object"></div>
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
                                      De klachten voor milieu worden onderverdeeld in negen milieucategoriën.
                                      In de grafiek wordt de verdeling van de totale hoeveelheid klachten onderverdeeld in
                                      de
                                      overeenkomstige milieucategoriën.
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
                                      <span slot="title">Totaal VTE</span>
                                      <div slot="content">
                                          <div class="TotaalVTEChart chart"></div>
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
                                      <span slot="title">Verdeling van aantal klachten per categorie</span>
                                      <div slot="content">
                                          <div class="KlachtenChart chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-4" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Controles" data-vl-icon="business-graph-bar">
                                      De klachten voor milieu worden onderverdeeld in negen milieucategoriën.
                                      In de grafiek wordt de verdeling van de totale hoeveelheid klachten onderverdeeld in
                                      de
                                      overeenkomstige milieucategoriën.
                                  </vl-infoblock>
                              </div>
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
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Aanvankelijk controles met schending"
                                      data-vl-icon="business-graph-bar">
                                      De klachten voor milieu worden onderverdeeld in negen milieucategoriën.
                                      In de grafiek wordt de verdeling van de totale hoeveelheid klachten onderverdeeld in
                                      de
                                      overeenkomstige milieucategoriën.
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aanvankelijke controles met schending</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-onderzoek.png">
                                          <div class="Aanvankelijkecontrolesmetovertreding object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
  
                              <div is="vl-column" data-vl-size=8 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verdeling aanvankelijke controles met schending</span>
                                      <div slot="content">
  
                                          <div class="PROV-BAR-Controles chart"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                      </section>
  
                      <section id="content-2" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=12 class="data-top-bot">
                                  <vl-infoblock data-vl-title="Instrumentarium" data-vl-icon="business-graph-bar">
                                      De klachten voor milieu worden onderverdeeld in negen milieucategoriën.
                                      In de grafiek wordt de verdeling van de totale hoeveelheid klachten onderverdeeld in
                                      de
                                      overeenkomstige milieucategoriën.
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=3 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Raadgeving</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="Raadgeving object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=3 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aanmaning</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-Kalender.png">
                                          <div class="Aanmaning object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=3 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verslag van vaststelling</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-klipbord.png">
                                          <div class="PROV-KPI-verslagvanvastelling objectinstrumentarium"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=3 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Proces-verbaal</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-time-out.png">
                                          <div class="Procesverbaal object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=4 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijke maatregel</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div class="PROV-KPI-BestuurlijkmaatregelInstrumentarium object"></div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijke maatregel met dwangsom</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div
                                              class="PROV-KPI-BestuurlijkmaatregelInstrumentariummetdwangsom objectinstrumentarium">
                                          </div>
                                      </div>
                                  </vl-info-tile>
                              </div>
                              <div is="vl-column" data-vl-size=4 class="data-top-bot">
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Bestuurlijke maatregel zonder dwangsom</span>
                                      <div slot="content">
                                          <img class="icon" src="assets/icons/PNG-risicoanalyse.png">
                                          <div
                                              class="PROV-KPI-BestuurlijkmaatregelInstrumentariumzonderdwangsom objectinstrumentarium">
                                          </div>
                                      </div>
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
                      </section>
  
                      <section is="vl-region" id="content-3">
                          <h3 is="vl-h3">Bekijk cijfers voor andere thema's</h3>
                          <vl-alert data-vl-icon="info-circle" data-vl-title="Bekijk de cijfers van andere thema's"
                              data-vl-type="info">
                              <p>
                              <a is="vl-link-button" href="/public/gewestelijk">Gewest</a>
                              <a is="vl-link-button" href="/public/gemeenten">Gemeenten</a>
                              <a is="vl-link-button" href="/public/hogeraad">Hoge raad</a>
                              <a is="vl-link-button" href="/public/strafrechtelijk">Strafrechtelijk en bestuurlijk
                                  vervolgtraject</a>
                          </p>
                              <br>
                              <p>
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
                                      Provinciale handhavingsactoren
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                                  <ul>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-1" data-vl-parent="content-1">Provinciegouverneurs</a>
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
