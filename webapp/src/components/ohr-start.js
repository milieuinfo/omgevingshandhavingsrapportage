import {html, LitElement, renderStack} from "./common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";

import "@domg-wc/elements/grid";
import "@domg-wc/elements/introduction";
import "@domg-wc/elements/title";
import "@domg-wc/elements/doormat";
import "@domg-wc/elements/infotext";
import "@domg-wc/elements/link-list";
import "@domg-wc/elements/link";
import "@domg-wc/elements/icon";
import "@domg-wc/elements/image";
import "@domg-wc/components/content-header";
import "@domg-wc/components/alert";

class OhrLandingPage extends LitElement {

//The styles method is a feature provided by Lit Element to encapsulate styles for a specific component.
  static get styles() {
    return [
      ...vlElementsStyle
    ]
  }

/*In the context of a web component, especially one based on Lit Element, 
the constructor is often used for setting up initial state, initializing properties, 
and performing other setup tasks.
*/

  constructor() {
    super();
  }

  //Main Rendering Function of page
  //It uses various function defined under this render function 
  render() {
    return html`
      <vl-content-header>
        <img is="vl-image"
             slot="image"
             src="images/header.jpg"
             alt="Hoofding afbeelding website"/>
        <a slot="context-link" href="/">Omgevingshandhavingsrapportage</a>
        <a slot="title-link" href="/">Handhaving</a>
      </vl-content-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
              {
                size: 8,
                template: html`<h1 is="vl-h1" data-vl-no-space-bottom>Omgevingshandhavingsrapportage</h1>`,
              },
              {
                size: 8,
                template: this.__renderIntroductionTextOnTopOfPage(),
              },
              {
                size: 4,
                template: this.__renderSideNavigation(),
              },
              {
                size: 12,
                template: this.__renderStaticNumbersKPI(),
              },
              {
                size: 12,
                template: this.__renderMeerJarenRapportage(),
              },
              {
                size: 12,
                template: this.__renderJaarRapportage(),
              },
              {
                size: 12,
                template: this.__renderOpKaart(),
              },
              {
                size: 12,
                template: this.__renderMeerInfo(),
              },
          )}
        </div>
      </section>`;
  }

  __renderIntroductionTextOnTopOfPage() {
    return html`
      <div>
        <p is="vl-introduction">
Het decreet van 5 april 1995 houdende algemene bepalingen inzake milieubeleid (DABM) bepaalt in artikel 16.2.3 dat gegevens over de omgevingshandhavingsuitvoering jaarlijks online worden gepubliceerd.
Jaarlijks worden de handhavingsactoren in het Vlaamse Gewest op uniforme en gestandaardiseerde wijze bevraagd aangaande hun handhavingsactiviteiten.<br/>

De data gepresenteerd in deze omgevingshandhavingsrapportage zijn de gegevens zoals ze worden aangeleverd door de handhavingsactoren zelf op basis van hun eigen monitoring.
Deze bevraging levert geen 100% responsgraad op, hetgeen implicaties heeft op de interpreteerbaarheid van de cijfergegevens. 
Wanneer totalen worden getoond, betreft dit steeds enkel de gerapporteerde en gekende aantallen. Bij analyses van de data dient rekening te worden gehouden met deze beperking.
        </p>
      </div>
      <br/>
      <vl-alert
          data-vl-icon="business-graph-pie"
          data-vl-title="Interactieve webtoepassing"
          data-vl-type="info">
        <p>Deze website is niet statisch, jaarlijks worden de cijfers
          geactualiseerd. <br/> Het Departement Omgeving maakt zo verder werk
          van een
          digitale en datagedreven overheid.</p>
      </vl-alert>`;
  }

  __renderSideNavigation() {
    return html`
    <h5 is="vl-h5" data-vl-alt>Interessante links</h5>
    <ul is="vl-link-list">
      <li is="vl-link-list-item">
        <a is="vl-link"
           href="/dataverzameling-en-data-interpretatie">
          Dataverzameling en data-interpretatie
        </a>
      </li>
      <li is="vl-link-list-item">
        <a is="vl-link" href="/download-cijfers-en-meer">Download de cijfers</a>
      </li>   
      <li is="vl-link-list-item">
        <a target="_new_blank" is="vl-link"
           href="https://www.omgeving.vlaanderen.be/nl/inspectie-en-handhaving">
          Meer info over afdeling handhaving<span is="vl-icon" data-vl-before="" data-vl-link="" data-vl-icon="external"></span>
        </a>
      </li>
      <li is="vl-link-list-item">
        <a target="_new_blank" is="vl-link"
           href=https://indicatoren.omgeving.vlaanderen.be/>
          Indicatoren website<span is="vl-icon" data-vl-before="" data-vl-link="" data-vl-icon="external"></span>
        </a>
      </li>
    </ul>`;
  }

