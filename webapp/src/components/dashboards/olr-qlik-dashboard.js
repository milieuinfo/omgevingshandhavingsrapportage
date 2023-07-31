import {define, html, LitElement, renderStack} from "../common/commons.js";

import "../qlik/dashboard.js";
import viz_dashboard from "../config/<dashboard>.json" assert {type: "json"};
import filters from "../config/<dashboard>-filters.js";
import {Qlik} from "../qlik/qlik.js";

class OlrQlikDashboard extends LitElement {

  async connectedCallback() {
    this.connection = new Qlik(
        "omgevingsloketrapport.omgeving.vlaanderen.be",
        "f770e83a-940d-44ab-9eb6-7f9eecfd4ca9");
    await this.connection.init();
    this.connected = true;
    super.connectedCallback();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <vl-functional-header
          data-vl-back="Terug"
          data-vl-back-link="/"
          data-vl-title="Monitoring omgevingsvergunningen"
          data-vl-sub-title="Bouwen of verbouwen van woning(en)"
          data-vl-link="/wonen">
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
        size: 3, template: this.__renderDownloadButton(),
      }, {
        size: 12, template: this.__renderIntroduction(),
      }, {
        size: 12, template: this.__renderViewSelector(),
      }];
    }
    return [...pageInfo, {
      size: 12, template: this.__renderDashboard(),
    }];
  }

  __renderTitle() {
    return html`<h1 is="vl-h1" data-vl-no-space-bottom
                    style="padding-top: 3rem">
      Bouwen of verbouwen van woning(en)
    </h1>`;
  }

  __renderIntroduction() {
    return html`
      <vl-typography>
        <p>
          Lorem ipsum
        </p>
      </vl-typography>`;
  }

  __renderDashboard() {
    return html`
      <qlik-dashboard
          .visuals="${viz_dashboard}"
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
  define("olr-qlik-dashboard", OlrQlikDashboard);
});
