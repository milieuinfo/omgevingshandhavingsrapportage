import { vlElementsStyle } from "@domg-wc/elements";
import jsonData from "../datafiles/gewest.json" assert { type: "json" };
import jsonData2 from "../datafiles/gemeente.json" assert { type: "json" };
import options from "../config/keuzegemeenteanalyse.json" assert {type: "json"};

import {
  bindVlSelect,
  html,
  LitElement,
  queryById,
  renderStack
} from "../common/commons.js";

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/components/content-header";
import "@domg-wc/components/loader";
import "@domg-wc/components/accordion-list";
import "@domg-wc/components/accordion";
import "@domg-wc/elements/data-table";
import "@domg-wc/elements/select";
import "@domg-wc/components/tabs";
import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";

class OhrGemeentenAnalyse extends LitElement {
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
    }
  }

  /*Main render page*/
  render() {
    return html` <vl-functional-header
        data-vl-back="Terug"
        data-vl-back-link="/gemeenten"
        data-vl-title="Gemeentelijke handhavingsactoren"
        data-vl-sub-title="Omgevingshandhavingsrapportage"
        data-vl-link="/">
      </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          <vl-typography>
            <h2>Raadpleeg laatst bekende cijfers van 2023</h2>
          <p is="vl-icon-wrapper">
            <span is="vl-icon" data-vl-icon="calendar"></span><vl-annotation>Laatste wijziging aan de data: 21/02/2024</vl-annotation>
          </p></vl-typography><br>


          <p is="vl-introduction" data-cy="introduction">
            Onderstaande weergave geeft een beeld van de bevraging over de
            cijfers van 2023. Navigeer doorheen de weergave om gericht en
            efficiënt data te raadplegen.
          </p>
          <br />
          <div>${this.__renderViewSelector()}</div>
          <div>${this.__renderDynamicContent()}</div>
          
        </div>
      </section>`;
  }
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
    Kies uit de keuzelijst een gemeente:</b></vl-typography>
      <select id="viewselector" is="vl-select" data-vl-select @change="${this.__changeView}">
      </select><br>
    `;
  }

    __renderDynamicContent() {
      return html`
<vl-tabs data-vl-active-tab="Personeel" data-vl-disable-links="">
    <vl-tabs-pane data-vl-id="Personeel" data-vl-title="Personeel">
        <div is="vl-grid">
    <div is="vl-column" data-vl-size=6>
    ${this.renderDataSection(jsonData2.Milieu[this.selectedChoiceUrl].gewestelijkeToezichthouders,"Milieu")}
    </div>

     <div is="vl-column" data-vl-size=6>
   ${this.renderDataSection(
          jsonData2.RO[this.selectedChoiceUrl].PersoneelRO,"Ruimtelijke ordening"
        )}
    </div>
</div>
    </vl-tabs-pane>
    <vl-tabs-pane data-vl-id="Klachten" data-vl-title="Klachten">
            <div is="vl-grid">
    <div is="vl-column" data-vl-size=6>
    ${this.renderDataSection(jsonData2.Milieu[this.selectedChoiceUrl].Klachten,"Milieu")}
    </div>

     <div is="vl-column" data-vl-size=6>
     ${this.renderDataSection(jsonData2.RO[this.selectedChoiceUrl].Klachten,"Ruimtelijke ordening")}
    </div>
</div>   
    </vl-tabs-pane>
    <vl-tabs-pane data-vl-id="Controles" data-vl-title="Controles">
      <div is="vl-grid">
    <div is="vl-column" data-vl-size=6>
    ${this.renderDataSection(jsonData2.Milieu[this.selectedChoiceUrl].Controles,"Milieu")}
    </div>

     <div is="vl-column" data-vl-size=6>
        ${this.renderDataSection(
          jsonData2.RO[this.selectedChoiceUrl].Controles,"Ruimtelijke ordening"
        )}
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
    <div is="vl-column" data-vl-size=6>
         ${this.renderDataSection(
          jsonData2.Milieu[this.selectedChoiceUrl].Aanvankelijkecontrolesmetschending,"Milieu"
        )}
    </div>

     <div is="vl-column" data-vl-size=6>
  ${this.renderDataSection(jsonData2.RO[this.selectedChoiceUrl].Aanvankelijkecontrolesmetschending,"Ruimtelijke ordening")}
    </div>
</div>
    </vl-tabs-pane>
     <vl-tabs-pane data-vl-id="Instrumentarium" data-vl-title="Instrumentarium">
      <div is="vl-grid">
    <div is="vl-column" data-vl-size=6>
    ${this.renderDataSection(jsonData2.Milieu[this.selectedChoiceUrl].Instrument,"Milieu")}
    </div>

     <div is="vl-column" data-vl-size=6>
     ${this.renderDataSection(jsonData2.RO[this.selectedChoiceUrl].Instrument,"Ruimtelijke ordening")}
    </div>
</div>
    </vl-tabs-pane>
