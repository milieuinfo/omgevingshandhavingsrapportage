import {html, LitElement, renderStack} from "../common/commons.js";
import {vlElementsStyle} from "@domg-wc/elements";

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/elements/doormat";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";
import "@domg-wc/components/content-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/functional-header";

class OhrStrafrechtelijk extends LitElement {

  static get styles() {
    return [
      ...vlElementsStyle
    ]
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <vl-functional-header
    data-vl-back="Terug"
    data-vl-back-link="/"
    data-vl-title="Jaarrapportage strafrechtelijk sanctionering"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/strafrechtelijk">
</vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
              {
                size: 8,
                template: html`<h1 is="vl-h1" data-vl-no-space-bottom>
                  Strafrechtelijke sanctionering
                </h1>`,
              },
              {
                size: 8,
                template: this.__renderIntroduction(),
              },
              {
                size: 4,
                template: this.__renderSideNavigation(),
              }
          )}
        </div>
      </section>`;
  }

  __renderIntroduction() {
    return html`
    <vl-typography>
      <p>
      Het Openbaar Ministerie heeft kennis van alle processen-verbaal die worden opgesteld in het kader van de omgevingshandhaving. Op het ogenblik dat het Openbaar Ministerie het proces-verbaal ontvangt wordt er een zaak aangemaakt met een geregistreerde codering.
      </p>

      <p>
      Nadat het Openbaar Ministerie het dossier ontvangen heeft, zal ze het dossier beoordelen. Het Openbaar Ministerie kent hierbij vooruitgangstaten toe aan de dossiers. Het Openbaar Ministerie kent voor de vooruitgangstaten afhandeling zonder strafvervolging om opportuniteitsredenen en afhandeling zonder strafvervolging om technische redenen een motivering toe (zie omzendbrief COL12/98 en COL 16/2014 van het College van procureurs-generaal).
      </p>
    </vl-typography>
    `;
  }

  __renderTable() {
    return html`
      <vl-typography>
        <p>
          In deze datasets wordt het verdere verloop van twee
          handhavingsinstrumenten weergegeven:
        </p>
        <ul>
          <li>Het proces-verbaal dat werd opgemaakt bij de vaststelling van een
            misdrijf en dat
            wordt overgemaakt aan de parketten bij de rechtbanken van eerste
            aanleg met het oog
            op een strafrechtelijke afhandeling.
          </li>
          <li>
            het verslag van vaststelling dat werd opgemaakt bij de vaststelling
            van een inbreuk en
            dat wordt overgemaakt aan de gewestelijke beboetingsentiteit met het
            oog op een
            bestuurlijke afhandeling.
          </li>
        </ul>
        <p>Rudimentaire schematische voorstelling van deze trajecten:</p>
      </vl-typography>
      </section>`;
  }

  __renderSideNavigation() {
    return html`
    <a is="vl-link-button" href="/strafrechtelijk">Bekijk de cijfers voor dit thema</a>
    <h5 is="vl-h5" data-vl-alt>Interessante links</h5>
    <ul is="vl-link-list">
    <li is="vl-link-list-item">
   
      </li>
      <li is="vl-link-list-item">
        <a is="vl-link" href="/download-cijfers-en-meer">Download de cijfers</a>
      </li> 
      <li is="vl-link-list-item">
        <a target="_new_blank" is="vl-link"
           href=https://indicatoren.omgeving.vlaanderen.be/>
          Indicatoren website<span is="vl-icon" data-vl-before="" data-vl-link="" data-vl-icon="external"></span>
        </a>
      </li>
        <li is="vl-link-list-item">
        <a target="_new_blank" is="vl-link"
           href="https://www.om-mp.be/nl/">
          Website Openbaar Ministerie<span is="vl-icon" data-vl-before="" data-vl-link="" data-vl-icon="external"></span>
        </a>
      </li>
    </ul>`;
    
  }
}

customElements.define("ohr-strafrechtelijk", OhrStrafrechtelijk);
