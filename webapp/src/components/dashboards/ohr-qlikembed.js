
import {html, LitElement} from "../common/commons.js";
import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import "@domg-wc/components/loader";
import {vlElementsStyle} from "@domg-wc/elements";
import "@qlik/embed-web-components";
import "@domg-wc/components/alert";
import yearofanalsysis from "../config/yearofanalysis.json" assert {type: "json"};

class OhrQlikembed extends LitElement {

  static get styles() {
    return [...vlElementsStyle];
  }

  static get properties() {
    return {
      initialized: {type: Boolean}
    }
  }
  constructor() {
    super();
    this.yearofanalysis = yearofanalsysis.value;
    this.identity = crypto.randomUUID();
    console.log(this.identity);
  }

  render() {
    return html`
      <vl-functional-header
          data-vl-back="Terug"
          data-vl-back-link="/"
          data-vl-title="Strafrechtelijke sanctionering"
          data-vl-sub-title="Omgevingshandhavingsrapportage"
          data-vl-link="/strafrechtelijk-analyse">
      </vl-functional-header>

       <vl-typography slot="introduction">
        <p is="vl-text">
        De omgevingsinspectie wordt op verschillende beleidsniveaus uitgevoerd, namelijk door gewestelijke, provinciale en gemeentelijke handhavingsactoren.
        Deze pagina geeft via een interactieve tool de gebruikte instrumenten weer die over de jaren heen ingezet worden door de handhavingsactoren voor de omgevingshandhaving in Vlaanderen. 
        <br>
        De cijfers worden weergegeven per beleidsdomein:<b> milieu en ruimtelijke ordening.</b>
        <ul>
              <li>
            Bijkomende informatie
            <ul>
                <li><b>Zachte instrumenten:</b> raadgeving en aanmaning</li>
                <li><b>Repressieve instrumenten:</b> Verslag van vaststelling, proces-verbaal, bestuurlijke maatregel,veiligheidsmaatregelen, bevel tot staking, minnelijke schikking, herstelvordering, ambtshalve uitvoering.</li>
            </ul>
        </li>
        </ul>
        De cijfers zullen wijzigen naargelang de gekozen filtering.<br></p>
        <vl-accordion data-vl-toggle-text="Informatie over het gebruik van het dashboard">
          <span>
           Het standaard beeld geeft de totale cijfers van 2021 tot en met ${this.yearofanalysis} weer voor de omgevingsinspectie in heel Vlaanderen.
Via de filters kan u kiezen om de cijfers van één jaar, één beleidsniveau of één actor weer te geven. De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn. Bij een evolutie weergave zal de lijn onderbroken zijn
</span>
        </vl-accordion>
      </vl-typography>
      <div style="position: relative; width: 100%; height: 100px; overflow: hidden; margin: 3rem 0px;">
          <qlik-embed ui="analytics/selections" host="omgevingsloketrapport.omgeving.vlaanderen.be" auth-type="none"
          app-id="f60653ef-014c-4f79-8864-4d13128e5662" identity = ${this.identity}></qlik-embed>
            </div>
          <div style="position: relative; width: 100%; height: 800px; overflow: hidden; margin: 3rem 0px;">
      
          <qlik-embed
          style="width: 100%; height: 100%; display: block;"
          ui="classic/app"
          host="omgevingsloketrapport.omgeving.vlaanderen.be"
          auth-type="none"
          app-id="7c8c4a82-27c2-49d7-9c4b-5bdfc79f53ff" identity = ${this.identity} language="nl">
        </qlik-embed>
              </div>
          <div style="position: relative; width: 100%; height: 800px; overflow: hidden; margin: 100rem 50px;">
        <qlik-embed ui="analytics/field" host="omgevingsloketrapport.omgeving.vlaanderen.be" auth-type="none"
          app-id="f60653ef-014c-4f79-8864-4d13128e5662" field-id="Actor" identity = ${this.identity}></qlik-embed>

          </div>


        
      </div>`;
  }

  __renderIntroduction() {
    if (!this.initialized) {
      return html`
        <vl-loader
            data-vl-text="Pagina is aan het laden"
        ></vl-loader>`;
    }
    return html`
      <vl-typography slot="introduction">
        <p>
        Het Openbaar Ministerie heeft kennis van alle processen-verbaal die worden opgesteld in het kader van de omgevingshandhaving. 
        Ze staat in voor de verdere strafrechtelijke afhandeling van de dossiers. <br>
        Deze pagina geeft via een interactieve tool de cijfers van het strafrechtelijk vervolgtraject over de jaren heen weer.
        </p>

         <vl-accordion data-vl-toggle-text="Informatie over het gebruik van het dashboard">
          <span>
            Het standaardbeeld geeft de totale cijfers van 2002 voor milieu en 2010 voor ruimtelijke ordening tot en met ${this.yearofanalysis} weer.
            Via de filters kan u kiezen om de cijfers van één jaar, één beleidsdomein, één thema of één tenlastenleggingscode weer te geven. 
            De gekozen filtering kan op elk moment worden verwijderd aan de hand van de selectiebalk hieronder. 
            Wanneer de gegevens niet gekend zijn, verschijnt “-“ of wordt aangegeven dat de data niet beschikbaar zijn. 
            Bij een evolutie weergave zal de lijn onderbroken zijn.
          </span>
        </vl-accordion>
      </vl-typography>
    `;
  }
}
customElements.define("ohr-qlikembed", OhrQlikembed);
