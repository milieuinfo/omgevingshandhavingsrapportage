import {html, LitElement} from "../common/commons.js";
import {Qlik} from "@domg/qlik-lib";
import {vlElementsStyle} from "@domg-wc/elements";
import viz_gewest from "../config/milieuhandhaving.json" assert {type: "json"};
import { VlCascaderComponent } from '@domg-wc/components';

import "@domg-wc/elements/image";
import "@domg-wc/elements/grid";
import "@domg-wc/elements/title";
import "@domg-wc/components/content-header";
import "@domg-wc/components/loader";
import "@domg-wc/qlik/infoblock";

class OhrAGewest extends LitElement {

  static get styles() {
    return [
      ...vlElementsStyle
    ]
  }

  static get properties() {
    return {
      connected: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.initialized = false;
    this.connected = false;
  }

  async connectedCallback() {
    this.connection = new Qlik("omgevingsloketrapport.omgeving.vlaanderen.be",
        "9b0d0715-eee5-41b0-bd90-addafee7e99e");
    await this.connection.init();
    this.connection.app.on('closed', () => this.closed = true);

    this.connected = true;
    super.connectedCallback();
  }

  render() {
    return html`
    <vl-functional-header
    data-vl-back="Terug"
    data-vl-back-link="/"
    data-vl-title="Gewestelijke handhavingsactoren"
    data-vl-sub-title="Omgevingshandhavingsrapportage"
    data-vl-link="/">
    </vl-functional-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${this.__renderPage()}
        </div>
      </section>`;
  }

  renderDataSection(label, data) {
    return html`
                        <table is="vl-data-table">
                            <thead>
                                <tr>
                                    <th>Instrument</th>
                                    <th>Waarde</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${Object.entries(data).map(([key, value]) => {
                                    if (typeof value === 'object') {
                                        return html`
                                            <tr>
                                                <td data-title="${key}">${key}</td>
                                                <td data-title="Totaal VTE">${value.value} (relatief ${value.relative})</td>
                                            </tr>
                                        `;
                                    } else {
                                        return html`
                                            <tr>
                                                <td data-title="${key}">${key}</td>
                                                <td data-title="Totaal VTE">${value}</td>
                                            </tr>
                                        `;
                                    }
                                })}
                            </tbody>
                        </table>
                        <br>
                        <vl-alert
    data-cy="alert"
    data-vl-naked=""
    data-vl-icon="info"
    data-vl-title="Opgelet!"
    data-vl-type="info"
    data-vl-message="Bovenstaande cijfers gaan over het laatste bevragingsjaar: 2023"
>
</vl-alert>
                        <p><a href="#">Download de cijfers voor ${label} van alle actoren over de jaren heen</a></p>
    `;
}

  __renderPage() {
    if (!this.connected) {
      return html`
        <vl-loader
            data-vl-text="Pagina is aan het laden"
        ></vl-loader>`;
    }
    const jsonData = {
      gewestelijkeToezichthouders: {
          Toezichthouders: 91,
          VTE: 2.1,
          "VTE Toezichthouders": {
              value: 2,
              relative: "95%"
          },
          "VTE Administratieve en juridische administratie": {
              value: 0.1,
              relative: "5%"
          }
      },
      klachten: {
          "Aantal klachten": 1340,
          "Afval": 
            {
              value: 311,
              relative: "95%"
            },
          "Andere": {
              value: 6,
              relative: "95%"
          },
          "Bodem": {
              value: 4.1,
              relative: "5%"
          },
          "Geluid": {
            value: 4.1,
            relative: "5%"
          },
          "Lucht": {
          value: 4.1,
          relative: "5%"
          },
         "Mest": {
        value: 4.1,
        relative: "5%"
        },
        "Milieubeheer": {
        value: 4.1,
        relative: "5%"
      },
      "Vergunning": {
        value: 4.1,
        relative: "5%"
      },
      "Water": {
        value: 4.1,
        relative: "5%"
      },
      }
  };

    return html`
    <vl-typography>
    <h2>Kies hier een gewestelijke actor</h2></vl-typography>

    <vl-cascader>
    <vl-cascader-item label="Agentschap Martieme Dienstverlening en Kust">
        <vl-cascader-item label="Milieu">
            <vl-cascader-item label="Gewestelijke toezichthouders en VTE">
              <vl-cascader-item label="Cijfers Gewestelijke toezichthouders en VTE van 2023" template-type="provincie">
                  <vl-info-tile slot="content">
                      <div slot="content">
                      ${this.renderDataSection("Gewestelijke toezichthouders", jsonData.gewestelijkeToezichthouders)}
                  <br>
                      </div>
                  </vl-info-tile>
                </vl-cascader-item>
                </vl-cascader-item>
                <vl-cascader-item label="Klachten">
                <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
                    <vl-info-tile slot="content">
                        <div slot="content">
                        ${this.renderDataSection("Cijfers klachten van 2023", jsonData.klachten)}
                        </div>
                    </vl-info-tile>
                  </vl-cascader-item>
                  </vl-cascader-item>

                  <vl-cascader-item label="Controles">
                  <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
                      <vl-info-tile data-vl-toggleable="" slot="content">
                          <span slot="title">Meer Info</span>
                          <span slot="subtitle">Provincie Beschrijving</span>
                          <div slot="content">
                          <tbody>
                          <tr>
                              <td data-title="Toezichthouders">Toezichthouders</td>
                              <td data-title="Totaal VTE">91</td>
                          </tr>
                          <tr>
                              <td data-title="Toezichthouders">VTE</td>
                              <td data-title="Totaal VTE">2,1</td>
                          </tr>
                          <tr>
                          <td data-title="VTEToezicht">VTE toezichthouders </td>
                          <td data-title="Totaal VTE">2 (relatief 95%)</td>
                      </tr>
                      <tr>
                          <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                          <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
                      </tr>
                      </tbody>
                          </div>
                      </vl-info-tile>
                    </vl-cascader-item>
                    </vl-cascader-item>

                    <vl-cascader-item label="Aanvankelijke controles met schending">
                    <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
                        <vl-info-tile data-vl-toggleable="" slot="content">
                            <span slot="title">Meer Info</span>
                            <span slot="subtitle">Provincie Beschrijving</span>
                            <div slot="content">
                            <tbody>
                            <tr>
                                <td data-title="Toezichthouders">Toezichthouders</td>
                                <td data-title="Totaal VTE">91</td>
                            </tr>
                            <tr>
                                <td data-title="Toezichthouders">VTE</td>
                                <td data-title="Totaal VTE">2,1</td>
                            </tr>
                            <tr>
                            <td data-title="VTEToezicht">VTE toezichthouders </td>
                            <td data-title="Totaal VTE">2 (relatief 95%)</td>
                        </tr>
                        <tr>
                            <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                            <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
                        </tr>
                        </tbody>
                            </div>
                        </vl-info-tile>
                      </vl-cascader-item>
                      </vl-cascader-item>

                      <vl-cascader-item label="Aanvankelijke controles met schending">
                      <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
                          <vl-info-tile data-vl-toggleable="" slot="content">
                              <span slot="title">Meer Info</span>
                              <span slot="subtitle">Provincie Beschrijving</span>
                              <div slot="content">
                              <tbody>
                          <tr>
                              <td data-title="Toezichthouders">Toezichthouders</td>
                              <td data-title="Totaal VTE">91</td>
                          </tr>
                          <tr>
                              <td data-title="Toezichthouders">VTE</td>
                              <td data-title="Totaal VTE">2,1</td>
                          </tr>
                          <tr>
                          <td data-title="VTEToezicht">VTE toezichthouders </td>
                          <td data-title="Totaal VTE">2 (relatief 95%)</td>
                      </tr>
                      <tr>
                          <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                          <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
                      </tr>
                      </tbody>
                              </div>
                          </vl-info-tile>
                        </vl-cascader-item>
                        </vl-cascader-item>

                        <vl-cascader-item label="Instrumentarium">
                        <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
                            <vl-info-tile data-vl-toggleable="" slot="content">
                                <span slot="title">Meer Info</span>
                                <span slot="subtitle">Provincie Beschrijving</span>
                                <div slot="content">
                                <tbody>
                                <tr>
                                    <td data-title="Toezichthouders">Toezichthouders</td>
                                    <td data-title="Totaal VTE">91</td>
                                </tr>
                                <tr>
                                    <td data-title="Toezichthouders">VTE</td>
                                    <td data-title="Totaal VTE">2,1</td>
                                </tr>
                                <tr>
                                <td data-title="VTEToezicht">VTE toezichthouders </td>
                                <td data-title="Totaal VTE">2 (relatief 95%)</td>
                            </tr>
                            <tr>
                                <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                                <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
                            </tr>
                            </tbody>
                                </div>
                            </vl-info-tile>
                          </vl-cascader-item>
                          </vl-cascader-item>
                </vl-cascader-item>
            <vl-cascader-item label="Ruimtelijke ordening">
            <vl-cascader-item label="Verbalisanten en stedenbouwkundige inspecteurs en VTE">
              <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
                  <vl-info-tile data-vl-toggleable="" slot="content">
                      <span slot="title">Meer Info</span>
                      <span slot="subtitle">Provincie Beschrijving</span>
                      <div slot="content">
                      <tbody>
                      <tr>
                          <td data-title="Toezichthouders">Toezichthouders</td>
                          <td data-title="Totaal VTE">91</td>
                      </tr>
                      <tr>
                          <td data-title="Toezichthouders">VTE</td>
                          <td data-title="Totaal VTE">2,1</td>
                      </tr>
                      <tr>
                      <td data-title="VTEToezicht">VTE toezichthouders </td>
                      <td data-title="Totaal VTE">2 (relatief 95%)</td>
                  </tr>
                  <tr>
                      <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                      <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
                  </tr>
                  </tbody>
                      </div>
                  </vl-info-tile>
                </vl-cascader-item>
                </vl-cascader-item>

                <vl-cascader-item label="Klachten">
              <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
                  <vl-info-tile data-vl-toggleable="" slot="content">
                      <span slot="title">Meer Info</span>
                      <span slot="subtitle">Provincie Beschrijving</span>
                      <div slot="content">
                      <tbody>
                      <tr>
                          <td data-title="Toezichthouders">Toezichthouders</td>
                          <td data-title="Totaal VTE">91</td>
                      </tr>
                      <tr>
                          <td data-title="Toezichthouders">VTE</td>
                          <td data-title="Totaal VTE">2,1</td>
                      </tr>
                      <tr>
                      <td data-title="VTEToezicht">VTE toezichthouders </td>
                      <td data-title="Totaal VTE">2 (relatief 95%)</td>
                  </tr>
                  <tr>
                      <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                      <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
                  </tr>
                  </tbody>
                      </div>
                  </vl-info-tile>
                </vl-cascader-item>
                </vl-cascader-item>

                <vl-cascader-item label="Controles">
              <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
                  <vl-info-tile data-vl-toggleable="" slot="content">
                      <span slot="title">Meer Info</span>
                      <span slot="subtitle">Provincie Beschrijving</span>
                      <div slot="content">
                      <tbody>
                      <tr>
                          <td data-title="Toezichthouders">Toezichthouders</td>
                          <td data-title="Totaal VTE">91</td>
                      </tr>
                      <tr>
                          <td data-title="Toezichthouders">VTE</td>
                          <td data-title="Totaal VTE">2,1</td>
                      </tr>
                      <tr>
                      <td data-title="VTEToezicht">VTE toezichthouders </td>
                      <td data-title="Totaal VTE">2 (relatief 95%)</td>
                  </tr>
                  <tr>
                      <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                      <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
                  </tr>
                  </tbody>
                      </div>
                  </vl-info-tile>
                </vl-cascader-item>
                </vl-cascader-item>

                <vl-cascader-item label="Aantal aanvankelijke controles met schending">
              <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
                  <vl-info-tile data-vl-toggleable="" slot="content">
                      <span slot="title">Meer Info</span>
                      <span slot="subtitle">Provincie Beschrijving</span>
                      <div slot="content">
                      <tbody>
                      <tr>
                          <td data-title="Toezichthouders">Toezichthouders</td>
                          <td data-title="Totaal VTE">91</td>
                      </tr>
                      <tr>
                          <td data-title="Toezichthouders">VTE</td>
                          <td data-title="Totaal VTE">2,1</td>
                      </tr>
                      <tr>
                      <td data-title="VTEToezicht">VTE toezichthouders </td>
                      <td data-title="Totaal VTE">2 (relatief 95%)</td>
                  </tr>
                  <tr>
                      <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                      <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
                  </tr>
                  </tbody>
                      </div>
                  </vl-info-tile>
                </vl-cascader-item>
                </vl-cascader-item>

                <vl-cascader-item label="Instrumentarium">
                <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
                    <vl-info-tile data-vl-toggleable="" slot="content">
                        <span slot="title">Meer Info</span>
                        <span slot="subtitle">Provincie Beschrijving</span>
                        <div slot="content">
                        <tbody>
                        <tr>
                            <td data-title="Toezichthouders">Toezichthouders</td>
                            <td data-title="Totaal VTE">91</td>
                        </tr>
                        <tr>
                            <td data-title="Toezichthouders">VTE</td>
                            <td data-title="Totaal VTE">2,1</td>
                        </tr>
                        <tr>
                        <td data-title="VTEToezicht">VTE toezichthouders </td>
                        <td data-title="Totaal VTE">2 (relatief 95%)</td>
                    </tr>
                    <tr>
                        <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                        <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
                    </tr>
                    </tbody>
                        </div>
                    </vl-info-tile>
                  </vl-cascader-item>
                  </vl-cascader-item>
            
            
            </vl-cascader-item>
      </vl-cascader-item>
      <vl-cascader-item label="Agentschap Natuur en Bos">
      <vl-cascader-item label="Milieu">
          <vl-cascader-item label="Klachten">
            <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
                <vl-info-tile data-vl-toggleable="" slot="content">
                    <span slot="title">Meer Info</span>
                    <span slot="subtitle">Provincie Beschrijving</span>
                    <div slot="content">
                    <tbody>
                    <tr>
                        <td data-title="Toezichthouders">Toezichthouders</td>
                        <td data-title="Totaal VTE">91</td>
                    </tr>
                    <tr>
                        <td data-title="Toezichthouders">VTE</td>
                        <td data-title="Totaal VTE">2,1</td>
                    </tr>
                    <tr>
                    <td data-title="VTEToezicht">VTE toezichthouders </td>
                    <td data-title="Totaal VTE">2 (relatief 95%)</td>
                </tr>
                <tr>
                    <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                    <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
                </tr>
                </tbody>
                    </div>
                </vl-info-tile>
              </vl-cascader-item>
              </vl-cascader-item>
              </vl-cascader-item>
          <vl-cascader-item label="Ruimtelijke ordening"></vl-cascader-item>
    </vl-cascader-item>
    <vl-cascader-item label="Agentschap Wegen en Verkeer">
    <vl-cascader-item label="Milieu">
        <vl-cascader-item label="Klachten">
          <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
              <vl-info-tile data-vl-toggleable="" slot="content">
                  <span slot="title">Meer Info</span>
                  <span slot="subtitle">Provincie Beschrijving</span>
                  <div slot="content">
                  <tbody>
                          <tr>
                              <td data-title="Toezichthouders">Toezichthouders</td>
                              <td data-title="Totaal VTE">91</td>
                          </tr>
                          <tr>
                              <td data-title="Toezichthouders">VTE</td>
                              <td data-title="Totaal VTE">2,1</td>
                          </tr>
                          <tr>
                          <td data-title="VTEToezicht">VTE toezichthouders </td>
                          <td data-title="Totaal VTE">2 (relatief 95%)</td>
                      </tr>
                      <tr>
                          <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                          <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
                      </tr>
                      </tbody>
                  </div>
              </vl-info-tile>
            </vl-cascader-item>
            </vl-cascader-item>
            </vl-cascader-item>
        <vl-cascader-item label="Ruimtelijke ordening"></vl-cascader-item>
  </vl-cascader-item>
  <vl-cascader-item label="De Vlaamse Waterweg">
    <vl-cascader-item label="Milieu">
        <vl-cascader-item label="Klachten">
          <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
              <vl-info-tile data-vl-toggleable="" slot="content">
                  <span slot="title">Meer Info</span>
                  <span slot="subtitle">Provincie Beschrijving</span>
                  <div slot="content">
                  <tbody>
                  <tr>
                      <td data-title="Toezichthouders">Toezichthouders</td>
                      <td data-title="Totaal VTE">91</td>
                  </tr>
                  <tr>
                      <td data-title="Toezichthouders">VTE</td>
                      <td data-title="Totaal VTE">2,1</td>
                  </tr>
                  <tr>
                  <td data-title="VTEToezicht">VTE toezichthouders </td>
                  <td data-title="Totaal VTE">2 (relatief 95%)</td>
              </tr>
              <tr>
                  <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                  <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
              </tr>
              </tbody>
                  </div>
              </vl-info-tile>
            </vl-cascader-item>
            </vl-cascader-item>
            </vl-cascader-item>
        <vl-cascader-item label="Ruimtelijke ordening"></vl-cascader-item>
  </vl-cascader-item>
  <vl-cascader-item label="Departement Mobiliteit en Openbare Werken">
  <vl-cascader-item label="Milieu">
      <vl-cascader-item label="Klachten">
        <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
            <vl-info-tile data-vl-toggleable="" slot="content">
                <span slot="title">Meer Info</span>
                <span slot="subtitle">Provincie Beschrijving</span>
                <div slot="content">
                <tbody>
                <tr>
                    <td data-title="Toezichthouders">Toezichthouders</td>
                    <td data-title="Totaal VTE">91</td>
                </tr>
                <tr>
                    <td data-title="Toezichthouders">VTE</td>
                    <td data-title="Totaal VTE">2,1</td>
                </tr>
                <tr>
                <td data-title="VTEToezicht">VTE toezichthouders </td>
                <td data-title="Totaal VTE">2 (relatief 95%)</td>
            </tr>
            <tr>
                <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
            </tr>
            </tbody>
                </div>
            </vl-info-tile>
          </vl-cascader-item>
          </vl-cascader-item>
          </vl-cascader-item>
      <vl-cascader-item label="Ruimtelijke ordening"></vl-cascader-item>
</vl-cascader-item>
<vl-cascader-item label="Departement Omgeving - afdeling Handhaving">
  <vl-cascader-item label="Milieu">
      <vl-cascader-item label="Klachten">
        <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
            <vl-info-tile data-vl-toggleable="" slot="content">
                <span slot="title">Meer Info</span>
                <span slot="subtitle">Provincie Beschrijving</span>
                <div slot="content">
                <tbody>
                <tr>
                    <td data-title="Toezichthouders">Toezichthouders</td>
                    <td data-title="Totaal VTE">91</td>
                </tr>
                <tr>
                    <td data-title="Toezichthouders">VTE</td>
                    <td data-title="Totaal VTE">2,1</td>
                </tr>
                <tr>
                <td data-title="VTEToezicht">VTE toezichthouders </td>
                <td data-title="Totaal VTE">2 (relatief 95%)</td>
            </tr>
            <tr>
                <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
            </tr>
            </tbody>
                </div>
            </vl-info-tile>
          </vl-cascader-item>
          </vl-cascader-item>
          </vl-cascader-item>
      <vl-cascader-item label="Ruimtelijke ordening"></vl-cascader-item>
</vl-cascader-item>
<vl-cascader-item label="Departement Omgeving - afdeling GOP">
  <vl-cascader-item label="Milieu">
      <vl-cascader-item label="Klachten">
        <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
            <vl-info-tile data-vl-toggleable="" slot="content">
                <span slot="title">Meer Info</span>
                <span slot="subtitle">Provincie Beschrijving</span>
                <div slot="content">
                <tbody>
                <tr>
                    <td data-title="Toezichthouders">Toezichthouders</td>
                    <td data-title="Totaal VTE">91</td>
                </tr>
                <tr>
                    <td data-title="Toezichthouders">VTE</td>
                    <td data-title="Totaal VTE">2,1</td>
                </tr>
                <tr>
                <td data-title="VTEToezicht">VTE toezichthouders </td>
                <td data-title="Totaal VTE">2 (relatief 95%)</td>
            </tr>
            <tr>
                <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
            </tr>
            </tbody>
                </div>
            </vl-info-tile>
          </vl-cascader-item>
          </vl-cascader-item>
          </vl-cascader-item>
      <vl-cascader-item label="Ruimtelijke ordening"></vl-cascader-item>
</vl-cascader-item>
<vl-cascader-item label="Departement Omgeving - afdeling VPO">
  <vl-cascader-item label="Milieu">
      <vl-cascader-item label="Klachten">
        <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
            <vl-info-tile data-vl-toggleable="" slot="content">
                <span slot="title">Meer Info</span>
                <span slot="subtitle">Provincie Beschrijving</span>
                <div slot="content">
                <tbody>
                <tr>
                    <td data-title="Toezichthouders">Toezichthouders</td>
                    <td data-title="Totaal VTE">91</td>
                </tr>
                <tr>
                    <td data-title="Toezichthouders">VTE</td>
                    <td data-title="Totaal VTE">2,1</td>
                </tr>
                <tr>
                <td data-title="VTEToezicht">VTE toezichthouders </td>
                <td data-title="Totaal VTE">2 (relatief 95%)</td>
            </tr>
            <tr>
                <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
            </tr>
            </tbody>
                </div>
            </vl-info-tile>
          </vl-cascader-item>
          </vl-cascader-item>
          </vl-cascader-item>
      <vl-cascader-item label="Ruimtelijke ordening"></vl-cascader-item>
</vl-cascader-item>
<vl-cascader-item label="Openbare Vlaamse Afvalstoffenmaatschappij">
  <vl-cascader-item label="Milieu">
      <vl-cascader-item label="Klachten">
        <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
            <vl-info-tile data-vl-toggleable="" slot="content">
                <span slot="title">Meer Info</span>
                <span slot="subtitle">Provincie Beschrijving</span>
                <div slot="content">
                <tbody>
                          <tr>
                              <td data-title="Toezichthouders">Toezichthouders</td>
                              <td data-title="Totaal VTE">91</td>
                          </tr>
                          <tr>
                              <td data-title="Toezichthouders">VTE</td>
                              <td data-title="Totaal VTE">2,1</td>
                          </tr>
                          <tr>
                          <td data-title="VTEToezicht">VTE toezichthouders </td>
                          <td data-title="Totaal VTE">2 (relatief 95%)</td>
                      </tr>
                      <tr>
                          <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                          <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
                      </tr>
                      </tbody>
                </div>
            </vl-info-tile>
          </vl-cascader-item>
          </vl-cascader-item>
          </vl-cascader-item>
      <vl-cascader-item label="Ruimtelijke ordening"></vl-cascader-item>
</vl-cascader-item>
<vl-cascader-item label="Vlaams Agenschap Zorg en Gezondheid">
  <vl-cascader-item label="Milieu">
      <vl-cascader-item label="Klachten">
        <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
            <vl-info-tile data-vl-toggleable="" slot="content">
                <span slot="title">Meer Info</span>
                <span slot="subtitle">Provincie Beschrijving</span>
                <div slot="content">
                <tbody>
                <tr>
                    <td data-title="Toezichthouders">Toezichthouders</td>
                    <td data-title="Totaal VTE">91</td>
                </tr>
                <tr>
                    <td data-title="Toezichthouders">VTE</td>
                    <td data-title="Totaal VTE">2,1</td>
                </tr>
                <tr>
                <td data-title="VTEToezicht">VTE toezichthouders </td>
                <td data-title="Totaal VTE">2 (relatief 95%)</td>
            </tr>
            <tr>
                <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
            </tr>
            </tbody>
                </div>
            </vl-info-tile>
          </vl-cascader-item>
          </vl-cascader-item>
          </vl-cascader-item>
      <vl-cascader-item label="Ruimtelijke ordening"></vl-cascader-item>
</vl-cascader-item>
<vl-cascader-item label="Vlaamse energie -en Klimaat Agentschap">
  <vl-cascader-item label="Milieu">
      <vl-cascader-item label="Klachten">
        <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
            <vl-info-tile data-vl-toggleable="" slot="content">
                <span slot="title">Meer Info</span>
                <span slot="subtitle">Provincie Beschrijving</span>
                <div slot="content">
                <tbody>
                <tr>
                    <td data-title="Toezichthouders">Toezichthouders</td>
                    <td data-title="Totaal VTE">91</td>
                </tr>
                <tr>
                    <td data-title="Toezichthouders">VTE</td>
                    <td data-title="Totaal VTE">2,1</td>
                </tr>
                <tr>
                <td data-title="VTEToezicht">VTE toezichthouders </td>
                <td data-title="Totaal VTE">2 (relatief 95%)</td>
            </tr>
            <tr>
                <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
            </tr>
            </tbody>
                </div>
            </vl-info-tile>
          </vl-cascader-item>
          </vl-cascader-item>
          </vl-cascader-item>
      <vl-cascader-item label="Ruimtelijke ordening"></vl-cascader-item>
</vl-cascader-item>
<vl-cascader-item label="Vlaamse Landmaatschapij">
  <vl-cascader-item label="Milieu">
      <vl-cascader-item label="Klachten">
        <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
            <vl-info-tile data-vl-toggleable="" slot="content">
                <span slot="title">Meer Info</span>
                <span slot="subtitle">Provincie Beschrijving</span>
                <div slot="content">
                <tbody>
                <tr>
                    <td data-title="Toezichthouders">Toezichthouders</td>
                    <td data-title="Totaal VTE">91</td>
                </tr>
                <tr>
                    <td data-title="Toezichthouders">VTE</td>
                    <td data-title="Totaal VTE">2,1</td>
                </tr>
                <tr>
                <td data-title="VTEToezicht">VTE toezichthouders </td>
                <td data-title="Totaal VTE">2 (relatief 95%)</td>
            </tr>
            <tr>
                <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
            </tr>
            </tbody>
                </div>
            </vl-info-tile>
          </vl-cascader-item>
          </vl-cascader-item>
          </vl-cascader-item>
      <vl-cascader-item label="Ruimtelijke ordening"></vl-cascader-item>
</vl-cascader-item>
<vl-cascader-item label="Vlaamse Milieumaatschappij">
  <vl-cascader-item label="Milieu">
      <vl-cascader-item label="Klachten">
        <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
            <vl-info-tile data-vl-toggleable="" slot="content">
                <span slot="title">Meer Info</span>
                <span slot="subtitle">Provincie Beschrijving</span>
                <div slot="content">
                <tbody>
                <tr>
                    <td data-title="Toezichthouders">Toezichthouders</td>
                    <td data-title="Totaal VTE">91</td>
                </tr>
                <tr>
                    <td data-title="Toezichthouders">VTE</td>
                    <td data-title="Totaal VTE">2,1</td>
                </tr>
                <tr>
                <td data-title="VTEToezicht">VTE toezichthouders </td>
                <td data-title="Totaal VTE">2 (relatief 95%)</td>
            </tr>
            <tr>
                <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
            </tr>
            </tbody>
                </div>
            </vl-info-tile>
          </vl-cascader-item>
    </vl-cascader-item>
    </vl-cascader-item>
    <vl-cascader-item label="Ruimtelijke ordening"></vl-cascader-item>
</vl-cascader-item>
<vl-cascader-item label="Vlaamse Wooninspectie">
  <vl-cascader-item label="Milieu">
      <vl-cascader-item label="Klachten">
        <vl-cascader-item label="Cijfers klachten van 2023" template-type="provincie">
            <vl-info-tile data-vl-toggleable="" slot="content">
                <span slot="title">Meer Info</span>
                <span slot="subtitle">Provincie Beschrijving</span>
                <div slot="content">
                <tbody>
                <tr>
                    <td data-title="Toezichthouders">Toezichthouders</td>
                    <td data-title="Totaal VTE">91</td>
                </tr>
                <tr>
                    <td data-title="Toezichthouders">VTE</td>
                    <td data-title="Totaal VTE">2,1</td>
                </tr>
                <tr>
                <td data-title="VTEToezicht">VTE toezichthouders </td>
                <td data-title="Totaal VTE">2 (relatief 95%)</td>
            </tr>
            <tr>
                <td data-title="VTEToezicht">VTE administratieve en juridische toezichthouders</td>
                <td data-title="Totaal VTE">0,1 (relatief 5%)</td>
            </tr>
            </tbody>
                </div>
            </vl-info-tile>
          </vl-cascader-item>
          </vl-cascader-item>
          </vl-cascader-item>
      <vl-cascader-item label="Ruimtelijke ordening"></vl-cascader-item>
</vl-cascader-item>
</vl-cascader>


`;
/*
      <div is="vl-grid">
        <div is="vl-column" data-vl-size="12">
          ${this.tiles.map(tile => html`
            <vl-qlik-infoblock title="${tile.title}"
                            icon="business-graph-bar"
                            .visuals="${tile.vis}"
                            .connection="${this.connection}">
              <span>${tile.intro}</span>
            </vl-qlik-infoblock>
          `)}
        </div>
      </div>`; */
  }
}

customElements.define("ohr-agewest", OhrAGewest);
