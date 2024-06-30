import { vlElementsStyle } from "@domg-wc/elements";
import jsonData2 from "../datafiles/Totaal Gewest 2023_e1a6d014-b58b-302d-b023-ab8a4b99391a.json" assert { type: "json" };
import options from "../config/keuzegewestanalyse.json" assert {type: "json"};

import {
  bindVlSelect,
  html,
  LitElement,
  queryById,
  renderStack
} from "../common/commons.js";

import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/elements/data-table";
import "@domg-wc/elements/select";
import "@domg-wc/components/typography";
import "@domg-wc/components/tabs";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";

class OhrAGewest extends LitElement {
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
        data-vl-back-link="/gewest"
        data-vl-title="Jaarrapportage gewestelijke omgevingshandhavingsactoren’"
        data-vl-sub-title="Omgevingshandhavingsrapportage"
        data-vl-link="/">
      </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          <vl-typography>
            <h2>Cijfers van het jaar 2023</h2>
          <p is="vl-icon-wrapper">
            <span is="vl-icon" data-vl-icon="calendar"></span><vl-annotation>Laatste wijziging aan de data: 21/02/2024</vl-annotation>
          </p></vl-typography><br>


          <p is="vl-introduction" data-cy="introduction">
           Deze pagina toont een overzichtelijk beeld van de handhavingsactiviteiten van de gewestelijke omgevingshandhavingsactoren.
           <br>Via de filter kan u een gewestelijke omgevingshandhavingsactor kiezen.

          </p>
          <br />
          <div>${this.__renderViewSelector()}</div>
          <div>${this.__renderDynamicContent()}</div>
        </div>
      </section>`;
  }
  /* Render opmerking */
  __renderOpmerkingsection(data,type) {
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
  __renderThemaGerichteActies() {
    return html`
    <p slot="content">
    TEST
    
    </p>
    `
  }
    /* Render data table String*/
  __renderDataSectionTXT(data) {
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
  __renderDataSection(data,type) {
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
    Kies uit de keuzelijst een gewestelijke handhavingsactor:</b></vl-typography>
      <select id="viewselector" is="vl-select" data-vl-select @change="${this.__changeView}">
      </select><br>
    `;
  }

  __renderDynamicContent() {
    const beleid = jsonData2.Beleid[this.selectedChoiceUrl];
  
    const renderColumns = (milieuData, roData, milieuLabel, roLabel) => {
      if (beleid === 'Both') {
        return html`
          <div is="vl-column" data-vl-size=6>
            ${this.__renderDataSection(milieuData, milieuLabel)}
          </div>
          <div is="vl-column" data-vl-size=6>
            ${this.__renderDataSection(roData, roLabel)}
          </div>
        `;
      } else if (beleid === 'Milieu') {
        return html`
          <div is="vl-column" data-vl-size=12>
            ${this.__renderDataSection(milieuData, milieuLabel)}
          </div>
        `;
      } else if (beleid === 'RO') {
        return html`
          <div is="vl-column" data-vl-size=12>
            ${this.__renderDataSection(roData, roLabel)}
          </div>
        `;
      }
    };
  
    return html`
      <vl-tabs data-vl-active-tab="Personeel" data-vl-disable-links="">
        <vl-tabs-pane data-vl-id="Personeel" data-vl-title="Personeel">
          <div is="vl-grid">
            ${renderColumns(
              jsonData2.Milieu[this.selectedChoiceUrl].gewestelijkeToezichthouders,
              jsonData2.RO[this.selectedChoiceUrl].PersoneelRO,
              "Milieu",
              "Ruimtelijke ordening"
            )}
          </div>
        </vl-tabs-pane>
        <vl-tabs-pane data-vl-id="Klachten" data-vl-title="Klachten">
          <div is="vl-grid">
            ${renderColumns(
              jsonData2.Milieu[this.selectedChoiceUrl].Klachten,
              jsonData2.RO[this.selectedChoiceUrl].Klachten,
              "Milieu",
              "Ruimtelijke ordening"
            )}
          </div>
        </vl-tabs-pane>
        <vl-tabs-pane data-vl-id="Controles" data-vl-title="Controles">
          <div is="vl-grid">
            ${renderColumns(
              jsonData2.Milieu[this.selectedChoiceUrl].Controles,
              jsonData2.RO[this.selectedChoiceUrl].Controles,
              "Milieu",
              "Ruimtelijke ordening"
            )}
          </div>
          <div is="vl-grid">
            <div is="vl-column" data-vl-size=12>
              <vl-typography>
                <h3>Aanvankelijke controles met schending</h3>
              </vl-typography>
            </div>
          </div>
          <div is="vl-grid">
            ${renderColumns(
              jsonData2.Milieu[this.selectedChoiceUrl].Aanvankelijkecontrolesmetschending,
              jsonData2.RO[this.selectedChoiceUrl].Aanvankelijkecontrolesmetschending,
              "Milieu",
              "Ruimtelijke ordening"
            )}
          </div>
        </vl-tabs-pane>
        <vl-tabs-pane data-vl-id="Instrumentarium" data-vl-title="Instrumentarium">
          <div is="vl-grid">
            ${renderColumns(
              jsonData2.Milieu[this.selectedChoiceUrl].Instrument,
              jsonData2.RO[this.selectedChoiceUrl].Instrument,
              "Milieu",
              "Ruimtelijke ordening"
            )}
          </div>
        </vl-tabs-pane>
        <vl-tabs-pane data-vl-id="Themagerichte acties" data-vl-title="Themagerichte acties">
          <div is="vl-grid">
            ${renderColumns(
              jsonData2.Milieu[this.selectedChoiceUrl].Thema,
              jsonData2.RO[this.selectedChoiceUrl].Thema,
              "Milieu",
              "Ruimtelijke ordening"
            )}
          </div>
        </vl-tabs-pane>
        <vl-tabs-pane data-vl-id="Opmerkingen" data-vl-title="Opmerkingen">
          <div is="vl-grid">
            ${renderColumns(
              jsonData2.Milieu[this.selectedChoiceUrl].Opmerking,
              jsonData2.RO[this.selectedChoiceUrl].Opmerking,
              "Milieu",
              "Ruimtelijke ordening"
            )}
          </div>
        </vl-tabs-pane>
      </vl-tabs>
    `;
  }
  
}

customElements.define("ohr-agewest", OhrAGewest);
