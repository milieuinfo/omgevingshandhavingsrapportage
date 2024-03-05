import {html, LitElement} from "../common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";
import jsonData from "../data-jaar/provincie.json" assert {type: "json"};

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/components/content-header";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/infoblock";
import "@domg-wc/components/accordion-list";
import "@domg-wc/components/next/cascader";
import "@domg-wc/elements/data-table";

class OhrProvincieAnalyse extends LitElement {

  static get styles() {
    return [
      ...vlElementsStyle
    ]
  }

  static get properties() {
    return {
    }
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <vl-functional-header
    data-vl-back="Terug"
    data-vl-back-link="/"
    data-vl-title="Provinciale handhavingsactoren"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/provincie-analyse">
    </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
        <vl-typography>
        <h2>Provinciale handhavingsactoren van 2023</h2></vl-typography>
        <p is="vl-icon-wrapper"><vl-annotation><span is="vl-icon" data-vl-icon="calendar"></span> Laatste wijziging aan de data: 21/02/2024</vl-annotation></p><br>

    <p is="vl-introduction" data-cy="introduction">
    Onderstaande weergave geeft een beeld van de bevraging over de cijfers van 2023. Navigeer doorheen de weergave om gericht en efficiënt data te raadplegen.
    </p><br/>
    
<div>

          ${this.__renderPage()}</div>
        </div>
      </section>`;
  }

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
  __renderPage() {
    return html`
   <vl-cascader>
    <vl-cascader-item label="Provincie Antwerpen">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
        <vl-accordion data-vl-toggle-text="Provinciegouverneur"> 
        <p>Geen opgelegde bestuurlijke maatregelen of veiligsheidsmaatregelen voor provinciegouverneur.</p>
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Provinciale toezichthouders en VTE">
        ${this.renderDataSection(jsonData.Antwerpen.Personeel)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Klachten">
        <p>Aantal milieuklachten zijn niet gekend voor provincie Antwerpen.</p>
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Controles">
        ${this.renderDataSection(jsonData.Antwerpen.Controles)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
        ${this.renderDataSection(jsonData.Antwerpen.Aanvankelijkecontrolesmetschending)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Instrumentarium">
        ${this.renderDataSection(jsonData.Antwerpen.Instrumentarium)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Opmerking">
        <p>Geen opmerkingen.</p>
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
            data-vl-message="Provincie Antwerpen heeft geen bevoegheid voor ruimtelijke ordening."
        >
        </vl-alert>
    </p>
            </vl-cascader-item>
      </vl-cascader-item>


      <vl-cascader-item label="Provincie Limburg">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
    <vl-accordion data-vl-toggle-text="Provinciegouverneur"> 
        <p>Geen opgelegde bestuurlijke maatregelen of veiligsheidsmaatregelen voor provinciegouverneur.</p>
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Provinciale toezichthouders en VTE">
    ${this.renderDataSection(jsonData.Limburg.Personeel)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Klachten">
    ${this.renderDataSection(jsonData.Limburg.Klachten)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Controles">
    ${this.renderDataSection(jsonData.Limburg.Controles)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
    ${this.renderDataSection(jsonData.Limburg.Aanvankelijkecontrolesmetschending)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Instrumentarium">
    ${this.renderDataSection(jsonData.Limburg.Instrumentarium)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Opmerking">
        <p>Geen opmerkingen.</p>
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
                data-vl-message="Provincie Limburg heeft geen bevoegheid voor ruimtelijke ordening."
            >
            </vl-alert>
        </p>
                </vl-cascader-item>
      </vl-cascader-item>

      <vl-cascader-item label="Provincie Oost-Vlaanderen">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
    <vl-accordion data-vl-toggle-text="Provinciegouverneur"> 
    <p>Geen opgelegde bestuurlijke maatregelen of veiligsheidsmaatregelen voor provinciegouverneur.</p>
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Provinciale toezichthouders en VTE">
    ${this.renderDataSection(jsonData.OostVlaanderen.Personeel)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Klachten">
    ${this.renderDataSection(jsonData.OostVlaanderen.Klachten)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Controles">
    ${this.renderDataSection(jsonData.OostVlaanderen.Controles)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
    ${this.renderDataSection(jsonData.OostVlaanderen.Aanvankelijkecontrolesmetschending)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Instrumentarium">
    ${this.renderDataSection(jsonData.OostVlaanderen.Instrumentarium)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Opmerking">
        <p>Geen opmerkingen.</p>
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
            data-vl-message="Provincie Oost-Vlaanderen heeft geen bevoegheid voor ruimtelijke ordening."
        >
        </vl-alert>
    </p>
            </vl-cascader-item>
      </vl-cascader-item>

      <vl-cascader-item label="Provincie West-Vlaanderen">
      <vl-cascader-item label="Milieu">
  <vl-accordion-list slot="content">
  <vl-accordion data-vl-toggle-text="Provinciegouverneur"> 
  <p>Geen opgelegde bestuurlijke maatregelen of veiligsheidsmaatregelen voor provinciegouverneur.</p>
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Provinciale toezichthouders en VTE">
  ${this.renderDataSection(jsonData.WestVlaanderen.Personeel)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Klachten">
  ${this.renderDataSection(jsonData.WestVlaanderen.Klachten)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Controles">
  ${this.renderDataSection(jsonData.WestVlaanderen.Controles)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
  ${this.renderDataSection(jsonData.WestVlaanderen.Aanvankelijkecontrolesmetschending)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Instrumentarium">
  ${this.renderDataSection(jsonData.WestVlaanderen.Instrumentarium)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Opmerking">
  <p>Geen opmerkingen.</p>
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
          data-vl-message="Provincie West-Vlaanderen heeft geen bevoegheid voor ruimtelijke ordening."
      >
      </vl-alert>
  </p>
          </vl-cascader-item>
    </vl-cascader-item>



  <vl-cascader-item label="Provincie Vlaams-Brabant">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
    <vl-accordion data-vl-toggle-text="Provinciegouverneur"> 
    <p>Geen opgelegde bestuurlijke maatregelen of veiligsheidsmaatregelen voor provinciegouverneur.</p>
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Provinciale toezichthouders en VTE">
    ${this.renderDataSection(jsonData.VlaamsBrabant.Personeel)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Klachten">
    ${this.renderDataSection(jsonData.VlaamsBrabant.Klachten)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Controles">
    ${this.renderDataSection(jsonData.VlaamsBrabant.Controles)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
    ${this.renderDataSection(jsonData.VlaamsBrabant.Aanvankelijkecontrolesmetschending)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Instrumentarium">
    ${this.renderDataSection(jsonData.VlaamsBrabant.Instrumentarium)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Opmerking">
  <p>Geen opmerkingen.</p>
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
            data-vl-message="Provincie Vlaams-Brabant heeft geen bevoegheid voor ruimtelijke ordening."
        >
        </vl-alert>
    </p>
            </vl-cascader-item>
      </vl-cascader-item>
</vl-cascader>
`;

  }
}
customElements.define("ohr-provincieanalyse", OhrProvincieAnalyse);
