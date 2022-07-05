import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/legacy/upload";
import "vl-ui-alert";
import { page } from "../templates/page";

export class UploadView extends LitElement {
  render() {
    return page({
      children: html`<div is="vl-column" data-vl-size="8">
          <vl-upload
            url="http://httpbin.org/post"
            data-vl-input-name="files"
          ></vl-upload>
        </div>
        <div is="vl-column" data-vl-size="8">
          <vl-alert data-vl-icon="warning" data-vl-type="error">
            <p>Test</p>
          </vl-alert>
        </div> `,
      title: "Upload",
    });
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("upload-view", UploadView);
