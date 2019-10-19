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

const db = new Datastore('ships.db');
db.loadDatabase((err) => {
  if (err) {
    console.log(err);
  }
});