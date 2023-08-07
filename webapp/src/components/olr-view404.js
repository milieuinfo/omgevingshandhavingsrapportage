import {define, html, LitElement} from './common/commons';

class OlrView404 extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
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
          data-vl-sub-title="Pagina niet gevonden"
          data-vl-link="/">
      </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${this._render404Message()}
        </div>
      </section>
    `;
  }

  _render404Message() {
    return html`
      <section is="vl-region">
        <vl-http-error-message
          data-vl-title="Pagina niet gevonden"
          data-vl-image="https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg"
          data-vl-image-alt="Pagina niet gevonden">
          <p slot="text">
            We vonden de pagina niet terug. Controleer even of u een tikfout heeft gemaakt. Bent u via een link of
            website op deze pagina gekomen. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 404">Mail dan de
            helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 404.
          </p>
          <div slot="actions">
            <a is="vl-link-button" href="/">Ga naar startpagina</a>
          </div>
        </vl-http-error-message>
      </section>
    `;
  }
}

define('olr-view404', OlrView404);
