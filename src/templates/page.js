import { html } from "lit-element";
import data from "../../package.json";

export const page = ({ children, title }) => html`
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
src="assets/images/header.jpg"/>
    <a slot="context-link" href="/public/">Omgevingshandhavingsrapportage</a>
    <a slot="title-link">Cijfers van 2022</a>
  </vl-content-header>
  <nav class="navbarcustomList">
  <ul class="vl-layout">
  <li class="navbarcustom"><a href="/">Start</a></li>
  <li class="navbarcustom"><a href="/home">Inleiding</a></li>
  <li class="navbarcustom"><a href="/gewestelijk">Gewest</a></li>

  <li class="navbarcustom"><a href="/provinciaal">Provincies</a></li>
  <li class="navbarcustom"><a href="/gemeenten">Gemeenten</a></li>
  <li class="navbarcustom"><a href="/hogeraad">Hoge raad voor de handhavingsuitvoering</a></li>
  <li class="navbarcustom"><a href="/strafrechtelijk">Strafrechtelijk en bestuurlijk vervolgtraject</a></li>
</ul></nav>
<section is="vl-region">
<div is="vl-layout">
  <div is="vl-grid" data-vl-is-stacked>${children}</div>
</div>
</section>`;
