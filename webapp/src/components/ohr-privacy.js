import {html, LitElement} from "./common/commons.js";
import "@domg-wc/sections/privacy";

class OhrPrivacy extends LitElement {

  render() {
    return html`
      <vl-privacy></vl-privacy>
    `;
  }
}

customElements.define('ohr-privacy', OhrPrivacy);