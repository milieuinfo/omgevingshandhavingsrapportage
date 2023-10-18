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
                              De kaarten worden onderverdeeld in twee categorieën:</p>
                              <vl-typography>

                                <li>Milieu: groene kaarten</li>
                                <li>Ruimtelijke ordening: oranje kaarten</li>

                              </vl-typography>
                                <br/>
                              <p>De kleurgradaties wijzen op de aantalllen in de gemeenten per 1.000 inwoners. </p>
                              <p>Bij hoveren over een gemeente worden twee cijfers meegeven: de relatieve waarde per 1.000 inwoners en absolute waarde voor deze gemeente.</p>

                              <br/>
                              
                              <p>
                              De responsgraad voor deze bevraging (of bepaalde vragen in de bevraging) bedraagt geen 100%.
                              Dit maakt dat bepaalde gemeenten als waarde "niet gekend" of "non-repons" tonen.
                              Deze worden in een grijs kleur aangetoond op de kaarten.
                              
                              
                              </p>
                          
                      </section>
  
                      <section id="content-1-1" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12  class=" data-top-bot">
                                  <vl-infoblock
                                      data-vl-title="Toezichthouders en verbalisanten/stedenbouwkundige inspecteurs - 2022"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal toezichthouders - milieu</span>
                                      <div slot="content">
                                      <iframe title="2023 Toezichthouders" aria-label="Map" id="datawrapper-chart-kee7l" src="https://datawrapper.dwcdn.net/kee7l/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
                                      </script>
                                      <p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                      
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal verbalisanten/stedenbouwkundige inspecteurs - ruimtelijke ordening</span>
                                      <div slot="content">
                                      <iframe title="2023 verbalisanten" aria-label="Map" id="datawrapper-chart-rxtkO" src="https://datawrapper.dwcdn.net/rxtkO/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                      </section>
  
  
                      <section id="content-1-2" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="VTE milieuhandhaving en handhaving ruimtelijke ordening - 2022"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal VTE milieuhandhaving</span>
                                      <div slot="content">
                                      <iframe title="2023 Toezichthouders" aria-label="Map" id="datawrapper-chart-kee7l" src="https://datawrapper.dwcdn.net/kee7l/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script>
                                      <p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal VTE handhaving ruimtelijke ordening</span>
                                      <div slot="content">
                                      <iframe title="2023 VTE" aria-label="Map" id="datawrapper-chart-U5Wvz" src="https://datawrapper.dwcdn.net/U5Wvz/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-3" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Klachten milieu en ruimtelijke ordening - 2022"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
                          
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal klachten milieu</span>
                                      <div slot="content">
                                      <iframe title="2023 klachten" aria-label="Map" id="datawrapper-chart-qLFbr" src="https://datawrapper.dwcdn.net/qLFbr/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                          


                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal klachten ruimtelijke ordening</span>
                                      <div slot="content">
                                      <iframe title="2023 Klachten" aria-label="Map" id="datawrapper-chart-Ug5e5" src="https://datawrapper.dwcdn.net/Ug5e5/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script>
                                      <p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                      
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-4" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Controles milieu en ruimtelijke ordening - 2022"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal controles milieu</span>
                                      <div slot="content">
                                      
                                      
                                      <iframe title="2023 Controles" aria-label="Map" id="datawrapper-chart-dYV5Y" src="https://datawrapper.dwcdn.net/dYV5Y/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                      
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal controles ruimtelijke ordening</span>
                                      <div slot="content">
                                      <iframe title="2023 controles" aria-label="Map" id="datawrapper-chart-K8MgK" src="https://datawrapper.dwcdn.net/K8MgK/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-5" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Aanvankelijke controles met schending milieu en ruimtelijke ordening - 2022"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanvankelijke controles met schending milieu</span>
                                      <div slot="content">
                                      <iframe title="2023 Aanvankelijke controles" aria-label="Map" id="datawrapper-chart-bJSon" src="https://datawrapper.dwcdn.net/bJSon/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                      <p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanvankelijke controles met schending ruimtelijke ordening</span>
                                    
                                      <div slot="content">
                                      <iframe title="2023 aanvankelijke controles" aria-label="Map" id="datawrapper-chart-9Adk6" src="https://datawrapper.dwcdn.net/9Adk6/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
                                      </script>   

