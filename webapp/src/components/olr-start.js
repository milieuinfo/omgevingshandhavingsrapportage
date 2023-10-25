import {define, html, LitElement, renderStack} from "./common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";

import "@domg-wc/components/content-header";
import "@domg-wc/components/alert";

class OlrStart extends LitElement {

  static get styles(){
    return [
        vlElementsStyle
    ]
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <vl-content-header>
        <img is="vl-image"
            slot="image"
            src="/images/header.jpg"
            alt="Hoofding afbeelding website"/>
        <a slot="context-link" href="/">Omgevingshandhavingsrapportage</a>
        <a slot="title-link" href="/">Handhaving</a>
      </vl-content-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
              {
                size: 8,
                template: html`<h1 is="vl-h1"  data-vl-no-space-bottom>
                  Omgevingshandhavingsrapportage
                </h1>`,
              },
              {
                size: 8,
                template: this.__renderIntroduction(),
              },
              {
                size: 4,
                template: this.__renderSideNavigation(),
              },
              {
                size: 12,
                template: this.__renderJaarRapportage(),
              },
              {
                size: 12,
                template: this.__renderMeerJarenRapportage(),
              },
              {
                size: 12,
                template: this.__renderInfo(),
              },
          )}
        </div>
      </section>`;
  }

  __renderIntroduction() {
    return html`
      <div>
        <p is="vl-introduction">
        Op deze interactieve website worden de cijfergegevens over de omgevingshandhavingsuitvoering gepubliceerd. 
        Deze data bevatten een input- en outputweergave van de handhavingsactiviteiten in het kader van het DABM en de Vlaamse Codex Ruimtelijke Ordening (VCRO) van de handhavingsactoren in het Vlaamse gewest.
        </p>
      </div>
      <br/>
      <vl-alert
      data-vl-icon="business-graph-pie"
      data-vl-title="Interactieve webtoepassing"
      data-vl-type="info">
      <p>Deze website is niet statisch, jaarlijks worden de cijfers
      geactualiseerd. <br/> Het Departement Omgeving maakt zo verder werk van een
      digitale en datagedreven overheid.</p>
    </vl-alert>`;
  }

  __renderSideNavigation() {
    return html`    
      <h5 is="vl-h5" data-vl-alt>Interessante links</h5>
      <ul is="vl-link-list">
        <li is="vl-link-list-item">
          <a is="vl-link"
             href="/inleiding">
            Dataverzameling en data-interpretatie
          </a>
        </li>
        <li is="vl-link-list-item">
          <a target="_new_blank" is="vl-link"
             href="https://www.omgeving.vlaanderen.be/nl/inspectie-en-handhaving">
            Meer info over afdeling handhaving
          </a>
        </li>
        <li is="vl-link-list-item">
          <a target="_new_blank" is="vl-link"
           href= https://indicatoren.omgeving.vlaanderen.be/>
            Indicatoren website
          </a>
        </li>
      </ul>`;
  }

  __renderJaarRapportage() {
    return renderStack(
        {
          size: 12,
          template: html`
            <h3 is="vl-h3" data-vl-alt>Jaarrapportage</h3>`
        },
        {
          size: 12,
          template: html`
            <p>
            Hieronder wordt per actor de data weergegeven die betrekking heeft op het voorgaande kalenderjaar (handhavingsactiviteiten uitgevoerd tussen 1 januari en 31 december)
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
              De cijfers geven een totaalbeeld van de handhavingsactiviteiten van de gewestelijke handhavingsactoren
              samen in het voorgaande jaar. Bij selectie van een actor, wordt in de individuele handhavingsfiche van deze gewestelijke
              handhavingsactor gerapporteerd over de uitvoering van de handhavingsactiviteiten in het voorgaande jaar.
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
              De cijfers geven een totaalbeeld van de handhavingsactiviteiten van de provincies samen in het voorgaande jaar. 
              Bij selectie van een provincie, wordt in de individuele handhavingsfiche van deze provincie gerapporteerd over de uitvoering van de handhavingsactiviteiten in het voorgaande jaar.
              </div>
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat" href="/gemeente">
              <h2 is="vl-doormat-title">Gemeenten</h2>
              <div is="vl-doormat-text">
              In deze analyse worden de handhavingsactiviteiten van de lokale handhavingsactoren weergegeven.
              </div>
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat" href="/hogeraad">
              <h2 is="vl-doormat-title">Hoge Raad</h2>
              <div is="vl-doormat-text">
              Bekijk de cijfers van de Hoge Raad voor de Handhavingsuitvoering
              </div>
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat" href="/strafrechtelijk">
              <h2 is="vl-doormat-title">Strafrechtelijke en bestuurlijke vervolgtraject</h2>
              <div is="vl-doormat-text">
              Bekijk de cijfers inzake het strafrechtelijke en bestuurlijke vervolgtraject.
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
            <h3 is="vl-h3" data-vl-alt>Meer Jaren rapportage</h3>`
        },
        {
          size: 12,
          template: html`
            <p>
            Hieronder wordt op interactieve wijze per categorie ingegaan op de cijfers van de verschillende omgevingshandhavingsactoren doorheen de tijd.
            </p>`
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat" href="/personeel">
              <h2 is="vl-doormat-title">Personeel</h2>
              <div is="vl-doormat-text"> 
              Een weergave van de cijfergegevens omtrent de personeelsinzet door de verschillende omgevingshandhavingsactoren op gewestelijk, provinciaal en gemeentelijk niveau.
              </div>
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat" href="/windturbine">
              <h2 is="vl-doormat-title">Klachten</h2>
              <div is="vl-doormat-text"> 
              Een voorstelling van de klachten die werden ontvangen bij de verschillende omgevingshandhavingsactoren op gewestelijk, provinciaal en gemeentelijk niveau.
              </div>
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat" href="/aanvragen">
              <h2 is="vl-doormat-title">Controles</h2>
              <div is="vl-doormat-text"> 
              Deze pagina toont een beeld van de controles die uitgevoerd worden door de verschillende omgevingshandhavingsactoren op gewestelijk, provinciaal en gemeentelijk niveau.
              </div>
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat" href="/doorlooptijden">
              <h2 is="vl-doormat-title">Instrumentarium</h2>
              <div is="vl-doormat-text">
              Een weergave van het instrumentarium dat ingezet wordt door de verschillende omgevingshandhavingsactoren op gewestelijk, provinciaal en gemeentelijk niveau.
              </div>
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat" href="/beroepen">
              <h2 is="vl-doormat-title">Hoge raad voor de handhavingsuitvoering</h2>
              <div is="vl-doormat-text">
              Een voorstelling van het beeld van de activiteiten van de Hoge Raad voor de Handhavingsuitvoering doorheen de jaren.
              </div>
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div ">
            <a is="vl-doormat" href="/beroepen">
              <h2 is="vl-doormat-title">Strafrechtelijke en bestuurlijke vervolgtraject</h2>
              <div is="vl-doormat-text">
              Deze pagina toont de evolutie van het strafrechtelijke en bestuurlijke vervolgtraject inzake de omgevingshandhaving.
              </div>
            </a>
            </div>`,
        },
    )
  }

  __renderInfo() {
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
          href="/download"
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
define("olr-start", OlrStart);
