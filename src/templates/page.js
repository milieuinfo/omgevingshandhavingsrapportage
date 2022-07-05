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
    <a slot="context-link" href="/">Omgevingshandhavingsrapportage</a>
    <a slot="title-link" href="/">Cijfers van 2021</a>
  </vl-content-header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
      aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse vl-layout" id="navbar">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link nav-link-color" href="/">Start</a>
        </li>
        <i class="bi bi-dot"></i>
        <li class="nav-item active">
          <a class="nav-link nav-link-color" href="/home">Inleiding</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-color" href="/gewestelijk">Gewest</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-color" href="/provinciaal">Provincies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-color" href="/gemeenten">Gemeenten</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  nav-link-color" href="#">Hoge raad voor de handhavingsuitvoering</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  nav-link-color" href="/strafrechtelijktest">Strafrechtelijk en bestuurlijk vervolgtraject</a>
        </li>
      </ul>
    </div>
  </nav>
  <section is="vl-region">
    <div is="vl-layout">
      <div is="vl-grid" data-vl-is-stacked>${children}</div>
    </div>
  </section>`;
