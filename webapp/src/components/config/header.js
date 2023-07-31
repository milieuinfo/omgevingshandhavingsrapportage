const footerId = "71c13f70-f8fd-4c08-86d4-e97be1dce576";
const headerId = "b77b3e2d-d967-453f-a95b-1e1e235a07d7";

const environments = [
  {
    match: "http://localhost",
    development: true,
    headerId,
    footerId,
  },
  {
    match:
        "https://omgevingshandhavingsrapportage-ontwikkel.omgeving.vlaanderen.be",
    development: true,
    headerId,
    footerId,
  },
  {
    match: "https://omgevingshandhavingsrapportage-oefen.omgeving.vlaanderen.be",
    development: true,
    headerId,
    footerId,
  },
  {
    match: "https://omgevingshandhavingsrapportage.omgeving.vlaanderen.be",
    development: false,
    headerId: "60d3ca02-8b5a-423c-96ba-17eb9cf99a67",
    footerId: "82396d58-1169-435e-9789-9618679e25ac",
  },
];

export function getHeaderFooterId() {
  return environments.find((environment) =>
      window.location.href.includes(environment.match)
  );
}