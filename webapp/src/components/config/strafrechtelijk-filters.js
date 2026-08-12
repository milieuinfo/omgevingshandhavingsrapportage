import {
  YEAROFSTRAFRECHTELIJK,
  HOOFDRUBRIEKSTRAFRECHTELIJK,
  THEMAOFSTRAFRECHTELIJK,
  BELEIDSDOMEINSTRAFRECHTELIJK,
  SUBTHEMAOFSTRAFRECHTELIJK,
  Tenlastenleggingscodes
      } from "./qlik_resources.js";
      
      const filters = [
        {
          name: "Bevragingsjaartal",
          id: "Bevragingsjaartal",
          filter: YEAROFSTRAFRECHTELIJK
        },
        {
          name: "Beleidsdomein",
          id: "Beleidsdomein",
          filter: BELEIDSDOMEINSTRAFRECHTELIJK
        },
        {
          name: "Thema",
          id: "Hoofdrubriek",
          filter: THEMAOFSTRAFRECHTELIJK
        },
        {
          name: "Tenlastenleggingscodes",
          id: "Tenlastenleggingscodes",
          filter: SUBTHEMAOFSTRAFRECHTELIJK
        }
      ]
      export {filters as default};