  __renderStaticNumbersKPI() {
    return html`${renderStack(
      {
        size: 12,
        template: html`
          <h3 is="vl-h3" data-vl-alt>Cijfers van het voorgaande jaar in een oogopslag</h3>`
      },
      {
        size: 2,
        template: html`
          <div is="vl-infotext" data-cy="infotext">
            <div>
              <div data-vl-value="">95%</div>
              <div data-vl-text="">Reponsgraad huidig jaar</div>
            </div>
          </div>`
      },
      {
        size: 2,
        template: html`
          <div is="vl-infotext" data-cy="infotext">
            <div>
              <div data-vl-value="">+15%</div>
              <div data-vl-text="">Evolutie responsgraad</div>
            </div>
          </div>`
      },
      {
        size: 2,
        template: html`
          <div is="vl-infotext" data-cy="infotext">
            <div>
              <div data-vl-value="">27,6</div>
              <div data-vl-text="">Gemiddelde VTE</div>
            </div>
          </div>`
      },
      {
        size: 2,
        template: html`
          <div is="vl-infotext" data-cy="infotext">
            <div>
              <div data-vl-value="">26904</div>
              <div data-vl-text="">Aantal klachten</div>
            </div>
          </div>`
      },
      {
        size: 2,
        template: html`
          <div is="vl-infotext" data-cy="infotext">
            <div>
              <div data-vl-value="">30000</div>
              <div data-vl-text="">Aantal aanvankelijke controles</div>
            </div>
          </div>`
      },
      {
        size: 2,
        template: html`
          <div is="vl-infotext" data-cy="infotext">
            <div>
              <div data-vl-value="">17%</div>
              <div data-vl-text="">Aandeel aanvankelijke controles met schending</div>
            </div>
          </div>`
      }
  )
  }`
}

__renderJaarRapportage() {
  return renderStack(
      {
        size: 12,
        template: html`
          <h3 is="vl-h3" data-vl-alt>Bekijk de cijfers van het voorgaande jaar per actor</h3>`
      },
      {
        size: 12,
        template: html`
          <p>
            Hieronder wordt per actor de data weergegeven die betrekking heeft
            op het voorgaande kalenderjaar (handhavingsactiviteiten uitgevoerd
            tussen 1 januari en 31 december)
          </p>
        `
      },
      {
        size: 6,
        template: html`
          <div>
            <a is="vl-doormat" href="/gewest">
              <h2 is="vl-doormat-title">Gewest</h2>
              <div is="vl-doormat-text">
                De cijfers geven een totaalbeeld van de
                handhavingsactiviteiten van de gewestelijke handhavingsactoren
                samen in het voorgaande jaar. Bij selectie van een actor,
                wordt in de individuele handhavingsfiche van deze gewestelijke
                handhavingsactor gerapporteerd over de uitvoering van de
                handhavingsactiviteiten in het voorgaande jaar.
              </div>
            </a>
          </div>`,
      },
      {
        size: 6,
        template: html`
          <div>
            <a is="vl-doormat" href="/provincie">
              <h2 is="vl-doormat-title">Provincies</h2>
              <div is="vl-doormat-text">
                De cijfers geven een totaalbeeld van de
                handhavingsactiviteiten van de provincies samen in het
                voorgaande jaar.
                Bij selectie van een provincie, wordt in de individuele
                handhavingsfiche van deze provincie gerapporteerd over de
                uitvoering van de handhavingsactiviteiten in het voorgaande
                jaar.
              </div>
            </a>
          </div>`,
      },
      {
        size: 6,
        template: html`
          <div>
            <a is="vl-doormat" href="/gemeenten">
              <h2 is="vl-doormat-title">Gemeenten</h2>
              <div is="vl-doormat-text">
                In deze analyse worden de handhavingsactiviteiten van de
                lokale handhavingsactoren weergegeven.
              </div>
            </a>
          </div>`,
      },
      {
        size: 6,
        template: html`
          <div>
            <a is="vl-doormat" href="/hoge-raad">
              <h2 is="vl-doormat-title">Hoge Raad</h2>
              <div is="vl-doormat-text">
                Bekijk de cijfers van de Hoge Raad voor de
                Handhavingsuitvoering
              </div>
            </a>
          </div>`,
      },
      {
        size: 6,
        template: html`
          <div>
            <a is="vl-doormat" href="/strafrechtelijk">
              <h2 is="vl-doormat-title">Strafrechtelijke en bestuurlijke
                vervolgtraject</h2>
              <div is="vl-doormat-text">
                Bekijk de cijfers inzake het strafrechtelijke en bestuurlijke
                vervolgtraject.
              </div>
            </a>
          </div>`,
      },
  )
}

__renderMeerJarenRapportage() {
  return renderStack(
      {
        size: 12,
        template: html`
          <h3 is="vl-h3" data-vl-alt>Analyseer de cijfers voor verschillende thema's</h3>`
      },
      {
        size: 12,
        template: html`
          <p>
            Hieronder wordt op interactieve wijze per categorie ingegaan op de
            cijfers van de verschillende omgevingshandhavingsactoren doorheen
            de tijd.
          </p>`
      },
      {
        size: 6,
        template: html`
          <div>
            <a is="vl-doormat" href="/personeel">
              <h2 is="vl-doormat-title">Personeel</h2>
              <div is="vl-doormat-text">
                Een weergave van de cijfergegevens omtrent de personeelsinzet
                door de verschillende omgevingshandhavingsactoren op
                gewestelijk, provinciaal en gemeentelijk niveau.
              </div>
            </a>
          </div>`,
      },
      {
        size: 6,
        template: html`
          <div>
            <a is="vl-doormat" href="/klachten">
              <h2 is="vl-doormat-title">Klachten</h2>
              <div is="vl-doormat-text">
                Een voorstelling van de klachten die werden ontvangen bij de
                verschillende omgevingshandhavingsactoren op gewestelijk,
                provinciaal en gemeentelijk niveau.
              </div>
            </a>
          </div>`,
      },
      {
        size: 6,
        template: html`
          <div>
            <a is="vl-doormat" href="/controles">
              <h2 is="vl-doormat-title">Controles</h2>
              <div is="vl-doormat-text">
                Deze pagina toont een beeld van de controles die uitgevoerd
                worden door de verschillende omgevingshandhavingsactoren op
                gewestelijk, provinciaal en gemeentelijk niveau.
              </div>
            </a>
          </div>`,
      },
      {
        size: 6,
        template: html`
          <div>
            <a is="vl-doormat" href="/instrementarium">
              <h2 is="vl-doormat-title">Instrumentarium</h2>
              <div is="vl-doormat-text">
                Een weergave van het instrumentarium dat ingezet wordt door de
                verschillende omgevingshandhavingsactoren op gewestelijk,
                provinciaal en gemeentelijk niveau.
              </div>
            </a>
          </div>`,
      },
      {
        size: 6,
        template: html`
          <div>
            <a is="vl-doormat" href="">
              <h2 is="vl-doormat-title">Hoge raad voor de
                handhavingsuitvoering</h2>
              <div is="vl-doormat-text">
                Een voorstelling van het beeld van de activiteiten van de Hoge
                Raad voor de Handhavingsuitvoering doorheen de jaren.
              </div>
            </a>
          </div>`,
      },
      {
        size: 6,
        template: html`
          <div ">
          <a is="vl-doormat" href="">
            <h2 is="vl-doormat-title">Strafrechtelijke en bestuurlijke
              vervolgtraject</h2>
            <div is="vl-doormat-text">
              Deze pagina toont de evolutie van het strafrechtelijke en
              bestuurlijke vervolgtraject inzake de omgevingshandhaving.
            </div>
          </a>
          </div>`,
      },
  )
}

