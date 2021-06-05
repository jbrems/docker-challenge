const express = require('express');
const db = require('./db/db');
const { getPizzaRoutes } = require('./pizza/pizza.routes');


db.connect();

console.log('🏭 Assembling Express app ...');
const app = express();

app.use('/pizzas', getPizzaRoutes());

app.listen(3000, () => {
  console.log('👂 Server listening on port 3000 ...');
});
