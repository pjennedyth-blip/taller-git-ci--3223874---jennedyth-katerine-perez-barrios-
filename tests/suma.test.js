const test = require("node:test");
const assert = require("node:assert");
const { suma } = require("../src/app.js");

test("La suma debe funcionar", () => {
  assert.strictEqual(suma(2, 3), 5);
});
