import {html, LitElement} from "lit-element";
import "uig-webcomponents/lib/legacy/tabs";
import {error404} from "../templates/error404";

export class Error404 extends LitElement {
  render() {
    return error404({
      children: html`
        <vl-http-404-message></vl-http-404-message>`,
      title: "Error404",
    });
  }
}

customElements.define("error404-view", Error404);
