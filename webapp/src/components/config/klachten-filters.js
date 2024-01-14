import {
  JAAR,
  ACTOR,
  BELEID,
  KLACHTTYPE
  } from "./qlik_resources.js";
  
  const filters = [
    {
      name: "Actor",
      id: "Actor",
      filter: ACTOR
    },
    {
      name: "Jaartal",
      id: "Jaartal",
      filter: JAAR
    },
    {
      name: "Beleidsdomein",
      id: "Beleidsdomein",
      filter: BELEID
    },
    {
      name: "Klachttype",
      id: "Klachttype",
      filter: KLACHTTYPE
    }
  ]
  
  export {filters as default};