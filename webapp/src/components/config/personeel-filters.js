import {
    JAAR_BEVRAGING,
    INGEVULD_VLAG,
    TEGEL,
    INSTANTIE
  } from "./qlik_resources.js";
  
  const filtersPersoneel = [
    {
      name: "Bevraging Jaartal",
      id: "Bevraging Jaartal",
      filter: JAAR_BEVRAGING,
    },
    {
      name: "Ingevuld Vlag",
      id: "Ingevuld Vlag",
      filter: INGEVULD_VLAG,
    },
    {
      name: "Niveau",
      id: "Niveau",
      filter: TEGEL,
    },
    {
      name: "Instantie",
      id: "Instantie",
      filter: INSTANTIE,
    }
  ]
  
  export {filtersPersoneel as default};