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
import viz_windturbine from "../config/windturbine.json" assert {type: "json"};
import filters_windturbine from "../config/windturbine-filters.js";
import {Qlik, exportCSVFile, exportExcelFile} from "@domg/qlik-lib";

class OlrWindturbine extends LitElement {
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
        "b20aa14e-fb0c-4d16-8a73-40a49ba2de62");
    await this.connection.init();
    this.connection.app.on('closed', () => this.closed = true);
    this.connected = true;
    super.connectedCallback();
  }

  constructor() {
    super();
    this.initialized = false;
    this.closed = false;
    this.views = Object.keys(viz_windturbine);
    this.selectedView = "project";
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
      choices: Object.keys(viz_windturbine).map((v) => {
        return {label: viz_windturbine[v].label, value: v};
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
          data-vl-title="Monitoring omgevingsvergunningen"
          data-vl-sub-title="Windturbines"
          data-vl-link="/windturbine">
      </vl-functional-header>
      <div style="margin: 0px 25px">
        ${renderStack(...this.__renderPageInfo())}
      </div>`;
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
      }];
    }
    return [...pageInfo, {
      size: 12, template: this.__renderDashboard(),
    }];
  }

  __renderDownloadButton() {
    return html`
      <div is="vl-action-group" style="float:right;margin-top: 3rem">
        <select id="format-select" is="vl-select"
                style="margin-right: 1.4rem">
          <option value="xlsx">Excel</option>
          <option value="csv">CSV</option>
        </select>
        <button is="vl-button"
                @click="${(e) => performWithLoader(e.target,
                    this.export.bind(this))}">
                      <span is="vl-icon" data-vl-icon="file-download"
                            data-vl-before></span>
          Download
        </button>
      </div>`;
  }

  __renderIdleTime() {
    return html`
    <vl-alert
    data-vl-icon="warning"
    data-vl-title="Connectie met de visualisaties afgesloten."
    data-vl-type="error">
  <p>Uw connectie is afgesloten door inactiviteit op de pagina. Vernieuw de pagina om een nieuwe connectie te maken. </p>
  <button onClick="window.location.reload();" slot="actions" is="vl-button" >Vernieuw de pagina</button>
    </vl-alert>`;
  }

  __renderTitle() {
    return html`
      <h1 is="vl-h1" data-vl-no-space-bottom style="padding-top: 3rem">
        Windturbines</h1>
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

  //Aanpassen naar windturbines
  async export() {
    if (queryById(this)("format-select").value === "csv") {
      await exportCSVFile(
          'pbpmw', 'windturbine', this.connection);
    } else {
      await exportExcelFile(
          'pbpmw', 'windturbine', this.connection);
    }
  }

  __renderIntroduction() {
    return html`
      <vl-typography>
        <p>
          Vlaanderen bouwt mee aan een klimaatneutraal Europa tegen 2050. De
          overgang naar 100% hernieuwbare energie vormt hierbij een belangrijke
          pijler.<br/>
          Windturbines bouwen helpt dus om de schadelijke effecten van ons
          energieverbruik op de omgeving te beperken.
        </p>
        <p>
          Het Omgevingsloket bevat informatie over het aantal
          windturbines, het maximaal vermogen, de status in de procedure, enz.
          van aangevraagde windturbineprojecten.<br/> Hieruit blijkt dat
          jaarlijks gemiddeld 214 windturbines worden aangevraagd. Dit komt
          overeen met gemiddeld 699 MW per jaar.
        </p>
        <p>
          De rapportage op deze pagina geeft de informatie weer zoals ze ingegeven is in het Omgevingsloket. 
          Niet alle aanvragen werden correct ingevuld.
        </p>
        <p>Klik <a target="_new_blank"
            href="https://www.vlaanderen.be/datavindplaats/catalogus/windturbines-omgevingsvergunningen#downloadservices">hier</a>
          voor een kaart met de locatie en status van de aanvragen voor
          windturbines en de vermelding of de turbine al dan niet gebouwd is.
      </vl-typography>
      </p>
      `;
  }

  __renderViewSelector() {
    return html`
      <h6 is="vl-h6" data-vl-no-space-bottom>
        Kies hier de gewenste dimensie, en de grafieken geven de
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
          id="windturbines-dashboard"
          .visuals="${viz_windturbine[this.selectedView].visualisations}"
          .filters="${filters_windturbine}"
          .connection="${this.connection}">
      </qlik-dashboard>

      <section is="vl-region">
      <div is="vl-grid">
        <div is="vl-column" data-vl-size="12">
        <vl-alert
        data-vl-size="small"
        data-vl-icon="info-circle"
        data-vl-title="* Info bij visualisatie"
        data-vl-type="info"
      >
        <p>In het Omgevingsloket wordt informatie bijgehouden over de administratieve beslissingsprocedure die opgestart wordt na een uitspraak van de RvVb. Deze leidt dan tot een nieuwe beslissing van de vergunningverlenende overheid. De beroepsprocedure bij de RvVb wordt niet in het Omgevingsloket geregistreerd. Sporadisch wordt wel een uitspraak van de Raad opgenomen, maar dit wordt zeker niet voor alle uitspraken gedaan.</p>
      </vl-alert></section>
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
  define("olr-windturbine", OlrWindturbine);
});
  