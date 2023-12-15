import {LitElement} from "lit-element";
import "uig-webcomponents/lib/components/accessibility";
import {toegankelijkheid} from "../templates/toegankelijkheid";

export class Toegankelijkheid extends LitElement {

  render() {
    return toegankelijkheid({
      title: "Toegankelijkheid",
    });
  }

}

customElements.define("toegankelijkheid-view", Toegankelijkheid);
