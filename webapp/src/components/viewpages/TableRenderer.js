// src/components/TableRenderer.js
import { html } from "lit";

/**
 * Generic VL Data Table renderer
 * @param {Object} data - key/value pairs
 * @param {Object} opts - { caption, headers, showEmptyAlert }
 */
export function renderTable(data, opts = {}) {
  const { caption = "", headers = ["Onderwerp", "Waarde"], showEmptyAlert = true } = opts;

  if (!data || Object.keys(data).length === 0) {
    return showEmptyAlert
      ? html`
        <vl-alert
          data-vl-naked
          data-vl-icon="warning"
          data-vl-title="Geen gegevens"
          data-vl-type="warning"
          data-vl-message="Geen data beschikbaar voor deze selectie.">
        </vl-alert>`
      : html``;
  }

  return html`
    <table is="vl-data-table">
      ${caption ? html`<caption>${caption}</caption>` : ""}
      <thead>
        <tr>
          ${headers.map(h => html`<th>${h}</th>`)}
        </tr>
      </thead>
      <tbody>
        ${Object.entries(data).map(([k, v]) => html`
          <tr>
            <td data-title="${k}">${k}</td>
            <td data-title="${v}">${v}</td>
          </tr>`)}
      </tbody>
    </table>
  `;
}
