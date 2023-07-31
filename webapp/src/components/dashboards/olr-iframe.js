import {define, html, LitElement, renderStack} from "../common/commons.js";
import {IFRAME_PAGES} from "../config/iframes.js";

class OlrIFrame extends LitElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.location = window.location.pathname;
    this.info = IFRAME_PAGES[window.location.pathname];
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
          data-vl-sub-title="${this.info.link_title}" data-vl-link="${this.location}">
      </vl-functional-header>
      <div style="margin: 0px 25px">
        ${renderStack({
              size: 9,
              template: html`
                <h1 is="vl-h1" data-vl-no-space-bottom
                    style="padding-top: 3rem">
                  ${this.info.title}
                </h1>`
            },
            {
              size: 12,
              template: this.__renderIntroduction()
            },
            {
              size: 12,
              template: this.__renderIFrame()
            })
        }
      </div>
    `;
  }

  __renderIntroduction() {
    return html`
      <div>
        <p is="vl-introduction">
          ${this.info.introduction}
        </p>
      </div>`;
  }

  __renderIFrame() {
    return html`
      <iframe style="height: 100vh; width: 100%"
              src="${this.info.url}"></iframe>`;
  }
}

define("olr-iframe", OlrIFrame);
