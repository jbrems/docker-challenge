const express = require('express');
const { getAllPizzas, findPizzaByName, addPizza, removePizzaByName } = require('./pizza.controller');

function getPizzaRoutes () {
  const router = express.Router();

  router.get('/pizzas', getAllPizzas);
  router.post('/pizzas', express.json(), addPizza);

  router.get('/pizzas/:pizzaName', findPizzaByName);
  router.delete('/pizzas/:pizzaName', removePizzaByName);

  return router;
}

module.exports = {
  getPizzaRoutes,
};