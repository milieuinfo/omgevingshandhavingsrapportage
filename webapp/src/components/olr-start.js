import {define, html, LitElement, renderStack} from "./common/commons.js";
import {Router} from "@vaadin/router";
import {START_URL} from "./config/iframes.js";

class OlrStart extends LitElement {

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <vl-content-header>
        <img is="vl-image"
            slot="image"
            src="/images/header.jpg"
            alt="hoofding afbeelding website" />
        <a slot="context-link" href="https://omgeving.vlaanderen.be/">Omgevingshandhavingsrapportage</a>
        <a slot="title-link" href="/">Handhaving</a>
      </vl-content-header>
      <section is="vl-region">
        <div is="vl-layout">
          ${renderStack(
              {
                size: 8,
                template: html`<h1 is="vl-h1"  data-vl-no-space-bottom>
                  Omgevingshandhavingsrapportage
                </h1>`,
              },
              {
                size: 8,
                template: this.__renderIntroduction(),
              },
              {
                size: 4,
                template: this.__renderSideNavigation(),
              },
              {
                size: 12,
                template: this.__renderProcedures(),
              },
              {
                size: 12,
                template: this.__renderThemas(),
              },
              {
                size: 12,
                template: this.__renderSpotlight(),
              },
              {
                size: 12,
                template: this.__renderInfo(),
              },
          )}
        </div>
      </section>`;
  }

  __renderIntroduction() {
    return html`
      <div>
        <p is="vl-introduction">
        Het decreet van 5 april 1995 houdende algemene bepalingen inzake milieubeleid (DABM)
        bepaalt in artikel
        16.2.3 dat gegevens over de omgevingshandhavingsuitvoering jaarlijks online worden
        gepubliceerd.
        <br /> Deze data bevatten een input- en outputweergave (handhavingsfiche) van de
        handhavingsactiviteiten in
        het kader van het DABM en de Vlaamse Codex Ruimtelijke Ordening (VCRO) van de
        handhavingsactoren in het
        Vlaamse gewest in het afgelopen jaar en hebben betrekking op de personele middelen die
        worden ingezet voor
        de handhavingsuitvoering en de inzet van de instrumenten die de handhavers ter
        beschikking hebben
        (controles, processen-verbaal, aanmaningen, …).Daarnaast worden ook data ter beschikking
        gesteld
        over de sanctionering, o.a. afkomstig van de parketten bij de rechtbanken van eerste
        aanleg en de
        gewestelijke beboetingsentiteit die instaat voor de bestuurlijke beboeting. Dit geeft
        een beeld over het
        verdere traject van de instrumenten proces-verbaal en verslag van vaststelling.
        <br /><br />Jaarlijks worden de handhavingsactoren in het Vlaamse Gewest op uniforme en
        gestandaardiseerde
        wijze bevraagd aangaande hun handhavingsactiviteiten in het voorgaande kalanderjaar.
        </p>
      </div>
      <br/>
      <vl-alert
      data-vl-icon="business-graph-pie"
      data-vl-title="Interactieve webtoepassing"
      data-vl-type="info">
      <p>Deze website is niet statisch, maandelijks worden de cijfers
      geactualiseerd. <br/> Het Departement Omgeving maakt zo verder werk van een
      digitale en datagedreven overheid.</p>
    </vl-alert>`;
  }

  __renderSideNavigation() {
    return html`    
      <h5 is="vl-h5" data-vl-alt>Interessante links</h5>
      <ul is="vl-link-list">
        <li is="vl-link-list-item">
          <a target="_new_blank" is="vl-link"
             href="https://indicatoren.omgeving.vlaanderen.be/onderwerpen/instrumenten">
            *Aanvullen*
          </a>
        </li>
        <li is="vl-link-list-item">
          <a target="_new_blank" is="vl-link"
             href="https://www.omgevingsloketvlaanderen.be/">
            *Aanvullen*
          </a>
        </li>
        <li is="vl-link-list-item">
          <a target="_new_blank" is="vl-link"
             href="https://researchportal.be/nl/search?f%5B0%5D=fris_content_type%3Apublication&f%5B1%5D=fris_knowledge_institution%3A8269802&search_api_fulltext=omgevingsvergunningendecreet&items_per_page=10&sort=search_api_relevance&order=desc">
            *Aanvullen*
          </a>
        </li>
      </ul>`;
  }

  __renderThemas() {
    return renderStack(
        {
          size: 12,
          template: html`
            <h3 is="vl-h3" data-vl-alt>Jaarrapportage</h3>
          `
        },
        {
          size: 12,
          template: html`
            <p>
              *Aanvullen*
            </p>
          `
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat"
               href="/gewest">
              <h2 is="vl-doormat-title">Gewest</h2>
              <div is="vl-doormat-text">
            *Aanvullen*
              </div>
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat"
               href="/provincie">
              <h2 is="vl-doormat-title">Provincies</h2>
              <div is="vl-doormat-text">
            *Aanvullen*
              </div>
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat"
               href="/gemeente">
              <h2 is="vl-doormat-title">Gemeenten</h2>
              <div is="vl-doormat-text">
           *Aanvullen*
              </div>
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat"
               href="/hogeraad">
              <h2 is="vl-doormat-title">Hoge Raad</h2>
              <div is="vl-doormat-text">
           *Aanvullen*
              </div>
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat"
               href="/strafrechtelijk">
              <h2 is="vl-doormat-title">Strafrechtelijke en bestuurlijke vervolgtraject</h2>
              <div is="vl-doormat-text">
            *Aanvullen*
              </div>
            </a>
            </div>`,
        },
    )
  }

  __renderProcedures() {
    return renderStack(
        {
          size: 12,
          template: html`
            <h3 is="vl-h3" data-vl-alt>Meer Jaren rapportage</h3>
          `
        },
        {
          size: 12,
          template: html`
            <p>
            Milieuhandhaving is een belangrijk onderdeel van de bredere inspanning om onze natuurlijke hulpbronnen te beschermen en duurzaamheid te bevorderen. 
            Eén van de manieren waarop dit gebeurt, is door het opstellen van meerjarenrapportages. 
            Deze rapporten geven een diepgaand overzicht van de prestaties over een aantal jaren op het gebied van milieuhandhaving, en helpen bij het beoordelen van de voortgang en het identificeren van gebieden die verbetering behoeven.
            </p>
          `
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat"
               href="/personeel">
              <h2 is="vl-doormat-title">Personeel</h2>
              <div is="vl-doormat-text">
              Dankzij dit dashboard kunt u de verdeling van voltijdsequivalenten (VTE) binnen onze organisatie volgen, van het totale aantal werknemers tot het specifieke aantal VTE's toegewezen aan toezichthoudende rollen. 
              </div>
              <img
              is="vl-doormat-image"
              src='https://images.pexels.com/photos/9543743/pexels-photo-9543743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt="Bouwen in Brussel"
            />
            </a>

            </div>`,
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat"
               href="/windturbine">
              <h2 is="vl-doormat-title">Klachten</h2>
              <div is="vl-doormat-text">
              Hier ziet u het totale aantal klachten, geordend op categorie, en een historisch overzicht dat de evolutie van deze klachten over de tijd laat zien. 
              </div>
              <img
              is="vl-doormat-image"
              src='https://fastly.picsum.photos/id/660/200/300.jpg?hmac=j7s3I-0KukW6B1Vt4AJzCYxM8kbZz5kTMOEl9Y7zUOg'
              alt="Bouwen in Brussel"
            />
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div>
            <a is="vl-doormat"
               href="/aanvragen">
              <h2 is="vl-doormat-title">Controles</h2>
              <div is="vl-doormat-text">
              Controles zijn een essentieel onderdeel van milieuhandhaving, ze garanderen dat regels en voorschriften worden nageleefd en dat overtredingen worden geïdentificeerd en aangepakt. 
              </div>
              <img
              is="vl-doormat-image"
              src='https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt="Bouwen in Brussel"
            />
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div ">
            <a is="vl-doormat"
               href="/doorlooptijden">
              <h2 is="vl-doormat-title">Instrumentarium</h2>
              <div is="vl-doormat-text">
              In het kader van milieuhandhaving biedt ons instrumentarium, bestaande uit diverse technische en juridische middelen, ons de mogelijkheid om naleving te controleren, overtredingen te identificeren en effectieve maatregelen te nemen om de integriteit van ons milieu te beschermen.
              </div>
              <img
              is="vl-doormat-image"
              src='https://fastly.picsum.photos/id/1072/200/300.jpg?hmac=uzq3N0ox40X06q0Ql4mCdgMwHc13gIa0QAuu_6Zp6lQ'
              alt="Bouwen in Brussel"
            />

              
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div ">
            <a is="vl-doormat"
               href="/beroepen">
              <h2 is="vl-doormat-title">Hoge raad voor de handhavingsuitvoering</h2>
              <div is="vl-doormat-text">
              De Hoge Raad voor Handhavingsuitvoering speelt een cruciale rol in het waarborgen van de effectiviteit en consistentie van onze handhavingsactiviteiten, door richtlijnen op te stellen, adviezen te geven en een algemeen toezicht uit te voeren op de uitvoering van milieuhandhavingsmaatregelen.
              </div>
              <img
              is="vl-doormat-image"
              src='https://images.pexels.com/photos/16759470/pexels-photo-16759470/free-photo-of-trap-stad-bezienswaardigheid-gebouw.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt="Bouwen in Brussel"
            />
              
            </a>
            </div>`,
        },
        {
          size: 6,
          template: html`
            <div ">
            <a is="vl-doormat"
               href="/beroepen">
              <h2 is="vl-doormat-title">Strafrechtelijke en bestuurlijke vervolgtraject</h2>
              <div is="vl-doormat-text">
              Strafrechtelijke dossiers vormen een essentieel onderdeel van onze handhavingsmaatregelen, aangezien ze helpen bij het aanpakken van ernstige milieu-overtredingen door middel van de gerechtelijke weg, en dienen om overtreders verantwoordelijk te houden voor hun acties.
              </div>
              <img
              is="vl-doormat-image"
              src='https://fastly.picsum.photos/id/253/200/300.jpg?hmac=RhG6VvZrGYB314rkvnaOOrRH4o1Kz81YiPzT14Mj8JU'
              alt="Bouwen in Brussel"
            />
              
            </a>
            </div>`,
        },
    )
  }

  __renderSpotlight() {
    return html`${renderStack(
        {
          size: 12,
          template: html`
            <h3 is="vl-h3" data-vl-alt>In de kijker</h3>
          `
        },
        {
          size: 3,
          template: html`
        <vl-spotlight
        data-vl-img-src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        data-vl-img-alt="spotlight image">
          <span slot="title">Duik in de cijfers</span>
          <span slot="text">*Aanvullen*.</span>
        </vl-spotlight>`
        },
        {
          size: 3,
          template: html`
          <vl-spotlight data-vl-img-src="https://www.gww-bouw.be/wp-content/uploads/2020/11/NTMB-begroeiing-kopie%CC%88ren.jpg"
          data-vl-img-alt="spotlight image">
          <span slot="title">Nieuwe website</span>
          <span slot="text">*Aanvullen*</span>
        </vl-spotlight>`
        }
    )
    }`
  }

  __renderInfo() {
    return html`${renderStack(
        {
          size: 12,
          template: html`
            <h3 is="vl-h3" data-vl-alt>Meer Info</h3>
          `
        },
        {
          size: 12,
          template: html`
          <p>
          <a
          is="vl-link"
          href="/"
          data-vl-block="true"
          data-vl-small="false"
          data-vl-large="true"
          data-vl-bold="true"
        ><span
        is="vl-icon"
        data-vl-icon="external"
        data-vl-before
        data-vl-link
      ></span>
      Bekijk hoe ons instrumentarium bijdraagt aan effectieve handhaving
        </a></p>
        <p>
        <a
        is="vl-link"
        href="/"
        data-vl-block="true"
        data-vl-small="false"
        data-vl-large="true"
        data-vl-bold="true"
      ><span
      is="vl-icon"
      data-vl-icon="external"
      data-vl-before
      data-vl-link
    ></span>
    Lees meer over hoe we klachten afhandelen
      </a></p>
        
        
        `
        },
    )
    }`
  }
}
define("olr-start", OlrStart);
