import { vlElementsStyle } from "@domg-wc/elements";
import jsonData2 from "../datafiles/gemeenten_dataset_2024_clean.json" assert { type: "json" };
import options from "../config/keuzegemeenteanalyse.json" assert { type: "json" };
import {
  bindVlSelect,
  html,
  LitElement,
  queryById,
  renderStack,
} from "../common/commons.js";
import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/elements/data-table";
import "@domg-wc/elements/select";
import "@domg-wc/components/tabs";
import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";
import "@domg-wc/components/alert";
import yearofanalsysis from "../config/yearofanalysis.json" assert { type: "json" };

const RESPONS = {
  Aartselaar: "non-respons",
  Alveringem: "non-respons",
  Arendonk: "non-respons",
  Bocholt: "non-respons",
  Brecht: "non-respons",
  Dilbeek: "non-respons",
  Drogenbos: "non-respons",
  Galmaarden: "non-respons",
  Glabbeek: "non-respons",
  Gooik: "non-respons",
  Grimbergen: "non-respons",
  Herne: "non-respons",
  Herstappe: "non-respons",
  Holsbeek: "non-respons",
  Kalmthout: "non-respons",
  Kortessem: "non-respons",
  Liedekerke: "non-respons",
  Lier: "non-respons",
  Moerbeke: "non-respons",
  "Oud-Turnhout": "non-respons",
  Oudenburg: "non-respons",
  Pepingen: "non-respons",
  "Puurs-Sint-Amands": "non-respons",
  Riemst: "non-respons",
  "Sint-Martens-Latem": "non-respons",
  Stabroek: "non-respons",
  Wetteren: "non-respons"
};

class OhrGemeentenAnalyse extends LitElement {
  static get styles() {
    return [...vlElementsStyle];
  }
  static get properties() {
    return {
      selectedChoiceLabel: { type: String },
      selectedChoiceUrl: { type: String },
    };
  }

  constructor() {
    super();
    this.selectedChoiceUrl = options.find((o) => o.selected).value;
    this.selectedChoiceLabel = options.find((o) => o.selected).label;
    this.yearofanalysis = yearofanalsysis.value;
  }
  // Safe getter for sections; always returns an object
  __sec(branch, actor, key) {
    return jsonData2?.[branch]?.[actor]?.[key] ?? {};
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    bindVlSelect({
      component: queryById(this)("viewselector"),
      choices: options,
    });
  }
  bindVlSelect() {
    const select = this.shadowRoot.querySelector("#viewselector");
    select.addEventListener("change", this.__changeView.bind(this));
  }

  __changeView(event) {
    const selectedOption = options.find((o) => o.value === event.target.value);
    if (selectedOption) {
      this.selectedChoiceUrl = selectedOption.value;
      this.selectedChoiceLabel = selectedOption.label;
      this.requestUpdate();
    }
  }

  __milieuThemaGerichteacties(r) {
  if(!r) return [];
  const obj = {
    "PFAS": r["PFAS"] ?? "-",
    "Stikstof": r["Stikstof"] ?? "-",
  }
  return obj;
}

  render() {
    return html` <vl-functional-header
        data-vl-back="Terug"
        data-vl-back-link="/gemeenten"
        data-vl-title="Jaarrapportage gemeentelijke omgevingshandhavingsactoren"
        data-vl-sub-title="Omgevingshandhavingsrapportage"
        data-vl-link="/"
      >
      </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          <vl-typography>
            <h2>Cijfers van het jaar ${this.yearofanalysis}</h2></vl-typography
          >
          <p is="vl-icon-wrapper">
            <span is="vl-icon" data-vl-icon="calendar"></span
            ><vl-annotation
              >&nbsp;Laatste wijziging aan de data: 01/09/2025</vl-annotation
            >
          </p>
          <br />

          <p is="vl-introduction" data-cy="introduction">
            Deze pagina toont een overzichtelijk beeld van de
            handhavingsactiviteiten van de gemeentelijke
            omgevingshandhavingsactoren.
            <br />Via de filter kan u een gemeente kiezen.
          </p>
          <br />
          <div>${this.__renderViewSelector()}</div>
          <div>${this.__renderDynamicContent()}</div>
        </div>
      </section>`;
  }

  __roOpmerkingenFromRecord(r) {
  if (!r) return {};
  const obj = {
    "Opmerking": r["Opmerking"] ?? "-",
  };
  return obj;
}

