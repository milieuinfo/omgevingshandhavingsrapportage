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
import viz_personeel from "../config/personeel.json" assert {type: "json"};
import filtersPersoneel from "../config/personeel-filters.js";
import {Qlik} from "../qlik/qlik.js";


class OhrPersoneel extends LitElement {
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
        "6960c6d8-493a-4489-a428-367b779be6f9");
    await this.connection.init();
    this.connection.app.on('closed', () => this.closed = true);
    this.connected = true;
    super.connectedCallback();
  }

  constructor() {
    super();
    this.initialized = false;
    this.closed = false;
    this.views = Object.keys(viz_personeel);
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
      choices: Object.keys(viz_personeel).map((v) => {
        return {label: viz_personeel[v].label, value: v};
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
          data-vl-link="/personeel">
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
        Personeel</h1>
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
         Ons dashboard geeft helder en gedetailleerd beeld van de personeelsstructuur binnen onze organisatie, met een bijzondere focus op onze toezichthouders.</br>
         Toezichthouders spelen een cruciale rol in de milieuhandhaving en het is daarom essentieel om de evolutie van deze functies nauwkeurig te monitoren.
        </p>
        <p>
        Dankzij dit dashboard kunt u de verdeling van voltijdsequivalenten (VTE) binnen onze organisatie volgen, van het totale aaantal werknemers tot het specifieke aantal VTE's toegewezen aan toezichtende rollen.<br/>
        Het biedt ook inzicht in de ontwikkeling van deze cijfers over de jaren, wat ons helpt om trends in personeelsbezetting en -groei te identificeren.
        </p>
        <p>
          Het monitoren van deze gegevens is cruciaal voor ons: het stelt ons in staat om onze personeelsbezetting optimaal te beheren, mogelijke tekortkomingen te identificeren en <br/> proactieve maatregelen te nemen om ervoor te zorgen dat we altijd over het juiste aantal gekwalificeerde toezichthouders beschikken om onze milieuhandhavingsopdracht effectief uit te voeren.
        </p>
      </vl-typography>
     
      `;
  }

  __renderDashboard() {
    if (this.closed) {
      return this.__renderIdleTime();
    }
    return html`
      <qlik-dashboard
          id="personeel-dashboard"
          .visuals="${viz_personeel[this.selectedView].visualisations}"
          .filters="${filtersPersoneel}"
          .connection="${this.connection}">
      </qlik-dashboard>

      <section is="vl-region">
      <div is="vl-grid">
        <div is="vl-column" data-vl-size="12">
        <vl-alert
        data-vl-size="small"
        data-vl-icon="info-circle"
        data-vl-title="Info bij visualisatie"
        data-vl-type="info"
      >
        <p>Toevoegen of niet?</p>
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
  define("ohr-personeel", OhrPersoneel);
});
  