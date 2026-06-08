import { html, LitElement } from "../common/commons.js";
import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import { vlElementsStyle } from "@domg-wc/elements";
import "@domg-wc/components/alert";
import yearofanalsysis from "../config/yearofanalysis.json" assert { type: "json" };

const QLIK_HOST = "omgevingsloketrapport.omgeving.vlaanderen.be";
const APP_ID_SELECTIONS = "f60653ef-014c-4f79-8864-4d13128e5662";
const APP_ID_APP = "7c8c4a82-27c2-49d7-9c4b-5bdfc79f53ff";

class OhrQlikembed extends LitElement {
  static get styles() {
    return [...vlElementsStyle];
  }

  static get properties() {
    return {
      initialized: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.yearofanalysis = yearofanalsysis.value;
    this.identity = crypto.randomUUID();
  }

  render() {
    return html`
      ${this.__renderHeader()}
      ${this.__renderIntroduction()}
      ${this.__renderSelectionBar()}
      ${this.__renderAppDashboard()}
      ${this.__renderFieldFilter()}
    `;
  }

  __renderHeader() {
    return html`
      <vl-functional-header
        data-vl-back="Terug"
        data-vl-back-link="/"
        data-vl-title="Strafrechtelijke sanctionering"
        data-vl-sub-title="Omgevingshandhavingsrapportage"
        data-vl-link="/strafrechtelijk-analyse">
      </vl-functional-header>
    `;
  }

  __renderIntroduction() {
    return html`
      <vl-typography>
        <p is="vl-text">
          De omgevingsinspectie wordt op verschillende beleidsniveaus uitgevoerd,
          namelijk door gewestelijke, provinciale en gemeentelijke handhavingsactoren.
          Deze pagina geeft via een interactieve tool de gebruikte instrumenten weer
          die over de jaren heen ingezet worden door de handhavingsactoren voor de
          omgevingshandhaving in Vlaanderen.
          <br>
          De cijfers worden weergegeven per beleidsdomein:
          <b> milieu en ruimtelijke ordening.</b>
          <ul>
            <li>
              Bijkomende informatie
              <ul>
                <li><b>Zachte instrumenten:</b> raadgeving en aanmaning</li>
                <li><b>Repressieve instrumenten:</b> Verslag van vaststelling, proces-verbaal,
                  bestuurlijke maatregel, veiligheidsmaatregelen, bevel tot staking,
                  minnelijke schikking, herstelvordering, ambtshalve uitvoering.
                </li>
              </ul>
            </li>
          </ul>
          De cijfers zullen wijzigen naargelang de gekozen filtering.
        </p>
      </vl-typography>
    `;
  }

  __renderSelectionBar() {
    return html`
      <div style="position: relative; width: 100%; height: 100px; overflow: hidden; margin: 3rem 0px;">
        <qlik-embed
          ui="analytics/selections"
          host="${QLIK_HOST}"
          app-id="${APP_ID_SELECTIONS}">
        </qlik-embed>
      </div>
    `;
  }

  __renderAppDashboard() {
    return html`
      <div style="position: relative; width: 100%; height: 800px; overflow: hidden; margin: 3rem 0px;">
        <qlik-embed
          style="width: 100%; height: 100%; display: block;"
          ui="classic/app"
          app-id="${APP_ID_APP}"
          language="nl">
        </qlik-embed>
      </div>
    `;
  }

  __renderFieldFilter() {
    return html`
      <div style="position: relative; width: 100%; height: 800px; overflow: hidden; margin: 3rem 0px;">
        <qlik-embed
          ui="analytics/field"
          host="${QLIK_HOST}"
          app-id="${APP_ID_SELECTIONS}"
          field-id="Actor"
          identity="${this.identity}">
        </qlik-embed>
      </div>
    `;
  }
}

customElements.define("ohr-qlikembed", OhrQlikembed);
