import {define, html, LitElement, queryById} from "../common/commons.js";

class QlikVisual extends LitElement {

  static get properties() {
    return {
      type: {type: String},
      id: {type: String},
      height: {type: String},
      properties: {type: Object},
      stardust: {type: Object}
    }
  }

  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.properties = {};
  }

  async updated(changedProperties) {
    if (this.viz) {
      this.viz.destroy();
    }
    this.viz = await this.stardust.render({
      element: queryById(this)(`visual-${this.id}`),
      id: this.id,
      type: this.type,
      properties: this.properties
    });
    this.viz.model.on('changed', ((e) => {
      this.dispatchEvent(new CustomEvent("visual-changed"));
    }).bind(this))

    if (this.type === 'distributionplot') {
      // experimental api
      await this.viz.__DO_NOT_USE__.applyProperties({
        dataPoint: {
          bubbleScales: this.properties.dataPoint.bubbleScales,
        }
      });
    }
  }

  render() {
    return html`
      <div id="visual-${this.id}" style="height: ${this.height}"></div>
    `;
  }

  disconnectedCallback() {
    if (this.viz) {
      this.viz.destroy();
    }
  }

}

define('qlik-visual', QlikVisual, {})