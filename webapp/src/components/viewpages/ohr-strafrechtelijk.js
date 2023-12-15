import {define, html, LitElement, renderStack} from "../common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/elements/doormat";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";
import "@domg-wc/components/content-header";
import "@domg-wc/components/typography";

class OhrStrafrechtelijk extends LitElement {

  static get styles() {
    return [
      ...vlElementsStyle
    ]
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <vl-content-header>
        <img is="vl-image"
             slot="image"
             src="/images/header.jpg"
             alt="Hoofding afbeelding website"/>
        <a slot="context-link" href="/">Omgevingshandhavingsrapportage</a>
        <a slot="title-link" href="/">Handhaving</a>
      </vl-content-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
              {
                size: 8,
                template: html`<h1 is="vl-h1" data-vl-no-space-bottom>
                  Strafrechtelijke en bestuurlijke vervolgtraject
                </h1><h4 is="vl-h4">Over de cijfers en procedure</h3>`,
              },
              {
                size: 8,
                template: this.__renderTable(),
              },
              {
                size: 4,
                template: this.__renderSideNavigation(),
              }
          )}
        </div>
      </section>`;
  }

  __renderTable() {
    return html`
      <vl-typography>
        <p>
          In deze datasets wordt het verdere verloop van twee
          handhavingsinstrumenten weergegeven:
        </p>
        <ul>
          <li>Het proces-verbaal dat werd opgemaakt bij de vaststelling van een
            misdrijf en dat
            wordt overgemaakt aan de parketten bij de rechtbanken van eerste
            aanleg met het oog
            op een strafrechtelijke afhandeling.
          </li>
          <li>
            het verslag van vaststelling dat werd opgemaakt bij de vaststelling
            van een inbreuk en
            dat wordt overgemaakt aan de gewestelijke beboetingsentiteit met het
            oog op een
            bestuurlijke afhandeling.
          </li>
        </ul>
        <p>Rudimentaire schematische voorstelling van deze trajecten:</p>
      </vl-typography>
      <br>
      <?xml version="1.0" encoding="UTF-8"?>
      <svg xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
           width="831px" height="401px" viewBox="-0.5 -0.5 831 401"
           content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2022-09-25T15:59:22.494Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36&quot; etag=&quot;u8YbrG0MlVgiGjsrZC12&quot; version=&quot;20.3.6&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;ghqLkgS0lJLq4u84Ayxk&quot; name=&quot;Page-1&quot;&gt;7VlJcxo5FP41VDmHTPUCbXw0S8whmUqVqzxJboJ+dMuoW0QtNv/6eVqaXmgWM2DPZMIBpCfpafm+t0i0/H6yfhBkHn/hIbCW54Trlj9oeZ7r+F38UZKNkQR+xwgiQUPbqRA80hfIR1rpgoaQVTpKzpmk86pwwtMUJrIiI0LwVbXblLPqrHMSwY7gcULYrvQvGsrYSLsdp5CPgEZxPrPr2JaE5J2tIItJyFclkT9s+X3BuTSlZN0Hpg4vPxcz7tOe1u3CBKTylAFP/ZdEfPn5xO6iH5//5Cl5juRHi86SsIXdsF2s3OQnACEeiK1yIWMe4Vg2LKQ9wRdpCGoaB2tFn8+cz1HoovAZpNxYdMlCchTFMmG2dcpT2eeMCz2j/0l/UL67RbvrjC/EBA7sy/ZTay8NtAfzADwBKTbYQQAjki6rYBPLmWjbbzv0K6e4FM+x/G53LbiW3V6Ofq5CEhGBtKMKcLBQWkYh0pC9Aj63Ab6ASXuk2izyUw1+LhTT8Ez9qf6URUGkfr8KPoHs4xLEmBCWa8KFGWWm0w4/quivYirhcU40Oiv0CTWkKWMlpAfdIPB8lGdS8BnkLSlP4RD8uEIJ64PA2tYaPu6tra8KW3ZzA41Ldhw4+6lQAfG1iHmXRYyIGVoWpDhwTJ+VnwXN6kksxySd6YYlUd8AIpOqkZCUQfQW6AbDbt/rXRHduvm5QQO8QQO83WvB6zZZ5Ls7VEd/UI5HLTbfrF5d+a4qf3Ty6mBdbhxsbO18R+zbmK394IF+7bdx2L5TZYxfN/QrO2z/oub/hDbNSLS18SXJJBo5YzS9joE3GvI+n3559+377+2+2xfF7wFWoPCizzPlmccw5iARuwxPDHGgSuHNQ2/44Zf01r733t66c1E0RyQNY7JU+OE4jLEK05vRqP9rwretvxt8d2fBZ4PhDnwhx764coMiqDLHnwgSQmbSJE56Z9Kc5EwVApIoWNJxNjeq9PRjkStNdG/OlY/G2K3QFmSq87Ot2ZOpmhPKTrtQcCp1EERZ5QdhNEqxPEHIcTd+T0FN8WZ7bxsSGoYm3YCMvpCxVqWIN1fRT4PV6bU6A6ULM4zMJBsnhYFc9Np73els9JzO0czea2Kjf7XUbze1P5FSOmdHN38CfcYYLxYL0Uid/yAjtonpJRjhVhnRlCx47TdlRFO2V78MpOG9eqZSsDCSZXRSxawaEvYZFKyp/GZHqPL3UrlI6VUlz+i3NwG3chO42j3Au/A9oARqpwHTXPZP33fq1wWvxhWz753rwq6iTlWRd/u29w73vMR1X6wcVYKgM9Nu7Ea9Gdn4GOrcNaW68gJsqiCDNFNV9QpxLG6OwTg2SD/otwulf157ntK+NCH6kaM+3jhW7VMd40Tjuiu1gjkmalHxTlJXZKYmDB1mikyCJex64QhYqDJ32B++fwf0Y+47aNcspN3gvptM/XpvOeddD/bZzD3LKrHeaaQWV5YC6wlbZEZy3FL2cRFPCaaG4yiFKGx5/a2xxlSlI8eUSzCmQfUDIwgOynJWXIRaHEFkDM28PRqLwgvPb9afy/p2Troy628PBLjLsz743yQt/5IkI/Dvqhyo/4l0apKxo6juGs9OMrBa/FFpuhd/9/rDvwE=&lt;/diagram&gt;&lt;/mxfile&gt;"
           style="background-color: rgb(255, 255, 255);">
        <defs/>
        <g>
          <path d="M 120 40 L 393.63 40" fill="none" stroke="rgb(0, 0, 0)"
                stroke-miterlimit="10" pointer-events="stroke"/>
          <path d="M 398.88 40 L 391.88 43.5 L 393.63 40 L 391.88 36.5 Z"
                fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10"
                pointer-events="all"/>
          <rect x="0" y="10" width="120" height="60" fill="#d86623"
                stroke="none" pointer-events="all"/>
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject pointer-events="none" width="100%" height="100%"
                             requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                             style="overflow: visible; text-align: left;">
                <div xmlns="http://www.w3.org/1999/xhtml"
                     style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 40px; margin-left: 1px;">
                  <div data-drawio-colors="color: rgb(0, 0, 0); "
                       style="box-sizing: border-box; font-size: 0px; text-align: center;">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">
                      <font color="#ffffff">Proces-verbaal</font></div>
                  </div>
                </div>
              </foreignObject>
              <text x="60" y="44" fill="rgb(0, 0, 0)" font-family="Helvetica"
                    font-size="12px" text-anchor="middle">Proces-verbaal
              </text>
            </switch>
          </g>
          <rect x="400" y="0" width="160" height="80" fill="#6e8c2b"
                stroke="none" pointer-events="all"/>
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject pointer-events="none" width="100%" height="100%"
                             requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                             style="overflow: visible; text-align: left;">
                <div xmlns="http://www.w3.org/1999/xhtml"
                     style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 158px; height: 1px; padding-top: 40px; margin-left: 401px;">
                  <div data-drawio-colors="color: rgb(0, 0, 0); "
                       style="box-sizing: border-box; font-size: 0px; text-align: center;">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">
                      <font color="#ffffff">Parketten bij de rechtbanken van
                        eerste aanleg</font></div>
                  </div>
                </div>
              </foreignObject>
              <text x="480" y="44" fill="rgb(0, 0, 0)" font-family="Helvetica"
                    font-size="12px" text-anchor="middle">Parketten bij de
                rechtbank...
              </text>
            </switch>
          </g>
          <path d="M 120 200 L 393.63 200" fill="none" stroke="rgb(0, 0, 0)"
                stroke-miterlimit="10" pointer-events="stroke"/>
          <path d="M 398.88 200 L 391.88 203.5 L 393.63 200 L 391.88 196.5 Z"
                fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10"
                pointer-events="all"/>
          <rect x="0" y="170" width="120" height="60" fill="#d86623"
                stroke="none" pointer-events="all"/>
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject pointer-events="none" width="100%" height="100%"
                             requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                             style="overflow: visible; text-align: left;">
                <div xmlns="http://www.w3.org/1999/xhtml"
                     style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 200px; margin-left: 1px;">
                  <div data-drawio-colors="color: rgb(0, 0, 0); "
                       style="box-sizing: border-box; font-size: 0px; text-align: center;">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">
                      <font color="#ffffff">Verslag van vaststelling</font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text x="60" y="204" fill="rgb(0, 0, 0)" font-family="Helvetica"
                    font-size="12px" text-anchor="middle">Verslag van
                vaststel...
              </text>
            </switch>
          </g>
          <rect x="400" y="160" width="160" height="80" fill="#6e8c2b"
                stroke="none" pointer-events="all"/>
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject pointer-events="none" width="100%" height="100%"
                             requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                             style="overflow: visible; text-align: left;">
                <div xmlns="http://www.w3.org/1999/xhtml"
                     style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 158px; height: 1px; padding-top: 200px; margin-left: 401px;">
                  <div data-drawio-colors="color: rgb(0, 0, 0); "
                       style="box-sizing: border-box; font-size: 0px; text-align: center;">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">
                      <font color="#ffffff">Gewestelijke beboetingsentiteit
                        (GBE)</font></div>
                  </div>
                </div>
              </foreignObject>
              <text x="480" y="204" fill="rgb(0, 0, 0)" font-family="Helvetica"
                    font-size="12px" text-anchor="middle">Gewestelijke
                beboetingsent...
              </text>
            </switch>
          </g>
          <rect x="400" y="320" width="160" height="80" fill="#6e8c2b"
                stroke="none" pointer-events="all"/>
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject pointer-events="none" width="100%" height="100%"
                             requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                             style="overflow: visible; text-align: left;">
                <div xmlns="http://www.w3.org/1999/xhtml"
                     style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 158px; height: 1px; padding-top: 360px; margin-left: 401px;">
                  <div data-drawio-colors="color: rgb(0, 0, 0); "
                       style="box-sizing: border-box; font-size: 0px; text-align: center;">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">
                      <font color="#ffffff">Handhavingscollege (HHC)</font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text x="480" y="364" fill="rgb(0, 0, 0)" font-family="Helvetica"
                    font-size="12px" text-anchor="middle">Handhavingscollege
                (HHC)
              </text>
            </switch>
          </g>
          <rect x="125" y="10" width="260" height="30" fill="none" stroke="none"
                pointer-events="all"/>
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject pointer-events="none" width="100%" height="100%"
                             requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                             style="overflow: visible; text-align: left;">
                <div xmlns="http://www.w3.org/1999/xhtml"
                     style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 25px; margin-left: 255px;">
                  <div data-drawio-colors="color: #FFFFFF; "
                       style="box-sizing: border-box; font-size: 0px; text-align: center;">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: nowrap;">
                      <font color="#000000">door handhaver overgemaakt aan het
                        parket <br/>met oog op strafrechtelijke afhandeling<br/></font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text x="255" y="29" fill="#FFFFFF" font-family="Helvetica"
                    font-size="12px" text-anchor="middle">door handhaver
                overgemaakt aan het parket...
              </text>
            </switch>
          </g>
          <rect x="135" y="170" width="240" height="30" fill="none"
                stroke="none" pointer-events="all"/>
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject pointer-events="none" width="100%" height="100%"
                             requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                             style="overflow: visible; text-align: left;">
                <div xmlns="http://www.w3.org/1999/xhtml"
                     style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 185px; margin-left: 255px;">
                  <div data-drawio-colors="color: #000000; "
                       style="box-sizing: border-box; font-size: 0px; text-align: center;">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: nowrap;">
                      door handhaver overgemaakt aan de GBE<br/>met oog op
                      bestuurlijke afhandeling
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text x="255" y="189" fill="#000000" font-family="Helvetica"
                    font-size="12px" text-anchor="middle">door handhaver
                overgemaakt aan de GBE...
              </text>
            </switch>
          </g>
          <path d="M 560 80 L 560 153.63" fill="none" stroke="rgb(0, 0, 0)"
                stroke-miterlimit="10" pointer-events="stroke"/>
          <path d="M 560 158.88 L 556.5 151.88 L 560 153.63 L 563.5 151.88 Z"
                fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10"
                pointer-events="all"/>
          <rect x="560" y="80" width="250" height="80" fill="none" stroke="none"
                pointer-events="all"/>
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject pointer-events="none" width="100%" height="100%"
                             requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                             style="overflow: visible; text-align: left;">
                <div xmlns="http://www.w3.org/1999/xhtml"
                     style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 120px; margin-left: 685px;">
                  <div data-drawio-colors="color: #FFFFFF; "
                       style="box-sizing: border-box; font-size: 0px; text-align: center;">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: nowrap;">
                      <font color="#000000">Het parket kan (al het dit niet zelf
                        wenst te <br/>behandelen) een proces-verbaal
                        overmaken<br/>aan GBE met het oog op het opleggen
                        van<br/>een alternatieve bestuurlijke
                        geldboete<br/><br/></font></div>
                  </div>
                </div>
              </foreignObject>
              <text x="685" y="124" fill="#FFFFFF" font-family="Helvetica"
                    font-size="12px" text-anchor="middle">Het parket kan (al het
                dit niet zelf wens...
              </text>
            </switch>
          </g>
          <rect x="560" y="255" width="270" height="50" fill="none"
                stroke="none" pointer-events="all"/>
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject pointer-events="none" width="100%" height="100%"
                             requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                             style="overflow: visible; text-align: left;">
                <div xmlns="http://www.w3.org/1999/xhtml"
                     style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 280px; margin-left: 695px;">
                  <div data-drawio-colors="color: #FFFFFF; "
                       style="box-sizing: border-box; font-size: 0px; text-align: center;">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: nowrap;">
                      <font color="#000000">Als de GBE een alternatieve of
                        exclusieve <br/>bestuurlijke geldboete heeft opgelegd,
                        kan hier <br/>tegen in beroep worden gegaan bij het
                        HHC<br/></font></div>
                  </div>
                </div>
              </foreignObject>
              <text x="695" y="284" fill="#FFFFFF" font-family="Helvetica"
                    font-size="12px" text-anchor="middle">Als de GBE een
                alternatieve of exclusieve...
              </text>
            </switch>
          </g>
          <path d="M 559 240 L 559 313.63" fill="none" stroke="rgb(0, 0, 0)"
                stroke-miterlimit="10" pointer-events="stroke"/>
          <path d="M 559 318.88 L 555.5 311.88 L 559 313.63 L 562.5 311.88 Z"
                fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10"
                pointer-events="all"/>
        </g>
        <switch>
          <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/>
          <a transform="translate(0,-5)"
             xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems"
             target="_blank">
            <text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is
              not SVG - cannot display
            </text>
          </a></switch>
      </svg>
      </section>
      <section id="content-1-2">
        <div is="vl-grid">
          <div is="vl-column">
            <div style="max-width: 400px" id="content-2" class="data-top-bot">
              <a is="vl-doormat" href="/strafrechtelijk-analyse">
                <h2 is="vl-doormat-title">Analyseer de cijfers</h2>
                <div is="vl-doormat-text">
                  Bekijk de cijfers inzake het strafrechtelijke en bestuurlijke
                  vervolgtraject.
                </div>
              </a>
            </div>
          </div>
        </div>
        <section>`;
  }

  __renderSideNavigation() {
    return html`
      <h5 is="vl-h5" data-vl-alt>Interresante links</h5>
      <ul is="vl-link-list">
        <li is="vl-link-list-item">
          <a is="vl-link"
             href="/strafrechtelijk-analyse">
            Analyseer de cijfers
          </a>
        </li>
        <li is="vl-link-list-item">
          <a is="vl-link"
             href="/">
            Terug naar beginpagina
          </a>
        </li>
      </ul>`;
  }
}

define("ohr-strafrechtelijk", OhrStrafrechtelijk);
