# langchain-bun-binary

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

To compile:

```bash
bun build --compile --sourcemap ./index.ts --outfile app  
```

To run the compiled binary:

```bash 
./app
```

The error:
    
```bash
❯ ./app 
8916 | var init_base5 = __esm(() => {
8917 |   init_base4();
8918 | });
8919 | 
8920 | // node_modules/@langchain/core/dist/prompts/string.js
8921 | class BaseStringPromptTemplate extends BasePromptTemplate {
                                              ^
ReferenceError: Cannot access uninitialized variable.
      at /$bunfs/root/app:8921:40
```


This project was created using `bun init` in bun v1.0.29. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
