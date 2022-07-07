
/*
TO DEVELOP
import { embed } from "@nebula.js/stardust";
//Imports API calls
import * as stardust from '@nebula.js/stardust'
import barChart from '@nebula.js/sn-bar-chart';

import snKpi from "@nebula.js/sn-kpi"
import table from '@nebula.js/sn-table';
import pivotTable from '@nebula.js/sn-pivot-table';

const nebula = embed.createConfiguration({
  context: {
    theme: "light",
    language: "nl-NL",
  },
  types: [
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
  ],
});

export default nebula;

*/