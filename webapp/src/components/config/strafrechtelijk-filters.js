import {
  JAARTALSTRAFRECHTELIJK,
  HOOFDRUBRIEKSTRAFRECHTELIJK,
  BELEIDSDOMEINSTRAFRECHTELIJK,
  Tenlastenleggingscodes
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
        },
        {
          name: "Tenlastenleggingscodes",
          id: "Tenlastenleggingscodes",
          filter: Tenlastenleggingscodes
        }
      ]
      export {filters as default};