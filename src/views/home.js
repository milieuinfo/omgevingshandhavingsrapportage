import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import { page } from "../templates/page";
import { embed } from '@nebula.js/stardust';
export class Home extends LitElement {
  render() {
    /*
     */
    return page({
      children: html`
      <section is="vl-region">
      <div is="vl-layout" class="vl-layout">
        <div is="vl-grid">
          <div is="vl-column">
            <h3 is="vl-h3">
              Omgevingshandhavingsrapportage
            </h3>
           
            <p is="vl-text" class="text-justify">
              Het decreet van 5 april 1995 houdende algemene bepalingen inzake milieubeleid (DABM) bepaalt in artikel
              16.2.3 dat gegevens over de omgevingshandhavingsuitvoering jaarlijks online worden gepubliceerd.
              <br /> Deze data bevatten een input- en outputweergave (handhavingsfiche) van de handhavingsactiviteiten in
              het kader van het DABM en de Vlaamse Codex Ruimtelijke Ordening (VCRO) van de handhavingsactoren in het
              Vlaamse gewest in het afgelopen jaar en hebben betrekking op de personele middelen die worden ingezet voor
              de handhavingsuitvoering en de inzet van de instrumenten die de handhavers ter beschikking hebben
              (controles, processen-verbaal, aanmaningen, …).Daarnaast worden ook data ter beschikking gesteld
              over de sanctionering, o.a. afkomstig van de parketten bij de rechtbanken van eerste aanleg en de
              gewestelijke beboetingsentiteit die instaat voor de bestuurlijke beboeting. Dit geeft een beeld over het
              verdere traject van de instrumenten proces-verbaal en verslag van vaststelling.
              <br /><br />Jaarlijks worden de handhavingsactoren in het Vlaamse Gewest op uniforme en gestandaardiseerde
              wijze bevraagd aangaande hun handhavingsactiviteiten in het voorgaande kalanderjaar.
            </p>
            <p is="vl-text">
              De data gepresenteerd in deze omgevingshandhavingsrapportage zijn de gegevens zoals ze worden aangeleverd
              door de handhavingsactoren zelf op basis van hun eigen monitoring. <br />De handhavingsactoren worden
              gevraagd “niet gekend” in te geven indien de gevraagde data niet beschikbaar zijn. Indien de gevraagde
              gegevens niet worden ingevuld, wordt automatisch “niet gekend” ingevuld. Indien de handhavingsactor niet
              ingaat op de bevraging, wordt deze actor als een non-respons weergegeven.
              <br /><br />Deze bevraging levert geen 100% responsgraad op, hetgeen implicaties heeft op de
              interpreteerbaarheid van de cijfergegevens. Wanneer totalen worden getoond, betreft dit steeds de
              gerapporteerde en enkel de gekende aantallen. Bij analyses van de data dient rekening te worden gehouden met
              deze beperking.
            </p>
  
            <p is="vl-text">
              De jaarlijkse invoer van de cijfers wordt verwacht in de periode april-juni. De gepresenteerde data hebben
              dan betrekking op het voorgaande kalenderjaar en op de handhavingsactiviteiten tussen 1 januari en 31
              december.<br /> Wanneer evoluties over meerdere jaren worden getoond, worden de jaartallen vermeld.
              De legende van de gebruikte iconen kan hier worden teruggevonden.
              In onderstaande infographic wordt de omgevingshandhavingsuitvoering in het Vlaamse Gewest in het
              voorbijgaande jaar in een notendop weergegeven.
            </p>
  
  
            </p>
          </div>
          <div is="vl-column" data-vl-size="4" data-vl-medium-size="4" data-vl-small-size="4"
            data-vl-extra-small-size="0">
            <nav is="vl-side-navigation" aria-label="inhoudsopgave">
              <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
              <div is="vl-side-navigation-content">
                <ul is="vl-side-navigation-group">
                  <li is="vl-side-navigation-item" data-vl-parent="content-1">
                    <a is="vl-side-navigation-toggle" href="#content-1" data-vl-child="content-1">
                      Inleiding
                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                    </a>
                  </li>
                  <li is="vl-side-navigation-item" data-vl-parent="content-2">
                    <a is="vl-side-navigation-toggle" href="#content-2" data-vl-child="content-2">
                      Infographic
                      <i class="vl-vi vl-vi-arrow-right-fat"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
  
      </div>
    </section>
    `
    ,
      title: "Omgevingshandhavingsrapportage 2021",
    });
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("home-view", Home);
