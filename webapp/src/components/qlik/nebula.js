import stardust from "@nebula.js/stardust";

import barChart from '@nebula.js/sn-bar-chart';
import distributionPlot from '@nebula.js/sn-distributionplot';
import snKpi from "@nebula.js/sn-kpi"
import table from '@nebula.js/sn-table';
import pivotTable from '@nebula.js/sn-pivot-table';
import snPieChart from "@nebula.js/sn-pie-chart";
import lineChart from "@nebula.js/sn-line-chart";
import sankeyChart from "@nebula.js/sn-sankey-chart";
import mekkoChart from "@nebula.js/sn-mekko-chart";
import {theme} from '../common/theme.js';
const types = [
  {
    name: "barchart",
    load: () => Promise.resolve(barChart)
  },
  {
    name: "kpi",
    load: () => Promise.resolve(snKpi)

  },
  {
    name: 'table',
    load: () => Promise.resolve(table)
  },
  {
    name: 'pivot-table',
    load: () => Promise.resolve(pivotTable),
  },
  {
    name: "piechart",
    load: () => Promise.resolve(snPieChart),
  },
  {
    name: "distributionplot",
    load: () => Promise.resolve(distributionPlot),
  },
  {
    name: "linechart",
    load: () => Promise.resolve(lineChart),
  },
  {
    name: "sankeychart",
    load: () => Promise.resolve(sankeyChart),
  },
  {
    name: "mekkochart",
    load: () => Promise.resolve(mekkoChart),
  }

];

export function STARDUST(app) {
  return stardust.embed(app, {
    types,
    themes: [{
      id: 'dOmg',
      load: () => Promise.resolve(theme)
    }],
    context: {
      language: 'nl-NL',
      theme: 'dOmg',
    }
  })
}