  __renderOpKaart() {
    return renderStack(
      {
        size: 12,
        template: html`
          <h3 is="vl-h3" data-vl-alt>Bekijk de cijfers van het voorgaande jaar op kaart</h3>`
      },
      {
        size: 12,
        template: html`
          <p>
            Hieronder wordt per actor de data weergegeven die betrekking heeft
            op het voorgaande kalenderjaar (handhavingsactiviteiten uitgevoerd
            tussen 1 januari en 31 december)
            De data wordt gevisualiseerd op kaarten met informatie over de
            evolutie van de cijfer.
          </p>
        `
      },
      {
        size: 6,
        template: html`
          <div>
            <a is="vl-doormat" href="/provincie-op-kaart">
              <h2 is="vl-doormat-title">Provincies</h2>
              <div is="vl-doormat-text">
               Een cartografische weergave van de cijfers van de provincies in het voorgaande jaar.
              </div>
            </a>
          </div>`
      },
      {
        size: 6,
        template: html`
          <div>
            <a is="vl-doormat" href="/gemeenten-op-kaart">
              <h2 is="vl-doormat-title">Gemeenten</h2>
              <div is="vl-doormat-text">
               Een cartografische weergave van de cijfers van de gemeenten in het voorgaande jaar.
              </div>
            </a>
          </div>`,
      },
  )
}

  __renderMeerInfo() {
    return html`${renderStack(
        {
          size: 12,
          template: html`
            <h3 is="vl-h3" data-vl-alt>Meer Info</h3>
          `
        },
        {
          size: 12,
          template: html`
            <p>
              <a
                  is="vl-link"
                  href="/download-cijfers-en-meer"
                  data-vl-block="true"
                  data-vl-small="false"
                  data-vl-large="true"
                  data-vl-bold="true"
              ><span
                  is="vl-icon"
                  data-vl-icon="external"
                  data-vl-before
                  data-vl-link
              ></span>
                Download data en afbeeldingen van deze rapportage
              </a></p>`
        },
    )
    }`
  }
}
customElements.define("ohr-start", OhrLandingPage);