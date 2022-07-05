import { html } from "lit-element";
import data from "../../package.json";

export const analysis = ({ children, title }) => html`
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

<section is="vl-region" data-vl-no-space-top=true data-vl-no-space-bottom=true>
  ${children}
</section>`;
