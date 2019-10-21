// JavaScript Document

const express = require('express');
const app = express();
const Datastore = require('nedb');
require('dotenv').config();

//app.listen(process.env.PORT, () => console.log('Listening at '+process.env.PORT));
app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/saveship', (request, response) => {
  const ship = request.body;
  if (ship.pass == process.env.PASS) {
    console.log('New ship: ' + ship.name);
    db.insert(ship);

    response.json({
      response: 'success'
    });
  } else {
    response.json({
      response: 'failed: wrong password'
    });
  }
});

app.post('/savedrop', (req, res) => {
  const drop = req.body;
  console.log(req);
  /*if (drop.pass == process.env.SEND_DROP) {
    query = { map:drop.map, ship:drop.ship };
    db.find(query, (err, doc) => {
      if(doc) {
        let c = doc.count+1;
        db.update(query, {count:c}, {}, (err, num) => {});
      } else {
        db.insert({ map:drop.map, ship:drop.ship, count:'0' });
      }
    });
  }*/

  res.json({
    response: 'success'
  });
});

const db = new Datastore('ships.db');
db.loadDatabase((err) => {
  if (err) {
    console.log(err);
  }
});

const dropdb = new Datastore('drops.db');
dropdb.loadDatabase((err) => {
  if (err) {
    console.log(err);
  }
});