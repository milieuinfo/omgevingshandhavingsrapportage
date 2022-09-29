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
                              Deze worden respectievelijk met de kleuren donkergrijs en rood weergegeven op de kaarten.
                              
                              </p>
                          
                      </section>
  
                      <section id="content-1-1" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12  class=" data-top-bot">
                                  <vl-infoblock
                                      data-vl-title="Toezichthouders en verbalisanten/stedenbouwkundige inspecteurs - 2021"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal toezichthouders - milieu</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="toezichthouders" aria-label="Map" id="datawrapper-chart-fwlfs" src=https://datawrapper.dwcdn.net/fwlfs/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      <p><img src="assets/legends/legend1.png" width=200/></p>
                                      <p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      <p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal verbalisanten/stedenbouwkundige inspecteurs - ruimtelijke ordening</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="verbalisanten
                                      " aria-label="Map" id="datawrapper-chart-m7Ir2" src=https://datawrapper.dwcdn.net/m7Ir2/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      <p><img src="assets/legends/legendverbalisantenro.png" width=200/></p>
                                      <p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      <p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                      </section>
  
  
                      <section id="content-1-2" is="vl-region">
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="VTE milieuhandhaving en handhaving ruimtelijke ordening - 2021"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal VTE milieuhandhaving</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="VTE" aria-label="Map" id="datawrapper-chart-0M8Uz" src=https://datawrapper.dwcdn.net/0M8Uz/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
                                      <p><img src="assets/legends/legend1.png" width=200/></p>
                                      <p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      <p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal VTE handhaving ruimtelijke ordening</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="vte" aria-label="Map" id="datawrapper-chart-S8OjO" src=https://datawrapper.dwcdn.net/S8OjO/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
                                      <p><img src="assets/legends/legendvtero.png" width=200/></p>
                                      <p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      <p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                      </section>
  
                      <section id="content-1-3" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Klachten milieu en ruimtelijke ordening - 2021"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
                          
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal klachten milieu</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="Klachten" aria-label="Map" id="datawrapper-chart-r5JOS" src=https://datawrapper.dwcdn.net/r5JOS/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>

<p><img src="assets/legends/legend2.png" width=200/></p>                       
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
<p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
                          


                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal klachten ruimtelijke ordening</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="Klachten" aria-label="Map" id="datawrapper-chart-imxGZ" src=https://datawrapper.dwcdn.net/imxGZ/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
                                      <p><img src="assets/legends/legendklachtenro.png" width=200/></p>  
                                      <p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      <p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-4" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Controles milieu en ruimtelijke ordening - 2021"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal controles milieu</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="controles" aria-label="Map" id="datawrapper-chart-TgLaI" src=https://datawrapper.dwcdn.net/TgLaI/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
                                      <p><img src="assets/legends/legendcontrolesmil.png" width=200/></p>   
                                      <p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      <p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal controles ruimtelijke ordening</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="controles" aria-label="Map" id="datawrapper-chart-5h0uH" src=https://datawrapper.dwcdn.net/5h0uH/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>

<p><img src="assets/legends/legendcontrolesro.png" width=200/></p>                          
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
<p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-5" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Aanvankelijke controles met schending milieu en ruimtelijke ordening - 2021"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanvankelijke controles met schending milieu</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="AAcontroles" aria-label="Map" id="datawrapper-chart-1vJCs" src=https://datawrapper.dwcdn.net/1vJCs/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
                                      <p><img src="assets/legends/legendaacontrolesmil.png" width=200/></p> 
                                      <p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      <p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanvankelijke controles met schending ruimtelijke ordening</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="aacontroles" aria-label="Map" id="datawrapper-chart-J46eb" src=https://datawrapper.dwcdn.net/J46eb/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>

<p><img src="assets/legends/legendaacontrolesro.png" width=200/></p>                          
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
<p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-6" is="vl-region">
  
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
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="aanmaningen" aria-label="Map" id="datawrapper-chart-7v1Wk" src=https://datawrapper.dwcdn.net/7v1Wk/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>
<p><img src="assets/legends/legendaanmaningmil2.png" width=200/></p> 
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
<p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal aanmaningen ruimtelijke ordening</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="aanmaningen" aria-label="Map" id="datawrapper-chart-JJ5bS" src=https://datawrapper.dwcdn.net/JJ5bS/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      <p><img src="assets/legends/legendaanmaningro.png" width=200/></p> 
                                      <p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      <p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-7" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Processen-verbaal milieu en ruimtelijke ordening - 2021" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal processen-verbaal milieu</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="PV" aria-label="Map" id="datawrapper-chart-x5ZVJ" src=https://datawrapper.dwcdn.net/x5ZVJ/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>

