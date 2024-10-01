import {
  JAARTALSTRAFRECHTELIJK,
  HOOFDRUBRIEKSTRAFRECHTELIJK,
  BELEIDSDOMEINSTRAFRECHTELIJK
      } from "./qlik_resources.js";
      
      const filters = [
        {
          name: "Bevragingsjaartal",
          id: "Bevragingsjaartal",
          filter: JAARTALSTRAFRECHTELIJK
        },
        {
          name: "Beleidsdomein",
          id: "Beleidsdomein",
          filter: BELEIDSDOMEINSTRAFRECHTELIJK
        },
        {
          name: "Thema",
          id: "Hoofdrubriek",
          filter: HOOFDRUBRIEKSTRAFRECHTELIJK
        }
      ]
      export {filters as default};