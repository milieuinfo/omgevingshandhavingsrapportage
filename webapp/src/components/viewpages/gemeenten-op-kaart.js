import {
  bindVlSelect,
  html,
  LitElement,
  queryById,
  renderStack
} from "../common/commons.js";
import "@domg-wc/elements/select";
import "@domg-wc/elements/grid";
import "@domg-wc/components/functional-header";
import "@domg-wc/components/accordion";
import "@domg-wc/components/tabs";
import "@domg-wc/components/typography";
import {vlElementsStyle} from "@domg-wc/elements";
import "@domg-wc/elements/link";
import "@domg-wc/elements/link-list";
import "@domg-wc/components/accordion";
import "@domg-wc/components/typography";
import options from "../config/gemeente-op-kaart.json" assert {type: "json"};
import options2 from "../config/gemeente-op-kaart-absolut.json" assert {type:"json"};
import yearofanalsysis from "../config/yearofanalysis.json" assert {type: "json"};

class OhrOpkaart extends LitElement {

  static get properties() {
    return {
      selectedChoiceLabel: {type: String},
      selectedChoiceUrl: {type: String},
      selectedChoiceLabelAbsoluut: {type: String},
      selectedChoiceUrlAbsoluut: {type: String}
    }
  }

  static get styles() {
    return [...vlElementsStyle];
  }

  constructor() {
    super();
    this.selectedChoiceUrl = options.find(o => o.selected).value;
    this.selectedChoiceLabel = options.find((o) => o.selected).label;
    this.selectedChoiceUrlAbsoluut = options2.find(o2 => o2.selected).value;
    this.selectedChoiceLabelAbsoluut = options2.find((o2) => o2.selected).label;
    this.yearofanalysis = yearofanalsysis.value;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    bindVlSelect({
      component: queryById(this)("viewselector"),
      choices: options
    })
  }

  __renderViewSelector() {
    return html`
    <vl-typography><b>
    Kies hieronder een handhavingsthema voor een kaartweergave:</b></vl-typography>
      <select id="viewselector" is="vl-select" data-vl-select @change="${this.__changeView}">
      </select>
    `;
  }

  __renderEverVizKaart() {
    return html`
    <vl-tabs data-vl-active-tab="Weergave per 1000 inwoners" data-vl-disable-links="">
    <vl-tabs-pane data-vl-id="Weergave per 1000 inwoners" data-vl-title="Weergave per 1000 inwoners">
        <div is="vl-grid">
    <div is="vl-column" data-vl-size=12>
 <iframe class="everviz-iframe" src="${this.selectedChoiceUrl}" width="100%" height="450px"></iframe>
</div>
</div>
    </vl-tabs-pane>
    <vl-tabs-pane data-vl-id="Absolute weergave" data-vl-title="Absolute weergave">
            <div is="vl-grid">
            <div is="vl-column" data-vl-size=12>
  <iframe class="everviz-iframe" src="${this.selectedChoiceUrlAbsoluut}" width="100%" height="450px"></iframe></div>
</div>   
    </vl-tabs-pane>`;
  }

