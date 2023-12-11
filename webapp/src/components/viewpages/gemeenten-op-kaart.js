import "../qlik/visual";
import "../qlik/infoblock";

import { define, html, LitElement, renderStack } from "../common/commons.js";

import "@domg-wc/components/content-header";
import "@domg-wc/components/loader";
import "@domg-wc/components/infoblock";
import "@domg-wc/components/info-tile";
import "@domg-wc/components/functional-header";
import "@domg-wc/components/typography";
import {vlElementsStyle} from "@domg-wc/elements";

class OhrOpkaart extends LitElement {
    __renderViewSelector() {
      return html`
        <select is="vl-multiselect" @change="${this.__changeView}">
          ${this.__renderDropdownOptions()}
        </select>
      `;
    }
  
    __renderDropdownOptions() {
      const options = ['Select One', 'Iframe 1', 'Iframe 2', 'Iframe 3', 'Iframe 4', 'Iframe 5', 'Iframe 6', 'Iframe 7', 'Iframe 8', 'Iframe 9', 'Iframe 10', 'Iframe 11', 'Iframe 12', 'Iframe 13', 'Iframe 14', 'Iframe 15', 'Iframe 16', 'Iframe 17', 'Iframe 18', 'Iframe 19', 'Iframe 20', 'Iframe 21', 'Iframe 22', 'Iframe 23'];
  
      return options.map((optionText, index) => html`
        <option value="${index}">${optionText}</option>
      `);
    }
  
    __changeView(event) {
      const selectedIndex = event.target.value;
      const iframeContainer = this.shadowRoot.querySelector('#iframe-container');
  
      // Implement logic to display corresponding iframes based on the selected index
      // You may need to adjust the logic based on your specific use case.
      if (selectedIndex !== 0) {
        // Assuming you have iframes stored in an array
        const iframeSrc = `path/to/iframe${selectedIndex}.html`;
        iframeContainer.innerHTML = `<iframe src="${iframeSrc}" width="100%" height="500px"></iframe>`;
      } else {
        iframeContainer.innerHTML = ''; // Clear the iframe container if "Select One" is chosen
      }
    }
  
    createRenderRoot() {
      return this;
    }
  
    render() {
      return html`
        <vl-functional-header
          data-vl-back="Terug"
          data-vl-back-link="/"
          data-vl-title="Omgevingshandhavingsrapportage"
          data-vl-sub-title="Meerjarenrapportage personeel"
          data-vl-link="/klachten"
        >
        </vl-functional-header>
        <div style="margin: 0px 25px">
          ${renderStack({
            size: 12,
            template: this.__renderViewSelector(),
          })}
          <div class="iframe-container"></div>
        </div>
      </section>`;
    }
  }
  
  customElements.define('ohr-opkaart', OhrOpkaart);