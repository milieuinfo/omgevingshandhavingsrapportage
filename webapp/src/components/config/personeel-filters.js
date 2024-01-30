import {
  NIVEAU,
  GEWESTELIJKEACTOR,
  PROVINCIE,
  GEMEENTE,
  STATUS,
  JAAR
  } from "./qlik_resources.js";
  
    const filtersPersoneel = [
      {
        name: "Jaartal",
        id: "Jaartal",
        filter: JAAR
      },
      {
        name: "Beleidsdomein",
        id: "Beleidsdomein",
        filter: NIVEAU
      },
      {
        name: "Gewestelijke actor",
        id: "Gewestelijke actor",
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
      },
      {
        name: "Status",
        id: "Status",
        filter: STATUS
      },
    ]
    
    export {filtersPersoneel as default};