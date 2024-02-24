import {
  BELEID,
  JAAR,
  PROVINCIE,
  GEWEST,
  GEMEENTE
  } from "./qlik_resources.js";
  
  const filters = [
    {
      name: "Beleidsniveau",
      id: "Beleidsniveau",
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
  
  export {filters as default};