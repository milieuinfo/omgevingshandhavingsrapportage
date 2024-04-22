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
          name: "Instroom",
          id: "Instroom",
          filter: INSTROOM
      },
      {
        name: "Thema",
        id: "Thema",
        filter: THEMA
      },
      {
        name: "Soort",
        id: "Soort",
        filter: F1
      },
      
    ]

  
    export {filters as default};