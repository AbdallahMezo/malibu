const client = require("./client");
const _ = require("lodash");
const fs = require("fs");
const process = require("process");

const {generateRoutes} = require('./routes');

const assets = JSON.parse(fs.readFileSync("webpack-assets.json"));
function serviceWorkerHelperContents() {
  const filePath = _.get(assets, ["serviceWorkerHelper", "js"]);
  return fs.readFileSync(process.cwd() + "/public" + filePath)
}

function generateServiceWorker(req, res) {
  res.header("Content-Type", "application/javascript");
  res.header("Cache-Control", "public,max-age=3600");
  var config;
  client.getConfig()
    .then((c) => config = c)
    .then(() => {
      res.render("js/service-worker", {
        routes: generateRoutes(config),
        serviceWorkerHelper: serviceWorkerHelperContents()
      });
    })
}

exports.generateServiceWorker = generateServiceWorker;