  /* Render ThemaGerichte Acties */
  __renderThemaGerichteActies(data, type) {
    return html`
      <table is="vl-data-table">
        <caption>
          ${type}
        </caption>
        <thead>
          <tr>
            <th>Onderwerp</th>
            <th>Opmerking</th>
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
  /* Render data table String*/
  __renderDataSectionTXT(data) {
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
  __renderDataSection(data, type) {
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
                  <td data-title="${key}">test</td>
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
      <vl-typography
        ><b> Kies uit de keuzelijst een gemeente:</b></vl-typography
      >
      <select
        id="viewselector"
        is="vl-select"
        data-vl-select
        @change="${this.__changeView}"
      ></select
      ><br />
    `;
  }

  __getActorRecord(actor) {
    if (Array.isArray(jsonData2))
      return jsonData2.find((r) => r?.Actor === actor) ?? null;
    const rows = jsonData2?.data || jsonData2?.rows;
    if (Array.isArray(rows))
      return rows.find((r) => r?.Actor === actor) ?? null;
    if (jsonData2 && typeof jsonData2 === "object" && jsonData2[actor])
      return jsonData2[actor];
    return null;
  }
  __milieuPersoneelFromRecord(r) {
    if (!r) return {};
    const vteToez =
      r["Milieu VTE Toezichthouders"] ?? r["Milieu VTE toezicthouders"];
    return {
      "Milieu Toezichthouders": r["Milieu Toezichthouders"] ?? "-",
      "Milieu VTE Toezichthouders": vteToez ?? "-",
      "Milieu VTE Administratieve en Juridische ondersteuning":
        r["Milieu VTE Administratieve en Juridische ondersteuning"] ?? "-",
    };
  }
  __roPersoneelFromRecord(r) {
    if (!r) return {};
    const roVTEKeys = [
      "RO VTE Gecombineerde functie",
      "RO VTE Verbalisanten",
      "RO VTE Stedenbouwkundige Inspecteurs",
    ];
    const roVTETotal = this.__sumKeys(r, roVTEKeys);
    return {
      Verbalisanten: r["RO Verbalisanten"] ?? "-",
      "Personeelsleden met de gecombineerde functie verbalisant en stedenbouwkundig inspecteur":
        r["RO Gecombineerd"] ?? "-",
      "Stedenbouwkundige inspecteurs": r["RO Stedenbouwkundig"] ?? "-",
      "VTE handhavers": r["VTE Handhavers"] ?? "-",
      "VTE administratieve en juridische ondersteuning":
        r["RO VTE Administratieve en Juridische ondersteuning"] ?? "-",
    };
  }

  __roThemaGerichteacties(r) {
  if(!r) return [];
  const obj = {
    "Verharding": r["Verharding"] ?? "-",
    "Ontbossing": r["Ontbossing"] ?? "-",
  }
  return obj;
}

  // Parse numbers like "1,4" or "1.234,56"; treat "-" / "" as 0
  __toNumber(v) {
    const s = String(v ?? "").trim();
    if (s === "" || s === "-") return 0;
    // remove thousands separators, swap comma to dot
    const n = Number(s.replace(/\./g, "").replace(",", "."));
    return Number.isFinite(n) ? n : 0;
  }

  __sumKeys(rec, keys) {
    return keys.reduce((acc, k) => acc + this.__toNumber(rec?.[k]), 0);
  }

  // Optional: format to Belgian style
  __formatBE(n) {
    return Number(n).toLocaleString("nl-BE", { maximumFractionDigits: 2 });
  }