<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>

                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>

                      <section id="content-1-6" is="vl-region">
  
                      <div is="vl-grid">
                          <div is="vl-column data-vl-size=12 class=" data-top-bot">
                              <vl-infoblock data-vl-title="Raadgevingen milieu en ruimtelijke ordening" data-vl-icon="business-graph-bar">
                              </vl-infoblock>
                          </div>
                      </div>

                      <div is="vl-grid">
                          <div is="vl-column" data-vl-size=10>
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Aantal raadgevingen milieu</span>
                                
                                  <div slot="content">
                                 
                                  <iframe title="Raadgeving milieu 2022" aria-label="Map" id="datawrapper-chart-W4fZX" src="https://datawrapper.dwcdn.net/W4fZX/10/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="320" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
                                  </script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                  </div>
                              </vl-info-tile>
                          </div>
                      </div>

                      <div is="vl-grid" class="data-top-bot">
                          <div is="vl-column" data-vl-size=10>
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Aantal raadgevingen ruimtelijke ordening</span>
                                  <div slot="content">
                                  <iframe title="Raadgeving RO" aria-label="Map" id="datawrapper-chart-MN4cF" src="https://datawrapper.dwcdn.net/MN4cF/6/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="392" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
                                  </script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                  </div>
                                  
                              </vl-info-tile>
                          </div>
                      </div>


                  </section>
  
                      <section id="content-1-7" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Aanmaningen milieu en ruimtelijke ordening" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanmaningen milieu</span>
                                    
                                      <div slot="content">
                                      <iframe title="2023 Aanmaning" aria-label="Map" id="datawrapper-chart-edCAt" src="https://datawrapper.dwcdn.net/edCAt/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanmaningen ruimtelijke ordening</span>
                                      <div slot="content">
                                      <iframe title="2023 Aanmaningen " aria-label="Map" id="datawrapper-chart-7cBuZ" src="https://datawrapper.dwcdn.net/7cBuZ/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                      
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-8" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Processen-verbaal milieu en ruimtelijke ordening - 2022" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal processen-verbaal milieu</span>
                                      
                                      <div slot="content">
                                      <iframe title="2023 PV " aria-label="Map" id="datawrapper-chart-ap4yA" src="https://datawrapper.dwcdn.net/ap4yA/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal processen-verbaal ruimtelijke ordening</span>
                                      
                                      <div slot="content">
                                      <iframe title="2023 proces verbalen" aria-label="Map" id="datawrapper-chart-qZ3RT" src="https://datawrapper.dwcdn.net/qZ3RT/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-9" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Verslagen van vaststelling milieu en ruimtelijke ordening - 2022"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal verslagen van vastelling milieu</span>
                                      
                                      <div slot="content">
                                      <iframe title="2023 verslag van vaststelling" aria-label="Map" id="datawrapper-chart-Ba8i8" src="https://datawrapper.dwcdn.net/Ba8i8/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
                                      
                                      
                                      <p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verslagen van vastelling ruimtelijke ordening</span>
                                      
                                      <div slot="content">
                                      <iframe title="2023 RO verslag van vaststelling" aria-label="Map" id="datawrapper-chart-g3hOa" src="https://datawrapper.dwcdn.net/g3hOa/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
                                      </script>


