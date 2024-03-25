import {
  NIVEAU,
  JAAR,
  PROVINCIE,
  GEWEST,
  GEMEENTE
  } from "./qlik_resources.js";
  
    const filtersPersoneel = [
      {
        name: "Beleidsniveau",
        id: "Beleidsniveau",
        filter: NIVEAU
      },
      {
        name: "Jaartal",
        id: "Jaartal",
        filter: JAAR
      },
      {
        name: "Gewestelijke actor",
        id: "Gewest",
        filter: GEWEST
      },
      {
        name: "Provincie",
        id: "Provincie",
        filter: PROVINCIE
      },
      {
        name: "Gemeente",
        id: "Gemeente",
        filter: GEMEENTE
      }
    ]
    
    export {filtersPersoneel as default};