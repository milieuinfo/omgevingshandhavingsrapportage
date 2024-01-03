import {html, LitElement} from "./common/commons.js";
import "@domg-wc/sections/cookie-statement";

class OhrCookie extends LitElement {

  render() {
    return html`
      <vl-cookie-statement></vl-cookie-statements>
    `;
  }
}

customElements.define('ohr-cookie', OhrCookie);