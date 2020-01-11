const express = require("express");
var request = require("request");
const app = express();
const rand = require("./mkrand.js");

app.get('/', (req, res) => {
  console.log("root request");
  res.send("Root");
});

app.get("/rand", (req,res) => {
  console.log("Got /rand");
  res.send(rand.rand());

});

app.get('/mylocation', (req, res) => {

  console.log(`Getting location for IP: ${req.ip}`);
 // var location = await request-promise("https://ipvigilante.com/" + req.ip);
 // res.send('hey ${req.params.name}, your IP is ${req.ip}' + JSON.stringify(location));
   res.send(`Hi ${req.params.name}`);
  });

app.get('/customers/:id', (req,res) => {
    console.log("Get request on /test")
    res.send(`Got Request for customer ID ${req.params.id}`);
});

const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Listening on port ${port}`);})