import { deburr } from "lodash";

export default function (male = true, whatToSay) {
  if (male) console.warn("Dad says:");
  else console.warn("Mom says:");
  console.warn(deburr(whatToSay));
}

import("./child").then((a) => {
  a.default("lucy", "Hiiiii");
  a.default("peter", "Missed yall");
});
