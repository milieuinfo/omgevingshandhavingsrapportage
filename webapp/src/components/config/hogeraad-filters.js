import {
  JAARTALBESTUURLIJK,
    F1,
    F2
    } from "./qlik_resources.js";
    
    const filters = [
      {
        name: "Jaartal",
        id: "Jaartal",
        filter: JAARTALBESTUURLIJK
      },
      {
          name: "Advies gevraagd door",
          id: "Instroom",
          filter: F1
      },
      {
        name: "Advies gegeven aan",
        id: "Soort",
        filter: F2
      },
      
    ]

  
    export {filters as default};