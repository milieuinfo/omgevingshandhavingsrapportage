import {
    bindVlSelect,
    html,
    LitElement,
    queryById,
    renderStack
  } from "../common/commons.js";
  import "@domg-wc/elements/select";
  import "@domg-wc/components/functional-header";
  import "@domg-wc/components/accordion";
  import "@domg-wc/components/tabs";
  import "@domg-wc/components/typography";
  import {vlElementsStyle} from "@domg-wc/elements";
  import "@domg-wc/components/accordion";
  import options from "../config/provincie-op-kaart.json" assert {type: "json"};
  import options2 from "../config/provincie-op-kaart-absoluut.json" assert {type:"json"};
  import yearofanalsysis from "../config/yearofanalysis.json" assert {type: "json"};
  
  class OhrOpkaartprovincie extends LitElement {
  
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
    Kies hieronder uw keuze omtrent een handhavingsthema:</b></vl-typography>
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

    __renderBackgroundInformation() {
      return html`
      <vl-typography data-cy="typography">
      <p><em>
      Niet gekend: Provincie kon geen cijfers geven over dit handhavingsthema.</em>
      </p>
      </vl-typography>`;
    }
  
    __renderIntroductionOfMaps() {
      return html`
      <h2 is="vl-h2">Provincies op kaart</h2>
       <p is="vl-icon-wrapper">
          <span is="vl-icon" data-vl-icon="calendar"></span><vl-annotation>&nbsp;Laatste wijziging aan de data: 05/03/2024</vl-annotation>
        </p><br>
      <p>
      De provincies hebben handhavingsbevoegdheden ten aanzien van de milieuregelgeving. De provinciegouverneur of zijn plaatsvervanger is in bepaalde gevallen bevoegd voor het opleggen van bestuurlijke maatregelen en kan veiligheidsmaatregelen nemen in geval van een aanzienlijk risico voor mens of milieu. De provinciale toezichthouders oefenen daarnaast het toezicht uit op de toepassing van specifieke milieuvoorschriften. 

In de cartografische weergaves wordt gerapporteerd over de uitvoering van hun handhavingsactiviteiten in ${this.yearofanalysis} (handhavingsactiviteiten uitgevoerd tussen 1 januari en 31 december).</p>
      <br>
      <p>
       <vl-accordion data-vl-toggle-text="Hoe interpreteer ik de kaarten?">
          <span>
De onderstaande kaarten geven per onderwerp in kleurgradaties de absolute cijfers en de cijfers per 1.000 inwoners weer. (inwonersaantal op basis van <a href="https://statbel.fgov.be" target=_blank>Statbel</a>)
<br>Wanneer u de cursor over een provincie beweegt, worden de cijfers weergegeven.</span>
        </vl-accordion></p>

`;
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
             href="/provincie">
             Cijfers ${this.yearofanalysis} per provinciale actor
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
            data-vl-link="/provincies-op-kaart">
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
                  template: this.__renderEverVizKaart()
              },
              {
                size:8,
                template: this.__renderBackgroundInformation()
              })}
          </div>
        </section>`;
    }
  }
  
  customElements.define('ohr-opkaartprovincies', OhrOpkaartprovincie);