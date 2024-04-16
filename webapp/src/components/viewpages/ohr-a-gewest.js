import { html, LitElement } from "../common/commons.js";
import { vlElementsStyle } from "@domg-wc/elements";
import jsonData from "../datafiles/gewest.json" assert { type: "json" };
import jsonData2 from "../datafiles/Totaal Gewest 2023_e1a6d014-b58b-302d-b023-ab8a4b99391a.json" assert { type: "json" };
import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/components/content-header";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/infoblock";
import "@domg-wc/components/accordion-list";
import "@domg-wc/components/next/cascader";
import "@domg-wc/elements/data-table";
import "@domg-wc/components/spotlight";

class OhrAGewest extends LitElement {
  static get styles() {
    return [...vlElementsStyle];
  }
  constructor() {
    super();
  }
  /*Main render page*/
  render() {
    return html` <vl-functional-header
        data-vl-back="Terug"
        data-vl-back-link="/gewest"
        data-vl-title="Gewestelijke handhavingsactoren"
        data-vl-sub-title="Omgevingshandhavingsrapportage"
        data-vl-link="/"
      >
      </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          <vl-typography>
            <h2>Raadpleeg laatst bekende cijfers van 2023</h2></vl-typography
          >
          <p is="vl-icon-wrapper">
            <span is="vl-icon" data-vl-icon="calendar"></span
            ><vl-annotation>
              Laatste wijziging aan de data: 21/02/2024</vl-annotation
            >
          </p>
          <br />

          <p is="vl-introduction" data-cy="introduction">
            Onderstaande weergave geeft een beeld van de bevraging over de
            cijfers van 2023. Navigeer doorheen de weergave om gericht en
            efficiënt data te raadplegen.
          </p>
          <br />

          <div>${this.__renderPage()}</div>
        </div>
      </section>`;
  }