<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-10" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Stakingsbevelen ruimtelijke ordening - 2022" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal stakingsbevelen ruimtelijke ordening</span>
                                 
                                      <div slot="content">
                                      <iframe title="2023 Stakingsbevelen" aria-label="Map" id="datawrapper-chart-yMCGE" src="https://datawrapper.dwcdn.net/yMCGE/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
                                      </script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                   
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>

                      <section id="content-1-11" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Bestuurlijke maatregelen milieu en ruimtelijke ordening - 2022"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal bestuurlijke maatregelen milieu</span>
                                      
                                      <div slot="content">
                                      <iframe title="2023 Bestuurlijke maatregel" aria-label="Map" id="datawrapper-chart-2Vipl" src="https://datawrapper.dwcdn.net/2Vipl/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal bestuurlijke maatregelen ruimtelijke ordening</span>
                                      <div slot="content">
                                      <iframe title="2023 bestuurlijke maatregel" aria-label="Map" id="datawrapper-chart-y4VpJ" src="https://datawrapper.dwcdn.net/y4VpJ/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="360" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
                                      </script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>

                      <section id="content-1-11" is="vl-region">
  
                      <div is="vl-grid">
                          <div is="vl-column data-vl-size=12 class=" data-top-bot">
                              <vl-infoblock data-vl-title="Veiligheidsmaatregelen - 2022" data-vl-icon="business-graph-bar">
                              </vl-infoblock>
                          </div>
                      </div>
                      <div is="vl-grid" class="data-top-bot">
                          <div is="vl-column" data-vl-size=10>
                              <vl-info-tile data-vl-auto-open=true>
                                  <span slot="title">Aantal veiligheidsmaatregelen milieu - 2022</span>
                             
                                  <div slot="content">
                                  <iframe title="Veiligheidsmaatregel milieu 2022
                                  " aria-label="Map" id="datawrapper-chart-Yzr5c" src="https://datawrapper.dwcdn.net/Yzr5c/6/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="392" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
                                  </script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                               
                                  </div>
                              </vl-info-tile>
                          </div>
                      </div>


                  </section>

                  <section id="content-1-12" is="vl-region">
  
                  <div is="vl-grid">
                      <div is="vl-column data-vl-size=12 class=" data-top-bot">
                          <vl-infoblock data-vl-title="Afgesloten minnelijke schikking - 2022" data-vl-icon="business-graph-bar">
                          </vl-infoblock>
                      </div>
                  </div>
                  <div is="vl-grid" class="data-top-bot">
                      <div is="vl-column" data-vl-size=10>
                          <vl-info-tile data-vl-auto-open=true>
                              <span slot="title">Aantal afgesloten minnelijke schikking ruimtelijke ordening - 2022</span>
                         
                              <div slot="content">
                              <iframe title="Afgesloten minnelijke schikking - RO - 2022" aria-label="Map" id="datawrapper-chart-b2Xk4" src="https://datawrapper.dwcdn.net/b2Xk4/6/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="320" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                           
                              </div>
                          </vl-info-tile>
                      </div>
                  </div>


              </section>

              <section id="content-1-13" is="vl-region">
  
              <div is="vl-grid">
                  <div is="vl-column data-vl-size=12 class=" data-top-bot">
                      <vl-infoblock data-vl-title="Herstelvorderingen - 2022" data-vl-icon="business-graph-bar">
                      </vl-infoblock>
                  </div>
              </div>
              <div is="vl-grid" class="data-top-bot">
                  <div is="vl-column" data-vl-size=10>
                      <vl-info-tile data-vl-auto-open=true>
                          <span slot="title">Aantal herstelvorderingen ruimtelijke ordening - 2022</span>
                     
                          <div slot="content">
                          <iframe title="herstelvorderingen ingeleid" aria-label="Map" id="datawrapper-chart-UZsuq" src="https://datawrapper.dwcdn.net/UZsuq/7/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="392" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
                          </script>
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                       
                          </div>
                      </vl-info-tile>
                  </div>
              </div>


          </section>
                      <section is="vl-region" id="content-4">
                          <h3 is="vl-h3">Bekijk cijfers voor andere thema's</h3>
                          <vl-alert data-vl-title="Bekijk de cijfers van andere thema's"
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
                                      Thema's
                                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                  </a>
                                  <ul>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-1" data-vl-parent="content-1">Toezichthouders / Verbalisanten - Stedenbouwkundige inspecteurs</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-2" data-vl-parent="content-1">VTE handhaving</a>
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
                                                  met schending</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-6" data-vl-parent="content-1">Raadgevingen</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-7" data-vl-parent="content-1">Aanmaningen</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                      <div>
                                          <a href="#content-1-8" data-vl-parent="content-1">Processen-verbaal</a>
                                      </div>
                                  </li>
                                  <li is="vl-side-navigation-item">
                                      <div>
                                          <a href="#content-1-9" data-vl-parent="content-1">Verslagen van vaststelling</a>
                                      </div>
                                  </li>
                                  <li is="vl-side-navigation-item">
                                  <div>
                                      <a href="#content-1-10" data-vl-parent="content-1">Stakingsbevelen</a>
                                  </div>
                              </li>
                              <li is="vl-side-navigation-item">
                                  <div>
                                      <a href="#content-1-10" data-vl-parent="content-1">Bestuurlijke maatregelen</a>
                                  </div>
                              </li>
                              <li is="vl-side-navigation-item">
                              <div>
                                  <a href="#content-1-11" data-vl-parent="content-1">Veiligheidheidsmaatregelen</a>
                              </div>
                          </li>
     
                      <li is="vl-side-navigation-item">
                      <div>
                          <a href="#content-1-12" data-vl-parent="content-1">Afgesloten minnelijke schikking</a>
                      </div>
                  </li>
                  <li is="vl-side-navigation-item">
                  <div>
                      <a href="#content-1-13" data-vl-parent="content-1">Herstelvorderingen</a>
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
  </section>`,
      title: "GemeentenAnalyseView",
    });
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define("gemeentenanalyse-view", GemeentenAnalyseView);
