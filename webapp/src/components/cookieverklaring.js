import { LitElement, html } from "lit-element";
import {blank, cookie } from "../templates/cookieverklaring";
export class Cookieverklaring extends LitElement {
    
  render() {
        return cookie({
          title: "Cookieverklaring",
        }); 
      }
  createRenderRoot() {
    return this;
  }

}
customElements.define("cookieverklaring-view", Cookieverklaring);
