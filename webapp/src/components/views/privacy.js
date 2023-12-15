import {LitElement} from "lit-element";
import "uig-webcomponents/lib/components/privacy";
import {privacy} from "../templates/privacy";

export class Privacy extends LitElement {

  render() {
    return privacy({
      title: "Privacy",
    });
  }

}

customElements.define("privacy-view", Privacy);
