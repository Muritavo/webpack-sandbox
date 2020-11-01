require('file-loader?name=index.html!./architecture1/index.html');

import granpa from "./grandparent";
import granma from "./grandparent";

console.warn("Family reunion is starting");

console.warn("Grandma says: ");
granma(false);
console.warn("Grandpa says: ");
granpa();

import("./parent").then((p) => {
  p.default(true, "Sorry we are late");
  p.default(false, "The transit was chaotic");
});

import("./friend").then((f) => {
  f.default("Nick");
});
