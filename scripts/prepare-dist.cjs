
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "dist");

fs.rmSync(output, { recursive: true, force: true });

fs.cpSync(
  path.join(root, "landing", "dist"),
  output,
  { recursive: true }
);

fs.cpSync(
  path.join(root, "documentation", "dist"),
  path.join(output, "documentation"),
  { recursive: true }
);

console.log("Webzspot websites combined!");
