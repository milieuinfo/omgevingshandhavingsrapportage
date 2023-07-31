import { html } from "lit-element";
import data from "../../package.json";

export const error404 = ({ children, title }) => html`
<style>
body {
  background: #eee;
}

.content {
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
}

.chart {
  position: relative;
  height: 600px;
}
.listbox {
  position: relative;
  height: 600px;
}

.toolbar {
  margin: 12px 0px;
}

.kpi {
  position: relative;
  height: 100px;
}
.kpi2 {
  position: relative;
  height: 100px;
}
</style>
<vl-content-header>
<img is="vl-image" slot="image" sizes="100vw"
src="../assets/images/header.jpg"/>
    <a slot="context-link" href="/public/">Omgevingshandhavingsrapportage</a>
    <a slot="title-link">Cijfers van 2021</a>
  </vl-content-header>
<section is="vl-region">
<div is="vl-layout">
  <div is="vl-grid" data-vl-is-stacked>${children}</div>
</div>
</section>`;
