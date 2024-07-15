import {vlElementsStyle} from "@domg-wc/elements";
import jsonData2 from "../datafiles/provincie.json" assert {type: "json"};
import options from "../config/keuzeprovincieanalyse.json" assert {type: "json"};

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

class OhrProvincieAnalyse extends LitElement {

  static get styles() {
    return [...vlElementsStyle];
    
  }
  static get properties() {
    return {
      selectedChoiceLabel: {type: String},
      selectedChoiceUrl: {type: String}
    }
  }
  constructor() {
    super();
    this.selectedChoiceUrl = options.find(o => o.selected).value;
    this.selectedChoiceLabel = options.find((o) => o.selected).label;
    this.yearofanalysis = yearofanalsysis.value;
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
  render() {
    return html`
    <vl-functional-header
    data-vl-back="Terug"
    data-vl-back-link="/"
    data-vl-title="Jaarrapportage provinciale omgevingshandhavingsactoren"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/provincie-analyse">
    </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
        <vl-typography>
        <h2>Cijfers van het jaar ${this.yearofanalysis}</h2></vl-typography>
        <p is="vl-icon-wrapper"><vl-annotation><span is="vl-icon" data-vl-icon="calendar"></span> Laatste wijziging aan de data: 21/02/2024</vl-annotation></p><br>

    <p is="vl-introduction" data-cy="introduction">
    
    Deze pagina toont een overzichtelijk beeld van de handhavingsactiviteiten van de provinciale  omgevingshandhavingsactoren.
    <br>Via de filter kan u een provincie kiezen.

    </p><br>
          <div>${this.__renderViewSelector()}</div>
          <div>${this.__renderDynamicContent()}</div>
        </div>
      </section>`;
  }

/* Render opmerking */
renderOpmerkingsection(data,type) {
  return html`
  <vl-typography>
  <ul>
    <li>${type}</li>
      <ul>
  ${Object.entries(data).map(([key,value]) => {
      return html`
      <li>${value}</li>
      `;
    })
  }
  </ul>
</ul>
</vl-typography>
  `
}
/* Render ThemaGerichte Acties */
renderThemaGerichteActies() {
  return html`
  <p slot="content">
  TEST
  
  </p>
  `
}
  /* Render data table String*/
  renderDataSectionTXT(data) {
    return html`
      <table is="vl-data-table">
        <thead>
          <tr>
            <th>Thema</th>
            <th>Beschrijving</th>
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
/* Render data table Numbers*/
renderDataSection(data,type) {
  return html`
    <table is="vl-data-table">
     <caption>
     ${type}
    </caption>
      <thead>
        <tr>
          <th>Onderwerp</th>
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
  Kies uit de keuzelijst een provinciale handhavingsactor:</b></vl-typography>
    <select id="viewselector" is="vl-select" data-vl-select @change="${this.__changeView}">
    </select><br>
  `;
}

  __renderDynamicContent() {
    return html`
<vl-tabs data-vl-active-tab="Personeel" data-vl-disable-links="">
  <vl-tabs-pane data-vl-id="Personeel" data-vl-title="Personeel">
      <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
      ${this.renderDataSection(jsonData2.Milieu[this.selectedChoiceUrl].gewestelijkeToezichthouders,"Milieu")}
  </div>

  
</div>
  </vl-tabs-pane>
  <vl-tabs-pane data-vl-id="Klachten" data-vl-title="Klachten">
          <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  ${this.renderDataSection(jsonData2.Milieu[this.selectedChoiceUrl].Klachten,"Milieu")}
  </div>

   
</div>   
  </vl-tabs-pane>
  <vl-tabs-pane data-vl-id="Controles" data-vl-title="Controles">
    <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  ${this.renderDataSection(jsonData2.Milieu[this.selectedChoiceUrl].Controles,"Milieu")}
  </div>
</div>
  <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  <vl-typography>
      <h3>
        Aanvankelijke controles met schending
      </h3>
  </vl-typography>
  </div>
  </div>
    <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
       ${this.renderDataSection(
        jsonData2.Milieu[this.selectedChoiceUrl].Aanvankelijkecontrolesmetschending,"Milieu"
      )}
  </div>
</div>
  </vl-tabs-pane>
   <vl-tabs-pane data-vl-id="Instrumentarium" data-vl-title="Instrumentarium">
    <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  ${this.renderDataSection(jsonData2.Milieu[this.selectedChoiceUrl].Instrument,"Milieu")}
  </div>
</div>
  </vl-tabs-pane>
  <vl-tabs-pane data-vl-id="Themagerichte acties" data-vl-title="Themagerichte acties">
   <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  ${this.renderDataSection(jsonData2.Milieu[this.selectedChoiceUrl].Thema,"Milieu")}
  </div>
</div>  
  </vl-tabs-pane>
  <vl-tabs-pane data-vl-id="Opmerkingen" data-vl-title="Opmerkingen">
   <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  ${this.renderOpmerkingsection(jsonData2.Milieu[this.selectedChoiceUrl].Opmerking,"Milieu")}
  </div>
</div>  
  </vl-tabs-pane>
</vl-tabs>
    `;
  }
}
customElements.define("ohr-provincieanalyse", OhrProvincieAnalyse);
