import {
  bindVlSelect,
  html,
  LitElement,
  queryById,
  renderStack
} from "../common/commons.js";

import "@domg-wc/elements/select";
import "@domg-wc/components/functional-header";
import "@domg-wc/qlik/infoblock";
import {vlElementsStyle} from "@domg-wc/elements";

import options from "../config/gemeente-op-kaart.json" assert {type: "json"};

class OhrOpkaart extends LitElement {

  static get properties() {
    return {
      selectedChoiceLabel: {type: String},
      selectedChoiceUrl: {type: String}
    }
  }

  static get styles() {
    return [...vlElementsStyle];
  }

  constructor() {
    super();
    this.selectedChoiceUrl = options.find(o => o.selected).value;
    this.selectedChoiceLabel = options.find((o) => o.selected).label;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    bindVlSelect({
      component: queryById(this)("viewselector"),
      choices: options
    })
  }

  __renderViewSelector() {
    return html`
    <vl-typography><b>
    Kies hieronder uw keuze omtrent een handhavingsthema:</b></vl-typography>
      <select id="viewselector" is="vl-select" data-vl-select @change="${this.__changeView}">
      </select>
    `;
  }

  __renderEverVizKaart() {
    return html`
    <!--
    <h3 is="vl-h3" data-alt>Geselecteerde kaart: ${this.selectedChoiceLabel}</h2>-->
    <iframe class="everviz-iframe" src="${this.selectedChoiceUrl}" width="800px" height="450px"></iframe>`;
  }

  __renderIntroductionOfMaps() {
    return html`
    <h2 is="vl-h2">Hoe interpreteer ik de kaarten?</h2>
    <p>
      De kaarten worden onderverdeeld in twee categorieën:</p>
    <vl-typography>

      <li>Milieu: groene kaarten</li>
      <li>Ruimtelijke ordening: oranje kaarten</li>

    </vl-typography>
    <br/>
    <p>De kleurgradaties wijzen op de aantalllen in de gemeenten
      per 1.000 inwoners. </p>
    <br/>

    <p>
      De responsgraad voor deze bevraging (of bepaalde vragen in
      de bevraging) bedraagt geen 100%.
      Dit maakt dat bepaalde gemeenten als waarde "niet gekend"
      of "non-repons" tonen.
      Deze worden in een grijs kleur aangetoond op de kaarten.
    </p>`
  }

  __changeView(event) {
    const selectedOption = options.find((o) => o.value === event.target.value);
    if (selectedOption) {
      this.selectedChoiceUrl = selectedOption.value;
      this.selectedChoiceLabel = selectedOption.label;
    }
    
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

  render() {
    return html`
      <vl-functional-header
          data-vl-back="Terug"
          data-vl-back-link="/"
          data-vl-title="Gemeenten op kaart"
          data-vl-sub-title="Omgevingshandhavingsrapportage"
          data-vl-link="/gemeenten-op-kaart">
      </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
            {
              size: 8,
              template: this.__renderIntroductionOfMaps(),
            },
            {
              size: 4,
              template: this.__renderSideNavigation(),
            },
            {
                size: 8,
                template: this.__renderViewSelector(),
            },
            {
                size: 12,
                template: this.__renderEverVizKaart()
            })}
        </div>
      </section>`;
  }
}

customElements.define('ohr-opkaart', OhrOpkaart);