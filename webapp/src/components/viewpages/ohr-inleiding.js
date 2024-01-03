import {html, LitElement, renderStack} from "../common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";
import "@domg-wc/components/content-header";

class OhrInleiding extends LitElement {

  static get styles() {
    return [
      ...vlElementsStyle
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
                template: this.__renderIntroduction(),
              },
              {
                size: 4,
                template: this.__renderSideNavigation(),
              }
          )}
        </div>
      </section>`;
  }

  __renderIntroduction() {
    return html`
      <h1 is="vl-h1">Dataverzameling en data-interpretatie</h1>
      <p>
        Het decreet van 5 april 1995 houdende algemene bepalingen inzake
        milieubeleid (DABM) bepaalt in artikel 16.2.3 dat gegevens over de
        omgevingshandhavingsuitvoering jaarlijks online worden gepubliceerd.
        Deze data bevatten een input- en outputweergave (handhavingsfiche) van
        de handhavingsactiviteiten in het kader van het DABM en de Vlaamse Codex
        Ruimtelijke Ordening (VCRO) van de handhavingsactoren in het Vlaamse
        gewest in het afgelopen jaar en hebben betrekking op de personele
        middelen die worden ingezet voor de handhavingsuitvoering en de inzet
        van de instrumenten die de handhavers ter beschikking hebben (controles,
        processen-verbaal, aanmaningen, …).Daarnaast worden ook data ter
        beschikking gesteld over de sanctionering, o.a. afkomstig van de
        parketten bij de rechtbanken van eerste aanleg en de gewestelijke
        beboetingsentiteit die instaat voor de bestuurlijke beboeting. Dit geeft
        een beeld over het verdere traject van de instrumenten proces-verbaal en
        verslag van vaststelling.
        Jaarlijks worden de handhavingsactoren in het Vlaamse Gewest op uniforme
        en gestandaardiseerde wijze bevraagd aangaande hun
        handhavingsactiviteiten in het voorgaande kalanderjaar.
        De data gepresenteerd in deze omgevingshandhavingsrapportage zijn de
        gegevens zoals ze worden aangeleverd door de handhavingsactoren zelf op
        basis van hun eigen monitoring.
        De handhavingsactoren worden gevraagd “niet gekend” in te geven indien
        de gevraagde data niet beschikbaar zijn. Indien de gevraagde gegevens
        niet worden ingevuld, wordt automatisch “niet gekend” ingevuld. Indien
        de handhavingsactor niet ingaat op de bevraging, wordt deze actor als
        een non-respons weergegeven.
        Deze bevraging levert geen 100% responsgraad op, hetgeen implicaties
        heeft op de interpreteerbaarheid van de cijfergegevens. Wanneer totalen
        worden getoond, betreft dit steeds enkel de gerapporteerde en gekende
        aantallen. Bij analyses van de data dient rekening te worden gehouden
        met deze beperking.
      </p>`;
  }

  __renderSideNavigation() {
    return html`
      <h5 is="vl-h5" data-vl-alt>Interessante links</h5>
      <ul is="vl-link-list">
        <li is="vl-link-list-item">
          <a is="vl-link"
             href="/">
            Terug naar beginpagina
          </a>
        </li>
      </ul>`;
  }
}

customElements.define("ohr-inleiding", OhrInleiding);
