var endpoint = require("@runkit/runkit/json-endpoint/1.0.0")
var request = require("request");
var rp = require("request-promise");

endpoint(module.exports, async function (request) {
  console.log(`looking up ${req.ip}`);
  const query = "https://ipvigilante.com/" + req.ip;
  console.log("querying " + query);
  var location =  rp(query);
  location.then(() => {
    return location;
    }
  ).catch((e) => {
      console.log("Promise rejected - " + e);
      return { error: e } 
    });
  });