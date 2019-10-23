// JavaScript Document

const express = require("express");
const app = express();
require("dotenv").config();

//app.listen(process.env.PORT, () => console.log("Listening at " + process.env.PORT));
app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.post("/saveship", (request, response) => {
  const db = new Datastore("ships.db");
  db.loadDatabase(err => {
    if (err) {
      console.log(err);
    }
  });
  const ship = request.body;
  if (ship.pass == process.env.PASS) {
    console.log("New ship: " + ship.name);
    db.insert(ship);

    response.json({
      response: "success"
    });
  } else {
    response.json({
      response: "failed: wrong password"
    });
  }
});

app.get("/map/:map", (req, res) => {
  res.sendFile(__dirname + "/public/map/index.html/");
});

/*const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("AL");
  const collection = dbo.collection("droprates");
  console.log(collection);
});*/