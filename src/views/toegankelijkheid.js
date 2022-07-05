import { LitElement, html } from "lit-element";
import { page } from "../templates/page";
export class Toegankelijkheid extends LitElement {
    
  render() {
        return page({
            childeren: html`
            <vl-accessibility
          >
          <h1>Test</h1>
          
          </vl-accessibility>`
          ,
          title: "Toegankelijkheid",
        }); 
      }
  

  createRenderRoot() {
    return this;
  }

}
customElements.define("toegankelijkheid-view", Toegankelijkheid);
