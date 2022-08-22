import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import { analysis } from "../templates/analysis";
import { embed } from '@nebula.js/stardust';
export class GemeentenAnalyseView extends LitElement {
    
render() {
    return analysis({
      children: html`
      <vl-functional-header data-vl-back="Terug" data-vl-back-link="/public/gemeenten"
      data-vl-title="Cijfers van de gemeenten op kaart"
      data-vl-sub-title="Een geografische analyse van de activiteiten van de gemeenten" data-vl-link="Gemeente">
  </vl-functional-header>
  
  <section is="vl-region">
      <div is="vl-layout">
          <div is="vl-grid" data-vl-is-stacked>
              <div is="vl-column" data-vl-size="8" data-vl-medium-size="8" data-vl-small-size="8"
                  data-vl-extra-small-size="12">
                  <div is="vl-side-navigation-reference">
                      <section id="content-1" is="vl-region">
                          <h2 is="vl-h2">Hoe interpreteer ik de kaarten?</h2>
                          <p>
                              Deze pagina toont een inzichtelijke beeld over de cijfers van gemeentelijke
                              handhavingsactoren.
                              De grafieken zijn volledig interactief en de cijfers zullen worden gewijzigd naargelang de
                              gekozen filtering.
                              Uw aangeduide filtering kan op elk moment verwijderd worden met de selectiebalk hieronder.
                          </p>
                      </section>
  
                      <section id="content-1-1" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12  class=" data-top-bot">
                                  <vl-infoblock
                                      data-vl-title="Aantal toezicthouders - Verbalisanten/stedenbouwkundige inspecteurs"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal VTE Milieuhandhaving</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                          <iframe title="" aria-label="Map" id="datawrapper-chart-9tSSJ"
                                              src=https://datawrapper.dwcdn.net/9tSSJ/2/ scrolling="no" frameborder="0"
                                              style="width: 0; min-width: 100% !important; border: none;"
                                              height="264"></iframe>
                                          <script type="text/javascript">!function () { "use strict"; window.addEventListener("message", (function (e) { if (void 0 !== e.data["datawrapper-height"]) { var t = document.querySelectorAll("iframe"); for (var a in e.data["datawrapper-height"]) for (var r = 0; r < t.length; r++) { if (t[r].contentWindow === e.source) t[r].style.height = e.data["datawrapper-height"][a] + "px" } } })) }();
                                          </script>
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal VTE Ruimtelijke Ordening</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                          <iframe title="" aria-label="Map" id="datawrapper-chart-R3OOe"
                                              src="https://datawrapper.dwcdn.net/R3OOe/1/" scrolling="no" frameborder="0"
                                              style="width: 0; min-width: 100% !important; border: none;"
                                              height="264"></iframe>
                                          <script
                                              type="text/javascript">!function () { "use strict"; window.addEventListener("message", (function (e) { if (void 0 !== e.data["datawrapper-height"]) { var t = document.querySelectorAll("iframe"); for (var a in e.data["datawrapper-height"]) for (var r = 0; r < t.length; r++) { if (t[r].contentWindow === e.source) t[r].style.height = e.data["datawrapper-height"][a] + "px" } } })) }();</script>
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                      </section>
  
  
                      <section id="content-1-2" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="VTE Milieu - VTE Ruimtelijke ordening"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal VTE Milieuhandhaving</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="" aria-label="Map" id="datawrapper-chart-9tSSJ" src=https://datawrapper.dwcdn.net/9tSSJ/2/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal VTE ruimtelijke ordening</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="" aria-label="Map" id="datawrapper-chart-92pBZ" src=https://datawrapper.dwcdn.net/92pBZ/2/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-2" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Klachten milieu - Klachten Ruimtelijk ordening"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal klachten (milieu)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="" aria-label="Map" id="datawrapper-chart-V6HHj" src=https://datawrapper.dwcdn.net/V6HHj/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal klachten (ruimtelijke ordening)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="" aria-label="Map" id="datawrapper-chart-KDA1H" src=https://datawrapper.dwcdn.net/KDA1H/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-2" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Controles milieu - controles ruimtelijke ordening"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal controles (milieu)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="" aria-label="Map" id="datawrapper-chart-VVCOy" src=https://datawrapper.dwcdn.net/VVCOy/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal controles (ruimtelijke ordening)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="" aria-label="Map" id="datawrapper-chart-sLfx7" src=https://datawrapper.dwcdn.net/sLfx7/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-2" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Aanvankelijke controles met schending"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanvankelijke controles met schending (milieu)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="" aria-label="Map" id="datawrapper-chart-rq5Mb" src=https://datawrapper.dwcdn.net/rq5Mb/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanvankelijke controles met schending (ruimtelijke ordening)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="" aria-label="Map" id="datawrapper-chart-Pd98T" src=https://datawrapper.dwcdn.net/Pd98T/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-2" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Aanmaningen" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanmaningen (milieu)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="" aria-label="Map" id="datawrapper-chart-Am9eA" src=https://datawrapper.dwcdn.net/Am9eA/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanmaningen (ruimtelijke ordening)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="aanmaningen" aria-label="Map" id="datawrapper-chart-D1Du0" src="https://datawrapper.dwcdn.net/D1Du0/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();</script>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-2" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Processen-verbaal" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal processen-verbalen (milieu)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="" aria-label="Map" id="datawrapper-chart-0dqIk" src=https://datawrapper.dwcdn.net/0dqIk/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal processen-verbalen (ruimtelijke ordening)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="PVRO" aria-label="Map" id="datawrapper-chart-5sRYh" src="https://datawrapper.dwcdn.net/5sRYh/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();</script>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-2" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Verslagen van vastelling"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal verslagen van vastelling (milieu)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="" aria-label="Map" id="datawrapper-chart-0L4iz" src=https://datawrapper.dwcdn.net/0L4iz/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
  
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verslagen van vastelling (ruimtelijke ordening)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="verslag vastelling ro" aria-label="Map" id="datawrapper-chart-w3pgv" src="https://datawrapper.dwcdn.net/w3pgv/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();</script>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-2" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Stakingsbevelen" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal stakingsbevelen (ruimtelijke ordening)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="bevel tot staking" aria-label="Map" id="datawrapper-chart-qy3rp" src="https://datawrapper.dwcdn.net/qy3rp/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();</script>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-2" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Bestuurlijke maatregelen"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal bestuurlijke maatregelen (milieu)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="" aria-label="Map" id="datawrapper-chart-IUFFN" src=https://datawrapper.dwcdn.net/IUFFN/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal bestuurlijke maatregelen (ruimtelijke ordening)</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="bestuurlijke maatregel ro" aria-label="Map" id="datawrapper-chart-8mvaC" src="https://datawrapper.dwcdn.net/8mvaC/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();</script>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
                      <section is="vl-region" id="content-4">
                          <h3 is="vl-h3">Bekijk cijfers voor andere thema's</h3>
                          <vl-alert data-vl-icon="info-circle" data-vl-title="Bekijk de cijfers van andere thema's"
                              data-vl-type="info">
                              <p>
                                  <a is="vl-link-button" href="/public/gewestelijk">Gewest</a>
                                  <a is="vl-link-button" href="/public/provinciaal">Provinciaal</a>
                                  <a is="vl-link-button" href="/public/hogeraad">Hoge raad</a>
                                  <a is="vl-link-button" href="/public/strafrechtelijk">Strafrechtelijk en bestuurlijk
                                      vervolgtraject</a>
                              </p>
                          </vl-alert>
                      </section>
                  </div>
              </div>
              <div is="vl-column" data-vl-size="4" data-vl-medium-size="4" data-vl-small-size="4"
                  data-vl-extra-small-size="0">
                  <nav is="vl-side-navigation" aria-label="inhoudsopgave">
                      <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
                      <div is="vl-side-navigation-content">
                          <ul is="vl-side-navigation-group">
                              <li is="vl-side-navigation-item" data-vl-parent="content-1">
                                  <a is="vl-side-navigation-toggle" href="#content-1" data-vl-child="content-1">
                                      Cijfers voor milieu
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                                  <ul>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-1" data-vl-parent="content-1">Selecties</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-2" data-vl-parent="content-1">Toezichthouders en VTE</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-3" data-vl-parent="content-1">Klachten</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-4" data-vl-parent="content-1">Controles</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-5" data-vl-parent="content-1">Aanvankelijke controles
                                                  met overtreding</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-6" data-vl-parent="content-1">Instrumentarium</a>
                                          </div>
                                      </li>
  
                                  </ul>
                              </li>
                              <li is="vl-side-navigation-item" data-vl-parent="content-3">
                                  <a is="vl-side-navigation-toggle" href="#content-3" data-vl-child="content-3">
                                      Cijfers voor ruimtelijke ordening
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                                  <ul>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-1" data-vl-parent="content-3">Verbalitisanten en
                                                  stedenbouwkundige inspecteurs</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-2" data-vl-parent="content-3">VTE</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-3" data-vl-parent="content-3">Overzicht</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-3-4" data-vl-parent="content-3">Controles</a>
                                          </div>
                                      </li>
  
                                  </ul>
                              </li>
                              <li is="vl-side-navigation-item" data-vl-parent="content-4">
                                  <a is="vl-side-navigation-toggle" href="#content-4" data-vl-child="content-4">
                                      Andere thema's
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>
      </div>
  </section>

      `,
      title: "GemeentenAnalyseView",
    });
  }

  createRenderRoot() {
    return this;
  }
}
customElements.define("gemeentenanalyse-view", GemeentenAnalyseView);