  __milieuControlesFromRecord(r) {
    if (!r) return {};
    const obj = {
      "Totaal aantal milieucontroles": r["milieucontroles"] ?? "-",
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
    return obj;
  }

  __roControlesFromRecord(r) {
    if (!r) return {};
    const obj = {
      "navolgende stedenbouwkundige controles naar aanleiding van schendingen vastgesteld in voorgaande jaren":
        r["RO Controles Navolgende Aanleiding Schending"] ?? "-",
      "aanvankelijke stedenbouwkundige controles naar aanleiding van klachten":
        r["RO Controles Aanvankelijk Aanleiding Klacht"] ?? "-",
      "navolgende stedenbouwkundige controles voor verdere opvolging van de controles naar aanleiding van klachten":
        r["RO Controles Navolgende Aanleiding Klacht"] ?? "-",
      "aanvankelijke stedenbouwkundige controles op eigen initiatief":
        r["RO Controles Aanvankelijk op eigen initiatief"] ?? "-",
      "navolgende stedenbouwkundige controles voor verdere opvolging van de controles op eigen initiatief":
        r["RO Controles Navolgende op eigen initiatief"] ?? "-",
    };
    return obj;
  }

  __milieuControlesSchendingFromRecord(r) {
    if (!r) return {};
    return {
      "Totaal aantal aanvankelijke milieucontroles met schending":
        r["Milieu Aanvankelijke Controles"] ?? "-",
      Afval: r["Afval controles"] ?? "-",
      Andere: r["Andere controles"] ?? "-",
      Bodem: r["Bodem controles"] ?? "-",
      Geluid: r["Geluid controles"] ?? "-",
      Lucht: r["Lucht controles"] ?? "-",
      Mest: r["Mest controles"] ?? "-",
      Milieubeheer: r["Milieubeheer controles"] ?? "-",
      Vergunningen: r["Vergunningen controles"] ?? "-",
      Water: r["Water controles"] ?? "-",
    };
  }
  __roControlesSchendingFromRecord(r) {
    if (!r) return {};
    return {
      "Totaal aantal aanvankelijke controles ruimtelijke ordening met schending":
        r["RO Controles"] ?? "-",
    };
  }

  __milieuKlachtenFromRecord(r) {
    if (!r) return {};
    return {
      "Totaal aantal milieuklachten": r["Totaal aantal milieuklachten"] ?? "-",
      Afval: r["Afval"] ?? "-",
      Andere: r["Andere"] ?? "-",
      Bodem: r["Bodem"] ?? "-",
      Geluid: r["Geluid"] ?? "-",
      Lucht: r["Lucht"] ?? "-",
      Mest: r["Mest"] ?? "-",
      Milieubeheer: r["Milieubeheer"] ?? "-",
      Vergunningen: r["Vergunningen"] ?? "-",
      Water: r["Water"] ?? "-",
    };
  }
  __roKlachtenFromRecord(r) {
    if (!r) return {};
    return {
      "Totaal aantal klachten ruimtelijke ordening": r["RO Klachten"] ?? "-",
    };
  }
  __milieuInstrumentFromRecord(r) {
    if (!r) return {};
    const obj = {
      Raadgeving: r["Milieu Raadgeving"] ?? "-",
      Aanmaning: r["Milieu Aanmaning"] ?? "-",
      "Verslag van vaststelling": r["Milieu verslag van vaststelling"] ?? "-",
      "Proces-verbaal": r["Milieu Proces-verbaal"] ?? "-",
      "Bestuurlijke maatregelen zonder dwangsom":
        r["Milieu bestuurlijke maatregel zonder dwangsom"] ?? "-",
      "Bestuurlijke maatregelen Met Dwangsom":
        r["Milieu bestuurlijke maatregel met dwangsom"] ?? "-",
      Veiligheidsmaatregel: r["Milieu Veiligheidsmaatregel"] ?? "-",
    };
    return obj;
  }
  __roInstrumentFromRecord(r) {
    if (!r) return {};
    const obj = {
      Raadgeving: r["RO Raadgeving"] ?? "-",
      Aanmaning: r["RO Aanmaning"] ?? "-",
      "Verslag van vaststelling": r["RO verslag van vaststelling"] ?? "-",
      "Proces-verbaal": r["RO Proces-verbaal"] ?? "-",
      "Bevel tot staking": r["RO Bevel tot Staking"] ?? "-",
      "Minnelijke schikking":
        r["RO Afgesloten minnelijke schikking"] ?? "-",
      "Herstelvordering":
        r["RO Ingeleide herstelvordering bij Openbaar Ministerie"] ?? "-",
      "Ambtshalve uitvoering":
        r["RO Ambtshalve uitvoering gerechtelijke herstelmaatregel"] ?? "-",
      "Bestuurlijke maatregelen zonder dwangsom":
        r["RO Bestuurlijke maatregelen Zonder Dwangsom"] ?? "-",
      "Bestuurlijke maatregelen met dwangsom":
        r["RO Bestuurlijke maatregelen Met Dwangsom"] ?? "-",
    };
    return obj;
  }

  

  __renderDynamicContent() {
    let beleid;
    if (RESPONS[this.selectedChoiceUrl]) {
      beleid = "non-respons";
    } else {
      beleid = this.selectedChoiceUrl;
    }
    const renderColumns_milieu = (milieuData,milieuLabel) => {
      return html`<div is="vl-column" data-vl-size="12">${this.__renderDataSection(milieuData, milieuLabel)}</div>`;
  };


    // shortcut to safely read sections
    const s = (branch, key) => this.__sec(branch, this.selectedChoiceUrl, key);

    const renderColumns = (milieuData, roData, milieuLabel, roLabel) => {
      if (beleid === "non-respons") {
        return html`
          <div is="vl-column" data-vl-size="12">
            <vl-alert
              data-cy="alert"
              data-vl-naked
              data-vl-icon="warning"
              data-vl-title="Non-respons"
              data-vl-type="error"
              data-vl-message="De geselecteerde gemeente heeft niet op de bevraging van 2024 geantwoord."
            ></vl-alert>
          </div>
        `;
      } else {
        return html`
          <div is="vl-column" data-vl-size="6">
            ${this.__renderDataSection(milieuData, milieuLabel)}
          </div>
          <div is="vl-column" data-vl-size="6">
            ${this.__renderDataSection(roData, roLabel)}
          </div>
        `;
      }
    };

    const renderColumnsThema = (milieuData, roData, milieuLabel, roLabel) => {
      if (beleid === "non-respons") {
        return html`
          <div is="vl-column" data-vl-size="12">
            <vl-alert
              data-cy="alert"
              data-vl-naked
              data-vl-icon="warning"
              data-vl-title="Non-respons"
              data-vl-type="error"
              data-vl-message="De geselecteerde gemeente heeft niet op de bevraging van 2024 geantwoord."
            ></vl-alert>
          </div>
        `;
      } else {
        return html`
          <div is="vl-column" data-vl-size="6">
            ${this.__renderThemaGerichteActies(milieuData, milieuLabel)}
          </div>
          <div is="vl-column" data-vl-size="6">
            ${this.__renderThemaGerichteActies(roData, roLabel)}
          </div>
        `;
      }
    };

    if (beleid === "non-respons") {
      return html`
        <vl-tabs data-vl-active-tab="Personeel" data-vl-disable-links="">
          <vl-tabs-pane data-vl-id="Personeel" data-vl-title="Personeel">
            <div is="vl-column" data-vl-size="12">
              <vl-alert
                data-cy="alert"
                data-vl-naked
                data-vl-icon="warning"
                data-vl-title="Non-respons"
                data-vl-type="error"
                data-vl-message="De geselecteerde gemeente heeft niet op de bevraging van 2024 geantwoord."
              ></vl-alert>
            </div>
          </vl-tabs-pane>
          <vl-tabs-pane data-vl-id="Klachten" data-vl-title="Klachten">
            <div is="vl-grid">
              <div is="vl-column" data-vl-size="12">
                <vl-alert
                  data-cy="alert"
                  data-vl-naked
                  data-vl-icon="warning"
                  data-vl-title="Non-respons"
                  data-vl-type="error"
                  data-vl-message="De geselecteerde gemeente heeft niet op de bevraging van 2024 geantwoord."
                ></vl-alert>
              </div>
            </div>
          </vl-tabs-pane>
          <vl-tabs-pane data-vl-id="Controles" data-vl-title="Controles">
            <div is="vl-grid">
              <div is="vl-column" data-vl-size="12">
                <vl-alert
                  data-cy="alert"
                  data-vl-naked
                  data-vl-icon="warning"
                  data-vl-title="Non-respons"
                  data-vl-type="error"
                  data-vl-message="De geselecteerde gemeente heeft niet op de bevraging van 2024 geantwoord."
                ></vl-alert>
              </div>
            </div>
          </vl-tabs-pane>
          <vl-tabs-pane
            data-vl-id="Instrumentarium"
            data-vl-title="Instrumentarium">
            <div is="vl-grid">
              <div is="vl-column" data-vl-size="12">
                <vl-alert
                  data-cy="alert"
                  data-vl-naked
                  data-vl-icon="warning"
                  data-vl-title="Non-respons"
                  data-vl-type="error"
                  data-vl-message="De geselecteerde gemeente heeft niet op de bevraging van 2024 geantwoord."
                ></vl-alert>
              </div>
            </div>
          </vl-tabs-pane>
          <vl-tabs-pane
            data-vl-id="Themagerichte acties"
            data-vl-title="Themagerichte acties">
            <div is="vl-grid">
              <div is="vl-column" data-vl-size="12">
                <vl-alert
                  data-cy="alert"
                  data-vl-naked
                  data-vl-icon="warning"
                  data-vl-title="Non-respons"
                  data-vl-type="error"
                  data-vl-message="De geselecteerde gemeente heeft niet op de bevraging van 2024 geantwoord."
                ></vl-alert>
              </div>
            </div>
          </vl-tabs-pane>
          <vl-tabs-pane data-vl-id="Opmerkingen" data-vl-title="Opmerkingen">
            <div is="vl-grid">
              <div is="vl-column" data-vl-size="12">
                <vl-alert
                  data-cy="alert"
                  data-vl-naked
                  data-vl-icon="warning"
                  data-vl-title="Non-respons"
                  data-vl-type="error"
                  data-vl-message="De geselecteerde gemeente heeft niet op de bevraging van 2024 geantwoord."
                ></vl-alert>
              </div>
            </div>
          </vl-tabs-pane>
        </vl-tabs>
      `;
    } else {
      return html`
        <vl-tabs data-vl-active-tab="Personeel" data-vl-disable-links="">
          <vl-tabs-pane data-vl-id="Personeel" data-vl-title="Personeel">
            <div is="vl-grid">
              ${(() => {
                const rec = this.__getActorRecord(this.selectedChoiceUrl);
                const milieuPers = this.__milieuPersoneelFromRecord(rec);
                const roPers = this.__roPersoneelFromRecord(rec);
                return renderColumns(
                  milieuPers,
                  roPers,
                  "Milieu",
                  "Ruimtelijke ordening"
                );
              })()}
            </div>
          </vl-tabs-pane>

          <vl-tabs-pane data-vl-id="Klachten" data-vl-title="Klachten">
            <div is="vl-grid">
              ${(() => {
                const rec = this.__getActorRecord(this.selectedChoiceUrl);
                const milieuK = this.__milieuKlachtenFromRecord(rec);
                const roK = this.__roKlachtenFromRecord(rec);
                return renderColumns(
                  milieuK,
                  roK,
                  "Milieu",
                  "Ruimtelijke ordening"
                );
              })()}
            </div>
          </vl-tabs-pane>

          <vl-tabs-pane data-vl-id="Controles" data-vl-title="Controles">
            <div is="vl-grid">
              ${(() => {
                const rec = this.__getActorRecord(this.selectedChoiceUrl);
                const milieu = this.__milieuControlesFromRecord(rec);
                const ro = this.__roControlesFromRecord(rec);
                return renderColumns(
                  milieu,
                  ro,
                  "Milieu",
                  "Ruimtelijke ordening"
                );
              })()}
            </div>
            <div is="vl-grid">
              <div is="vl-column" data-vl-size="12">
                <vl-typography
                  ><h3>Aanvankelijke controles met schending</h3></vl-typography
                >
              </div>
            </div>
            <div is="vl-grid">
              ${(() => {
                const rec = this.__getActorRecord(this.selectedChoiceUrl);
                const milieu = this.__milieuControlesSchendingFromRecord(rec);
                const ro = this.__roControlesSchendingFromRecord(rec);
                return renderColumns(
                  milieu,
                  ro,
                  "Milieu",
                  "Ruimtelijke ordening"
                );
              })()}
            </div>
          </vl-tabs-pane>

          <vl-tabs-pane
            data-vl-id="Instrumentarium"
            data-vl-title="Instrumentarium"
          >
            <div is="vl-grid">
              ${(() => {
                const rec = this.__getActorRecord(this.selectedChoiceUrl);
                const milieu = this.__milieuInstrumentFromRecord(rec);
                const ro = this.__roInstrumentFromRecord(rec);
                return renderColumns(
                  milieu,
                  ro,
                  "Milieu",
                  "Ruimtelijke ordening"
                );
              })()}
            </div>
          </vl-tabs-pane>

          <vl-tabs-pane
            data-vl-id="Themagerichte acties"
            data-vl-title="Themagerichte acties"
          >
        <div is="vl-grid">
        ${(() => {
      const rec = this.__getActorRecord(this.selectedChoiceUrl);
      const milieu = this.__milieuThemaGerichteacties(rec);
      const ro = this.__roThemaGerichteacties(rec)
      return renderColumns(milieu,ro, "Milieu", "Ruimtelijke ordening");
    })()}
            </div>
          </vl-tabs-pane>

          <vl-tabs-pane data-vl-id="Opmerkingen" data-vl-title="Opmerkingen">
            <div is="vl-grid">
             ${(() => {
      const rec = this.__getActorRecord(this.selectedChoiceUrl);
      const milieu = this.__roOpmerkingenFromRecord(rec);
      return renderColumns_milieu(milieu);
    })()}
            </div>
          </vl-tabs-pane>
        </vl-tabs>
      `;
    }
  }
}

customElements.define("ohr-gemeentenanalyse", OhrGemeentenAnalyse);
