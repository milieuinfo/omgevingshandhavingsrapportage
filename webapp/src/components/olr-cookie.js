import {define, html, LitElement} from "./common/commons.js";

class OlrCookie extends LitElement {

  render() {
    return html`
      <vl-cookie-statement></vl-cookie-statements>
    `;
  }
}

define('olr-cookie', OlrCookie);