const franc = require("franc");
const langs = require("langs");
const input = process.argv[2];
if (!input) {
  console.log('Usage: node index.js "Some text to identify"');
  process.exit(1);
}
const langCode = franc(input);
const language = langs.where("3", langCode);
if (!language) {
  console.log("Could not identify language for the provided text.");
} else {
  console.log("our best guess is "+language.name);
}
const lC=franc("Alle mennesker er");
const l=langs.where("3",lC);
console.log("our best guess is "+l.name);
