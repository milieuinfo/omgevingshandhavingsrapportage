import { html } from "lit-element";
import data from "../../package.json";
import "uig-webcomponents/lib/components/privacy";

export const privacy = ({ children, title }) => html` <style>
    body {
      background: #eee;
    }
  </style>
  <vl-privacy
  data-vl-version="1.0.0"
  data-vl-date="21 juli 2022"
></vl-privacy>`;