import {html, LitElement} from "./common/commons.js";
import "@domg-wc/sections/accessibility";

class OhrAccessibility extends LitElement {
  
  render() {
    return html`
      <vl-accessibility></vl-accessibility>
    `;
  }
}
customElements.define('ohr-accessibility', OhrAccessibility);