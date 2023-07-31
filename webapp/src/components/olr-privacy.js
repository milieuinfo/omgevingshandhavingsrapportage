import {define, html, LitElement} from "./common/commons.js";

class OlrPrivacy extends LitElement {

  render() {
    return html`
      <vl-privacy></vl-privacy>
    `;
  }
}

define('olr-privacy', OlrPrivacy);