  /* Render opmerking */
  renderOpmerkingsection(data) {
    return html`
    <vl-typography>
    <ul>
    ${Object.entries(data).map(([key,value]) => {
        return html`
        <li>${value}</li>
        `;
      })
    }
</ul>
</vl-typography>
    `
  }
  /* Render ThemaGerichte Acties */
  renderThemaGerichteActies() {
    return html`
    <p slot="content">
    TEST
    
    </p>
    `
  }
    /* Render data table String*/
    renderDataSectionTXT(data) {
      return html`
        <table is="vl-data-table">
          <thead>
            <tr>
              <th>Thema</th>
              <th>Beschrijving</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(data).map(([key, value]) => {
              if (typeof value === "object") {
                return html`
                  <tr>
                    <td data-title="${key}">${key}</td>
                    <td data-title="${value.value}">${value.value}</td>
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
        <br />
      `;
    }
  /* Render data table Numbers*/
  renderDataSection(data) {
    return html`
      <table is="vl-data-table">
        <thead>
          <tr>
            <th>Onderwerp</th>
            <th>Aantal</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(data).map(([key, value]) => {
            if (typeof value === "object") {
              return html`
                <tr>
                  <td data-title="${key}">${key}</td>
                  <td data-title="${value.value}">${value.value}</td>
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
      <br />
    `;
  }

  /*Render page*/
  __renderPage() {
    return html`
   <vl-cascader>
    <vl-cascader-item label="Agentschap Maritieme Dienstverlening en Kust">
      <vl-cascader-item label="Milieu">
        <p slot="content">
        <vl-alert data-cy="alert" data-vl-naked="" data-vl-icon="info" data-vl-title="Geen activiteit" data-vl-type="info"
        data-vl-message="Agentschap Maritieme Dienstverlening en Kust heeft geen milieuhandhaving uitgevoerd.">
      </vl-alert></p>
      </vl-cascader-item>
      <vl-cascader-item label="Ruimtelijke ordening">
        <p slot="content">
            <vl-alert data-cy="alert" data-vl-naked="" data-vl-icon="warning" data-vl-title="Geen bevoegheid" data-vl-type="warning"
            data-vl-message="Agentschap Maritieme Dienstverlening en Kust heeft geen bevoegheid voor ruimtelijke ordening.">
        </vl-alert></p>
            </vl-cascader-item>
      </vl-cascader-item>

      <vl-cascader-item label="Agentschap voor Natuur en Bos">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
        <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
        ${this.renderDataSection(jsonData2.Milieu.ANB.gewestelijkeToezichthouders)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Klachten">
        ${this.renderDataSection(jsonData2.Milieu.ANB.Klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Controles">
        ${this.renderDataSection(jsonData2.Milieu.ANB.Controles)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
        ${this.renderDataSection(
          jsonData2.Milieu.ANB.Aanvankelijkecontrolesmetschending
        )}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Instrumentarium">
        ${this.renderDataSection(jsonData2.Milieu.ANB.Instrument)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Themagerichte acties">
        ${this.renderDataSectionTXT(jsonData2.Milieu.ANB.Thema)}
      </vl-typography>
    </vl-accordion>
      <vl-accordion data-vl-toggle-text="Opmerkingen">
          ${this.renderOpmerkingsection(jsonData2.Milieu.ANB.Opmerking)}
      </vl-accordion>
    </vl-accordion-list>
                </vl-cascader-item>
            <vl-cascader-item label="Ruimtelijke ordening">
            <vl-accordion-list slot="content">
        <vl-accordion data-vl-toggle-text="Verbalisanten en stedenbouwkundige inspecteurs en VTE"> 
        ${this.renderDataSection(
          jsonData2.RO.ANB.PersoneelRO
        )}</vl-accordion>
        <vl-accordion data-vl-toggle-text="Klachten">
        ${this.renderDataSection(jsonData2.Milieu.ANB.Klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Controles">
        ${this.renderDataSection(jsonData2.Milieu.ANB.Klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Aantal aanvankelijke controles met schending">
        ${this.renderDataSection(jsonData2.Milieu.ANB.Klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Instrumentarium">
        ${this.renderDataSection(jsonData2.Milieu.ANB.Klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Themagerichte acties">
        ${this.renderDataSectionTXT(jsonData2.Milieu.ANB.Thema)}
      </vl-typography>
    </vl-accordion>
      <vl-accordion data-vl-toggle-text="Opmerkingen">
          ${this.renderOpmerkingsection(jsonData2.Milieu.ANB.Opmerking)}
      </vl-accordion>
    </vl-accordion-list>
            </vl-cascader-item>
      </vl-cascader-item>

      <vl-cascader-item label="Agentschap Wegen en Verkeer">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
        <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
        ${this.renderDataSection(jsonData2.Milieu.AWV.gewestelijkeToezichthouders)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Klachten">
        ${this.renderDataSection(jsonData2.Milieu.AWV.Klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Controles">
        ${this.renderDataSection(jsonData2.Milieu.AWV.Controles)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
        ${this.renderDataSection(
          jsonData2.Milieu.AWV.Aanvankelijkecontrolesmetschending
        )}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Instrumentarium">
        ${this.renderDataSection(jsonData2.Milieu.AWV.Instrument)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Themagerichte acties">
        ${this.renderDataSectionTXT(jsonData2.Milieu.AWV.Thema)}
      </vl-typography>
    </vl-accordion>
      <vl-accordion data-vl-toggle-text="Opmerkingen">
          ${this.renderOpmerkingsection(jsonData2.Milieu.AWV.Opmerking)}
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
            data-vl-message="Agentschap Wegen en Verkeer heeft geen bevoegheid voor ruimtelijke ordening.">
        </vl-alert>
    </p>
            </vl-cascader-item>
      </vl-cascader-item>

      <vl-cascader-item label="De Vlaamse Waterweg">
      <vl-cascader-item label="Milieu">
  <vl-accordion-list slot="content">
      <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
      ${this.renderDataSection(jsonData2.Milieu.VW.gewestelijkeToezichthouders)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Klachten">
      ${this.renderDataSection(jsonData2.Milieu.VW.Klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Controles">
      ${this.renderDataSection(jsonData2.Milieu.VW.Controles)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
      ${this.renderDataSection(jsonData2.Milieu.VW.Aanvankelijkecontrolesmetschending)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Instrumentarium">
      ${this.renderDataSection(jsonData2.Milieu.VW.Instrument)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Themagerichte acties">
      ${this.renderDataSectionTXT(jsonData2.Milieu.VW.Thema)}
    </vl-typography>
  </vl-accordion>
    <vl-accordion data-vl-toggle-text="Opmerkingen">
        ${this.renderOpmerkingsection(jsonData2.Milieu.VW.Opmerking)}
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
          data-vl-message="De Vlaamse Waterweg heeft geen bevoegheid voor ruimtelijke ordening.">
      </vl-alert>
  </p>
          </vl-cascader-item>
    </vl-cascader-item>

  <vl-cascader-item label="Departement Mobiliteit en Openbare Werken">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
        <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
        ${this.renderDataSection(jsonData2.Milieu.dMOW.gewestelijkeToezichthouders)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Klachten">
        ${this.renderDataSection(jsonData2.Milieu.dMOW.Klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Controles">
        ${this.renderDataSection(jsonData2.Milieu.dMOW.Controles)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
        ${this.renderDataSection(
          jsonData2.Milieu.dMOW.Aanvankelijkecontrolesmetschending
        )}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Instrumentarium">
        ${this.renderDataSection(jsonData2.Milieu.dMOW.Instrument)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Themagerichte acties">
        ${this.renderDataSectionTXT(jsonData2.Milieu.dMOW.Thema)}
      </vl-typography>
    </vl-accordion>
      <vl-accordion data-vl-toggle-text="Opmerkingen">
          ${this.renderOpmerkingsection(jsonData2.Milieu.dMOW.Opmerking)}
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
            data-vl-message="Departement Mobiliteit en Openbare Werken heeft geen bevoegheid voor ruimtelijke ordening.">
        </vl-alert>
    </p>
            </vl-cascader-item>
      </vl-cascader-item>


      
      <vl-cascader-item label="Departement Omgeving - Afdeling Handhaving">
      <vl-cascader-item label="Milieu">
  <vl-accordion-list slot="content">
      <vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
      ${this.renderDataSection(jsonData2.Milieu.dOMGHH.gewestelijkeToezichthouders)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Klachten">
      ${this.renderDataSection(jsonData2.Milieu.dOMGHH.Klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Controles">
      ${this.renderDataSection(jsonData2.Milieu.dOMGHH.Controles)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
      ${this.renderDataSection(
        jsonData2.Milieu.dOMGHH.Aanvankelijkecontrolesmetschending
      )}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Instrumentarium">
      ${this.renderDataSection(jsonData2.Milieu.dOMGHH.Instrument)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Themagerichte acties">
      ${this.renderDataSectionTXT(jsonData2.Milieu.dOMGHH.Thema)}
    </vl-typography>
  </vl-accordion>
    <vl-accordion data-vl-toggle-text="Opmerkingen">
        ${this.renderOpmerkingsection(jsonData2.Milieu.dOMGHH.Opmerking)}
    </vl-accordion>
  </vl-accordion-list>
              </vl-cascader-item>
          <vl-cascader-item label="Ruimtelijke ordening">
          <vl-accordion-list slot="content">
      <vl-accordion data-vl-toggle-text="Verbalisanten en stedenbouwkundige inspecteurs en VTE"> 
      ${this.renderDataSection(
        jsonData2.Milieu.dOMGHH.gewestelijkeToezichthouders
      )}</vl-accordion>
      <vl-accordion data-vl-toggle-text="Klachten">
      ${this.renderDataSection(jsonData2.Milieu.dOMGHH.Klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Controles">
      ${this.renderDataSection(jsonData2.Milieu.dOMGHH.Klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Aantal aanvankelijke controles met schending">
      ${this.renderDataSection(jsonData2.Milieu.dOMGHH.Klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Instrumentarium">
      ${this.renderDataSection(jsonData2.Milieu.dOMGHH.Instrument)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Themagerichte acties">
      ${this.renderDataSectionTXT(jsonData2.Milieu.dOMGHH.Thema)}
    </vl-typography>
  </vl-accordion>
    <vl-accordion data-vl-toggle-text="Opmerkingen">
        ${this.renderOpmerkingsection(jsonData2.Milieu.dOMGHH.Opmerking)}
    </vl-accordion>
  </vl-accordion-list>
          </vl-cascader-item>
    </vl-cascader-item>

    
<vl-cascader-item label="Departement Omgeving - Afdeling VPO">
<vl-cascader-item label="Milieu">
<vl-accordion-list slot="content">
<vl-accordion data-vl-toggle-text="Gewestelijke toezichthouders en VTE van 2023"> 
${this.renderDataSection(jsonData2.Milieu.DOMGVPO.gewestelijkeToezichthouders)}
</vl-accordion>
<vl-accordion data-vl-toggle-text="Klachten">
${this.renderDataSection(jsonData2.Milieu.DOMGVPO.Klachten)}
</vl-accordion>
<vl-accordion data-vl-toggle-text="Controles">
${this.renderDataSection(jsonData2.Milieu.DOMGVPO.Controles)}
</vl-accordion>
<vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
${this.renderDataSection(jsonData2.Milieu.DOMGVPO.Aanvankelijkecontrolesmetschending)}
</vl-accordion>
<vl-accordion data-vl-toggle-text="Instrumentarium">
${this.renderDataSection(jsonData2.Milieu.DOMGVPO.Instrument)}
</vl-accordion>
<vl-accordion data-vl-toggle-text="Themagerichte acties">
${this.renderDataSectionTXT(jsonData2.Milieu.DOMGVPO.Thema)}
</vl-typography>
</vl-accordion>
<vl-accordion data-vl-toggle-text="Opmerkingen">
  ${this.renderOpmerkingsection(jsonData2.Milieu.DOMGVPO.Opmerking)}
</vl-accordion>
</vl-accordion-list>
        </vl-cascader-item>
    <vl-cascader-item label="Ruimtelijke ordening">
    <p slot="content">
    <vl-alert
    data-cy="alert"
    data-vl-naked=""
    data-vl-icon="warning"
    data-vl-title="Geen bevoegdheid"
    data-vl-type="warning"
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
        ${this.renderDataSection(jsonData2.Milieu.dOMGGOP.gewestelijkeToezichthouders)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Klachten">
        ${this.renderDataSection(jsonData2.Milieu.dOMGGOP.Klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Controles">
        ${this.renderDataSection(jsonData2.Milieu.dOMGGOP.Controles)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
        ${this.renderDataSection(
          jsonData2.Milieu.dOMGGOP.Aanvankelijkecontrolesmetschending
        )}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Instrumentarium">
        ${this.renderDataSection(jsonData2.Milieu.dOMGGOP.Instrument)}
        </vl-accordion>

        <vl-accordion data-vl-toggle-text="Themagerichte acties">
        ${this.renderDataSectionTXT(jsonData2.Milieu.dOMGGOP.Thema)}
      </vl-typography>
    </vl-accordion>
      <vl-accordion data-vl-toggle-text="Opmerkingen">
          ${this.renderOpmerkingsection(jsonData2.Milieu.dOMGGOP.Opmerking)}
      </vl-accordion>
    </vl-accordion-list>
                </vl-cascader-item>
            <vl-cascader-item label="Ruimtelijke ordening">
            <p slot="content">
            <vl-alert
            data-cy="alert"
            data-vl-naked=""
            data-vl-icon="warning"
            data-vl-title="Geen bevoegdheid"
            data-vl-type="warning"
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
      ${this.renderDataSection(jsonData2.Milieu.OVAM.gewestelijkeToezichthouders)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Klachten">
      ${this.renderDataSection(jsonData2.Milieu.OVAM.Klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Controles">
      ${this.renderDataSection(jsonData2.Milieu.OVAM.Controles)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
      ${this.renderDataSection(
        jsonData2.Milieu.OVAM.Aanvankelijkecontrolesmetschending
      )}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Instrumentarium">
      ${this.renderDataSection(jsonData2.Milieu.OVAM.Instrument)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Themagerichte acties">
      ${this.renderDataSectionTXT(jsonData2.Milieu.OVAM.Thema)}
    </vl-typography>
  </vl-accordion>
    <vl-accordion data-vl-toggle-text="Opmerkingen">
        ${this.renderOpmerkingsection(jsonData2.Milieu.OVAM.Opmerking)}
    </vl-accordion>
  </vl-accordion-list>
              </vl-cascader-item>
          <vl-cascader-item label="Ruimtelijke ordening">
          <p slot="content">
          <vl-alert
          data-cy="alert"
          data-vl-naked=""
          data-vl-icon="warning"
          data-vl-title="Geen bevoegdheid"
          data-vl-type="warning"
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
    ${this.renderDataSection(jsonData2.Milieu.DZORG.gewestelijkeToezichthouders)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Klachten">
    ${this.renderDataSection(jsonData2.Milieu.DZORG.Klachten)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Controles">
    ${this.renderDataSection(jsonData2.Milieu.DZORG.Controles)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
    ${this.renderDataSection(
      jsonData2.Milieu.DZORG.Aanvankelijkecontrolesmetschending
    )}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Instrumentarium">
    ${this.renderDataSection(jsonData2.Milieu.DZORG.Instrument)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Themagerichte acties">
    ${this.renderDataSectionTXT(jsonData2.Milieu.DZORG.Thema)}
  </vl-typography>
</vl-accordion>
  <vl-accordion data-vl-toggle-text="Opmerkingen">
      ${this.renderOpmerkingsection(jsonData2.Milieu.DZORG.Opmerking)}
  </vl-accordion>
</vl-accordion-list>
            </vl-cascader-item>
        <vl-cascader-item label="Ruimtelijke ordening">
        <p slot="content">
          <vl-alert
          data-cy="alert"
          data-vl-naked=""
          data-vl-icon="warning"
          data-vl-title="Geen bevoegdheid"
          data-vl-type="warning"
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
  ${this.renderDataSection(jsonData2.Milieu.VEKA.gewestelijkeToezichthouders)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Klachten">
  ${this.renderDataSection(jsonData2.Milieu.VEKA.Klachten)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Controles">
  ${this.renderDataSection(jsonData2.Milieu.VEKA.Controles)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
  ${this.renderDataSection(jsonData2.Milieu.VEKA.Aanvankelijkecontrolesmetschending)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Instrumentarium">
  ${this.renderDataSection(jsonData2.Milieu.VEKA.Instrument)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Themagerichte acties">
  ${this.renderDataSectionTXT(jsonData2.Milieu.VEKA.Thema)}
</vl-typography>
</vl-accordion>
<vl-accordion data-vl-toggle-text="Opmerkingen">
    ${this.renderOpmerkingsection(jsonData2.Milieu.VEKA.Opmerking)}
</vl-accordion>
</vl-accordion-list>
          </vl-cascader-item>
      <vl-cascader-item label="Ruimtelijke ordening">
      <p slot="content">
      <vl-alert
      data-cy="alert"
      data-vl-naked=""
      data-vl-icon="warning"
      data-vl-title="Geen bevoegdheid"
      data-vl-type="warning"
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
      ${this.renderDataSection(jsonData2.Milieu.VLM.gewestelijkeToezichthouders)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Klachten">
      ${this.renderDataSection(jsonData2.Milieu.VLM.Klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Controles">
      ${this.renderDataSection(jsonData2.Milieu.VLM.Controles)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
      ${this.renderDataSection(
        jsonData2.Milieu.VLM.Aanvankelijkecontrolesmetschending
      )}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Instrumentarium">
      ${this.renderDataSection(jsonData2.Milieu.VLM.Instrument)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Themagerichte acties">
      ${this.renderDataSectionTXT(jsonData2.Milieu.VLM.Thema)}
    </vl-typography>
  </vl-accordion>
    <vl-accordion data-vl-toggle-text="Opmerkingen">
        ${this.renderOpmerkingsection(jsonData2.Milieu.VLM.Opmerking)}
    </vl-accordion>
  </vl-accordion-list>
              </vl-cascader-item>
          <vl-cascader-item label="Ruimtelijke ordening">
          <p slot="content">
          <vl-alert
          data-cy="alert"
          data-vl-naked=""
          data-vl-icon="warning"
          data-vl-title="Geen bevoegdheid"
          data-vl-type="warning"
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
    ${this.renderDataSection(jsonData2.Milieu.VMM.gewestelijkeToezichthouders)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Klachten">
    ${this.renderDataSection(jsonData2.Milieu.VMM.Klachten)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Controles">
    ${this.renderDataSection(jsonData2.Milieu.VMM.Controles)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
    ${this.renderDataSection(jsonData2.Milieu.VMM.Aanvankelijkecontrolesmetschending)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Instrumentarium">
    ${this.renderDataSection(jsonData2.Milieu.VMM.Instrument)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Themagerichte acties">
    ${this.renderDataSectionTXT(jsonData2.Milieu.VMM.Thema)}
  </vl-typography>
</vl-accordion>
  <vl-accordion data-vl-toggle-text="Opmerkingen">
      ${this.renderOpmerkingsection(jsonData2.Milieu.VMM.Opmerking)}
  </vl-accordion>
</vl-accordion-list>
            </vl-cascader-item>
        <vl-cascader-item label="Ruimtelijke ordening">
        <vl-accordion-list slot="content">
        <p slot="content">
        <vl-alert
        data-cy="alert"
        data-vl-naked=""
        data-vl-icon="warning"
        data-vl-title="Geen bevoegdheid"
        data-vl-type="warning"
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
  data-vl-icon="warning"
  data-vl-title="Geen bevoegdheid"
  data-vl-type="warning"
  data-vl-message="Vlaamse Wooninspectie heeft geen bevoegdheid voor ruimtelijke ordening."
>
</vl-alert>
</p>
          </vl-cascader-item>
      <vl-cascader-item label="Ruimtelijke ordening">
      <vl-accordion-list slot="content">
  <vl-accordion data-vl-toggle-text="Verbalisanten en stedenbouwkundige inspecteurs en VTE"> 
  ${this.renderDataSection(
    jsonData2.Milieu.VWI.gewestelijkeToezichthouders
  )}</vl-accordion>
  <vl-accordion data-vl-toggle-text="Klachten">
  ${this.renderDataSection(jsonData2.Milieu.VWI.Klachten)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Controles">
  ${this.renderDataSection(jsonData2.Milieu.VWI.Controles)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Aantal aanvankelijke controles met schending">
  ${this.renderDataSection(jsonData2.Milieu.VWI.Aanvankelijkecontrolesmetschending)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Instrumentarium">
  ${this.renderDataSection(jsonData2.Milieu.VWI.Instrument)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Themagerichte acties">
  ${this.renderDataSectionTXT(jsonData2.Milieu.VWI.Thema)}
</vl-typography>
</vl-accordion>
<vl-accordion data-vl-toggle-text="Opmerkingen">
    ${this.renderOpmerkingsection(jsonData2.Milieu.VWI.Opmerking)}
</vl-accordion>
</vl-accordion-list>
      </vl-cascader-item>
</vl-cascader-item>
</vl-cascader>
`;
  }
}

customElements.define("ohr-agewest", OhrAGewest);
