import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/legacy/tabs";
import { page } from "../templates/page";

export class Gewestelijk extends LitElement {
  render() {
    return page({
      children: html`

      <section is="vl-region">
    <div is="vl-layout">
        <div is="vl-grid" data-vl-is-stacked>
            <div is="vl-column" data-vl-size="8" data-vl-medium-size="8" data-vl-small-size="8"
                data-vl-extra-small-size="12">
                <div id="content-1" is="vl-side-navigation-reference">
                    <section id="content-1-1" is="vl-region">
                        <h3 is="vl-h3" id="content-1-1">Gewestelijke handhavingsactoren</h2>
                            <p is="vl-text">
                                Verschillende gewestelijke actoren hebben handhavingsbevoegdheden ten aanzien van de
                                milieuregelgeving en/of de regelgeving inzake ruimtelijke ordening.
                            </p>
                            <div style="max-width: 500px" id="content-1-2" class="data-top-bot">
                                <a is="vl-doormat" href="/public/gewestelijkanalyse" ?data-vl-alt="alt">
                                    <h2 is="vl-doormat-title">Analyseer de cijfers</h2>
                                    <div is="vl-doormat-text">
                                        In de individuele handhavingsfiches wordt gerapporteerd over de uitvoering van
                                        hun handhavingsactiviteiten in het voorgaand jaar. Klik op analyseer de cijfers
                                        om de data van de individuele gewestelijke handhavingsactoren te raadplegen.
                                    </div>
                                </a>
                            </div>
                    </section>
                    <section id="content-1-3" is="vl-region">
                        <div is="vl-grid" id="content-1">
                            <h4 is="vl-h4">Overzichtstabel voor gewestelijke handhavingsactoren</h4>
                            <vl-typography>
                                <table>
                                    <caption>
                                        Gewestelijke actoren
                                    </caption>
                                    <thead>
                                        <tr>
                                            <th>Handhavingsactor</th>
                                            <th>Bevoegdheden</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Departement Omgeving, Afdeling Handhaving</td>
                                            <td><a href="https://navigator.emis.vito.be/mijn-navigator?woId=25212&woLang=nl&woVersion=2022-03-11"
                                                    target="_blank">Milieu</a>
                                                | <a href="https://navigator.emis.vito.be/mijn-navigator?woId=74714&woLang=nl&woVersion=2022-03-11"
                                                    target="_blank">Ruimtelijke ordening</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Agentschap voor Natuur en Bos</td>
                                            <td><a href="https://navigator.emis.vito.be/mijn-navigator?woId=25216&woLang=nl&woVersion=2022-03-11"
                                                    target="_blank">Milieu en Ruimtelijke ordening</a></td>
                                        </tr>
                                        <tr>
                                            <td>Vlaamse Landmaatschappij</td>
                                            <td><a href="https://navigator.emis.vito.be/mijn-navigator?woId=25221&woLang=nl&woVersion=2022-03-11"
                                                    target="_blank">Milieu</a></td>
                                        </tr>
                                        <tr>
                                            <td>Openbare Vlaamse Afvalstoffenmaatschappij</td>
                                            <td><a href="https://navigator.emis.vito.be/mijn-navigator?woId=25217&woLang=nl&woVersion=2022-03-11"
                                                    target="_blank">Milieu</a></td>
                                        </tr>
                                        <tr>
                                            <td>Departement Omgeving,Afdeling Gebiedsontwikkeling, Omgevingsplanning en
                                                -projecten</td>
                                            <td><a href="https://navigator.emis.vito.be/mijn-navigator?woId=25213&woLang=nl&woVersion=2022-03-11"
                                                    target="_blank">Milieu</a></td>
                                        </tr>
                                        <tr>
                                            <td>Departement Omgeving,Vlaams Planbureau voor Omgeving</td>
                                            <td><a href="https://navigator.emis.vito.be/mijn-navigator?woId=25215&woLang=nl&woVersion=2022-03-11"
                                                    target="_blank">Milieu</a></td>
                                        </tr>
                                        <tr>
                                            <td>Departement Mobiliteit en Openbare Werken</td>
                                            <td><a href="https://navigator.emis.vito.be/mijn-navigator?woId=25225&woLang=nl&woVersion=2022-03-11"
                                                    target="_blank">Milieu</a></td>
                                        </tr>
                                        <tr>
                                            <td>Vlaams Agentschap Zorg en Gezondheid</td>
                                            <td><a href="https://navigator.emis.vito.be/mijn-navigator?woId=25223&woLang=nl&woVersion=2022-03-11"
                                                    target="_blank">Milieu</a></td>

                                        </tr>
                                        <tr>
                                            <td>De Vlaamse Waterweg</td>
                                            <td><a href="https://navigator.emis.vito.be/mijn-navigator?woId=25225&woLang=nl&woVersion=2022-03-11"
                                                    target="_blank">Milieu</a></td>
                                        </tr>
                                        <tr>
                                            <td>Agentschap Wonen Vlaanderen - afdeling Woonkwaliteit -Vlaamse
                                                Wooninspectie</td>
                                            <td><a href="https://navigator.emis.vito.be/mijn-navigator?woId=74328&woLang=nl&woVersion=2022-03-11"
                                                    target="_blank">Ruimtelijke ordening</a></td>
                                        </tr>
                                        <tr>
                                            <td>Agentschap Maritieme Dienstverlening en Kust</td>
                                            <td><a href="https://navigator.emis.vito.be/mijn-navigator?woId=25225&woLang=nl&woVersion=2022-03-11"
                                                    target="_blank">Milieu</a></td>
                                        </tr>
                                        <tr>
                                            <td>Agentschap Wegen en Verkeer</td>
                                            <td><a href="https://navigator.emis.vito.be/mijn-navigator?woId=25224&woLang=nl&woVersion=2022-03-11µ"
                                                    target="_blank">Milieu</a></td>
                                        </tr>
                                        <tr>
                                            <td>Vlaams Energie- en Klimaatagentschap</td>
                                            <td><a href="https://navigator.emis.vito.be/mijn-navigator?woId=25220&woLang=nl"
                                                    target="_blank">Milieu</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </vl-typography>
                        </div>
                        <p is="vl-text">
                        <p is="vl-text">
                            In onderstaande weergave worden de gegevens van de gewestelijke handhavingsactoren gebundeld
                            om zo een globaal beeld te krijgen van de handhavingsactiviteiten aangaande het DABM en de
                            VCRO op gewestelijk niveau.
                        </p>
                        </p>
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
                                    Gewestelijke handhavingsactoren
                                    <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                </a>
                                <ul>
                                    <li is="vl-side-navigation-item">
                                        <div>
                                            <a href="#content-1-1" data-vl-parent="content-1">Inleiding</a>
                                        </div>
                                    </li>
                                    <li is="vl-side-navigation-item">
                                        <div>
                                            <a href="#content-1-2" data-vl-parent="content-1">Analyseer de cijfers</a>
                                        </div>
                                    </li>
                                    <li is="vl-side-navigation-item">
                                        <div>
                                            <a href="#content-1-3" data-vl-parent="content-1">Gewestelijke actoren
                                                overzicht</a>
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
      title: "Gewestelijk",
    });
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("gewestelijk-view", Gewestelijk);
