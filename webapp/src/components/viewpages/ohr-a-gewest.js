import { vlElementsStyle } from "@domg-wc/elements";
import jsonData2 from "../datafiles/gewesten_dataset_2024.json" assert { type: "json" };
import options from "../config/keuzegewestanalyse.json" assert {type: "json"};
import {
  bindVlSelect,
  html,
  LitElement,
  queryById,
  renderStack
} from "../common/commons.js";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/elements/data-table";
import "@domg-wc/elements/select";
import "@domg-wc/components/typography";
import "@domg-wc/components/tabs";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";
import yearofanalsysis from "../config/yearofanalysis.json" assert {type: "json"};

// Fixed mapping for beleid (keys must exactly match your option values)
const BELEID_MAP = {
  "Agentschap voor Maritieme Dienstverlening en Kust": "Milieu",
  "Agentschap voor Natuur en Bos": "Both",
  "Agentschap Wegen en Verkeer": "Milieu",
  "Vlaamse Waterweg": "Milieu",
  "Departement Mobiliteit en Openbare Werken": "Milieu",
  "Departement Omgeving": "Both",
  "Departement Zorg": "Milieu",
  "Openbare Vlaamse Afvalstoffenmaatschappij": "Milieu",
  "Vlaams Energie- en Klimaatagentschap": "Milieu",
  "Vlaamse Landmaatschappij": "Milieu",
  "Vlaamse Milieumaatschappij": "Milieu",
  "Vlaamse Wooninspectie": "RO"
};
class OhrAGewest extends LitElement {
 
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
    this.yearofanalysis = yearofanalsysis.value;
  }
  __nonEmpty(o) { return o && typeof o === "object" && Object.keys(o).length > 0; }


__deriveBeleid(actor) {
  const hasMilieu = this.__nonEmpty(jsonData2?.Milieu?.[actor]);
  const hasRO     = this.__nonEmpty(jsonData2?.RO?.[actor]);
  if (hasMilieu && hasRO) return "Both";
  if (hasMilieu) return "Milieu";
  if (hasRO) return "RO";
  return "None";
}

