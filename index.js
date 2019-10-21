// JavaScript Document

const express = require('express');
const app = express();
const Datastore = require('nedb');
require('dotenv').config();

app.listen(process.env.PORT, () => console.log('Listening at '+process.env.PORT));
//app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/saveship', (request, response) => {
  const db = new Datastore('ships.db');
  db.loadDatabase((err) => {
    if (err) {
      console.log(err);
    }
  });
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
  const dropdb = new Datastore('drops.db');
  dropdb.loadDatabase((err) => {
    if (err) {
      console.log(err);
    }
  });
  const drop = req.body;
  if (drop.PASS == process.env.SEND_DROP) {
    query = { map:drop.map, ship:drop.ship };
    dropdb.find(query, (err, doc) => {
      if(doc.length > 0) {
        let c = parseInt(doc[0]['count'])+1;
        dropdb.update(query, {$set: {count:c.toString()}}, {}, (err, num) => {});
        console.log('Drop updated');
      } else {
        dropdb.insert({ map:drop.map, ship:drop.ship, count:'1' });
        console.log('Drop inserted');
      }
    });
  }

  res.json({
    response: 'success'
  });
});

