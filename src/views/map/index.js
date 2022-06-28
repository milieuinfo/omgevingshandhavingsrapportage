import { LitElement, html } from "lit-element";
import { page } from "../../templates/page";
import "./hybrid";
import "./native";

export class MapView extends LitElement {
  render() {
    return html`
      ${page({
        children: html`
          <div is="vl-column" data-vl-size="12">
            <native-map></native-map>
          </div>
          <div is="vl-column" data-vl-size="12">
            <hybrid-map></hybrid-map>
          </div>
        `,
        title: "Map",
      })}
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("map-view", MapView);