<p><img src="assets/legends/legendpvmil.png" width=200/></p>                               
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
<p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal processen-verbaal ruimtelijke ordening</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="pv" aria-label="Map" id="datawrapper-chart-hnEKG" src=https://datawrapper.dwcdn.net/hnEKG/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>
<p><img src="assets/legends/legendcontrolespvro.png" width=200/></p> 
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      <p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-8" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Verslagen van vaststelling milieu en ruimtelijke ordening - 2021"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal verslagen van vastelling milieu</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="Verslagen van vastelling" aria-label="Map" id="datawrapper-chart-SAC6L" src=https://datawrapper.dwcdn.net/SAC6L/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
                                      </script>
                                      
                                      <p><img src="assets/legends/legendverslagmil.png" width=200/></p> 
                                      <p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      <p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Verslagen van vastelling ruimtelijke ordening</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="verslagen van vaststelling" aria-label="Map" id="datawrapper-chart-47tM2" src=https://datawrapper.dwcdn.net/47tM2/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>

<p><img src="assets/legends/legendverslagro.png" width=200/></p> 
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      <p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-9" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Stakingsbevelen ruimtelijke ordening - 2021" data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal stakingsbevelen ruimtelijke ordening</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="stakingsbevel" aria-label="Map" id="datawrapper-chart-8mUxd" src=https://datawrapper.dwcdn.net/8mUxd/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>
<p><img src="assets/legends/legendstakingsbevelro.png" width=200/></p> 
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      <p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
  
                      </section>
  
                      <section id="content-1-10" is="vl-region">
  
                          <div is="vl-grid">
                              <div is="vl-column data-vl-size=12 class=" data-top-bot">
                                  <vl-infoblock data-vl-title="Bestuurlijke maatregelen milieu en ruimtelijke ordening - 2021"
                                      data-vl-icon="business-graph-bar">
                                  </vl-infoblock>
                              </div>
                          </div>
  
                          <div is="vl-grid">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal bestuurlijke maatregelen milieu</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="bestuurlijke maatregel" aria-label="Map" id="datawrapper-chart-yNv5H" src=https://datawrapper.dwcdn.net/yNv5H/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>
<p><img src="assets/legends/legendbestuurlijkemaatregelmil.png" width=200/></p> 
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
<p><span class="roodnonrespons">&#x2022 non-respons</span></p>
                                      </div>
                                  </vl-info-tile>
                              </div>
                          </div>
  
                          <div is="vl-grid" class="data-top-bot">
                              <div is="vl-column" data-vl-size=10>
                                  <vl-info-tile data-vl-auto-open=true>
                                      <span slot="title">Aantal bestuurlijke maatregelen ruimtelijke ordening</span>
                                      <span slot="subtitle">Per 1000 inwoners</span>
                                      <div slot="content">
                                      <iframe title="bestuurlijke maatregel" aria-label="Map" id="datawrapper-chart-EelUS" src=https://datawrapper.dwcdn.net/EelUS/1/ scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="264"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>
<p><img src="assets/legends/legendbestuurlijkemaatregelro.png" width=200/></p> 
<p><span class="grijsnietgekend">&#x2022 niet gekend</span></p>
                                      <p><span class="roodnonrespons">&#x2022 non-respons</span></p>
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
                                              <a href="#content-1-1" data-vl-parent="content-1">Toezichthouders / Verbalisanten - Stendenbouwkundige inspecteurs</a>
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
                                              <a href="#content-1-6" data-vl-parent="content-1">Aanmaningen</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                          <div>
                                              <a href="#content-1-7" data-vl-parent="content-1">Processen-verbaal</a>
                                          </div>
                                      </li>
                                      <li is="vl-side-navigation-item">
                                      <div>
                                          <a href="#content-1-8" data-vl-parent="content-1">Verslagen van vaststelling</a>
                                      </div>
                                  </li>
                                  <li is="vl-side-navigation-item">
                                      <div>
                                          <a href="#content-1-9" data-vl-parent="content-1">Stakingsbevelen</a>
                                      </div>
                                  </li>
                                  <li is="vl-side-navigation-item">
                                  <div>
                                      <a href="#content-1-10" data-vl-parent="content-1">Bestuurlijke maatregelen</a>
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
