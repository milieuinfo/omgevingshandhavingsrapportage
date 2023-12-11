import {
  ACTOR,
  PROVINCIE
  } from "./qlik_resources.js";
  
  const filters = [
    {
      name: "Gewestelijke Actor",
      id: "Gewestelijke Actor",
      filter: ACTOR
    },
    {
      name: "Provincie",
      id: "PROVINCIE",
      filter: PROVINCIE
    }
  ]
  
  export {filters as default};