import {html, LitElement} from "../common/commons.js";
import {Qlik} from "@domg/qlik-lib";
import {vlElementsStyle} from "@domg-wc/elements";
import jsonData from "../datafiles/hogeraad.json" assert {type: "json"};

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/components/loader";
import "@domg-wc/components/accordion";
import "@domg-wc/components/accordion-list";
import "@domg-wc/elements/data-table";
import "@domg-wc/components/tabs";
import "@domg-wc/components/functional-header";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";

class OhrHogeRaadAnalyse extends LitElement {

  static get styles() {
    return [
      ...vlElementsStyle
    ]
  }

  static get properties() {
    return {
      connected: {type: Boolean}
    }
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <vl-functional-header
    data-vl-back="Terug"
    data-vl-back-link="/hoge-raad"
    data-vl-title="Jaarrapportage Hoge raad voor de handhavingsuitvoering"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/hoge-raad-analyse">
    </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
        <vl-typography>
        <h2>Cijfers van het jaar 2023</h2></vl-typography>
        <p is="vl-icon-wrapper"><vl-annotation><span is="vl-icon" data-vl-icon="calendar"></span> Laatste wijziging aan de data: 21/02/2024</vl-annotation></p><br>

    <p is="vl-introduction" data-cy="introduction">
    Deze pagina toont de cijfers van de activiteiten van de Hoge Raad voor de Handhavingsuitvoering in het voorafgaande jaar.
    </p><br/>
    
<div>

          ${this.__renderDynamicContent()}</div>
        </div>
      </section>`;
  }

  renderDataSection(data) {
    return html`
                        <table is="vl-data-table" data-vl-grid>
                            <thead>
                                <tr>
                                    <th>Advies gevraagd aan</th>
                                    <th>Aantal</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${Object.entries(data).map(([key, value]) => {
                                    if (typeof value === 'object') {
                                        return html`
                                            <tr>
                                                <td data-title="${key}">${key}</td>
                                                <td data-title="${value.value}">${value.value} ( tijdig uitgevoerd: ${value.extra} )</td>
                                            </tr>
                                        `;
                                    } else {
                                        return html`
                                            <tr>
                                                <td data-title="${key}">${key}</td>
                                                <td data-title="${value.value}">${value}</td>
                                            </tr>
                                        `;
                                    }
                                })}
                            </tbody>
                        </table>
                        <br>
    `;
}

renderDataSectionSpecial(data) {
  return html`
                      <table is="vl-data-table" data-vl-grid>
                          <thead>
                              <tr>
                                  <th>&nbsp;</th>
                                  <th>Aantal</th>
                              </tr>
                          </thead>
                          <tbody>
                              ${Object.entries(data).map(([key, value]) => {
                                  if (typeof value === 'object') {
                                      return html`
                                          <tr>
                                              <td data-title="${key}">${key}</td>
                                              <td data-title="${value.value}">${value.value} ( tijdig uitgevoerd: ${value.extra} )</td>
                                          </tr>
                                      `;
                                  } else {
                                      return html`
                                          <tr>
                                              <td data-title="${key}">${key}</td>
                                              <td data-title="${value.value}">${value}</td>
                                          </tr>
                                      `;
                                  }
                              })}
                          </tbody>
                      </table>
                      <br>
  `;
}

__renderDataSection_BindendeAdviezen_Herstelvordering(data) {
  return html`
                      <table is="vl-data-table" data-vl-grid>
                          <thead>
                              <tr>
                                  <th>Soort advies</th>
                                  <th>Gewestelijke stedenbouwkundige inspecteurs</th>
                                  <th>Gemeentelijke stedenbouwkundige inspecteurs / burgemeesters</th>
                              </tr>
                          </thead>
                          <tbody>
                              ${Object.entries(data).map(([key, value]) => {
                                  if (typeof value === 'object') {
                                      return html`
                                          <tr>
                                              <td data-title="${key}">${key}</td>
                                              <td data-title="Gewestelijke stedenbouwkundige inspecteurs">${value.value1}</td>
                                              <td data-title="Gemeentelijke stedenbouwkundige inspecteurs / burgemeesters">${value.value2}</td>
                                          </tr>
                                      `;
                                  } else {
                                      return html`
                                          <tr>
                                              <td data-title="${key}">${key}</td>
                                              <td data-title="${value.value}">${value}</td>
                                          </tr>
                                      `;
                                  }
                              })}
                          </tbody>
                      </table>
                      <br>
  `;
}

__renderDataSection_BindendeAdviezen_Herstelvordering_Heroverweging(data) {
  return html`
                      <table is="vl-data-table" data-vl-grid>
                          <thead>
                              <tr>
                                  <th>Soort advies</th>
                                  <th>Gewestelijke stedenbouwkundige inspecteurs</th>
                                  <th>Gemeentelijke stedenbouwkundige inspecteurs / burgemeesters</th>
                                  <th>Derde belanghebbende</th>
                              </tr>
                          </thead>
                          <tbody>
                              ${Object.entries(data).map(([key, value]) => {
                                  if (typeof value === 'object') {
                                      return html`
                                          <tr>
                                              <td data-title="${key}">${key}</td>
                                              <td data-title="Gewestelijke stedenbouwkundige inspecteurs">${value.value1}</td>
                                              <td data-title="Gemeentelijke stedenbouwkundige inspecteurs / burgemeesters">${value.value2}</td>
                                              <td data-title="Derde belanghebbende">${value.value3}</td>
                                          </tr>
                                      `;
                                  } else {
                                      return html`
                                          <tr>
                                              <td data-title="${key}">${key}</td>
                                              <td data-title="${value.value}">${value}</td>
                                          </tr>
                                      `;
                                  }
                              })}
                          </tbody>
                      </table>
                      <br>
  `;
}

__renderDataSection_BindendeAdviezen_Herstelvordering_Ambtshalve_uitvoering(data) {
  return html`
                      <table is="vl-data-table" data-vl-grid>
                          <thead>
                              <tr>
                                  <th>Soort advies</th>
                                  <th>Gewestelijke stedenbouwkundige inspecteurs</th>
                                  <th>Gemeentelijke stedenbouwkundige inspecteurs / burgemeesters</th>
                                  <th>Burgemeester</th>
                              </tr>
                          </thead>
                          <tbody>
                              ${Object.entries(data).map(([key, value]) => {
                                  if (typeof value === 'object') {
                                      return html`
                                          <tr>
                                              <td data-title="${key}">${key}</td>
                                              <td data-title="Gewestelijke stedenbouwkundige inspecteurs">${value.value1}</td>
                                              <td data-title="Gemeentelijke stedenbouwkundige inspecteurs / burgemeesters">${value.value2}</td>
                                              <td data-title="Derde belanghebbende">${value.value3}</td>
                                          </tr>
                                      `;
                                  } else {
                                      return html`
                                          <tr>
                                              <td data-title="${key}">${key}</td>
                                              <td data-title="${value.value}">${value}</td>
                                          </tr>
                                      `;
                                  }
                              })}
                          </tbody>
                      </table>
                      <br>
  `;
}
  __renderDynamicContent() {
    return html`
<vl-tabs data-vl-active-tab="Instroom" data-vl-disable-links="">
  <vl-tabs-pane data-vl-id="Instroom" data-vl-title="Instroom">
      <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
   <vl-accordion-list slot="content">
        <vl-accordion data-vl-default-open data-vl-toggle-text="Aanvragen voor advies inzake herstelvorderingen"> 
        ${this.renderDataSection(jsonData.Instroom.Vraag1)}
        </vl-accordion>
        <vl-accordion data-vl-default-open data-vl-toggle-text="Verzoeken tot heroverweging van een negatief advies inzake herstelvorderingen">
        ${this.renderDataSection(jsonData.Instroom.Vraag2)}
        </vl-accordion>
        <vl-accordion data-vl-default-open data-vl-toggle-text="Aanvragen voor advies inzake opeenvolgende herstelvorderingen">
        ${this.renderDataSection(jsonData.Instroom.Vraag3)}
        </vl-accordion>
        <vl-accordion data-vl-default-open data-vl-toggle-text="Aanvragen voor advies inzake een ambtshalve uitvoering van een door de rechter bevolen herstelmaatregel">
        ${this.renderDataSection(jsonData.Instroom.Vraag4)}
        </vl-accordion>
        <vl-accordion data-vl-default-open data-vl-toggle-text="Aanvragen voor advies inzake betekeningen van vonnissen of arresten waarin de rechter het bestuur heeft gemachtigd om ambtshalve in de uitvoering ervan te voorzien">
        ${this.renderDataSection(jsonData.Instroom.Vraag5)}
        </vl-accordion>
    </vl-accordion-list>
  </div>
</div>
  </vl-tabs-pane>
  <vl-tabs-pane data-vl-id="Bindende adviezen" data-vl-title="Bindende adviezen">
          <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  <vl-accordion-list slot="content">
    <vl-accordion data-vl-default-open data-vl-toggle-text="Herstelvorderingen"> 
    ${this.__renderDataSection_BindendeAdviezen_Herstelvordering(jsonData.Instroom.Herstelvorderingen)}
    </vl-accordion>
    <vl-accordion data-vl-default-open  data-vl-toggle-text="Herstelvorderingen naar aanleiding van gemotiveerd verzoek tot heroverweging van een negatief advies inzake herstelvorderingen">
    ${this.__renderDataSection_BindendeAdviezen_Herstelvordering_Heroverweging(jsonData.Instroom.HerstelvorderingenHeroverweging)}
    </vl-accordion>

     <vl-accordion data-vl-default-open  data-vl-toggle-text="Inleiden van opeenvolgende herstelvorderingen">
     ${this.__renderDataSection_BindendeAdviezen_Herstelvordering_Heroverweging(jsonData.Instroom.Herstelvorderingopeenvolgend)}
     
    </vl-accordion>

    <vl-accordion data-vl-default-open  data-vl-toggle-text="Vooraleer een ambtshalve uitvoering van een door de rechter bevolen herstelmaatregel kan worden opgestart">
    ${this.__renderDataSection_BindendeAdviezen_Herstelvordering_Ambtshalve_uitvoering(jsonData.Instroom.Ambtshalveuitvoering)}
    </vl-accordion>

    <vl-accordion data-vl-default-open  data-vl-toggle-text="Voorafgaand aan sommige betekeningen van vonnissen of arresten waarin de rechter het bestuur heeft gemachtigd om ambtshalve in de uitvoering ervan te voorzien">
   ${this.__renderDataSection_BindendeAdviezen_Herstelvordering_Ambtshalve_uitvoering(jsonData.Instroom.Betekening)}
    </vl-accordion>


    
    </vl-accordion-list>
  </div>
</div>   
  </vl-tabs-pane>
  <vl-tabs-pane data-vl-id="Adviezen" data-vl-title="Adviezen">
    <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  <vl-accordion-list slot="content">
    <vl-accordion data-vl-default-open data-vl-toggle-text="Over het gemotiveerd verzoek om tijdelijk of definitief af te zien van verdere inning van
een opeisbaar geworden dwangsomschuld"> 
 ${this.renderDataSectionSpecial(jsonData.Instroom.VraagC1)}
    </vl-accordion>
    <vl-accordion data-vl-default-open  data-vl-toggle-text="Over de herstelmaatregelen in het kader van
    een beroep ingesteld door de vermoedelijke overtreder tegen de beslissing tot toepassing
    van bestuursdwang of tot het opleggen van een last onder dwangsom">
    ${this.renderDataSectionSpecial(jsonData.Instroom.VraagC2)}
    </vl-accordion>
    </vl-accordion-list>
  </div>
</div>
</div>
  </vl-tabs-pane>
   <vl-tabs-pane data-vl-id="Bemiddelingsopdracht" data-vl-title="Bemiddelingsopdracht">
    <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
 <vl-accordion-list slot="content">
    <vl-accordion data-vl-default-open data-vl-toggle-text="Aantal bemiddelingsopdrachten op verzoek van een vermoedelijke overtreder of de rechtbank"> 
    ${this.renderDataSectionSpecial(jsonData.Instroom.VraagD1)}
    </vl-accordion>
    </vl-accordion-list>
  </div>
</div>
  </vl-tabs-pane>
</vl-tabs>
    `;
  }
}

customElements.define("ohr-hogeraadanalyse", OhrHogeRaadAnalyse);
