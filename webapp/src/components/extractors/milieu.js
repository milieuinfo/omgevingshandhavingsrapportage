// src/extractors/milieu.js
import { hasValue } from "./utils.js";

export function extractMilieuPersoneel(r) {
  if (!r) return {};
  const vteToez = r["Milieu VTE Toezichthouders"] ?? r["Milieu VTE toezicthouders"];
  return {
    "Milieu Toezichthouders": r["Milieu Toezichthouders"] ?? "-",
    "Milieu VTE Toezichthouders": vteToez ?? "-",
    "Milieu VTE Administratieve en Juridische ondersteuning":
      r["Milieu VTE Administratieve en Juridische ondersteuning"] ?? "-"
  };
}

export function extractMilieuKlachten(r) {
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
    "Andere": r["Milieu Andere"] ?? "-",
    "PFAS": r["Milieu PFAS"] ?? "-",
    "Stikstof": r["Milieu Stikstof"] ?? "-"
  };
}

export function extractMilieuInstrument(r) {
  if (!r) return {};
  return {
    "Raadgeving": r["Milieu Raadgeving"] ?? "-",
    "Aanmaning": r["Milieu Aanmaning"] ?? "-",
    "Verslag van vaststelling": r["Milieu Verslag van Vaststelling"] ?? "-",
    "Proces-verbaal": r["Milieu Proces-verbaal"] ?? "-",
    "Bestuurlijke maatregelen zonder dwangsom":
      r["Milieu Bestuurlijke maatregelen Zonder Dwangsom"] ?? "-",
    "Bestuurlijke maatregelen met dwangsom":
      r["Milieu Bestuurlijke maatregelen Met Dwangsom"] ?? "-",
    "Veiligheidsmaatregel": r["Milieu Veiligheidsmaatregel"] ?? "-"
  };
}

export function extractMilieuThemaGericht(r) {
  if (!r) return {};
  return {
    "PFAS": r["PFAS"] ?? "-",
    "Stikstof": r["Stikstof"] ?? "-"
  };
}

export function deriveMilieuBeleid(record) {
  if (!record) return "None";
  const milieuKeys = [
    "Milieu Toezichthouders",
    "Milieu VTE Toezichthouders", "Milieu VTE toezicthouders",
    "Milieu VTE Administratieve en Juridische ondersteuning"
  ];
  const hasMilieu = milieuKeys.some(k => hasValue(record[k]));
  return hasMilieu ? "Milieu" : "None";
}
