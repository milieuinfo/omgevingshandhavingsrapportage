import {
    bindVlSelect,
    html,
    LitElement,
    queryById,
    renderStack
  } from "../common/commons.js";
  
  import "@domg-wc/elements/select";
  import "@domg-wc/components/functional-header";
  import "@domg-wc/qlik/infoblock";
  import {vlElementsStyle} from "@domg-wc/elements";
  
  import options from "../config/provincie-op-kaart.json" assert {type: "json"};
  
  class OhrOpkaartprovincie extends LitElement {
  
    static get properties() {
      return {
        selectedChoiceUrl: {type: String}
      }
    }
  
    constructor() {
        super();
        this.selectedChoiceUrl = options.find(o => o.selected)
      }
    
    static get styles() {
      return [...vlElementsStyle];
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
      <h1>Selecteer een thema voor de weergave's van de kaart.
        <select id="viewselector" is="vl-select" data-vl-select @change="${this.__changeView}">
        </select>
      `;
    }
  
    __renderHoofdingTekst() {
  
      return html`        
       <h3 is="vl-h3">Ruimtelijke inzichten van provincies: Verken diverse handhavingsthema's</h3>
       <p is="vl-text">Kies een optie uit de lijst hieronder om gedetailleerde kaartvisualisaties te verkrijgen en versterk uw begrip van verschillende handhavingsaspecten.</p>   
          `;
  
    }
  
    __changeView(event) {
      this.selectedChoiceUrl = event.target.value;
    }
  
    render() {
      return html`
      <vl-functional-header
      data-vl-back="Terug"
      data-vl-back-link="/"
      data-vl-title="Geografische informatie van provincies"
      data-vl-sub-title="Omgevingshandhavingsrapportage"
      data-vl-link="/provincies-op-kaart">
  </vl-functional-header>
        <section is="vl-region">
          <div is="vl-layout">
            ${renderStack(
              {
                size:12,
                template: this.__renderHoofdingTekst(),
              },
              {
                  size: 12,
                  template: this.__renderViewSelector(),
                },
                {
                  size: 12,
                  template: html`<iframe src="${this.selectedChoiceUrl}" width="100%" height="500px"></iframe>`,
                })}
          </div>
        </section>`;
    }
  }
  
  customElements.define('ohr-opkaartprovincies', OhrOpkaartprovincie);