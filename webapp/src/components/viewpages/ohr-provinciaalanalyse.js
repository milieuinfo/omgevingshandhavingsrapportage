import {bindVlSelect, html, LitElement, queryById} from "../common/commons.js";
import {Qlik} from "@domg/qlik-lib";
import {vlElementsStyle} from "@domg-wc/elements";
import VISUALIZATION_PROVINCIE from "../config/provincie.json" assert {type: "json"};

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/components/content-header";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/infoblock";
import {PROVVRAGEN, PROVINCIE} from "../config/qlik_resources.js";

class OhrProvincieAnalyse extends LitElement {

  static get styles() {
    return [
      ...vlElementsStyle
    ]
  }

  static get properties() {
    return {
      connected: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.initialized = false;
    this.connected = false;
  }

  async connectedCallback() {
    this.connection = new Qlik("omgevingsloketrapport.omgeving.vlaanderen.be",
        "cf33bec5-f5a5-4554-abd0-b6c002b3ac5c");
    await this.connection.init();
    this.connection.app.on('closed', () => this.closed = true);

    this.connected = true;

    this.tiles = [
      {
        title: "Gewestelijke toezichthouders en VTE",
        vis: VISUALIZATION_PROVINCIE,
        intro: ""
      }
    ]

    super.connectedCallback();
  }

  async firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    await this.connection.addFilters(PROVINCIE);
    await this.connection.addFilters(PROVVRAGEN); // Add the second filter

    const filterValues = await this.connection.getFilterValues(PROVINCIE.name);

    bindVlSelect({
      component: queryById(this)("provincie-select"),
      choices: filterValues.map((filterValue) => {
        return {
          label: filterValue.label,
          value: filterValue.label,
          disabled: filterValue.state === 'excluded',
        };
      }),
    });

    // Assuming the second filter also needs to populate a select element
    const secondFilterValues = await this.connection.getFilterValues(PROVVRAGEN.name);

    bindVlSelect({
      component: queryById(this)("second-filter-select"),
      choices: secondFilterValues.map((filterValue) => {
        return {
          label: filterValue.label,
          value: filterValue.label,
          disabled: filterValue.state === 'excluded',
        };
      }),
    });
  }

  render() {
    return html`
    <vl-functional-header
    data-vl-back="Terug"
    data-vl-back-link="/"
    data-vl-title="Provinciaal handhavingsactoren"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/">
    </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${this.__renderPage()}
        </div>
      </section>`;
  }

  __renderPage() {
    if (!this.connected) {
      return html`
        <vl-loader
            data-vl-text="Pagina is aan het laden"
        ></vl-loader>`;
    }
    return html`
      <h2 is="vl-h2">Cijfers milieuhandhaving TEST Provincie</h2>
      <div is="vl-grid">
        <div is="vl-column" data-vl-size="12">
          <select is="vl-select" data-vl-select id="provincie-select" @change="${this.__changeFilter}" data-vl-select-deletable></select>
          <select is="vl-select" data-vl-select id="second-filter-select" @change="${this.__changeSecondFilter}" data-vl-select-deletable></select> <!-- Add the second filter select element -->
        </div>
        <div is="vl-column" data-vl-size="12">
          ${this.tiles.map(tile => html`
            <vl-qlik-infoblock title="${tile.title}"
                            icon="business-graph-bar"
                            .visuals="${tile.vis}"
                            .connection="${this.connection}">
              <span>${tile.intro}</span>
            </vl-qlik-infoblock>
          `)}
        </div>
      </div>`;
  }

  async __changeFilter(e) {
    const element = queryById(this)(e.target.id);
    if (element.value) {
      await this.connection.selectFilters(PROVINCIE.name, [element.value]);
    } else {
      await this.connection.clearFilter(PROVINCIE.name);
    }
  }

  async __changeSecondFilter(e) {
    const element = queryById(this)(e.target.id);
    if (element.value) {
      await this.connection.selectFilters(PROVVRAGEN.name, [element.value]);
    } else {
      await this.connection.clearFilter(PROVVRAGEN.name);
    }
  }
}

customElements.define("ohr-provincieanalyse", OhrProvincieAnalyse);
