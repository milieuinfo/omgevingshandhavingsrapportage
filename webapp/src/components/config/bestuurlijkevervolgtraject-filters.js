import {
    JAAR,
    BESTUURLIJKTHEMA,
    BESTUURLIJKCAT,
    BESTUURLIJKSOORT
    } from "./qlik_resources.js";
    
    const filters = [
      {
        name: "Jaartal",
        id: "Jaartal",
        filter: JAAR
      },
      {
          name: "Thema",
          id: "Thema",
          filter: BESTUURLIJKTHEMA
      },
      {
        name: "Categorie",
        id: "Categorie",
        filter: BESTUURLIJKCAT
      },
      {
        name: "Soort",
        id: "Soort",
        filter: BESTUURLIJKSOORT
      },
      
    ]

  
    export {filters as default};