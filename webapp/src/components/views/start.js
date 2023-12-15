import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/legacy/tabs";
import { page } from "../templates/page";

export class Start extends LitElement {

  render() { 

    return page({
      children: html
      `
        <section is="vl-region">
          <div is="vl-layout" class="vl-layout">
            <div is="vl-grid" data-vl-align-center>
              <h3 is="vl-h3" data-vl-align-center>
                Omgevingshandhavingsuitvoering in 2022 in een notendop
              </h3></div>

            <div is="vl-grid" data-vl-align-center>
              <h5 is="vl-h5" data-vl-align-center>
                Kies hieronder een weergave van de infographic
              </h5></div>
            <div is="vl-grid" data-vl-align-center>
              <div vl-column data-vl-align-space-between>
                <button is="vl-button" @click="${this._milieu}">
                  Bekijk voor milieuhandhaving
                </button>
              </div>
              <div vl-column data-vl-align-space-between>
                <button is="vl-button" @click="${this._ro}"> Bekijk voor
                  ruimtelijke ordening
                </button>
              </div>
            </div>

            <div is="vl-grid" class="data-top-bot" data-vl-align-center>
              <div style="max-width: 1000px max-height:850px">
                <img is="vl-image" sizes="250vw" id="pic"
                     src="assets/images/rsz_infographic_milieu.png"
                     alt="Infographic"/>
              </div>
            </div>
        </section>


        <section is="vl-region">
          <div is="vl-layout" class="vl-layout">
            <vl-typography>
              <h3 is="vl-h3">Naar de cijfers</h3>
            </vl-typography>
            <div is="vl-grid">
              <div style="max-width: 400px">
                <a is="vl-doormat" href="/public/gewestelijkAnalyse">
                  <h2 is="vl-doormat-title">Cijfers gewestelijke actoren</h2>
                  <div is="vl-doormat-text">
                    In deze analyse worden de handhavingsactiviteiten van de
                    gewestelijke handhavingsactoren weergegeven.
                  </div>
                </a>
              </div>
              <div style="max-width: 400px">
                <a is="vl-doormat" href="/public/provinciaalAnalyse">
                  <h2 is="vl-doormat-title">Cijfers provincies</h2>
                  <div is="vl-doormat-text">
                    In deze analyse worden de handhavingsactiviteiten van de
                    provinciale handhavingsactoren weergegeven.
                  </div>
                </a>
              </div>
              <div style="max-width: 400px">
                <a is="vl-doormat" href="/public/gemeenten">
                  <h2 is="vl-doormat-title">Cijfers gemeenten</h2>
                  <div is="vl-doormat-text">
                    In deze analyse worden de handhavingsactiviteiten van de
                    lokale handhavingsactoren weergegeven.
                  </div>
                </a>
              </div>
            </div>
        </section>

        <section is="vl-region">
          <div is="vl-layout" class="vl-layout">
            <div is="vl-grid" data-vl-align-center>
              <vl-description-data data-vl-items-size=12
                                   data-vl-items-max-size=4
                                   data-vl-items-medium-size=4
                                   data-vl-items-medium-max-size=4
                                   data-vl-items-small-size=4
                                   data-vl-items-small-max-size=4
                                   data-vl-items-extra-small-size=4
                                   data-vl-items-extra-small-max-size=4>
                <vl-description-data-item data-vl-label="Uitgever"
                                          data-vl-value="Departement Omgeving">
                </vl-description-data-item>
                <vl-description-data-item data-vl-label="Publicatiedatum"
                                          data-vl-value="April 2023">
                </vl-description-data-item>
                <vl-description-data-item data-vl-label="Publicatietype"
                                          data-vl-value="Webapplicatie">
                </vl-description-data-item>
                <vl-description-data-item data-vl-label="Categorie"
                                          data-vl-value="Handhaving">
                </vl-description-data-item>
              </vl-description-data>
            </div>
          </div>
        </section>
      `,
      title: "Start",
    });
  }
  

  _milieu(e) {
    var img1 = "assets/images/rsz_infographic_milieu.png"
    var img2 = "assets/images/rsz_infographic_ro.png"
    var page = document.getElementById("pic");
  if(page.src = img2) {
    page.src= img1
  }
  }
  _ro(e) {
    var img1 = "assets/images/rsz_infographic_milieu.png"
    var img2 = "assets/images/rsz_infographic_ro.png"
    var page = document.getElementById("pic");
  
  if(page.src = img1) {
    page.src= img2
  }
  }

}
customElements.define("start-view", Start);