require('file-loader?name=index.html!./architecture2/index.html');
import granpa from "./grandparent";
import granma from "./grandparent";
import lodash from 'lodash';
console.warn("Family reunion is starting");

console.warn(lodash.deburr("Grandma says: "));
granma(false);
console.warn(lodash.deburr("Grandpa says: "));
granpa();

import("./parent").then((p) => {
  p.default(true, "Sorry we are late");
  p.default(false, "The transit was chaotic");
});

import("./friend").then((f) => {
  f.default("Nick");
});
