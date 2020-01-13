const express = require("express");
var request = require("request");
const app = express();
const Mkrand = require("./mkrand.js");

app.get('/', (req, res) => {
  console.log("root request");
  res.send("Root");
});

app.get("/psi2binary", (req, res) => {
  if (req.query.psi) {
      console.log(`/psi2binary psi= ${req.query.psi}`)
      binary = Mkrand.psi_to_binary(req.query.psi);
      if (binary.valid) {
          res.send(binary.result);
      } else {
          res.send(`Error converting PSI: ${binary.error}`);
      }
  } else {
      console.log("/psi2binary missing psi query");
      res.status(422).send("Missing PSI query");
  }
});

app.get("/rand", (req,res) => {
  
  if (req.query.psi) {
      console.log(`Got /rand with PSI = ${req.query.psi}`);
      res.send(Mkrand.rand(req.query.psi));
  } else {
      console.log("Got /rand");
      res.send(Mkrand.rand());
  }

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