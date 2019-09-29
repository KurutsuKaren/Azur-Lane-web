// JavaScript Document

const express = require('express');
const app = express();
const Datastore = require('nedb');

app.listen(3000, () => console.log('Listening at 3000.'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/saveship', (request, response) => {
  const ship = request.body;
  console.log('New ship: ' + ship.name);
  db.insert(ship);
  
  response.json({
    response: 'success'
  });
});

const db = new Datastore('ships.db');
db.loadDatabase((err) => {
  if (err) {
    console.log(err);
  }
});