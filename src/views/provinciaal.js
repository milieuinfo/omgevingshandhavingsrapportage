import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/legacy/tabs";
import { page } from "../templates/page";

export class Provinciaal extends LitElement {
  render() {
    return page({
      children: html`
      <section is="vl-region">
      <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
          <div
            is="vl-column"
            data-vl-size="8"
            data-vl-medium-size="8"
            data-vl-small-size="8"
            data-vl-extra-small-size="12"
          >
            <div id="content-1" is="vl-side-navigation-reference">
              <section id="content-1-1" is="vl-region">
                <h3 is="vl-h3">Provinciale handhavingsactoren</h2>
                <p is="vl-text">
                  De provincies hebben handhavingsbevoegdheden ten aanzien van de milieuregelgeving. De provinciegouverneur of zijn plaatsvervanger is in bepaalde gevallen bevoegd voor het opleggen van bestuurlijke maatregelen en kan veiligheidsmaatregelen nemen in geval van een aanzienlijk risico voor mens of milieu. De provinciale toezichthouders oefenen daarnaast het toezicht uit op de toepassing van specifieke milieuvoorschriften.
                  In de individuele handhavingsfiches wordt per provincie gerapporteerd over de uitvoering van hun handhavingsactiviteiten in het voorgaand jaar. Zie analyseer cijfers om de data van de individuele provincies te raadplegen. 
                </p>
              </section>
    
              <section id="content-1-2" is="vl-region">
              <div is="vl-grid">
          <div is="vl-column">
        <div style="max-width: 400px">
          <a is="vl-doormat" href="/provinciaalAnalyse">
            <h2 is="vl-doormat-title">Analyseer de cijfers</h2>
            <div is="vl-doormat-text">
              In de individuele handhavingsfiches wordt gerapporteerd over de uitvoering van hun handhavingsactiviteiten in het voorgaand jaar. Klik op analyseer de cijfers om de data van de individuele gewestelijke handhavingsactoren te raadplegen. 
            </div>
          </a>
        </div>
        </div>
        </div>
              </section>
    
              <section id="content-1-3" is="vl-region">
              <p is="vl-text">
                In onderstaande weergave worden de gegevens van de provinciale handhavingsactoren gebundeld om zo een globaal beeld te krijgen van de handhavingsactiviteiten aangaande het DABM op provinciaal niveau.
              </p>
              </section>
            </div>
          </div>
          <div
            is="vl-column"
            data-vl-size="4"
            data-vl-medium-size="4"
            data-vl-small-size="4"
            data-vl-extra-small-size="0"
          >
            <nav is="vl-side-navigation" aria-label="inhoudsopgave">
              <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
              <div is="vl-side-navigation-content">
                <ul is="vl-side-navigation-group">
                  <li is="vl-side-navigation-item" data-vl-parent="content-1">
                    <a
                      is="vl-side-navigation-toggle"
                      href="#content-1"
                      data-vl-child="content-1"
                    >
                      Provinciaal handhavingsactoren
                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                    </a>
                    <ul>
                      <li is="vl-side-navigation-item">
                        <div>
                          <a href="#content-1-1" data-vl-parent="content-1"
                            >Inleiding</a
                          >
                        </div>
                      </li>
                      <li is="vl-side-navigation-item">
                        <div>
                          <a href="#content-1-2" data-vl-parent="content-1"
                            >Analyseer de cijfers</a
                          >
                        </div>
                      </li>
                      <li is="vl-side-navigation-item">
                        <div>
                          <a href="#content-1-3" data-vl-parent="content-1"
                            >Infographic</a
                          >
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
      title: "Provinciaal",
    });
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("provinciaal-view", Provinciaal);