// Safe getter for sections; always returns an object
__sec(branch, actor, key) {
  return jsonData2?.[branch]?.[actor]?.[key] ?? {};
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

  /*Main render page*/
  render() {
    return html` <vl-functional-header
        data-vl-back="Terug"
        data-vl-back-link="/gewest"
        data-vl-title="Jaarrapportage gewestelijke omgevingshandhavingsactoren"
        data-vl-sub-title="Omgevingshandhavingsrapportage"
        data-vl-link="/">
      </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          <vl-typography>
            <h2 is="vl-h2">Cijfers van het jaar ${this.yearofanalysis}</h2></vl-typography>
          <p is="vl-icon-wrapper">
            <span is="vl-icon" data-vl-icon="calendar"></span><vl-annotation>&nbsp;Laatste wijziging aan de data: 01/09/2025</vl-annotation>
          </p><br>


          <p is="vl-introduction" data-cy="introduction">
           Deze pagina toont een overzichtelijk beeld van de handhavingsactiviteiten van de gewestelijke omgevingshandhavingsactoren.
           <br>Via de filter kan u een gewestelijke omgevingshandhavingsactor kiezen.

          </p>
          <br />
          <div>${this.__renderViewSelector()}</div>
          <div>${this.__renderDynamicContent()}</div>
        </div>
      </section>`;
  }
  /* Render opmerking */
  __renderOpmerkingsection(data,type) {
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
  __renderThemaGerichteActies(data,type) {
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
  __renderDataSection(data,type) {
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
    <vl-typography><b>
    Kies uit de keuzelijst een gewestelijke handhavingsactor:</b></vl-typography>
      <select id="viewselector" is="vl-select" data-vl-select @change="${this.__changeView}">
      </select><br>
    `;
  }

  // Find the JSON record for the selected actor (works for array or keyed object)
__getActorRecord(actor) {
  if (Array.isArray(jsonData2)) {
    return jsonData2.find(r => r?.Actor === actor) ?? null;
  }
  // common fallbacks if your converter wrapped rows
  const rows = jsonData2?.data || jsonData2?.rows;
  if (Array.isArray(rows)) {
    return rows.find(r => r?.Actor === actor) ?? null;
  }
  // direct keyed by actor name
  if (jsonData2 && typeof jsonData2 === "object" && jsonData2[actor]) {
    return jsonData2[actor];
  }
  return null;
}

// Already added earlier (keeps working for flat JSON too)
__getActorRecord(actor) {
  if (Array.isArray(jsonData2)) return jsonData2.find(r => r?.Actor === actor) ?? null;
  const rows = jsonData2?.data || jsonData2?.rows;
  if (Array.isArray(rows)) return rows.find(r => r?.Actor === actor) ?? null;
  if (jsonData2 && typeof jsonData2 === "object" && jsonData2[actor]) return jsonData2[actor];
  return null;
}

__hasValue(v) {
  if (v === null || v === undefined) return false;
  const s = String(v).trim();
  return s !== "" && s !== "-";
}

// Milieu personnel (with a fallback for the typo’d key)
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
// NEW: RO personnel
__roPersoneelFromRecord(r) {
  if (!r) return {};
     const roVTEKeys = [
    "RO VTE Gecombineerde functie",
    "RO VTE Verbalisanten",
    "RO VTE Stedenbouwkundige Inspecteurs"
  ];
  const roVTETotal = this.__sumKeys(r, roVTEKeys);
  return {
    "Verbalisanten": r["RO Verbalisanten"] ?? "-",
    "Personeelsleden met de gecombineerde functie verbalisant en stedenbouwkundig inspecteur": r["RO Gecombineerde functie"] ?? "-",
    "Stedenbouwkundige inspecteurs": r["RO Stedenbouwkundige Inspecteurs"] ?? "-",
    "VTE handhavers": this.__formatBE(roVTETotal),
    "VTE administratieve en juridische ondersteuning":
      r["RO VTE Administratieve en Juridische ondersteuning"] ?? "-"
  };
}

// OPTIONAL: make the 'derive' work on your flat JSON too
__deriveBeleid(actor) {
  const r = this.__getActorRecord(actor);
  if (!r) return "None";
  const hasMilieu = [
    "Milieu Toezichthouders",
    "Milieu VTE Toezichthouders", "Milieu VTE toezicthouders",
    "Milieu VTE Administratieve en Juridische ondersteuning"
  ].some(k => this.__hasValue(r[k]));

  const hasRO = [
    "RO Gecombineerde functie",
    "RO Verbalisanten",
    "RO Stedenbouwkundige Inspecteurs",
    "RO VTE Gecombineerde functie",
    "RO VTE Verbalisanten",
    "RO VTE Stedenbouwkundige Inspecteurs",
    "RO VTE Administratieve en Juridische ondersteuning"
  ].some(k => this.__hasValue(r[k]));

  if (hasMilieu && hasRO) return "Both";
  if (hasMilieu) return "Milieu";
  if (hasRO) return "RO";
  return "None";
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
  return obj;
}

__roControlesFromRecord(r) {
  if (!r) return {};
  const obj = {
    "Totaal aantal controles ruimtelijke ordening": r["RO Controles"] ?? "-",
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

// If you want a focused “schending” mini-table like before:
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
__roControlesSchendingFromRecord(r) {
  if (!r) return {};
  return {
    "Totaal aantal aanvankelijke controles ruimtelijke ordening met schending": r["RO Aanvankelijke Controles"] ?? "-"
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

__roKlachtenFromRecord(r) {
  if (!r) return {};
  return {
    "Totaal aantal klachten ruimtelijke ordening": r["RO Klachten"] ?? "-"
  };
}

__milieuInstrumentFromRecord(r) {
  if (!r) return {};
  const obj = {
    "Raadgeving": r["Milieu Raadgeving"] ?? "test",
    "Aanmaning": r["Milieu Aanmaning"] ?? "test",
    "Verslag van vaststelling": r["Milieu Verslag van Vaststelling"] ?? "-",
    "Proces-verbaal": r["Milieu Proces-verbaal"] ?? "-",
    "Bestuurlijke maatregelen zonder dwangsom":
      r["Milieu Bestuurlijke maatregelen Zonder Dwangsom"] ?? "-",
    "Bestuurlijke maatregelen Met Dwangsom":
      r["Milieu Bestuurlijke maatregelen met dwangsom"] ?? "-",
    "Veiligheidsmaatregel": r["Milieu Veiligheidsmaatregel"] ?? "-",
  };
  return obj;
}

__milieuThemaGerichteacties(r) {
  if(!r) return [];
  const obj = {
    "PFAS": r["PFAS"] ?? "-",
    "Stikstof": r["Stikstof"] ?? "-",
  }
  return obj;
}

__roInstrumentFromRecord(r) {
  if (!r) return {};
  const obj = {
    "Raadgeving": r["RO Raadgeving"] ?? "-",
    "Aanmaning": r["RO Aanmaning"] ?? "-",
    "Verslag van vaststelling": r["RO Verslag van Vaststelling"] ?? "-",
    "Proces-verbaal": r["RO Proces-verbaal"] ?? "-",
    "Bevel tot staking": r["RO Bevel tot staking"] ?? "-",
    "Afgesloten minnelijke schikking": r["RO Afgesloten minnelijke schikking"] ?? "-",
     "Ingeleide herstelvordering bij Openbaar Ministerie":
      r["RO Ingeleide herstelvordering bij Openbaar Ministerie"] ?? "-",
      "RO Ambtshalve uitvoering gerechtelijke herstelmaatregel":
      r["RO Ambtshalve uitvoering gerechtelijke herstelmaatregel"] ?? "-",
    "Bestuurlijke maatregelen zonder dwangsom":
      r["RO Bestuurlijke maatregelen Zonder Dwangsom"] ?? "-",
    "Bestuurlijke maatregelen met dwangsom":
      r["RO Bestuurlijke maatregelen Met Dwangsom"] ?? "-",
  };
  return obj;
}

__roOpmerkingenFromRecord(r) {
  if (!r) return {};
  const obj = {
    "Opmerking": r["Opmerking"] ?? "-",
  };
  return obj;
}

  __renderDynamicContent() {
  // 1) fixed map first, 2) fallback derive, 3) render-friendly fallback
  const mapped = BELEID_MAP[this.selectedChoiceUrl];
  const derived = this.__deriveBeleid(this.selectedChoiceUrl);
  const rawBeleid = mapped ?? derived;
  const beleid = rawBeleid === "None" ? "Both" : rawBeleid;

  // shortcut to safely read sections
  const s = (branch, key) => this.__sec(branch, this.selectedChoiceUrl, key);

  const renderColumns = (milieuData, roData, milieuLabel, roLabel) => {
    if (beleid === "Both") {
      return html`
        <div is="vl-column" data-vl-size="6">${this.__renderDataSection(milieuData, milieuLabel)}</div>
        <div is="vl-column" data-vl-size="6">${this.__renderDataSection(roData, roLabel)}</div>
      `;
    } else if (beleid === "Milieu") {
      return html`<div is="vl-column" data-vl-size="12">${this.__renderDataSection(milieuData, milieuLabel)}</div>`;
    } else { // "RO"
      return html`<div is="vl-column" data-vl-size="12">${this.__renderDataSection(roData, roLabel)}</div>`;
    }
  };

    const renderColumns_milieu = (milieuData,milieuLabel) => {
      return html`<div is="vl-column" data-vl-size="12">${this.__renderDataSection(milieuData, milieuLabel)}</div>`;
  };


  const renderColumns_opmerking = (milieuData,milieuLabel) => {
      return html`<div is="vl-column" data-vl-size="12">${this.__renderDataSection(milieuData, milieuLabel)}</div>`;
  };

  const renderColumnsThema = (milieuData, roData, milieuLabel, roLabel) => {
    if (beleid === "Both") {
      return html`
        <div is="vl-column" data-vl-size="6">${this.__renderThemaGerichteActies(milieuData, milieuLabel)}</div>
        <div is="vl-column" data-vl-size="6">${this.__renderThemaGerichteActies(roData, roLabel)}</div>
      `;
    } else if (beleid === "Milieu") {
      return html`<div is="vl-column" data-vl-size="12">${this.__renderThemaGerichteActies(milieuData, milieuLabel)}</div>`;
    } else { // "RO"
      return html`<div is="vl-column" data-vl-size="12">${this.__renderThemaGerichteActies(roData, roLabel)}</div>`;
    }
  };

  return html`
    <vl-tabs data-vl-active-tab="Personeel" data-vl-disable-links="">
      <vl-tabs-pane data-vl-id="Personeel" data-vl-title="Personeel">
        <div is="vl-grid">
          ${(() => {
      const rec = this.__getActorRecord(this.selectedChoiceUrl);
      const milieuPers = this.__milieuPersoneelFromRecord(rec);
      const roPers     = this.__roPersoneelFromRecord(rec);
      return renderColumns(milieuPers, roPers, "Milieu", "Ruimtelijke ordening");
      // No RO data in the new JSON, so pass {} for RO
    })()}
        </div>
      </vl-tabs-pane>

      <vl-tabs-pane data-vl-id="Klachten" data-vl-title="Klachten">
        <div is="vl-grid">
             ${(() => {
      const rec = this.__getActorRecord(this.selectedChoiceUrl);
      const milieuK = this.__milieuKlachtenFromRecord(rec);
      const roK     = this.__roKlachtenFromRecord(rec);
      return renderColumns(milieuK, roK, "Milieu", "Ruimtelijke ordening");
    })()}
        </div>
      </vl-tabs-pane>

      <vl-tabs-pane data-vl-id="Controles" data-vl-title="Controles">
        <div is="vl-grid">
          ${(() => {
      const rec = this.__getActorRecord(this.selectedChoiceUrl);
      const milieu = this.__milieuControlesFromRecord(rec);
      const ro     = this.__roControlesFromRecord(rec);
      return renderColumns(milieu, ro, "Milieu", "Ruimtelijke ordening");
    })()}
        </div>
        <div is="vl-grid">
          <div is="vl-column" data-vl-size="12">
            <vl-typography><h3>Aanvankelijke controles met schending</h3></vl-typography>
          </div>
        </div>
        <div is="vl-grid">
         ${(() => {
      const rec = this.__getActorRecord(this.selectedChoiceUrl);
      const milieu = this.__milieuControlesSchendingFromRecord(rec);
      const ro     = this.__roControlesSchendingFromRecord(rec);
      return renderColumns(milieu, ro, "Milieu", "Ruimtelijke ordening");
    })()}
        </div>
      </vl-tabs-pane>

      <vl-tabs-pane data-vl-id="Instrumentarium" data-vl-title="Instrumentarium">
        <div is="vl-grid">
         ${(() => {
      const rec = this.__getActorRecord(this.selectedChoiceUrl);
      const milieu = this.__milieuInstrumentFromRecord(rec);
      const ro = this.__roInstrumentFromRecord(rec);
      return renderColumns(milieu,ro, "Milieu","Ruimtelijke ordening");
    })()}
        </div>
      </vl-tabs-pane>
      <vl-tabs-pane data-vl-id="Themagerichte acties" data-vl-title="Themagerichte acties">
        <div is="vl-grid">
        ${(() => {
      const rec = this.__getActorRecord(this.selectedChoiceUrl);
      const milieu = this.__milieuThemaGerichteacties(rec);
      return renderColumns_milieu(milieu);
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

customElements.define("ohr-agewest", OhrAGewest);
