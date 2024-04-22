import {
    JAAR,
    INSTROOM,
    THEMA,
    F1
    } from "./qlik_resources.js";
    
    const filters = [
      {
        name: "Jaartal",
        id: "Jaartal",
        filter: JAAR
      },
      {
          name: "Advies gevraagd door",
          id: "Instroom",
          filter: INSTROOM
      },
      {
        name: "Advies gevraagd aan",
        id: "Soort",
        filter: F1
      },
      
    ]

  
    export {filters as default};