  __renderIntroductionOfMaps() {
    return html`
   
    <h2 is="vl-h2">Gemeenten op kaart</h2>
    <p is="vl-icon-wrapper">
          <span is="vl-icon" data-vl-icon="calendar"></span><vl-annotation>&nbsp;Laatste wijziging aan de data: 01/09/2025</vl-annotation>
        </p><br>
    <p>
      De gemeenten hebben handhavingsbevoegdheden ten aanzien van de milieuregelgeving en/of de regelgeving inzake ruimtelijke ordening.<br>
      De burgemeester of zijn plaatsvervanger is in bepaalde gevallen bevoegd voor het opleggen van bestuurlijke maatregelen en kan veiligheidsmaatregelen nemen in geval van een aanzienlijk risico voor mens of milieu. 
      </p><p>
      De lokale toezichthouders oefenen daarnaast het toezicht uit op de toepassing van specifieke milieuvoorschriften. De lokale verbalisanten, de agenten en de officieren van gerechtelijke politie en de stedenbouwkundige inspecteurs/burgemeesters handhaven de regelgeving van de Vlaamse Codex Ruimtelijke Ordening. 
      De gemeenten kunnen hun handhavingsactiviteiten organiseren binnen de eigen gemeentelijke administratie en/of een intergemeentelijke vereniging en/of in samenwerking lokale politie. </p>
      <p>
      In de cartografische weergaves wordt gerapporteerd over de uitvoering van hun handhavingsactiviteiten in het voorgaand jaar (handhavingsactiviteiten uitgevoerd tussen 1 januari en 31 december). 
      </p>
      <br>

        <vl-typography data-cy="typography">
          <ul>
            <li>Milieu : groene kaarten</li>
            <li>Ruimtelijke ordening: oranje kaarten</li>
          </ul>
        </vl-typography>
        <br>
      <p>
      <vl-accordion data-vl-toggle-text="Hoe interpreteer ik de kaarten?">
       <span>
        De onderstaande kaarten geven per onderwerp in kleurgradaties de absolute cijfers en de cijfers per 1.000 inwoners weer. (inwonersaantal op basis van <a href="https://statbel.fgov.be" target="_blank">Statbel</a>)
        <br>
        Wanneer u de cursor over een gemeente beweegt, worden de cijfers weergegeven.

        De responsgraad voor deze bevraging (of bepaalde vragen in de bevraging) bedraagt geen 100%. Dit maakt dat bepaalde gemeenten als waarde "niet gekend" of “non-respons tonen. 
        Niet gekend:  het antwoord is niet gekend
        Non-respons: de gemeente heeft de bevraging niet ingevuld.

       </span>
          </vl-accordion></p>
            `;
  }
  __renderBackgroundInformation() {
    return html`
          <vl-typography data-cy="typography">
          <p><em>Non-respons: Gemeente heeft niet gereageerd op de bevraging.
          <br/>
          Niet gekend: Gemeente kon geen cijfers geven over dit handhavingsthema.</em>
          </p>
          </vl-typography>`;
  }
  __changeView(event) {
    const selectedValue = event.target.value;
  
    // Find the selected option from the main options
    const selectedOption = options.find(o => o.value === selectedValue);
  
    // Find the corresponding selected option from the options2
    const selectedOption2 = options2.find(o2 => o2.label === selectedOption.label);
  
    if (selectedOption) {
      this.selectedChoiceUrl = selectedOption.value;
      this.selectedChoiceLabel = selectedOption.label;
      
      if (selectedOption2) {
        this.selectedChoiceUrlAbsoluut = selectedOption2.value;
        this.selectedChoiceLabelAbsoluut = selectedOption2.label;
      }
    }
  }

  __renderSideNavigation() {
    return html`
    <h5 is="vl-h5" data-vl-alt>Interessante links</h5>
    <ul is="vl-link-list">
      <li is="vl-link-list-item">
        <a is="vl-link"
           href="/gemeenten">
           Cijfers ${this.yearofanalysis} per gemeentelijke actor
        </a>
      </li>
      <li is="vl-link-list-item">
        <a is="vl-link"
           href="/download-cijfers-en-meer">
          Downloads
        </a>
      </li>
    </ul>`;
  }

  render() {
    return html`
      <vl-functional-header
          data-vl-back="Terug"
          data-vl-back-link="/"
          data-vl-title="Cartografische weergave"
          data-vl-sub-title="Omgevingshandhavingsrapportage"
          data-vl-link="/gemeenten-op-kaart">
      </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
            {
              size: 8,
              template: this.__renderIntroductionOfMaps(),
            },
            {
              size: 4,
              template: this.__renderSideNavigation(),
            },
            {
                size: 12,
                template: this.__renderViewSelector(),
            },
            {
                size: 12,
                template: this.__renderEverVizKaart(),
            },
            {
              size:8,
              template: this.__renderBackgroundInformation()
            }
            )}
        </div>
      </section>`;
  }
}

customElements.define('ohr-opkaart', OhrOpkaart);