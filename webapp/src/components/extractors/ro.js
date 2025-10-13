// src/extractors/ro.js
import { hasValue, sumKeys, formatBE } from "./utils.js";

export function extractRoPersoneel(r) {
  if (!r) return {};
  const roVTEKeys = [
    "RO VTE Gecombineerde functie",
    "RO VTE Verbalisanten",
    "RO VTE Stedenbouwkundige Inspecteurs"
  ];
  const total = sumKeys(r, roVTEKeys);
  return {
    "Verbalisanten": r["RO Verbalisanten"] ?? "-",
    "Gecombineerde functie": r["RO Gecombineerde functie"] ?? "-",
    "Stedenbouwkundige inspecteurs": r["RO Stedenbouwkundige Inspecteurs"] ?? "-",
    "VTE handhavers": formatBE(total),
    "VTE administratieve en juridische ondersteuning":
      r["RO VTE Administratieve en Juridische ondersteuning"] ?? "-"
  };
}

export function extractRoInstrument(r) {
  if (!r) return {};
  return {
    "Raadgeving": r["RO Raadgeving"] ?? "-",
    "Aanmaning": r["RO Aanmaning"] ?? "-",
    "Verslag van vaststelling": r["RO Verslag van Vaststelling"] ?? "-",
    "Proces-verbaal": r["RO Proces-verbaal"] ?? "-",
    "Bevel tot staking": r["RO Bevel tot staking"] ?? "-",
    "Minnelijke schikking": r["RO Afgesloten minnelijke schikking"] ?? "-",
    "Herstelvordering": r["RO Ingeleide herstelvordering bij Openbaar Ministerie"] ?? "-",
    "Ambtshalve uitvoering": r["RO Ambtshalve uitvoering gerechtelijke herstelmaatregel"] ?? "-",
    "Bestuurlijke maatregelen zonder dwangsom": r["RO Bestuurlijke maatregelen Zonder Dwangsom"] ?? "-",
    "Bestuurlijke maatregelen met dwangsom": r["RO Bestuurlijke maatregelen Met Dwangsom"] ?? "-"
  };
}

export function extractRoThemaGericht(r) {
  if (!r) return {};
  return {
    "Verharding": r["Verharding"] ?? "-",
    "Ontbossing": r["Ontbossing"] ?? "-"
  };
}

export function deriveRoBeleid(record) {
  if (!record) return "None";
  const roKeys = [
    "RO Verbalisanten",
    "RO Gecombineerde functie",
    "RO Stedenbouwkundige Inspecteurs"
  ];
  const hasRO = roKeys.some(k => hasValue(record[k]));
  return hasRO ? "RO" : "None";
}
