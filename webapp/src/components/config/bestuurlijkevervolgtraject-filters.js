import {
  JAARTALBESTUURLIJK,
  BELEIDSDOMEINBESTUURLIJKE,
  CATEGORIEBESTUURLIJKE
    } from "./qlik_resources.js";
    
    const filters = [
      {
        name: "Jaartal",
        id: "Jaartal",
        filter: JAARTALBESTUURLIJK
      },
      {
          name: "Beleidsdomein",
          id: "Beleidsdomein",
          filter: BELEIDSDOMEINBESTUURLIJKE
      },
      {
        name: "Thema",
        id: "Categorie",
        filter: CATEGORIEBESTUURLIJKE
      }
      
    ]
    export {filters as default};