import {vlElementsStyle} from "@domg-wc/elements";
import jsonData2 from "../datafiles/provincies_dataset_2026.json" assert {type: "json"};
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
import "@domg-wc/components/accordion";
import "@domg-wc/elements/data-table";
import "@domg-wc/elements/select";
import "@domg-wc/components/tabs";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";
import yearofanalsysis from "../config/yearofanalysis.json" assert {type: "json"};


class OhrProvincieAnalyse extends LitElement {
  static get styles() {
    return [...vlElementsStyle];
  }

  static get properties() {
    return {
      selectedChoiceLabel: {type: String},
      selectedChoiceUrl: {type: String}
    };
  }

  constructor() {
    super();
    this.selectedChoiceUrl = options.find(o => o.selected).value;
    this.selectedChoiceLabel = options.find(o => o.selected).label;
    this.yearofanalysis = yearofanalsysis.value;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    bindVlSelect({
      component: queryById(this)("viewselector"),
      choices: options
    });
  }

  __changeView(event) {
    const selectedOption = options.find(o => o.value === event.target.value);
    if (selectedOption) {
      this.selectedChoiceUrl = selectedOption.value;
      this.selectedChoiceLabel = selectedOption.label;
      this.requestUpdate();
    }
  }

  __getActorRecord(actor) {
    if (Array.isArray(jsonData2)) return jsonData2.find(r => r?.Actor === actor) ?? null;
    const rows = jsonData2?.data || jsonData2?.rows;
    if (Array.isArray(rows)) return rows.find(r => r?.Actor === actor) ?? null;
    if (jsonData2 && typeof jsonData2 === "object" && jsonData2[actor]) return jsonData2[actor];
    return null;
  }

  __milieuPersoneelFromRecord(r) {
    if (!r) return {};
    const vteToez = r["Milieu VTE Toezichthouders"] ?? r["Milieu VTE toezicthouders"];
    return {
      "Milieu Toezichthouders": r["Milieu Toezichthouders"] ?? "-",
      "Milieu VTE Toezichthouders": vteToez ?? "-",
      "Milieu VTE Administratieve en Juridische ondersteuning":
        r["Milieu VTE Administratieve en Juridische ondersteuning"] ?? "-"
    };
  }

  __milieuControlesFromRecord(r) {
    if (!r) return {};
    return {
      "Totaal aantal milieucontroles": r["Milieu Controles"] ?? "-",
      "navolgende milieuhandhavingscontroles naar aanleiding van schendingen vastgesteld in voorgaande jaren":
        r["Milieu Controles Navolgende Aanleiding Schending"] ?? "-",
      "aanvankelijke milieuhandhavingscontroles naar aanleiding van klachten":
        r["Milieu Controles Aanvankelijk Aanleiding Klacht"] ?? "-",
      "navolgende milieuhandhavingscontroles voor verdere opvolging van de controles naar aanleiding van klachten":
        r["Milieu Controles Navolgende Aanleiding Klacht"] ?? "-",
      "aanvankelijke milieuhandhavingscontroles op eigen initiatief":
        r["Milieu Controles Aanvankelijk op eigen initiatief"] ?? "-",
      "navolgende milieuhandhavingscontroles voor verdere opvolging van de controles op eigen initiatief":
        r["Milieu Controles Navolgende op eigen initiatief"] ?? "-",
    };
  }

  __milieuControlesSchendingFromRecord(r) {
    if (!r) return {};
    return {
      "Totaal aantal aanvankelijke milieucontroles met schending": r["Milieu Aanvankelijke Controles"] ?? "-",
      "Afval": r["Milieu Aanvankelijke Controles Afval"] ?? "-",
      "Bodem": r["Milieu Aanvankelijke Controles Bodem"] ?? "-",
      "Geluid": r["Milieu Aanvankelijke Controles Geluid"] ?? "-",
      "Lucht": r["Milieu Aanvankelijke Controles Lucht"] ?? "-",
      "Mest": r["Milieu Aanvankelijke Controles Mest"] ?? "-",
      "Milieubeheer": r["Milieu Aanvankelijke Controles Milieubeheer"] ?? "-",
      "Vergunningen": r["Milieu Aanvankelijke Controles Vergunningen"] ?? "-",
      "Water": r["Milieu Aanvankelijke Controles Water"] ?? "-",
      "Andere": r["Milieu Aanvankelijke Controles Andere"] ?? "-"
    };
  }

  __milieuKlachtenFromRecord(r) {
    if (!r) return {};
    return {
      "Totaal aantal milieuklachten": r["Milieu Klachten"] ?? "-",
      "Afval": r["Milieu Afval"] ?? "-",
      "Bodem": r["Milieu Bodem"] ?? "-",
      "Geluid": r["Milieu Geluid"] ?? "-",
      "Lucht": r["Milieu Lucht"] ?? "-",
      "Mest": r["Milieu Mest"] ?? "-",
      "Milieubeheer": r["Milieu Milieubeheer"] ?? "-",
      "Vergunningen": r["Milieu Vergunningen"] ?? "-",
      "Water": r["Milieu Water"] ?? "-",
      "Andere": r["Milieu Andere"] ?? "-"
    };
  }

