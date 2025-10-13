// src/extractors/utils.js
export function toNumber(v) {
  const s = String(v ?? "").trim();
  if (s === "" || s === "-") return 0;
  return Number(s.replace(/\./g, "").replace(",", ".")) || 0;
}

export function sumKeys(rec, keys) {
  return keys.reduce((acc, k) => acc + toNumber(rec?.[k]), 0);
}

export function formatBE(n) {
  return Number(n).toLocaleString("nl-BE", { maximumFractionDigits: 2 });
}

export function hasValue(v) {
  if (v === null || v === undefined) return false;
  const s = String(v).trim();
  return s !== "" && s !== "-";
}
