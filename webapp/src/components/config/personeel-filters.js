import {
    JAAR_BEVRAGING,
    INGEVULD_VLAG,
    TEGEL,
    INSTANTIE,
    MR
  } from "./qlik_resources.js";
  
  const filtersPersoneel = [
    {
      name: "Jaartal",
      id: "Jaartal",
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
      name: "Actor",
      id: "Actor",
      filter: INSTANTIE,
    },
    {
      name: "Actor",
      id: "Actor",
      filter: INSTANTIE,
    },
    {
      name: "Beleidsdomein",
      id: "Beleidsdomein",
      filter: MR,
    }

  ]
  
  export {filtersPersoneel as default};