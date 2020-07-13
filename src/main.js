const fetchJson = require("./fetch.js");
const transformJson = require("./transform.js");
const fs = require("fs");

const mainProcess = async (url, options) => {
  const defaultOptions = {
    output: "./output.json",
  };

  const config = Object.assign({}, defaultOptions, options);
  const json = await fetchJson(url);
  const cleanJson = transformJson(json);
  fs.writeFileSync(config.output, JSON.stringify(cleanJson, null, 2));
};

module.exports = mainProcess;
