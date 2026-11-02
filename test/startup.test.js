const test = require("node:test");
const assert = require("node:assert/strict");
const {readFileSync} = require("node:fs");
const {resolvePort} = require("../utils/startup");

test("resolves default and configured ports", () => {
  assert.equal(resolvePort(undefined), 5000);
  assert.equal(resolvePort(""), 5000);
  assert.equal(resolvePort("7001"), 7001);
  assert.equal(resolvePort(4000), 4000);
});
test("rejects invalid server ports rather than silently opening a random port", () => {
  for (const value of ["abc", "0", "-1", "65536", "8000.5", [], {}]) {
    assert.throws(() => resolvePort(value));
  }
});
test("loads environment settings before the app connects to the database", () => {
  const source = readFileSync(require("node:path").join(__dirname,"../index.js"),"utf8");
  assert.match(source,/require\(["']dotenv["']\)\.config\(\)/);
  assert.ok(source.indexOf('require("dotenv").config()') < source.indexOf('require("./app")'));
  assert.match(source,/resolvePort\(process\.env\.PORT\)/);
  assert.doesNotMatch(source,/server up on port 5000/);
});
