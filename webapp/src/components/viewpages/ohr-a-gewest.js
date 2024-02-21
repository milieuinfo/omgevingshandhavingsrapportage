import {html, LitElement} from "../common/commons.js";
import {Qlik} from "@domg/qlik-lib";
import {vlElementsStyle} from "@domg-wc/elements";
import viz_gewest from "../config/milieuhandhaving.json" assert {type: "json"};
import jsonData from "../data-jaar/gewest.json" assert {type: "json"};
import { VlCascaderComponent } from '@domg-wc/components';

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/components/content-header";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/infoblock";
import "@domg-wc/components/accordion-list";

class OhrAGewest extends LitElement {

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
    this.initialized = false;
    this.connected = false;
  }

  async connectedCallback() {
    this.connection = new Qlik("omgevingsloketrapport.omgeving.vlaanderen.be",
        "9b0d0715-eee5-41b0-bd90-addafee7e99e");
    await this.connection.init();
    this.connection.app.on('closed', () => this.closed = true);

    this.connected = true;
    super.connectedCallback();
  }

  render() {
    return html`
    <vl-functional-header
    data-vl-back="Terug"
    data-vl-back-link="/gewest"
    data-vl-title="Gewestelijke handhavingsactoren"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/">
    </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
        <vl-typography>
        <h2>Raadpleeg laatst bekende cijfers van 2023</h2></vl-typography>
        <p is="vl-icon-wrapper"><span is="vl-icon" data-vl-icon="calendar"></span><vl-annotation> Laatste wijziging aan de data: 21/02/2024</vl-annotation></p><br>

    <p is="vl-introduction" data-cy="introduction">
    Onderstaande weergave geeft een beeld van de bevraging over de cijfers van 2023. Navigeer doorheen de weergave om gericht en efficiënt data te raadplegen.
    </p><br/>
    
<div>

          ${this.__renderPage()}</div>
        </div>
      </section>`;
  }

  renderDataSection(label, data) {
    return html`
                        <table is="vl-data-table">
                            <thead>
                                <tr>
                                    <th>Instrument</th>
                                    <th>Waarde</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${Object.entries(data).map(([key, value]) => {
                                    if (typeof value === 'object') {
                                        return html`
                                            <tr>
                                                <td data-title="${key}">${key}</td>
                                                <td data-title="${value.value}">${value.value}(relatief ${value.relative})</td>
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

  __renderPage() {
    if (!this.connected) {
      return html`
        <vl-loader
            data-vl-text="Pagina is aan het laden"
        ></vl-loader>`;
    }

    return html`
   <vl-cascader>
    <vl-cascader-item label="Agentschap Martieme Dienstverlening en Kust">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
        <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
        ${this.renderDataSection("Gewestelijke toezichthouders", jsonData.Milieu.AMDK.gewestelijkeToezichthouders)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Klachten">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.AMDK.klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Controles">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.AMDK.controles)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.AMDK.Aanvankelijkecontrolesmetschending)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Instrumentarium">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.AMDK.Instrumentarium)}
        </vl-accordion>
    </vl-accordion-list>
                </vl-cascader-item>
            <vl-cascader-item label="Ruimtelijke ordening">
            <p slot="content">
            <vl-alert
            data-cy="alert"
            data-vl-naked=""
            data-vl-icon="warning"
            data-vl-title="Geen bevoegheid"
            data-vl-type="warning"
            data-vl-message="Agentschap Maritieme Dienstverlening en Kust heeft geen bevoegheid voor ruimtelijke ordening."
        >
        </vl-alert>
    </p>
            </vl-cascader-item>
      </vl-cascader-item>


      <vl-cascader-item label="Agentschap voor Natuur en Bos">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
        <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
        ${this.renderDataSection("Gewestelijke toezichthouders", jsonData.Milieu.ANB.gewestelijkeToezichthouders)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Klachten">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.ANB.klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Controles">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.ANB.controles)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.AMDK.Aanvankelijkecontrolesmetschending)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Instrumentarium">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.ANB.Instrumentarium)}
        </vl-accordion>
    </vl-accordion-list>
                </vl-cascader-item>
            <vl-cascader-item label="Ruimtelijke ordening">
            <vl-accordion-list slot="content">
        <vl-accordion data-vl-toggle-text="Verbalisanten en stedenbouwkundige inspecteurs en VTE"> 
        ${this.renderDataSection("Verbalisanten en stedenbouwkundige inspecteurs en VTE", jsonData.Milieu.ANB.gewestelijkeToezichthouders)}</vl-accordion>
        <vl-accordion data-vl-toggle-text="Klachten">
        ${this.renderDataSection("Klachten", jsonData.Milieu.ANB.klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Controles">
        ${this.renderDataSection("Controles", jsonData.Milieu.ANB.klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Aantal aanvankelijke controles met schending">
        ${this.renderDataSection("Aantal aanvankelijke controles met schending", jsonData.Milieu.ANB.klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Instrumentarium">
        ${this.renderDataSection("Instrumentarium", jsonData.Milieu.ANB.klachten)}
        </vl-accordion>
    </vl-accordion-list>
            </vl-cascader-item>
      </vl-cascader-item>

      <vl-cascader-item label="Agentschap Wegen en Verkeer">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
        <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
        ${this.renderDataSection("Gewestelijke toezichthouders", jsonData.Milieu.AWV.gewestelijkeToezichthouders)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Klachten">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.AWV.klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Controles">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.AWV.controles)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.AWV.Aanvankelijkecontrolesmetschending)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Instrumentarium">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.AWV.Instrumentarium)}
        </vl-accordion>
    </vl-accordion-list>
                </vl-cascader-item>
            <vl-cascader-item label="Ruimtelijke ordening">
            <p slot="content">
            <vl-alert
            data-cy="alert"
            data-vl-naked=""
            data-vl-icon="warning"
            data-vl-title="Geen bevoegheid"
            data-vl-type="warning"
            data-vl-message="Agentschap Wegen en Verkeer heeft geen bevoegheid voor ruimtelijke ordening."
        >
        </vl-alert>
    </p>
            </vl-cascader-item>
      </vl-cascader-item>

      <vl-cascader-item label="De Vlaamse Waterweg">
      <vl-cascader-item label="Milieu">
  <vl-accordion-list slot="content">
      <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
      ${this.renderDataSection("Gewestelijke toezichthouders", jsonData.Milieu.DVW.gewestelijkeToezichthouders)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Klachten">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DVW.klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Controles">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DVW.controles)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DVW.Aanvankelijkecontrolesmetschending)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Instrumentarium">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DVW.Instrumentarium)}
      </vl-accordion>
  </vl-accordion-list>
              </vl-cascader-item>
          <vl-cascader-item label="Ruimtelijke ordening">
          <p slot="content">
          <vl-alert
          data-cy="alert"
          data-vl-naked=""
          data-vl-icon="warning"
          data-vl-title="Geen bevoegheid"
          data-vl-type="warning"
          data-vl-message="De Vlaamse Waterweg heeft geen bevoegheid voor ruimtelijke ordening."
      >
      </vl-alert>
  </p>
          </vl-cascader-item>
    </vl-cascader-item>



  <vl-cascader-item label="Departement Mobiliteit en Openbare Werken">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
        <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
        ${this.renderDataSection("Gewestelijke toezichthouders", jsonData.Milieu.DMOW.gewestelijkeToezichthouders)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Klachten">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DMOW.klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Controles">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DMOW.controles)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DMOW.Aanvankelijkecontrolesmetschending)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Instrumentarium">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DMOW.Instrumentarium)}
        </vl-accordion>
    </vl-accordion-list>
                </vl-cascader-item>
            <vl-cascader-item label="Ruimtelijke ordening">
            <p slot="content">
            <vl-alert
            data-cy="alert"
            data-vl-naked=""
            data-vl-icon="warning"
            data-vl-title="Geen bevoegheid"
            data-vl-type="warning"
            data-vl-message="Departement Mobiliteit en Openbare Werken heeft geen bevoegheid voor ruimtelijke ordening."
        >
        </vl-alert>
    </p>
            </vl-cascader-item>
      </vl-cascader-item>


      
      <vl-cascader-item label="Departement Omgeving - Afdeling Handhavings - Omgevingsinspectie">
      <vl-cascader-item label="Milieu">
  <vl-accordion-list slot="content">
      <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
      ${this.renderDataSection("Gewestelijke toezichthouders", jsonData.Milieu.DOMGHH.gewestelijkeToezichthouders)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Klachten">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DOMGHH.klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Controles">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DOMGHH.controles)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DOMGHH.Aanvankelijkecontrolesmetschending)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Instrumentarium">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DOMGHH.Instrumentarium)}
      </vl-accordion>
  </vl-accordion-list>
              </vl-cascader-item>
          <vl-cascader-item label="Ruimtelijke ordening">
          <vl-accordion-list slot="content">
      <vl-accordion data-vl-toggle-text="Verbalisanten en stedenbouwkundige inspecteurs en VTE"> 
      ${this.renderDataSection("Verbalisanten en stedenbouwkundige inspecteurs en VTE", jsonData.Milieu.DOMGHH.gewestelijkeToezichthouders)}</vl-accordion>
      <vl-accordion data-vl-toggle-text="Klachten">
      ${this.renderDataSection("Klachten", jsonData.Milieu.DOMGHH.klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Controles">
      ${this.renderDataSection("Controles", jsonData.Milieu.DOMGHH.klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Aantal aanvankelijke controles met schending">
      ${this.renderDataSection("Aantal aanvankelijke controles met schending", jsonData.Milieu.DOMGHH.klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Instrumentarium">
      ${this.renderDataSection("Instrumentarium", jsonData.Milieu.DOMGHH.klachten)}
      </vl-accordion>
  </vl-accordion-list>
          </vl-cascader-item>
    </vl-cascader-item>

    
<vl-cascader-item label="Departement Omgeving - Afdeling VPO">
<vl-cascader-item label="Milieu">
<vl-accordion-list slot="content">
<vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
${this.renderDataSection("Gewestelijke toezichthouders", jsonData.Milieu.DOMGVPO.gewestelijkeToezichthouders)}
</vl-accordion>
<vl-accordion data-vl-toggle-text="Klachten">
${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DOMGVPO.klachten)}
</vl-accordion>
<vl-accordion data-vl-toggle-text="Controles">
${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DOMGVPO.controles)}
</vl-accordion>
<vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DOMGVPO.Aanvankelijkecontrolesmetschending)}
</vl-accordion>
<vl-accordion data-vl-toggle-text="Instrumentarium">
${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DOMGVPO.Instrumentarium)}
</vl-accordion>
</vl-accordion-list>
        </vl-cascader-item>
    <vl-cascader-item label="Ruimtelijke ordening">
    <p slot="content">
    <vl-alert
    data-cy="alert"
    data-vl-naked=""
    data-vl-icon="info"
    data-vl-title="Geen bevoegdheid"
    data-vl-type="info"
    data-vl-message="Departement Omgeving - Afdeling VPO heeft geen bevoegheid voor ruimtelijke ordening."
>
</vl-alert>
</p>
    </vl-cascader-item>
</vl-cascader-item>




<vl-cascader-item label="Departement Omgeving - Afdeling GOP">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
        <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
        ${this.renderDataSection("Gewestelijke toezichthouders", jsonData.Milieu.DOMGGOP.gewestelijkeToezichthouders)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Klachten">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DOMGGOP.klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Controles">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DOMGGOP.controles)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DOMGGOP.Aanvankelijkecontrolesmetschending)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Instrumentarium">
        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.DOMGGOP.Instrumentarium)}
        </vl-accordion>
    </vl-accordion-list>
                </vl-cascader-item>
            <vl-cascader-item label="Ruimtelijke ordening">
            <p slot="content">
            <vl-alert
            data-cy="alert"
            data-vl-naked=""
            data-vl-icon="info"
            data-vl-title="Geen bevoegdheid"
            data-vl-type="info"
            data-vl-message="Departement Omgeving - Afdeling GOP heeft geen bevoegheid voor ruimtelijke ordening."
        >
        </vl-alert>
        </p>
            </vl-cascader-item>
      </vl-cascader-item>
      

      
      <vl-cascader-item label="Openbare Vlaamse Afvalmaatschappij">
      <vl-cascader-item label="Milieu">
  <vl-accordion-list slot="content">
      <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
      ${this.renderDataSection("Gewestelijke toezichthouders", jsonData.Milieu.OVAM.gewestelijkeToezichthouders)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Klachten">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.OVAM.klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Controles">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.OVAM.controles)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.OVAM.Aanvankelijkecontrolesmetschending)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Instrumentarium">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.OVAM.Instrumentarium)}
      </vl-accordion>
  </vl-accordion-list>
              </vl-cascader-item>
          <vl-cascader-item label="Ruimtelijke ordening">
          <p slot="content">
          <vl-alert
          data-cy="alert"
          data-vl-naked=""
          data-vl-icon="info"
          data-vl-title="Geen bevoegdheid"
          data-vl-type="info"
          data-vl-message="Openbare Vlaamse Afvalmaatschappij heeft geen bevoegheid voor ruimtelijke ordening."
      >
      </vl-alert>
      </p>
          </vl-cascader-item>
    </vl-cascader-item>

    
    <vl-cascader-item label="Vlaams Agenschap Zorg en Gezondheid">
    <vl-cascader-item label="Milieu">
<vl-accordion-list slot="content">
    <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
    ${this.renderDataSection("Gewestelijke toezichthouders", jsonData.Milieu.ZORG.gewestelijkeToezichthouders)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Klachten">
    ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.ZORG.klachten)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Controles">
    ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.ZORG.controles)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
    ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.ZORG.Aanvankelijkecontrolesmetschending)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Instrumentarium">
    ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.ZORG.Instrumentarium)}
    </vl-accordion>
</vl-accordion-list>
            </vl-cascader-item>
        <vl-cascader-item label="Ruimtelijke ordening">
        <p slot="content">
          <vl-alert
          data-cy="alert"
          data-vl-naked=""
          data-vl-icon="info"
          data-vl-title="Geen bevoegdheid"
          data-vl-type="info"
          data-vl-message="Vlaams Agenschap Zorg en Gezondheid heeft geen bevoegheid voor ruimtelijke ordening."
      >
      </vl-alert>
      </p>
        </vl-cascader-item>
  </vl-cascader-item>

  <vl-cascader-item label="Vlaamse Energie- en Klimaatmaatschappij">
  <vl-cascader-item label="Milieu">
<vl-accordion-list slot="content">
  <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
  ${this.renderDataSection("Gewestelijke toezichthouders", jsonData.Milieu.VEKA.gewestelijkeToezichthouders)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Klachten">
  ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.VEKA.klachten)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Controles">
  ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.VEKA.controles)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
  ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.VEKA.Aanvankelijkecontrolesmetschending)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Instrumentarium">
  ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.VEKA.Instrumentarium)}
  </vl-accordion>
</vl-accordion-list>
          </vl-cascader-item>
      <vl-cascader-item label="Ruimtelijke ordening">
      <p slot="content">
      <vl-alert
      data-cy="alert"
      data-vl-naked=""
      data-vl-icon="info"
      data-vl-title="Geen bevoegdheid"
      data-vl-type="info"
      data-vl-message="Vlaams Energie- en Klimaatagentschap heeft geen bevoegdheid voor ruimtelijke ordening."
  >
  </vl-alert>
  </p>
      </vl-cascader-item>
</vl-cascader-item>


<vl-cascader-item label="Vlaamse Landmaatschappij">
      <vl-cascader-item label="Milieu">
  <vl-accordion-list slot="content">
      <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
      ${this.renderDataSection("Gewestelijke toezichthouders", jsonData.Milieu.VLM.gewestelijkeToezichthouders)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Klachten">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.VLM.klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Controles">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.VLM.controles)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.VLM.Aanvankelijkecontrolesmetschending)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Instrumentarium">
      ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.VLM.Instrumentarium)}
      </vl-accordion>
  </vl-accordion-list>
              </vl-cascader-item>
          <vl-cascader-item label="Ruimtelijke ordening">
          <p slot="content">
          <vl-alert
          data-cy="alert"
          data-vl-naked=""
          data-vl-icon="info"
          data-vl-title="Geen bevoegdheid"
          data-vl-type="info"
          data-vl-message="Vlaamse Landmaatschappij heeft geen bevoegdheid voor ruimtelijke ordening."
      >
      </vl-alert>
      </p>
          </vl-cascader-item>
    </vl-cascader-item>


    <vl-cascader-item label="Openbare Vlaamse Milieumaatschappij">
    <vl-cascader-item label="Milieu">
<vl-accordion-list slot="content">
    <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
    ${this.renderDataSection("Gewestelijke toezichthouders", jsonData.Milieu.VMM.gewestelijkeToezichthouders)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Klachten">
    ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.VMM.klachten)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Controles">
    ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.VMM.controles)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
    ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.VMM.Aanvankelijkecontrolesmetschending)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Instrumentarium">
    ${this.renderDataSection("Cijfers klachten van 2023", jsonData.Milieu.VMM.Instrumentarium)}
    </vl-accordion>
</vl-accordion-list>
            </vl-cascader-item>
        <vl-cascader-item label="Ruimtelijke ordening">
        <vl-accordion-list slot="content">
        <p slot="content">
        <vl-alert
        data-cy="alert"
        data-vl-naked=""
        data-vl-icon="info"
        data-vl-title="Geen bevoegdheid"
        data-vl-type="info"
        data-vl-message="Openbare Vlaamse Milieumaatschappij heeft geen bevoegdheid voor ruimtelijke ordening."
    >
    </vl-alert>
    </p>
        </vl-cascader-item>
  </vl-cascader-item>


  <vl-cascader-item label="Vlaamse Wooninspectie">
  <vl-cascader-item label="Milieu">
  <p slot="content">
  <vl-alert
  data-cy="alert"
  data-vl-naked=""
  data-vl-icon="info"
  data-vl-title="Geen bevoegdheid"
  data-vl-type="info"
  data-vl-message="Vlaamse Wooninspectie heeft geen bevoegdheid voor ruimtelijke ordening."
>
</vl-alert>
</p>
          </vl-cascader-item>
      <vl-cascader-item label="Ruimtelijke ordening">
      <vl-accordion-list slot="content">
  <vl-accordion data-vl-toggle-text="Verbalisanten en stedenbouwkundige inspecteurs en VTE"> 
  ${this.renderDataSection("Verbalisanten en stedenbouwkundige inspecteurs en VTE", jsonData.Milieu.Wooninspectie.gewestelijkeToezichthouders)}</vl-accordion>
  <vl-accordion data-vl-toggle-text="Klachten">
  ${this.renderDataSection("Klachten", jsonData.Milieu.Wooninspectie.klachten)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Controles">
  ${this.renderDataSection("Controles", jsonData.Milieu.Wooninspectie.klachten)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Aantal aanvankelijke controles met schending">
  ${this.renderDataSection("Aantal aanvankelijke controles met schending", jsonData.Milieu.Wooninspectie.klachten)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Instrumentarium">
  ${this.renderDataSection("Instrumentarium", jsonData.Milieu.Wooninspectie.klachten)}
  </vl-accordion>
</vl-accordion-list>
      </vl-cascader-item>
</vl-cascader-item>
</vl-cascader>
`;

  }
}

customElements.define("ohr-agewest", OhrAGewest);
