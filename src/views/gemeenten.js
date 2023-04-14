import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/legacy/tabs";
import { page } from "../templates/page";

export class Gemeenten extends LitElement {
  render() {
    return page({
      children: html`
      <section is="vl-region">
      <div is="vl-layout">
          <div is="vl-grid" data-vl-is-stacked>
              <div is="vl-column" data-vl-size="8" data-vl-medium-size="8" data-vl-small-size="8"
                  data-vl-extra-small-size="12">
                  <div is="vl-side-navigation-reference">
                      <section id="content-1" is="vl-region">
                          <h3 is="vl-h3">Handhaving in de gemeenten</h2>
                              <p is="vl-text">
                                  De gemeenten hebben handhavingsbevoegdheden ten aanzien van de <a
                                      href="https://navigator.emis.vito.be/mijn-navigator?woId=25227"
                                      target="_blank">milieuregelgeving</a>
                                  en/of de regelgeving inzake <a
                                      href="https://navigator.emis.vito.be/mijn-navigator?woId=74714&woLang=nl&woVersion=2022-03-11"
                                      target="_blank">ruimtelijke ordening</a>. De burgemeester of zijn plaatsvervanger is in bepaalde
                                  gevallen
                                  bevoegd voor het opleggen van bestuurlijke maatregelen en kan veiligheidsmaatregelen nemen in geval
                                  van een
                                  aanzienlijk risico voor mens of milieu. De lokale toezichthouders oefenen daarnaast het toezicht uit
                                  op de
                                  toepassing van specifieke milieuvoorschriften. De lokale verbalisanten, de agenten en de officieren\
                                  van
                                  gerechtelijke politie en de stedenbouwkundige inspecteurs/burgemeesters handhaven de regelgeving van
                                  de
                                  Vlaamse Codex Ruimtelijke Ordening.
                                  De gemeenten kunnen hun handhavingsactiviteiten organiseren binnen de eigen gemeentelijke
                                  administratie
                                  en/of een intergemeentelijke vereniging en/of intergemeentelijke vereniging en/of de lokale politie.
                                  In de individuele handhavingsfiches en in de cartografische weergaves wordt gerapporteerd over de
                                  uitvoering
                                  van hun handhavingsactiviteiten in het voorgaand jaar.
                              </p>
                              <p>
                              </p>
                              <div is="vl-grid">
                                  <div is="vl-column">
                                      <div id="content-2" class="data-top-bot">
                                          <a is="vl-doormat" href="/public/gemeentenDashboard">
                                              <h2 is="vl-doormat-title">Analyseer de cijfers voor milieu</h2>
                                              <div is="vl-doormat-text">
                                              &#x2022 Dashboard - individuele gemeenten
                                              </div>
                                          </a>
                                      </div>
                                    </div>
                                  <div is="vl-column">
                                      <div  id="content-2" class="data-top-bot">
                                          <a is="vl-doormat" href="/public/gemeentenDashboardro">
                                              <h2 is="vl-doormat-title">Analyseer de cijfers voor ruimtelijke ordening</h2>
                                              <div is="vl-doormat-text">
                                              &#x2022 Dashboard - individuele gemeenten
                                              </div>
                                          </a>
                                      </div>
                                  </div>
                                  
                                  <div is="vl-column">
                                      <div style="max-width: 400px" id="content-2" class="data-top-bot">
                                          <a is="vl-doormat" href="/public/gemeentenAnalyse">
                                              <h2 is="vl-doormat-title">Analyseer de cijfers</h2>
                                              <div is="vl-doormat-text">
                                              &#x2022 Op kaart
                                              </div>
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
                                      Handhaving in gemeenten
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
      title: "Gemeenten",
    });
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define("gemeenten-view", Gemeenten);
