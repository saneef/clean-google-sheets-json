#!/usr/bin/env node

const chalk = require("chalk");
const meow = require("meow");

const mainProcess = require("./src/main.js");

const cli = meow(
  `
${chalk.bold("Usage")}
    $ ./cli.js <google-sheet-json-feed-url>

${chalk.bold("Options")}
    -o, --output  Output JSON file. ${chalk.italic("Default: 'output.json'")}

`,
  {
    flags: {
      output: { alias: "o" },
    },
  }
);

if (cli.input.length === 0) {
  console.log(cli.help);
} else {
  mainProcess(cli.input[0], cli.flags);
}
