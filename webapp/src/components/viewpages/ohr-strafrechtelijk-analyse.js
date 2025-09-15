import {vlElementsStyle} from "@domg-wc/elements";
import options from "../config/keuzestrafrechtelijk.json" assert {type: "json"};
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
import jsonData from "../datafiles/strafrechtelijk.json" assert {type: "json"};

class OhrStrafrechtelijkAnalyse extends LitElement {

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
      data-vl-back-link="/strafrechtelijk"
      data-vl-title="Jaarrapportage strafrechtelijke sanctionering"
      data-vl-sub-title="Omgevingshandhavingsrapportage"
      data-vl-link="/">
    </vl-functional-header>
    <section is="vl-region">
      <div is="vl-layout">
        <vl-typography>
          <h2>Cijfers van het jaar ${this.yearofanalysis}</h2></vl-typography>
        <p is="vl-icon-wrapper">
          <span is="vl-icon" data-vl-icon="calendar"></span><vl-annotation>&nbsp;Laatste wijziging aan de data: 01/09/2025</vl-annotation>
        </p><br>
        <p is="vl-introduction" data-cy="introduction">
        Deze pagina geeft de cijfers van het strafrechtelijk vervolgtraject in ${this.yearofanalysis} weer.
        Via de filter kan u kiezen welke cijfers u wenst te raadplegen: instroom, uitstroom of de motieven van de seponering om technische of opportuniteitsredenen. 
        <br>De cijfers zullen wijzigen naargelang de gekozen filtering
        </p>
        <br />
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
renderDataSection(data,url) {
  if(url === 'Instroom') {
return html`
    <table is="vl-data-table">
      <thead>
        <tr>
          <th>Thema</th>
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
  } else if(url === 'Uitstroom') {
  return html`
    <table is="vl-data-table">
      <thead>
        <tr>
          <th>Vooruitgangsstaten</th>
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
} else {
  return html`
    <table is="vl-data-table">
      <thead>
        <tr>
          <th>Motieven</th>
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
}}

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
<vl-tabs data-vl-active-tab="Afval" data-vl-disable-links="">
  <vl-tabs-pane data-vl-id="Afval" data-vl-title="Afval">
      <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
   ${this.renderDataSection(jsonData[this.selectedChoiceUrl].Afval,this.selectedChoiceUrl)}
  </div>
</div>
  </vl-tabs-pane>
  <vl-tabs-pane data-vl-id="Lucht/water/bodem/geluid (emissies)" data-vl-title="Lucht/water/bodem/geluid (emissies)">
          <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
 ${this.renderDataSection(jsonData[this.selectedChoiceUrl].LWBGE,this.selectedChoiceUrl)}
  
  </div>
</div>   
  </vl-tabs-pane>
  <vl-tabs-pane data-vl-id="Mest" data-vl-title="Mest">
    <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
   ${this.renderDataSection(jsonData[this.selectedChoiceUrl].Mest,this.selectedChoiceUrl)}
  </div>
</div>
  </vl-tabs-pane>
   <vl-tabs-pane data-vl-id="Milieubeheersrecht" data-vl-title="Milieubeheersrecht">
    <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
 ${this.renderDataSection(jsonData[this.selectedChoiceUrl].Milieubeheersrecht,this.selectedChoiceUrl)}
  </div>
</div>
  </vl-tabs-pane>
   <vl-tabs-pane data-vl-id="Milieuvergunningen" data-vl-title="Milieuvergunningen">
    <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
   ${this.renderDataSection(jsonData[this.selectedChoiceUrl].Milieuvergunningen,this.selectedChoiceUrl)}
  </div>
</div>
  </vl-tabs-pane>
   <vl-tabs-pane data-vl-id="Ruimtelijke ordening" data-vl-title="Ruimtelijke ordening">
    <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
   ${this.renderDataSection(jsonData[this.selectedChoiceUrl].RO,this.selectedChoiceUrl)}
  </div>
</div>
  </vl-tabs-pane>
</vl-tabs>
    `;
  }
}

customElements.define("ohr-strafrechtelijkanalyse", OhrStrafrechtelijkAnalyse);
