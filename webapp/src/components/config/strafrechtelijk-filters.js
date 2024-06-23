import {
  JAARTALSTRAFRECHTELIJK,
  HOOFDRUBRIEKSTRAFRECHTELIJK,
  RUBRIEKSTRAFRECHTELIJK,
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
            name: "Hoofdrubriek",
            id: "Hoofdrubriek",
            filter: HOOFDRUBRIEKSTRAFRECHTELIJK
        },
        {
          name: "Rubriek",
          id: "Rubriek",
          filter: RUBRIEKSTRAFRECHTELIJK
        }
      ]
  
    
      export {filters as default};