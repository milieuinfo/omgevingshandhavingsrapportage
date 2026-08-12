import {
  bindVlSelect,
  html,
  LitElement,
  queryById,
  renderStack
} from "../common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/elements/image";
import "@domg-wc/elements/link-list";
import "@domg-wc/elements/link";
/*import "@domg-wc/components/accordion";*/
import "@domg-wc/components/alert";
import "@domg-wc/elements/select";
import "@domg-wc/components/typography";
import "@domg-wc/components/functional-header";
import options from "../config/downloadkeuze.json" assert {type: "json"};
import yearofanalsysis from "../config/yearofanalysis.json" assert {type: "json"};

class OhrDownload extends LitElement {

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
    this.yearofanalysis = yearofanalsysis.value;
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
    Kies hieronder een handhavingsthema voor een kaartweergave:</b></vl-typography>
      <select data-vl-search-placeholder="Kies een handhavingsthema om te downloaden" id="viewselector" is="vl-select" data-vl-select @change="${this.__changeView}">
      </select>
    `;
  }

  render() {
    return html`
    <vl-functional-header
    data-vl-back="Terug"
    data-vl-back-link="/"
    data-vl-title="Download cijfers"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/download-cijfers-en-meer">
    </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
              {
                size: 8,
                template: this.__renderIntroduction(),
              },
              {
                size:4,
                template: this.__renderSideNavigation(),
              },
              {
                size: 7,
                template: this.__renderdownloadlinks(),
            },
          )}
        </div>
      </section>`;
  }

  __changeView(event) {
    const selectedValue = event.target.value;
  
    // Find the selected option from the main options
    const selectedOption = options.find(o => o.value === selectedValue);
  
    if (selectedOption) {
      this.selectedChoiceUrl = selectedOption.value;
      this.selectedChoiceLabel = selectedOption.label;
    }
  }

  __renderdownloadlinks() {
      return html`
      <vl-typography>
      <b>Download alle bestanden met de gegevens van de omgevingshandhavingsrapportage</b>
      </vl-typography><br>
      <ul is="vl-link-list" data-cy="link-list">
    <li is="vl-link-list-item">
        <a is="vl-link" href="https://omgeving.vlaanderen.be/sites/default/files/2024-07/omgevingshandhavingscijfers_2021.zip" download>
            Download alle bestanden met de gegevens van de omgevingshandhavingsrapportage
        </a>
    </li>
</ul>
      `;
  }
  __renderSideNavigation() {
    return html`
    <h5 is="vl-h5" data-vl-alt>Interessante links</h5>
    <ul is="vl-link-list">
      <li is="vl-link-list-item">
        <a is="vl-link" href="/">Analyseer de cijfers</a>
      </li>  
    </ul>`;
  }
  __renderIntroduction() {
    return html`
    <vl-typography>
      <h2 is="vl-h2">Download</h2>
    </vl-typography>
    <p is="vl-introduction" data-cy="introduction">
          Op deze pagina kunt u bestanden downloaden met data van de bevraging tot het jaar ${this.yearofanalysis}. 
          
        </p>`;
  }
}

customElements.define("ohr-download", OhrDownload);
