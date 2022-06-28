import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/map";
import Map from "ol/Map";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import View from "ol/View";
import "ol/ol.css";
import TileLayer from "ol/layer/Tile";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import XYZ from "ol/source/XYZ";
import { Circle, Fill, Style, Text } from "ol/style";
import { ref, createRef } from "lit/directives/ref.js";
import { styleMap } from "lit/directives/style-map.js";

export class NativeMap extends LitElement {
  static properties = {
    // map: {},
    // featuresLayer: {},
    features: {},
  };

  constructor() {
    super();
    this.mapRef = createRef();
    this.features = [
      new Feature({
        geometry: new Point([210000, 190000]),
      }),
    ];
    this.featuresLayer = new VectorLayer({
      source: new VectorSource(),
      style: new Style({
        image: new Circle({
          fill: new Fill({
            color: "#AD3E00",
          }),
          radius: 11,
        }),
        text: new Text({
          font: "bold 14px Flanders Art Sans,sans-serif",
          fill: new Fill({ color: "#fff" }),
          text: "B",
        }),
      }),
    });
  }

  firstUpdated() {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",
          }),
        }),
        this.featuresLayer,
      ],
      target: this.mapRef.value,
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
    this.map = map;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case "features":
          if (this.features.length > 0 && this.map) {
            this.featuresLayer.setSource(
              new VectorSource({
                features: this.features,
              })
            );
            this.map.getView().fit(this.featuresLayer.getSource().getExtent(), {
              maxZoom: 4,
            });
          }
          break;
        default:
          break;
      }
    });
  }

  render() {
    return html`
      <div
        ${ref(this.mapRef)}
        style=${styleMap({ width: "100%", height: "500px" })}
      ></div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("native-map", NativeMap);
