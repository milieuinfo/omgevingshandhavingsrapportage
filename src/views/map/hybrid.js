import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/map";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { ref, createRef } from "lit/directives/ref.js";
import {
  OlVectorSource,
    OlVectorLayer
} from "vl-mapactions/dist/vl-mapactions.js";
import { Circle, Fill, Style, Text } from "ol/style";

export class HybridMap extends LitElement {
  constructor() {
    super();
    this.mapRef = createRef();
  }

  firstUpdated() {
    const map = this.mapRef.value;
    map.ready.then(() => {
      debugger;
      const featuresLayer = new OlVectorLayer({
        source: new OlVectorSource({
          features: [
            new Feature({
              geometry: new Point([184189.45, 189395.79]),
            }),
          ],
        }),
        style: new Style({
          image: new Circle({
            fill: new Fill({
              color: "#AD3E00",
            }),
            radius: 50,
          }),
          text: new Text({
            font: "bold 14px Flanders Art Sans,sans-serif",
            fill: new Fill({ color: "#fff" }),
            text: "B",
          }),
        }),
      });

      map.addLayer(featuresLayer);
      map.map.getView().fit(featuresLayer.getSource().getExtent(), {
        maxZoom: 4,
      });
    });
  }

  render() {
    return html`
      <vl-map ${ref(this.mapRef)}>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      </vl-map>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("hybrid-map", HybridMap);
