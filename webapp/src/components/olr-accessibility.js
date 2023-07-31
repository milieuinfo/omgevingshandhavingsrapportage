import {define, html, LitElement} from "./common/commons.js";

class OlrAccessibility extends LitElement {

  render() {
    return html`
      <vl-accessibility></vl-accessibility>
    `;
  }
}

define('olr-accessibility', OlrAccessibility);