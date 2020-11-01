# What am I doing here?

This repository implements an cenario to exemplify the usage of the SpliChunks optimization option.

# Cenario architecture
![Architecture 1](./docs/images/architecture.jfif)

The lodash is dependency for both chunks parent and friend.

- Without optimization, the lodash will be duplicated

- With optimization, the lodash will be put on a different chunk a single time only

![Architecture 2](./docs/images/architecture_with_entry_dependency.jfif)

The lodash is dependency for the entry point (main script) as well for both chunks parent and friend.

- Without optimization lodash would added a single time on the main chunk, and preloaded for both the childs

- With optimization, the lodash is put on another chunk but the loading of the main chunk execution is now async, waiting for the lodash chunk to be loaded.


# To run the compilation process
```bash
npm run build
```

# What should I be looking for here?
This will generate 3 folders:

- dist: this folder holds the compiled bundle with the SplitChunks disabled for architecture 1
    - What to see here: Since there is no module optimization, Lodash, our BIG MODULE is duplicated on chunk 451 (friend.js) and 321 (parent.js)
    - **Hint for visualization: On Chrome devtools block the request for 451.bundle.js. You will see the parents still load and their children but the friend never loads and vice versa**

- dist_split: This folder holds the bundle with the SplitChunks enabled for architecture 1
    - What to see here: Since there is an extra optimization step, it sees the lodash dependency on both modules and abstract it to a single chunk 486 (lodash only)
    - **Hint for visualization: On Chrome devtools block the request for 486.bundle.js. You will see the granpa and the reunion still logs, and the parents and friends still load but doesn't display their logs because the lodash chunk (their dependency) could not load**

- dist_entry_dep: This folder holds the bundle with the SplitChunks enabled for architecture 2
    - What to see here: Since the lodash is made a dependency of the main entry point of the application, the main entry point can't load right up, it needs for the chunk 486 to be loaded first or after.
    - **Hint for visualization: On Chrome devtools block the request for 486.bundle.js. You will see there is no logs, as the lodash chunk that is a dependency for the entrypoint could not be loaded.**

There is no best or worst choice by setting this flag. It all depends on your specific cenario and your application design choices.