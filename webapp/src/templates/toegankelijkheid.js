import { html } from "lit-element";
import data from "../../package.json";
import "uig-webcomponents/lib/components/accessibility";

export const toegankelijkheid = ({ children, title }) => html` <style>
    body {
      background: #eee;
    }
  </style>

      <vl-accessibility
        data-vl-application="Omgevingshandhavingsrapportage"
        data-vl-version="1.0.0"
        data-vl-date="19 juli 2021"
        data-vl-date-modified="19 juli 2021"
        data-vl-compliance="partially-compliant"
        data-vl-evaluation="not-evaluated"
      ></vl-accessibility>
  `;
