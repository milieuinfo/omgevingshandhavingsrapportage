import {
  BELFIUS_CLUSTER,
  GEMEENTE,
  JAAR_BESLISSING,
  JAAR_INDIENING,
  PROVINCIE,
  REFERENTIEREGIO,
  STATUS,
  TYPE
} from "./qlik_resources.js";

const filters = [
  {
    name: "Status",
    id: "status",
    filter: STATUS,
  },
  {
    name: "Jaar Indiening",
    id: "jaar_indiening",
    filter: JAAR_INDIENING
  },
  {
    name: "Jaar Beslissing",
    id: "jaar_beslissing",
    filter: JAAR_BESLISSING,
  },
  {
    name: "Type",
    id: "type",
    filter: TYPE,
  },
  {
    name: "Referentieregio",
    id: "referentieregio",
    filter: REFERENTIEREGIO,
  },
  {
    name: "Belfius Cluster",
    id: "belfius_cluster",
    filter: BELFIUS_CLUSTER,
  },
  {
    name: "Provincie",
    id: "provincie",
    filter: PROVINCIE,
  },
  {
    name: "Gemeente",
    id: "gemeente",
    filter: GEMEENTE,
  }
]

export {filters as default};