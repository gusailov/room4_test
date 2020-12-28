import { generate as id } from "shortid";

export const queries = [
  {
    value: "funk",
  },
  {
    id: id(),
    value: "rock",
  },
  {
    id: id(),
    value: "pop",
  },
];
