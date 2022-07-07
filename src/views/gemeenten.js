import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/legacy/tabs";
import { page } from "../templates/page";

export class Gemeenten extends LitElement {
  render() {
    return page({
      children: html`<section is="vl-region">
      <div is="vl-layout" class="vl-layout">
        <div is="vl-grid">
          <div is="vl-column">
            <h3 is="vl-h3">
              Handhaving in de gemeenten
            </h3>
            <p is="vl-text">
              De gemeenten hebben handhavingsbevoegdheden ten aanzien van de <a
                href="https://navigator.emis.vito.be/mijn-navigator?woId=25227" target="_blank">milieuregelgeving</a>
              en/of de regelgeving inzake <a
                href="https://navigator.emis.vito.be/mijn-navigator?woId=74714&woLang=nl&woVersion=2022-03-11"
                target="_blank">ruimtelijke ordening</a>. De burgemeester of zijn plaatsvervanger is in bepaalde gevallen
              bevoegd voor het opleggen van bestuurlijke maatregelen en kan veiligheidsmaatregelen nemen in geval van een
              aanzienlijk risico voor mens of milieu. De lokale toezichthouders oefenen daarnaast het toezicht uit op de
              toepassing van specifieke milieuvoorschriften. De lokale verbalisanten, de agenten en de officieren van
              gerechtelijke politie en de stedenbouwkundige inspecteurs/burgemeesters handhaven de regelgeving van de
              Vlaamse Codex Ruimtelijke Ordening.
              De gemeenten kunnen hun handhavingsactiviteiten organiseren binnen de eigen gemeentelijke administratie
              en/of een intergemeentelijke vereniging en/of de lokale politie.
              In de individuele handhavingsfiches en in de cartografische weergaves wordt gerapporteerd over de uitvoering
              van hun handhavingsactiviteiten in het voorgaand jaar. Zie analyseer cijfers op kaart om voor een bepaalde
              set van indicatoren de data geografisch op een vergelijkende wijze te raadplegen en zie analyseer cijfers
              individuele gemeenten om de data van de individuele gemeenten te raadplegen.
            </p>
          </div>
          <div is="vl-column" data-vl-size="4" data-vl-medium-size="4" data-vl-small-size="4"
            data-vl-extra-small-size="0">
            <nav is="vl-side-navigation" aria-label="inhoudsopgave">
              <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
              <div is="vl-side-navigation-content">
                <ul is="vl-side-navigation-group">
                  <li is="vl-side-navigation-item" data-vl-parent="content-1">
                    <a is="vl-side-navigation-toggle" href="#content-1" data-vl-child="content-1">
                      Inleiding
                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                    </a>
                  </li>
                  <li is="vl-side-navigation-item" data-vl-parent="content-2">
                    <a is="vl-side-navigation-toggle" href="#content-2" data-vl-child="content-2">
                      Infographic
                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </nav>
          </div>
  
          <section is="vl-region">
            <div is="vl_layout" class="vl-layout">
              <div is="vl_grid">
                <div class="vl-column">
                  <div style="max-width: 400px">
                    <a is="vl-doormat" href="#" target="_blank" ?data-vl-alt="alt">
                      <h2 is="vl-doormat-title">Analyseer de cijfers</h2>
                      <div is="vl-doormat-text">
                        ° Dashboard
                      </div>
                    </a>
                  </div>
                </div>
                <div class="vl-column">
                  <div style="max-width: 400px">
                    <a is="vl-doormat" href="/public/gemeentenAnalyse" target="_blank" ?data-vl-alt="alt">
                      <h2 is="vl-doormat-title">Analyseer de cijfers</h2>
                      <div is="vl-doormat-text">
                        ° Op kaart
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div is="vl-column">
                <p is="vl-text"><br />
                  In onderstaande weergave worden de gegevens van de lokale handhavingsactoren gebundeld om zo een globaal
                  beeld te krijgen van de handhavingsactiviteiten aangaande het DABM en de VCRO op gemeentelijk niveau.
                </p>
              </div>
            </div>
  
  
        </div>
      </div>
    </section>
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
