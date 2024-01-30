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
    <vl-functional-header
    data-vl-back="Terug"
    data-vl-back-link="/"
    data-vl-title="Dataverzameling en data-interpratatie"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/dataverzameling-en-data-interpretatie">
    </vl-functional-header>
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

  __renderSideNavigation() {
    return html`
    <h5 is="vl-h5" data-vl-alt>Interessante links</h5>
    <ul is="vl-link-list">
      <li is="vl-link-list-item">
        <a is="vl-link"
           href="#">
           Laatst bekende cijfers per actor
        </a>
      </li>
      <li is="vl-link-list-item">
        <a is="vl-link" href="#">Analyseer de cijfers</a>
      </li>   
      <li is="vl-link-list-item">
        <a is="vl-link"
           href="/download-cijfers-en-meer">
          Downloads
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
        processen-verbaal, aanmaningen, …). </p><br>
        <p>Daarnaast worden ook data ter
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
        basis van hun eigen monitoring.</p><br>
        <p>
        De handhavingsactoren worden gevraagd “niet gekend” in te geven indien
        de gevraagde data niet beschikbaar zijn. Indien de gevraagde gegevens
        niet worden ingevuld, wordt automatisch “niet gekend” ingevuld. Indien
        de handhavingsactor niet ingaat op de bevraging, wordt deze actor als
        een non-respons weergegeven.<br>
        Deze bevraging levert geen 100% responsgraad op, hetgeen implicaties
        heeft op de interpreteerbaarheid van de cijfergegevens. Wanneer totalen
        worden getoond, betreft dit steeds enkel de gerapporteerde en gekende
        aantallen. Bij analyses van de data dient rekening te worden gehouden
        met deze beperking.
      </p>`;
  }
}

customElements.define("ohr-inleiding", OhrInleiding);
