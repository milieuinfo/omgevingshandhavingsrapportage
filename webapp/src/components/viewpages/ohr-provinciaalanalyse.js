import {vlElementsStyle} from "@domg-wc/elements";
import jsonData2 from "../datafiles/provincie.json" assert {type: "json"};
import options from "../config/keuzeprovincieanalyse.json" assert {type: "json"};

import {
  bindVlSelect,
  html,
  LitElement,
  queryById,
  renderStack
} from "../common/commons.js";

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/components/functional-header";
import "@domg-wc/elements/title";
import "@domg-wc/components/loader";
import "@domg-wc/components/accordion-list";
import "@domg-wc/components/accordion";
import "@domg-wc/elements/data-table";
import "@domg-wc/elements/select";
import "@domg-wc/components/tabs";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";

class OhrProvincieAnalyse extends LitElement {

  static get styles() {
    return [...vlElementsStyle];
    
  }
  static get properties() {
    return {
      selectedChoiceLabel: {type: String},
      selectedChoiceUrl: {type: String}
    }
  }
  constructor() {
    super();
    this.selectedChoiceUrl = options.find(o => o.selected).value;
    this.selectedChoiceLabel = options.find((o) => o.selected).label;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    bindVlSelect({
      component: queryById(this)("viewselector"),
      choices: options
    })
  }
  bindVlSelect() {
    const select = this.shadowRoot.querySelector('#viewselector');
    select.addEventListener('change', this.__changeView.bind(this));
  }

  __changeView(event) {
    const selectedOption = options.find((o) => o.value === event.target.value);
    if (selectedOption) {
      this.selectedChoiceUrl = selectedOption.value;
      this.selectedChoiceLabel = selectedOption.label;
      this.requestUpdate();
    }
  }
  render() {
    return html`
    <vl-functional-header
    data-vl-back="Terug"
    data-vl-back-link="/"
    data-vl-title="Jaarrapportage provinciale omgevingshandhavingsactoren"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/provincie-analyse">
    </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
        <vl-typography>
        <h2>Cijfers van het jaar 2023</h2></vl-typography>
        <p is="vl-icon-wrapper"><vl-annotation><span is="vl-icon" data-vl-icon="calendar"></span> Laatste wijziging aan de data: 21/02/2024</vl-annotation></p><br>

    <p is="vl-introduction" data-cy="introduction">
    
    Deze pagina toont een overzichtelijk beeld van de handhavingsactiviteiten van de provinciale  omgevingshandhavingsactoren.
    <br>Via de filter kan u een provincie kiezen.

    </p><br>
          <div>${this.__renderViewSelector()}</div>
          <div>${this.__renderDynamicContent()}</div>
        </div>
      </section>`;
  }