  __milieuInstrumentFromRecord(r) {
    if (!r) return {};
    return {
      "Raadgeving": r["Milieu Raadgeving"] ?? "-",
      "Aanmaning": r["Milieu Aanmaning"] ?? "-",
      "Verslag van vaststelling": r["Milieu Verslag van Vaststelling"] ?? "-",
      "Proces-verbaal": r["Milieu Proces-verbaal"] ?? "-",
      "Bestuurlijke maatregelen zonder dwangsom":
        r["Milieu Bestuurlijke maatregelen Zonder Dwangsom"] ?? "-",
      "Bestuurlijke maatregelen met Dwangsom":
        r["Milieu Bestuurlijke maatregelen met dwangsom"] ?? "-",
      "Veiligheidsmaatregel": r["Milieu Veiligheidsmaatregel"] ?? "-",
    };
  }

  __milieuThemaGerichteacties(r) {
    if (!r) return {};
    return {
      "PFAS": r["PFAS"] ?? "-",
      "Stikstof": r["Stikstof"] ?? "-",
    };
  }

  __opmerkingenFromRecord(r) {
    if (!r) return {};
    return {
      "Opmerking": r["Opmerking"] ?? "-",
    };
  }

  render() {
    return html`
      <vl-functional-header
        data-vl-back="Terug"
        data-vl-back-link="/provincie"
        data-vl-title="Jaarrapportage provinciale omgevingshandhavingsactoren"
        data-vl-sub-title="Omgevingshandhavingsrapportage"
        data-vl-link="/provincie-analyse">
      </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          <vl-typography>
            <h2>Cijfers van het jaar ${this.yearofanalysis}</h2>
          </vl-typography>
          <p is="vl-icon-wrapper">
            <vl-annotation><span is="vl-icon" data-vl-icon="calendar"></span> Laatste wijziging aan de data: 01/08/2026</vl-annotation>
          </p><br>
          <p is="vl-introduction" data-cy="introduction">
            Deze pagina toont een overzichtelijk beeld van de handhavingsactiviteiten van de provinciale omgevingshandhavingsactoren.
            <br>Via de filter kan u een provincie kiezen.
          </p><br>
          <div>${this.__renderViewSelector()}</div>
          <div>${this.__renderDynamicContent()}</div>
        </div>
      </section>
    `;
  }

  __renderViewSelector() {
    return html`
      <vl-typography><b>Kies uit de keuzelijst een provincie:</b></vl-typography>
      <select id="viewselector" is="vl-select" data-vl-select @change="${this.__changeView}">
      </select><br>
    `;
  }

  __renderDataSection(data) {
    return html`
      <table is="vl-data-table">
        <thead>
          <tr>
            <th>Onderwerp</th>
            <th>Aantal</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(data).map(([key, value]) => html`
            <tr>
              <td data-title="${key}">${key}</td>
              <td>${typeof value === "object" ? value.value : value}</td>
            </tr>
          `)}
        </tbody>
      </table>
      <br />
    `;
  }

  __renderDynamicContent() {
    const rec = this.__getActorRecord(this.selectedChoiceUrl);
    const col = (data) =>
      html`<div is="vl-column" data-vl-size="12">${this.__renderDataSection(data)}</div>`;

    return html`
      <vl-tabs data-vl-active-tab="Personeel" data-vl-disable-links="">
        <vl-tabs-pane data-vl-id="Personeel" data-vl-title="Personeel">
          <div is="vl-grid">
            ${col(this.__milieuPersoneelFromRecord(rec))}
          </div>
        </vl-tabs-pane>

        <vl-tabs-pane data-vl-id="Klachten" data-vl-title="Klachten">
          <div is="vl-grid">
            ${col(this.__milieuKlachtenFromRecord(rec))}
          </div>
        </vl-tabs-pane>

        <vl-tabs-pane data-vl-id="Controles" data-vl-title="Controles">
          <div is="vl-grid">
            ${col(this.__milieuControlesFromRecord(rec))}
          </div>
          <div is="vl-grid">
            <div is="vl-column" data-vl-size="12">
              <vl-typography><h3>Aanvankelijke controles met schending</h3></vl-typography>
            </div>
          </div>
          <div is="vl-grid">
            ${col(this.__milieuControlesSchendingFromRecord(rec))}
          </div>
        </vl-tabs-pane>

        <vl-tabs-pane data-vl-id="Instrumentarium" data-vl-title="Instrumentarium">
          <div is="vl-grid">
            ${col(this.__milieuInstrumentFromRecord(rec))}
          </div>
        </vl-tabs-pane>

        <vl-tabs-pane data-vl-id="Themagerichte acties" data-vl-title="Themagerichte acties">
          <div is="vl-grid">
            ${col(this.__milieuThemaGerichteacties(rec))}
          </div>
        </vl-tabs-pane>

        <vl-tabs-pane data-vl-id="Opmerkingen" data-vl-title="Opmerkingen">
          <div is="vl-grid">
            ${col(this.__opmerkingenFromRecord(rec))}
          </div>
        </vl-tabs-pane>
      </vl-tabs>
    `;
  }
}

customElements.define("ohr-provincieanalyse", OhrProvincieAnalyse);