</vl-tabs>
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

      <vl-cascader-item label="Agentschap Natuur en Bos">
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
          <p>"Klachten": hieronder verstaan wij meldingen die een klacht zijn. " aantal navolgende milieuhandhavingscontroles voor verdere opvolging van deze milieuhandhavingscontroles naar aanleiding van klachten?": wordt niet bijgehouden. "aantal navolgende controles voor verdere opvolging van deze milieuhandhavingscontroles op eigen initiatief?": wordt niet bijgehouden. "Verharding": wordt bij NI onder ontbossing genomen

          De personeelsbeschikbaarheid wordt gedefinieerd als de verhouding van
          het aantal dagen dat een personeelslid in een bepaalde periode geacht wordt om te werken,
          op basis van diens arbeidsregime,
          inclusief feestdagen,
          ten opzichte van het aantal dagen dat een voltijds personeelslid in diezelfde periode dient te werken.
          Om de totale personeelsbeschikbaarheid te berekenen wordt voor alle personeelsleden het totaal aantal te werken dagen, volgens een voltijds arbeidsregime, in een periode bepaald en vervolgens de onbeschikbaarheden afgetrokken.</p>
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
        ${this.renderDataSection(jsonData2.RO.ANB.Klachten)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Controles">
        ${this.renderDataSection(jsonData2.RO.ANB.Controles)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Aantal aanvankelijke controles met schending">
        ${this.renderDataSection(jsonData2.RO.ANB.Aanvankelijkecontrolesmetschending)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Instrumentarium">
        ${this.renderDataSection(jsonData2.RO.ANB.Instrument)}
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Themagerichte acties">
        ${this.renderDataSectionTXT(jsonData2.RO.ANB.Thema)}
      </vl-typography>
    </vl-accordion>
      <vl-accordion data-vl-toggle-text="Opmerkingen">
          ${this.renderOpmerkingsection(jsonData2.RO.ANB.Opmerking)}
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
          <p>Geen opmerking</p>
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
       <p>De toezichthouders begeven zich in het kader van hun opdracht en verantwoordelijkheden dagelijks op het terrein. Bijgevolg werden er geen afzonderlijke milieuhandhavingscontroles ingepland en/of uitgevoerd, behoudens tijdens de Week van de Handhaving. Milieuhandhaving maakt deel uit van hun dagelijks takenpakket dat voor het overgrote deel bestaat uit niet-handhavings-gerelateerde aspecten. De betrokkenheid bestaat ook vaak uit een signaalfunctie en bijstand als waterwegbeheerder aan andere lokale en gewestelijke handhavingsdiensten.</p>
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
    <p slot="content">
    <vl-alert data-cy="alert" data-vl-naked="" data-vl-icon="info" data-vl-title="Geen activiteit" data-vl-type="info"
    data-vl-message="Departement Mobiliteit en Openbare Werken heeft geen milieuhandhaving uitgevoerd.">
  </vl-alert></p>
<vl-accordion data-vl-default-open data-vl-toggle-text="Opmerkingen">
    <p>Voor 2023 is het antwoord hetzelfde als in 2022. Onze gewestelijke toezichthouders werden bevraagd en er werden geen acties ondernomen. Vanuit de LOM kan hier niet op gereageerd worden. De LOM is immers geen handhavingsinstantie. De LOM ontvangt wel af en toe aanmaningen en PV’s van de afdeling Handhaving voor vermeende overtredingen die de LOM zou begaan hebben (en die wij steeds inhoudelijk weerleggen). 
    Maar het lijkt niet de bedoeling dat we hierover rapporteren.</p>
</vl-accordion>
</vl-accordion-list>
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
        <p>Geen opmerking</p>
    </vl-accordion>
  </vl-accordion-list>
              </vl-cascader-item>
          <vl-cascader-item label="Ruimtelijke ordening">
          <vl-accordion-list slot="content">
      <vl-accordion data-vl-toggle-text="Verbalisanten en stedenbouwkundige inspecteurs en VTE"> 
      ${this.renderDataSection(
        jsonData2.RO.dOMGHH.PersoneelRO
      )}</vl-accordion>
      <vl-accordion data-vl-toggle-text="Klachten">
      ${this.renderDataSection(jsonData2.RO.dOMGHH.Klachten)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Controles">
      ${this.renderDataSection(jsonData2.RO.dOMGHH.Controles)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Aantal aanvankelijke controles met schending">
      ${this.renderDataSection(jsonData2.RO.dOMGHH.Aanvankelijkecontrolesmetschending)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Instrumentarium">
      ${this.renderDataSection(jsonData2.RO.dOMGHH.Instrument)}
      </vl-accordion>
      <vl-accordion data-vl-toggle-text="Themagerichte acties">
      ${this.renderDataSectionTXT(jsonData2.RO.dOMGHH.Thema)}
    </vl-typography>
  </vl-accordion>
    <vl-accordion data-vl-toggle-text="Opmerkingen">
        ${this.renderOpmerkingsection(jsonData2.RO.dOMGHH.Opmerking)}
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
          <p>Geen opmerking</p>
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
       <p>In het huidig dossiersysteem is het onderscheid niet duidelijk te maken tussen navolgende en aanvankelijke controles. Alle navolgende controles zitten inbegrepen in het cijfer van de aanvankelijke controles.

       aantal aanvankelijke milieuhandhavingscontroles op eigen initiatief inzake PFAS: Dit zijn geen 100 % PFAS-controles. Onder meer alle "grondverzet-controles" zijn hier meegenomen. 
       De grondverzet-controles spitsen zich toe op het controleren van grondverzet bij werven en tijdelijke opslagplaatsen (TOP’s). Pfas-verbindingen behoren tot de verbindingen die gemeten worden bij staalname van grondhopen. Deze zitten dus verwerkt in analyseresultaten opgenomen in het technisch verslag nodig om aan grondverzet te doen. Indien bij analyse van een bodemstaal de waarden voor Pfas-verbindingen overschreden worden dan spreken we van een afvalstof en valt dit niet meer onder het grondvezet. Controles op Pfas worden dus meegenomen in de controles op grondverzet als 1 van de parameters. Daarnaast wordt ook gecontroleerd op de aanwezigheid van pfas-vervuilde gronden bij GRC’s (grondreinigingcentra) of de regels van het grondverzet nageleefd wordaen.</p>
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

    
    <vl-cascader-item label="Departement Zorg">
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
  <p slot="content">
  <vl-alert data-cy="alert" data-vl-naked="" data-vl-icon="info" data-vl-title="Geen activiteit" data-vl-type="info"
  data-vl-message="Vlaamse Energie- en Klimaatmaatschappij heeft geen milieuhandhaving uitgevoerd voor 2023.">
</vl-alert></p>
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
       <p>Er zijn ook nog een beperkt aantal controles uitgevoerd in samenwerking met of op vraag van andere overheden. Deze zitten niet in de totale lijst van uitgevoerde controles, noch in de lijst van 'meldingen of klachten'. 
       Navolgende controles die uitgevoerd worden kortelings na de initiële controle (binnen de maand na controle), worden gewoonlijk niet afzonderlijk geregistreerd. 
       Ook bij een navolgende controle kun je een schending opnieuw vaststellen. In deze bevraging wordt het totaal aantal schendingen gevraagd bij de aanvankelijke controles.
       De VLM legt ook administratieve geldboetes op conform het Mestdecreet. Dit zijn ook schendingen maar zijn geen aanmaningen of Pv's. 
       De BM-DS werd opgelegd volgens de procedures opgenomen in het Mestdecreet d.m.v. de oplegging van een Bevel met Dwangsom. Voor de rest verloopt dit op dezelfde manier als in het DABM via invordering etc. </p>
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
      <p>Geen opmerking</p>
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
   <p>in de praktijk wordt ondanks de bevoegdheid niet geverbaliseerd als er schendingen RO worden vastgesteld wegens onder meer niet prioritair voor het gewest, reeds verjaard of omdat ze aan de lokale overheid ter kennis gegeven worden om op te treden.</p>
</vl-accordion>
</vl-accordion-list>
      </vl-cascader-item>
</vl-cascader-item>
</vl-cascader>
`;
  }
}

customElements.define("ohr-gemeentenanalyse", OhrGemeentenAnalyse);

/*
import {html, LitElement} from "../common/commons.js";
import {Qlik} from "@domg/qlik-lib";
import {vlElementsStyle} from "@domg-wc/elements";
import viz_gewest from "../config/milieuhandhaving.json" assert {type: "json"};

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/components/content-header";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/infoblock";

class OhrGemeentenAnalyse extends LitElement {

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

    this.tiles = [
      {
        title: "Gewestelijke toezichthouders en VTE",
        vis: viz_gewest,
        intro: ""
      },
      {
        title: "Klachten",
        vis: viz_gewest,
        intro: "Sjakamak2"
      }
    ]

    super.connectedCallback();
  }

  render() {
    return html`
    <vl-functional-header
    data-vl-back="Terug"
    data-vl-back-link="/"
    data-vl-title="Gemeentelijke handhavingsactoren"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/">
    </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${this.__renderPage()}
        </div>
      </section>`;
  }

  __renderPage() {
    if (!this.connected) {
      return html`
        <vl-loader
            data-vl-text="Pagina is aan het laden"
        ></vl-loader>`;
    }
    return html`
      <h2 is="vl-h2">Cijfers milieuhandhaving ONTW Gemeenten</h2>
      <div is="vl-grid">
        <div is="vl-column" data-vl-size="12">
          ${this.tiles.map(tile => html`
            <vl-qlik-infoblock title="${tile.title}"
                            icon="business-graph-bar"
                            .visuals="${tile.vis}"
                            .connection="${this.connection}">
              <span>${tile.intro}</span>
            </vl-qlik-infoblock>
          `)}
        </div>
      </div>`;
  }
}

customElements.define("ohr-gemeentenanalyse", OhrGemeentenAnalyse);
*/