  /*
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
        ${this.renderDataSection(jsonData.Milieu.Antwerpen.gewestelijkeToezichthouders)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Klachten">
        ${this.renderDataSection(jsonData.Milieu.Antwerpen.Klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Controles">
        ${this.renderDataSection(jsonData.Milieu.Antwerpen.Controles)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
        ${this.renderDataSection(jsonData.Milieu.Antwerpen.Aanvankelijkecontrolesmetschending)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Instrumentarium">
        ${this.renderDataSection(jsonData.Milieu.Antwerpen.Instrument)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Opmerking">
        <p>Totaal aantal milieuhandhavingscontroles uitgevoerd in 2023: dit maakt deel uit van het dagdagelijkse werk van de controleurs/toezichthouders. In 2023 is een voltijdse handhaver gestart bij provincie Antwerpen. Dit heeft geleid tot een toename van het aantal controles en acties. Verder werd in het najaar 2023 een nieuwe applicatie voor registratie en opvolging van handhaving in gebruik genomen. Verwacht wordt dat vanaf 2024 een realistischer beeld van het aantal uitgevoerde controles gegeven zal kunnen worden, en bijgevolg het aantal acties ook zal toenemen.</p>
        </vl-accordion>
    </vl-accordion-list>
                </vl-cascader-item>
      </vl-cascader-item>
      <vl-cascader-item label="Provincie Limburg">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
    <vl-accordion data-vl-toggle-text="Provinciegouverneur"> 
        <p>Geen opgelegde bestuurlijke maatregelen of veiligsheidsmaatregelen voor provinciegouverneur.</p>
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Provinciale toezichthouders en VTE">
    ${this.renderDataSection(jsonData.Milieu.Limburg.gewestelijkeToezichthouders)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Klachten">
    ${this.renderDataSection(jsonData.Milieu.Limburg.Klachten)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Controles">
    ${this.renderDataSection(jsonData.Milieu.Limburg.Controles)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
    ${this.renderDataSection(jsonData.Milieu.Limburg.Aanvankelijkecontrolesmetschending)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Instrumentarium">
    ${this.renderDataSection(jsonData.Milieu.Limburg.Instrument)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Opmerking">
        <p>Geen opmerkingen.</p>
    </vl-accordion>
    </vl-accordion-list>
                </vl-cascader-item>
      </vl-cascader-item>

      <vl-cascader-item label="Provincie Oost-Vlaanderen">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
    <vl-accordion data-vl-toggle-text="Provinciegouverneur"> 
    <p>Geen opgelegde bestuurlijke maatregelen of veiligsheidsmaatregelen voor provinciegouverneur.</p>
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Provinciale toezichthouders en VTE">
    ${this.renderDataSection(jsonData.Milieu.OostVlaanderen.gewestelijkeToezichthouders)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Klachten">
    ${this.renderDataSection(jsonData.Milieu.OostVlaanderen.Klachten)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Controles">
    ${this.renderDataSection(jsonData.Milieu.OostVlaanderen.Controles)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
    ${this.renderDataSection(jsonData.Milieu.OostVlaanderen.Aanvankelijkecontrolesmetschending)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Instrumentarium">
    ${this.renderDataSection(jsonData.Milieu.OostVlaanderen.Instrument)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Opmerking">
        <p>Geen opmerkingen.</p>
    </vl-accordion>
    </vl-accordion-list>
                </vl-cascader-item>
      </vl-cascader-item>

      <vl-cascader-item label="Provincie West-Vlaanderen">
      <vl-cascader-item label="Milieu">
  <vl-accordion-list slot="content">
  <vl-accordion data-vl-toggle-text="Provinciegouverneur"> 
  <p>Geen opgelegde bestuurlijke maatregelen of veiligsheidsmaatregelen voor provinciegouverneur.</p>
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Provinciale toezichthouders en VTE">
  ${this.renderDataSection(jsonData.Milieu.WestVlaanderen.gewestelijkeToezichthouders)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Klachten">
  ${this.renderDataSection(jsonData.Milieu.WestVlaanderen.Klachten)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Controles">
  ${this.renderDataSection(jsonData.Milieu.WestVlaanderen.Controles)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
  ${this.renderDataSection(jsonData.Milieu.WestVlaanderen.Aanvankelijkecontrolesmetschending)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Instrumentarium">
  ${this.renderDataSection(jsonData.Milieu.WestVlaanderen.Instrument)}
  </vl-accordion>
  <vl-accordion data-vl-toggle-text="Opmerking">
  <p>Geen opmerkingen.</p>
</vl-accordion>
  </vl-accordion-list>
              </vl-cascader-item>
    </vl-cascader-item>
  <vl-cascader-item label="Provincie Vlaams-Brabant">
        <vl-cascader-item label="Milieu">
    <vl-accordion-list slot="content">
    <vl-accordion data-vl-toggle-text="Provinciegouverneur"> 
    <p>Geen opgelegde bestuurlijke maatregelen of veiligsheidsmaatregelen voor provinciegouverneur.</p>
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Provinciale toezichthouders en VTE">
    ${this.renderDataSection(jsonData.Milieu.VlaamsBrabant.gewestelijkeToezichthouders)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Klachten">
    ${this.renderDataSection(jsonData.Milieu.VlaamsBrabant.Klachten)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Controles">
    ${this.renderDataSection(jsonData.Milieu.VlaamsBrabant.Controles)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Aanvankelijke controles met schending">
    ${this.renderDataSection(jsonData.Milieu.VlaamsBrabant.Aanvankelijkecontrolesmetschending)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Instrumentarium">
    ${this.renderDataSection(jsonData.Milieu.VlaamsBrabant.Instrument)}
    </vl-accordion>
    <vl-accordion data-vl-toggle-text="Opmerking">
  <p>De toezichthouders van de provincie Vlaams-Brabant handhaven eerder reactief dan actief. Elke toezichthouder is de vertegenwoordiger van een team van 4 personen dat instaat voor het onderhoud van een deelgebied en de wateradviesverlening binnen dit deelgebied. Elk teamlid voert terreincontroles uit in het kader van hun onderhoudsopdracht. Deze controles starten dus niet met het doel die de definitie van "controle" in het kader van handhaving omschrijft, maar evolueren hier wel naar indien noodzakelijk. Overtredingen die vastgesteld worden tijdens deze opdracht worden doorgegeven aan de toezichthouder van het team. Overtredingen worden dus opgemerkt per toeval, wanneer ze de beheerstaken hinderen of wanneer er melding van derden bij onze dienst van wordt gemaakt. Zoals boven vermeld wordt er geen onderscheid geregistreerd tussen meldingen die betrekking hebben op het onderhoud of functioneren van de waterloop en meldingen die het gevolg zijn van handhavingsgerelateerde oorzaken.</p>
</vl-accordion>
    </vl-accordion-list>
                </vl-cascader-item>
      </vl-cascader-item>
</vl-cascader>
`;

  }
*/

/* Render opmerking */
renderOpmerkingsection(data,type) {
  return html`
  <vl-typography>
  <ul>
    <li>${type}</li>
      <ul>
  ${Object.entries(data).map(([key,value]) => {
      return html`
      <li>${value}</li>
      `;
    })
  }
  </ul>
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
renderDataSection(data,type) {
  return html`
    <table is="vl-data-table">
     <caption>
     ${type}
    </caption>
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

__renderViewSelector() {
  return html`
  <vl-typography><b>
  Kies uit de keuzelijst een provinciale handhavingsactor:</b></vl-typography>
    <select id="viewselector" is="vl-select" data-vl-select @change="${this.__changeView}">
    </select><br>
  `;
}

  __renderDynamicContent() {
    return html`
<vl-tabs data-vl-active-tab="Personeel" data-vl-disable-links="">
  <vl-tabs-pane data-vl-id="Personeel" data-vl-title="Personeel">
      <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
      ${this.renderDataSection(jsonData2.Milieu[this.selectedChoiceUrl].gewestelijkeToezichthouders,"Milieu")}
  </div>

  
</div>
  </vl-tabs-pane>
  <vl-tabs-pane data-vl-id="Klachten" data-vl-title="Klachten">
          <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  ${this.renderDataSection(jsonData2.Milieu[this.selectedChoiceUrl].Klachten,"Milieu")}
  </div>

   
</div>   
  </vl-tabs-pane>
  <vl-tabs-pane data-vl-id="Controles" data-vl-title="Controles">
    <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  ${this.renderDataSection(jsonData2.Milieu[this.selectedChoiceUrl].Controles,"Milieu")}
  </div>
</div>
  <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  <vl-typography>
      <h3>
        Aanvankelijke controles met schending
      </h3>
  </vl-typography>
  </div>
  </div>
    <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
       ${this.renderDataSection(
        jsonData2.Milieu[this.selectedChoiceUrl].Aanvankelijkecontrolesmetschending,"Milieu"
      )}
  </div>
</div>
  </vl-tabs-pane>
   <vl-tabs-pane data-vl-id="Instrumentarium" data-vl-title="Instrumentarium">
    <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  ${this.renderDataSection(jsonData2.Milieu[this.selectedChoiceUrl].Instrument,"Milieu")}
  </div>
</div>
  </vl-tabs-pane>
  <vl-tabs-pane data-vl-id="Themagerichte acties" data-vl-title="Themagerichte acties">
   <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  ${this.renderDataSection(jsonData2.Milieu[this.selectedChoiceUrl].Thema,"Milieu")}
  </div>
</div>  
  </vl-tabs-pane>
  <vl-tabs-pane data-vl-id="Opmerkingen" data-vl-title="Opmerkingen">
   <div is="vl-grid">
  <div is="vl-column" data-vl-size=12>
  ${this.renderOpmerkingsection(jsonData2.Milieu[this.selectedChoiceUrl].Opmerking,"Milieu")}
  </div>
</div>  
  </vl-tabs-pane>
</vl-tabs>
    `;
  }
}
customElements.define("ohr-provincieanalyse", OhrProvincieAnalyse);
