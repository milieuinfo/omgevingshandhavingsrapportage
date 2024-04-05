import {
    JAAR,
    INSTROOM
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
        }
    ]

  
    export {filters as default};