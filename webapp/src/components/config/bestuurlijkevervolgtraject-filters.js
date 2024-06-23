import {
  JAARTALBESTUURLIJK,
  BELEIDSDOMEINBESTUURLIJKE,
  CATEGORIEBESTUURLIJKE,
  TYPEBESTUURLIJKE
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
        name: "Categorie",
        id: "Categorie",
        filter: CATEGORIEBESTUURLIJKE
      },
      {
        name: "Type",
        id: "Soort",
        filter: TYPEBESTUURLIJKE
      },
      
    ]

  
    export {filters as default};