import { html } from "lit-element";
import data from "../../package.json";
import "vl-ui-cookie-statement";

export const cookie = ({ children, title }) => html` <style>
    body {
      background: #eee;
    }
  </style>
  <vl-cookie-statement data-vl-version="1.0" data-vl-date="3 maart 2021">

    <vl-cookie data-vl-title="Applicatie cookie" data-vl-name="APP_COOKIE_1" data-vl-purpose="Doel van cookie." data-vl-domain="applicatie.omgeving-vlaanderen.be" data-vl-processor="Cookie verwerker" data-vl-validity="Cookie geldigheid"></vl-cookie>

</vl-cookie-statement>`;