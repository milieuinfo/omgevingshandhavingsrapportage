import {LitElement} from "lit-element";
import {cookie} from "../templates/cookieverklaring";

export class Cookieverklaring extends LitElement {

  render() {
    return cookie({
      title: "Cookieverklaring",
    });
  }
}
customElements.define("cookieverklaring-view", Cookieverklaring);
