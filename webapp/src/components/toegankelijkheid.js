import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/accessibility";
import { blank, toegankelijkheid } from "../templates/toegankelijkheid";
export class Toegankelijkheid extends LitElement {
    
  render() {
        return toegankelijkheid({
          title: "Toegankelijkheid",
        }); 
      }
      
  createRenderRoot() {
    return this;
  }

}
customElements.define("toegankelijkheid-view", Toegankelijkheid);
