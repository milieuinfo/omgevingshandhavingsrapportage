import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import { analysis } from "../templates/analysis";
import { embed } from '@nebula.js/stardust';
export class GemeentenAnalyseView extends LitElement {
    
render() {
    return analysis({
      children: html`

      <vl-functional-header data-vl-back="Terug naar infopagina" data-vl-back-link="/public/gewestelijk"
      data-vl-title="Cijfers van de gemeenten"
      data-vl-sub-title="Een analyse van de activiteiten van de gemeenten"
      data-vl-link="Gemeente">
  </vl-functional-header>
      <div is="vl-layout">
      <div is="vl-grid">
      <div is="vl-column">
      <vl-typography>
  <h3>Gemeenten op kaart</h3>
  </vl-typography></div>

      </div>
      <div is="vl-grid">
      <div is="vl-column" data-vl-size=8>
      <vl-typography>
  <h3>Aantal toezichthouders</h3>
  </vl-typography>
      <iframe title="" aria-label="Map" id="datawrapper-chart-2oM5D" src="https://datawrapper.dwcdn.net/2oM5D/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="400"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script></div>
      </div>
      </div>
      `,
      title: "GemeentenAnalyseView",
    });
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define("gemeentenanalyse-view", GemeentenAnalyseView);
