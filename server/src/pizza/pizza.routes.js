const express = require('express');
const { getAllPizzas, findPizzaByName, addPizza, updatePizzaByName, removePizzaByName } = require('./pizza.controller');

function getPizzaRoutes () {
  const router = express.Router();

  router.get('/', getAllPizzas);
  router.post('/', express.json(), addPizza);

  router.get('/:pizzaName', findPizzaByName);
  router.put('/:pizzaName', express.json(), updatePizzaByName);
  router.delete('/:pizzaName', removePizzaByName);

  return router;
}

module.exports = {
  getPizzaRoutes,
};