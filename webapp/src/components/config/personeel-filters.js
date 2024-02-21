import {
  BELEID,
  JAAR,
  PROVINCIE,
  GEWEST,
  GEMEENTE
  } from "./qlik_resources.js";
  
    const filtersPersoneel = [
      {
        name: "Beleidsdomein",
        id: "Beleidsdomein",
        filter: BELEID
      },
      {
        name: "Jaartal",
        id: "Jaartal",
        filter: JAAR
      },
      {
        name: "Gewest",
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