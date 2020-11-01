console.warn("It's a family picnic");

import("./parent")
  .then((p) => p.default(true, "Let's eat"))
  .then(() => import("./child"))
  .then((c) => c.default("Peter", "It's a shame mom and Lucy could come"));
