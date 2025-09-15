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

class OhrOmgevingshandhavingsrapporten extends LitElement {

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
    data-vl-title="Omgevingshandhavingsrapporten"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/omgevingshandhavingsrapporten">
</vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
              {
                size: 12,
                template: html`<h1 is="vl-h1" data-vl-no-space-bottom>
                  Omgevingshandhavingsrapporten
                </h1>`,
              },
              {
                size:8,
                template: this.__renderIntro(),
              },
              {
                size:4,
                template: this.__renderSideNavigation(),
              },
              {
                size:8,
                template: this.__rendercurrentreport(),
              },
              {
                size: 8,
                template: this.__renderTable(),
              }
          )}
        </div>
      </section>`;
  }

__renderIntro() {
  return html`<p is="vl-introduction">
        Op deze pagina vindt u een overzicht van alle publicaties omtrent de rapportage inzake de handhaving van milieu en ruimtelijke ordening. Sinds 2020 worden deze rapportages gebundeld in een omgevingshandhavingsrapportage.
        </p>`
}
__renderSideNavigation() {
    return html`
    <h5 is="vl-h5" data-vl-alt>Interessante links</h5>
    <ul is="vl-link-list">
      <li is="vl-link-list-item">
        <a is="vl-link" href="/">Analyseer de cijfers</a>
      </li>  
    </ul>`;
  }
__rendercurrentreport() {
  return html`
    <vl-typography data-cy="typography">
    <strong>Handhaving ruimtelijke ordening en milieu:</strong>
      <ul>
        <li><a href="https://publicaties.vlaanderen.be/view-file/72474" target ="new_blank">Omgevingshandhavingsrapport 2023</a></li>
        <li><a href="https://publicaties.vlaanderen.be/view-file/47164" target ="new_blank">Omgevingshandhavingsrapport 2020</a></li>
      </ul></vl-typography>
  `; 
}

  __renderTable() {
    return html`
    <section>
       <vl-typography data-cy="typography">
    <table>
        <thead>
            <tr>
                <th>Milieuhandhaving</th>
                <th>Handhaving ruimtelijke ordening</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="https://publicaties.vlaanderen.be/view-file/39658" target="new_blank">2019</a></td>
                <td><a href="https://publicaties.vlaanderen.be/view-file/39659" target="new_blank">2019</a></td>
            </tr>
            <tr>
                <td><a href="https://publicaties.vlaanderen.be/view-file/35272" target="new_blank">2018</a></td>
                <td><a href="https://publicaties.vlaanderen.be/view-file/35273" target="new_blank">2018</td>
            </tr>
            <tr>
                <td><a href="https://publicaties.vlaanderen.be/view-file/27805" target="new_blank">2017</a></td>
                <td><a href="https://publicaties.vlaanderen.be/view-file/24480" target="new_blank">2017</td>
            </tr>
            <tr>
                <td><a href="https://publicaties.vlaanderen.be/view-file/33294" target="new_blank">2016</a></td>
                <td><a href="https://publicaties.vlaanderen.be/view-file/24481" target="new_blank">2016</td>
            </tr>
            <tr>
                <td><a href="https://publicaties.vlaanderen.be/view-file/33296" target="new_blank">2015</a></td>
                <td><a href="https://publicaties.vlaanderen.be/view-file/24482" target="new_blank">2015</td>
            </tr>
            <tr>
                <td><a href="https://publicaties.vlaanderen.be/view-file/33297" target="new_blank">2014</a></td>
            </tr>
            <tr>
                <td><a href="https://publicaties.vlaanderen.be/view-file/33300" target="new_blank">2013</a></td>
            </tr>
            <tr>
                <td><a href="https://publicaties.vlaanderen.be/view-file/33301" target="new_blank">2012</a></td>
            </tr>
            <tr>
                <td><a href="https://publicaties.vlaanderen.be/view-file/33302" target="new_blank">2011</a></td>
            </tr>
            <tr>
                <td><a href="https://publicaties.vlaanderen.be/view-file/33305" target="new_blank">2010</a></td>
            </tr>
            <tr>
                <td><a href="https://publicaties.vlaanderen.be/view-file/33303" target="new_blank">2009</a></td>
            </tr>
        </tbody>
    </table>
</vl-typography>
      </section>`;
  }

}
customElements.define("ohr-omgevingshandhavingsrapporten", OhrOmgevingshandhavingsrapporten);
