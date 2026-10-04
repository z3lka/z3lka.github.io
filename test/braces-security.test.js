const assert = require("node:assert/strict");
const { createRequire } = require("node:module");
const test = require("node:test");

const requireFromEleventy = createRequire(require.resolve("@11ty/eleventy"));
const requireFromChokidar = createRequire(requireFromEleventy.resolve("chokidar"));
const braces = requireFromChokidar("braces");

test("braces rejects patterns and ASTs deeper than 100 levels", () => {
  const nestedPattern = (depth) => "{".repeat(depth) + "a,b" + "}".repeat(depth);

  assert.doesNotThrow(() => braces(nestedPattern(100)));
  assert.throws(() => braces(nestedPattern(101)), /exceeds max depth/);

  let ast = { type: "text", value: "a" };
  for (let depth = 0; depth < 101; depth += 1) {
    ast = { type: "brace", nodes: [ast] };
  }
  ast = { type: "root", nodes: [ast] };

  assert.throws(() => braces.compile(ast), /exceeds max depth/);
  assert.throws(() => braces.expand(ast), /exceeds max depth/);
  assert.throws(() => braces.stringify(ast), /exceeds max depth/);
});
