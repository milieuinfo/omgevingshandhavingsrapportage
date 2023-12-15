import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import { analysis } from "../templates/analysis";
import { embed } from "@nebula.js/stardust";
import { page } from "../templates/page";
export class HogeRaadView extends LitElement {
  render() {
    return page({
      children: html`
        <section is="vl-region">
          <div is="vl-layout">
            <div is="vl-grid" data-vl-is-stacked>
              <div is="vl-column" data-vl-size="8" data-vl-medium-size="8"
                   data-vl-small-size="8"
                   data-vl-extra-small-size="12">
                <div is="vl-side-navigation-reference">
                  <section id="content-1" is="vl-region">
                    <h3 is="vl-h3">Hoge raad voor de Handhavingsuitvoering</h2>
                      <p>
                        Deze pagina toont een beeld van de activiteiten van de
                        Hoge Raad voor de
                        Handhavingsuitvoering in het voorafgaande jaar.
                      </p>
                      <br>
                      <p>
                        Voor meer informatie over de Hoge raad voor de
                        Handhavingsuitvoering: <br/>
                        <a is="vl-link"
                           href="https://www.hogeraadvoordehandhavingsuitvoering.be/over-de-hoge-raad-voor-de-handhavingsuitvoering"
                           target="_blank"
                           data-vl-block=true>Hoge raad voor de
                          Handhavingsuitvoering</a>
                      </p>
                      <div is="vl-grid">
                        <div is="vl-column">
                          <div style="max-width: 400px" id="content-2"
                               class="data-top-bot">
                            <a is="vl-doormat" href="/public/hogeraadAnalyse">
                              <h2 is="vl-doormat-title">Analyseer de
                                cijfers</h2>
                              <div is="vl-doormat-text">
                                Bekijk de cijfers van de Hoge Raad voor de
                                Handhavingsuitvoering
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                  </section>
                </div>
              </div>
              <div is="vl-column" data-vl-size="4" data-vl-medium-size="4"
                   data-vl-small-size="4"
                   data-vl-extra-small-size="0">
                <nav is="vl-side-navigation" aria-label="inhoudsopgave">
                  <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
                  <div is="vl-side-navigation-content">
                    <ul is="vl-side-navigation-group">
                      <li is="vl-side-navigation-item"
                          data-vl-parent="content-1">
                        <a is="vl-side-navigation-toggle" href="#content-1"
                           data-vl-child="content-1">
                          Hoge raad voor handhavingsuitvoering
                          <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                        <ul>
                          <li is="vl-side-navigation-item">
                            <div>
                              <a href="#content-1-1" data-vl-parent="content-1">Bekijk
                                de cijfers</a>
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
        </section>`,
      title: "HogeRaadView",
    });
  }
}
customElements.define("hogeraad-view", HogeRaadView);
