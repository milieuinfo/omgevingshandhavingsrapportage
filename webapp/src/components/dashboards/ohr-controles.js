import {
    define,
    html,
    LitElement,
  } from "../common/commons.js";
  
  import "../qlik/dashboard-page.js";
  import charts from "../config/controles.json" assert {type: "json"};
  import filters from "../config/controles-filters.js";
  
  import "@domg-wc/components/functional-header";
  import "@domg-wc/components/typography";
  import "@domg-wc/components/loader";
  
  class OhrControles extends LitElement {
  
    static get properties() {
      return {
        initialized: {type: Boolean}
      }
    }
  
    render() {
      return html`
        <vl-functional-header
            data-vl-back="Terug"
            data-vl-back-link="/"
            data-vl-title="Thema - Controles"
            data-vl-sub-title="Omgevingshandhavingsrapportage"
            data-vl-link="/klachten">
        </vl-functional-header>
  
        <div style="margin: 0px 0px">
          <dashboard-page
              title="Controles"
              url="omgevingsloketrapport.omgeving.vlaanderen.be"
              appId="594c04b6-f319-4cb9-962c-24b0f7aa6f5e"
              .views="${charts}"
              .filters="${filters}"
              @initialized="${() => this.initialized = true}">
            ${this.__renderIntroduction()}
          </dashboard-page>
        </div></section>`;
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
          Een voorstelling van de controles die werden ontvangen bij de verschillende omgevingshandhavingsactoren op gewestelijk, provinciaal en gemeentelijk niveau.
          </p>
        </vl-typography>`;
    }
  }
  
  define("ohr-controles", OhrControles);
      