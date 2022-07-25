import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/legacy/tabs";
import { page } from "../templates/page";

export class Start extends LitElement {
  
  render() {
    return page({
      children: html`
      <section is="vl-region">
    <div is="vl-layout" class="vl-layout">
        <div is="vl-grid" data-vl-align-center>
            <h3 is="vl-h3" data-vl-align-center>
                Omgevingshandhavingsuitvoering in 2021 in een notendop
            </h3>
            <div style="max-width: 800px">
                <img is="vl-image" sizes="100vw" src="assets/images/Presentation1.gif" alt="Infographic" />
            </div>
</section>


<section is="vl-region">
    <div is="vl-layout" class="vl-layout">
        <vl-typography>
            <h3 is="vl-h3">Naar de cijfers</h3>
        </vl-typography>
        <div is="vl-grid">
            <div style="max-width: 400px">
                <a is="vl-doormat" href="/public/gewestelijkanalyse" ?data-vl-alt="test">
                    <h2 is="vl-doormat-title">Cijfers gewestelijke actoren</h2>
                    <div is="vl-doormat-text">
                        In deze analyse worden de handhavingsactiviteiten van de gewestelijke handhavingsactoren weergegeven.
                    </div>
                </a>
            </div>
            <div style="max-width: 400px">
                <a is="vl-doormat" href="/public/provinciaalAnalyse" ?data-vl-alt="test">
                    <h2 is="vl-doormat-title">Cijfers provincies</h2>
                    <div is="vl-doormat-text">
                        In deze analyse worden de handhavingsactiviteiten van de provinciale handhavingsactoren weergegeven.
                    </div>
                </a>
            </div>
            <div style="max-width: 400px">
                <a is="vl-doormat" href="/public/gemeetenAnalyse" ?data-vl-alt="test">
                    <h2 is="vl-doormat-title">Cijfers gemeenten</h2>
                    <div is="vl-doormat-text">
                        In deze analyse worden de handhavingsactiviteiten van de lokale handhavingsactoren weergegeven.
                    </div>
                </a>
            </div>
        </div>
</section>

<section is="vl-region">
    <div is="vl-layout" class="vl-layout">
        <div is="vl-grid" data-vl-align-center>
            <vl-description-data data-vl-items-size=12 data-vl-items-max-size=4 data-vl-items-medium-size=4
                data-vl-items-medium-max-size=4 data-vl-items-small-size=4 data-vl-items-small-max-size=4
                data-vl-items-extra-small-size=4 data-vl-items-extra-small-max-size=4>
                <vl-description-data-item data-vl-label="Uitgever" data-vl-value="Departement Omgeving">
                </vl-description-data-item>
                <vl-description-data-item data-vl-label="Publicatiedatum" data-vl-value="Juli 2022">
                </vl-description-data-item>
                <vl-description-data-item data-vl-label="Publicatietype" data-vl-value="Webapplicatie">
                </vl-description-data-item>
                <vl-description-data-item data-vl-label="Categorie" data-vl-value="Handhaving">
                </vl-description-data-item>
            </vl-description-data>
        </div>
    </div>
</section>
  `,
      title: "Start",
    });
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("start-view", Start);
