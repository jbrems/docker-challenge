const express = require('express');
const { getAllPizzas, findPizzaByName, addPizza, removePizzaByName } = require('./pizza.controller');

function getPizzaRoutes () {
  const router = express.Router();

  router.get('/', getAllPizzas);
  router.post('/', express.json(), addPizza);

  router.get('/:pizzaName', findPizzaByName);
  router.delete('/:pizzaName', removePizzaByName);

  return router;
}

module.exports = {
  getPizzaRoutes,
};