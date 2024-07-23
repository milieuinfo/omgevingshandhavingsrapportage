import {vlElementsStyle} from "@domg-wc/elements";
import options from "../config/keuzebestuurlijk.json" assert {type: "json"};
import {
  bindVlSelect,
  html,
  LitElement,
  queryById,
  renderStack
} from "../common/commons.js";

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/components/functional-header";
import "@domg-wc/elements/title";
import "@domg-wc/components/loader";
import "@domg-wc/components/accordion-list";
import "@domg-wc/components/accordion";
import "@domg-wc/elements/data-table";
import "@domg-wc/elements/select";
import "@domg-wc/components/tabs";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";
import yearofanalsysis from "../config/yearofanalysis.json" assert {type: "json"};
import jsonData from "../datafiles/bestuurlijk.json" assert {type: "json"};

class OhrBestuurlijkAnalyse extends LitElement {

  static get styles() {
    return [
      ...vlElementsStyle
    ]
  }
  static get properties() {
    return {
      selectedChoiceLabel: {type: String},
      selectedChoiceUrl: {type: String}
    }
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
  bindVlSelect() {
    const select = this.shadowRoot.querySelector('#viewselector');
    select.addEventListener('change', this.__changeView.bind(this));
  }

  __changeView(event) {
    const selectedOption = options.find((o) => o.value === event.target.value);
    if (selectedOption) {
      this.selectedChoiceUrl = selectedOption.value;
      this.selectedChoiceLabel = selectedOption.label;
      this.requestUpdate();
    }
  }
/*Main render page*/
render() {
  return html` <vl-functional-header
      data-vl-back="Terug"
      data-vl-back-link="/bestuurlijk"
      data-vl-title="Jaarrapportage bestuurlijke sanctionering"
      data-vl-sub-title="Omgevingshandhavingsrapportage"
      data-vl-link="/">
    </vl-functional-header>
    <section is="vl-region">
      <div is="vl-layout">
        <vl-typography>
          <h2>Cijfers van het jaar ${this.yearofanalysis}</h2></vl-typography>
        <p is="vl-icon-wrapper">
          <span is="vl-icon" data-vl-icon="calendar"></span><vl-annotation>&nbsp;Laatste wijziging aan de data: 05/03/2024</vl-annotation>
        </p><br>
        <p is="vl-introduction" data-cy="introduction">
          Deze pagina geeft de cijfers van het bestuurlijk vervolgtraject in ${this.yearofanalysis} weer. 
          <br>Via de filter kan u kiezen welke cijfers u wenst te raadplegen: de cijfers van de gewestelijke beboetingsentiteit inzake misdrijven of inbreuken, of de cijfers van het handhavingscollege. De cijfers zullen wijzigen naargelang de gekozen filtering.
        <br><br>
        </p>
        <div>${this.__renderViewSelector()}</div>
        <div>${this.__renderDynamicContent()}</div>
      </div>
    </section>`;
}
/* Render data table Numbers*/
renderDataSection(data) {
  return html`
    <table is="vl-data-table">
      <thead>
        <tr>
          <th>Beslissingen</th>
          <th>Aantal</th>
        </tr>
      </thead>
      <tbody>
        ${Object.entries(data).map(([key, value]) => {
          if (typeof value === "object") {
            return html`
              <tr>
                <td data-title="${key}">${key}</td>
                <td data-title="${value.value}">${value.value}</td>
              </tr>
            `;
          } else {
            return html`
              <tr>
                <td data-title="${key}">${key}</td>
                <td data-title="${value.value}">${value}</td>
              </tr>
            `;
          }
        })}
      </tbody>
    </table>
    <br />
  `;
}

__renderViewSelector() {
  return html`
  <vl-typography><b>
  Kies uit de keuzelijst een dimensie:</b></vl-typography>
    <select id="viewselector" is="vl-select" data-vl-select @change="${this.__changeView}">
    </select><br>
  `;
}

  __renderDynamicContent() {
    return html`
<vl-tabs data-vl-active-tab="Misdrijven" data-vl-disable-links="">
  <vl-tabs-pane data-vl-id="Misdrijven" data-vl-title="Misdrijven">
      <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  ${this.renderDataSection(jsonData[this.selectedChoiceUrl].Misdrijven)}
  </div>
</div>
  </vl-tabs-pane>
  <vl-tabs-pane data-vl-id="Inbreuken" data-vl-title="Inbreuken">
          <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
 
  ${this.renderDataSection(jsonData[this.selectedChoiceUrl].Inbreuken)}
  </div>
</div>   
  </vl-tabs-pane>
</vl-tabs>
    `;
  }
}

customElements.define("ohr-bestuurlijkanalyse", OhrBestuurlijkAnalyse);
