import {
  NIVEAU,
  JAAR,
  PROVINCIE,
  GEWESTELIJKEACTOR,
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
        name: "Gewest",
        id: "Gewest",
        filter: GEWESTELIJKEACTOR
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