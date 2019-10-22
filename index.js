// JavaScript Document

const express = require("express");
const app = express();
const mongodb = require('mongodb');
require("dotenv").config();

app.listen(process.env.PORT, () =>
  console.log("Listening at " + process.env.PORT)
);
//app.listen(3000, () => console.log('Listening at 3000'));
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

app.post("/savedrop", (req, res) => {
  const drop = req.body;
  if (drop.PASS == process.env.SEND_DROP) {
    const query = { map: drop.map, ship: drop.ship };
    dropdb.find(query, (err, doc) => {
      if (doc.length > 0) {
        let c = parseInt(doc[0]["count"]) + 1;
        dropdb.update(query, { $set: { count: c.toString() } }, {}, (err, num) => {});
        console.log("Drop updated");
        res.json({
          response: "Drop updated to $(c)"
        });
      } else {
        dropdb.insert({ map: drop.map, ship: drop.ship, count: "1" });
        console.log("Drop inserted");
        res.json({
          response: "Drop inserted"
        });
      }
    });
  } else {
    console.log("Password incorrect");
    res.json({
      response: "Wrong password"
    });
  }
  
  mongodb.MongoClient.connect(uri, (err, client) => {
    if(err) throw err;
    const db = client.db('dbname')
    const drops = db.collection('drops');

    drops.insert(seedData, (err, result) => {
      if(err) throw err;

      console.log(result);
    });
  });
});

const uri = process.env.MONGODB_URI;
const seedData = [
  {map:"34",ship:"5",count:"19"},
  {map:"34",ship:"6",count:"28"},
  {map:"34",ship:"11",count:"8"},
  {map:"34",ship:"14",count:"15"},
  {map:"34",ship:"15",count:"18"},
  {map:"34",ship:"16",count:"27"},
  {map:"34",ship:"17",count:"28"},
  {map:"34",ship:"19",count:"3"},
  {map:"34",ship:"43",count:"4"},
  {map:"34",ship:"44",count:"11"},
  {map:"34",ship:"52",count:"15"},
  {map:"34",ship:"53",count:"16"},
  {map:"34",ship:"72",count:"18"},
  {map:"34",ship:"75",count:"19"},
  {map:"34",ship:"76",count:"4"},
  {map:"34",ship:"86",count:"25"},
  {map:"34",ship:"87",count:"24"},
  {map:"34",ship:"91",count:"23"},
  {map:"34",ship:"101",count:"0"},
  {map:"34",ship:"102",count:"8"},
  {map:"34",ship:"167",count:"8"},
  {map:"34",ship:"224",count:"1"},
  {map:"34",ship:"225",count:"1"},
  {map:"34",ship:"236",count:"6"},
  {map:"34",ship:"238",count:"18"},
  {map:"34",ship:"239",count:"27"},
  {map:"34",ship:"240",count:"24"}
];