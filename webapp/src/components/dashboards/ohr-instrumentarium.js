import {
    bindVlSelect,
    comparingWithFunction,
    define,
    html,
    LitElement,
    performWithLoader,
    queryById,
    renderStack
  } from "../common/commons.js";

import "../qlik/dashboard.js";
import {DEFAULT, REFRESH_MEASURE} from "../config/qlik_resources.js";
import viz_klachten from "../config/klachten.json" assert {type: "json"};
import filters from "../config/klachten-filters.js";
import {Qlik, exportCSVFile, exportExcelFile} from "@domg/qlik-lib";

class OhrInstrumentarium extends LitElement {
    static get properties() {
      return {
        initialized: {type: Boolean},
        closed: {type: Boolean},
        views: {type: Array},
        selectedView: {type: String}
      };
    }
  
async connectedCallback() {
      this.connection = new Qlik(
          "omgevingsloketrapport.omgeving.vlaanderen.be",
          "cb35931b-212b-4003-bf44-484e23fcc6e7");
      await this.connection.init();
      this.connection.app.on('closed', () => this.closed = true);
      this.connected = true;
      super.connectedCallback();
    }
  
    constructor() {
      super();
      this.initialized = false;
      this.closed = false;
      this.views = Object.keys(viz_klachten);
      this.selectedView = "gewest";
    }
  
    createRenderRoot() {
      return this;
    }
  
    async firstUpdated(_changedProperties) {
      await this.connection.addCubes({
        name: 'refresh', dimensions: [DEFAULT], measures: [REFRESH_MEASURE]
      })
      this.refresh = (await this.connection.getCubeValues(
          'refresh'))[0]["Refresh rate"];
      this.initialized = true;
    }
  
    async __bindFilters() {
       await bindVlSelect({
        component: queryById(this)("view-selector"),
        choices: Object.keys(viz_klachten).map((v) => {
          return {label: viz_klachten[v].label, value: v};
        }),
        selectedChoices: [this.selectedView],
        sortFilter: comparingWithFunction((x) => x.order)
      })
    }
  
    updated(_changedProperties) {
      if (this.initialized) {
        this.__bindFilters();
      }
    }
  
    render() {
      return html`
        <vl-functional-header
            data-vl-back="Terug"
            data-vl-back-link="/"
            data-vl-title="Omgevingshandhavingsrapportage"
            data-vl-sub-title="Meerjarenrapportage personeel"
            data-vl-link="/controles">
        </vl-functional-header>
        <div style="margin: 0px 25px">
          ${renderStack(...this.__renderPageInfo())}
        </div></section>`;
    }
  
    __renderPageInfo() {
      let pageInfo = []
      if (!this.initialized) {
        pageInfo = [{
          size: 12, template: html`
            <vl-loader
                data-vl-text="Pagina is aan het laden"
            ></vl-loader>`,
        }];
      } else {
        pageInfo = [{
          size: 9, template: this.__renderTitle(),
        }, {
          size: 12, template: this.__renderIntroduction(),
        },
    {
        size: 12, template: this.__renderViewSelector(),
    }
    ];
      }
      return [...pageInfo, {
        size: 12, template: this.__renderDashboard(),
      }];
    }
  
    __renderIdleTime() {
      return html`
      <vl-alert data-vl-icon="warning" data-vl-title="Connectie met de visualisaties afgesloten." data-vl-type="error">
      <p>Uw connectie is afgesloten door inactiviteit op de pagina. Vernieuw de pagina om een nieuwe connectie te maken.</p>
        <button onClick="window.location.reload();" slot="actions" is="vl-button" >Vernieuw de pagina</button>
      </vl-alert>`;
    }
  
    __renderTitle() {
      return html`
        <h1 is="vl-h1" data-vl-no-space-bottom style="padding-top: 3rem">
          Instrumentarium</h1>
        <p is="vl-icon-wrapper">
          <vl-annotation>
            <span>Laatste wijziging:</span>
          </vl-annotation>
          <span is="vl-icon" data-vl-icon="calendar" data-vl-before data-vl-after
                data-vl-light></span>
          <vl-annotation>
            <span>${this.refresh}</span>
          </vl-annotation>
        </p>`;
    }
    __renderIntroduction() {
      return html`
        <vl-typography>
          <p>
            Aanvullen
          </p>
        </vl-typography>
        `;
    }
    __renderViewSelector() {
      return html`
        <h6 is="vl-h6" data-vl-no-space-bottom>
          Kies hier de gewenste instantie, en de grafieken geven de
          overeenkomstige waarden weer
        </h6>
        <form is="vl-form">
          <select
              is="vl-select"
              id="view-selector"
              data-vl-select
              data-vl-select-search-no-result-limit
              @change="${this.__changeView}"
          ></select>
        </form>
        `;
    }
    async __changeView(e) {
      this.selectedView = e.detail.value;
    }
  
    __renderDashboard() {
      if (this.closed) {
        return this.__renderIdleTime();
      }
      return html`
        <qlik-dashboard
            id="personeel-dashboard"
            .visuals="${viz_klachten[this.selectedView].visualisations}"
            .filters="${filters}"
            .connection="${this.connection}">
        </qlik-dashboard>
      `;
    }
  
    async disconnectedCallback() {
      await this.connection.end();
    }
  }
  
  Promise
  .all([window.customElements.whenDefined("vl-multiselect"),
    window.customElements.whenDefined("vl-select")])
  .then(() => {
    define("ohr-instrumentarium", OhrInstrumentarium);
  });
    