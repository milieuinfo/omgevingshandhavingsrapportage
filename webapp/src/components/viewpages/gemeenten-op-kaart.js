import {
  bindVlSelect,
  html,
  LitElement,
  queryById,
  renderStack
} from "../common/commons.js";

import "@domg-wc/elements/select";
import "@domg-wc/components/functional-header";
import "@domg-wc/qlik/infoblock";
import {vlElementsStyle} from "@domg-wc/elements";

import options from "../config/gemeente-op-kaart.json" assert {type: "json"};

class OhrOpkaart extends LitElement {

  static get properties() {
    return {
      selectedChoiceUrl: {type: String}
    }
  }

  static get styles() {
    return [...vlElementsStyle];
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
      <select id="viewselector" is="vl-select" data-vl-select @change="${this.__changeView}">
      </select>
    `;
  }

  __changeView(event) {
    this.selectedChoiceUrl = event.target.value;
  }

  render() {
    return html`
      <vl-functional-header
          data-vl-back="Terug"
          data-vl-back-link="/"
          data-vl-title="Omgevingshandhavingsrapportage"
          data-vl-sub-title="Gemeenten op kaart"
          data-vl-link="/gemeenten-op-kaart">
      </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack({
                size: 12,
                template: this.__renderViewSelector(),
              },
              {
                size: 12,
                template: html`<iframe src="${this.selectedChoiceUrl}" width="100%" height="500px"></iframe>`,
              })}
        </div>
      </section>`;
  }
}

customElements.define('ohr-opkaart', OhrOpkaart);