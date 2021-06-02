const Pizza = require('./pizza.model');

async function getAllPizzas (req, res, next) {
  try {
    console.log('🍕 Finding all pizzas ...');
    const pizzas = await Pizza.find({});
    res.json(pizzas);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function findPizzaByName (req, res, next) {
  try {
    const { pizzaName } = req.params;
    console.log(`🍕 Finding pizza with name '${pizzaName}' ...`);
    const pizza = await Pizza.findOne({ slug: pizzaName });
    
    if (!pizza) return res.sendStatus(404);

    res.json(pizza);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function addPizza (req, res, next) {
  try {
    console.log(`🍕 Adding pizza for ${JSON.stringify(req.body)} ...`);
    const pizza = await new Pizza(req.body).save();
    res.status(201).json(pizza);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function removePizzaByName (req, res, next) {
  try {
    const { pizzaName } = req.params;
    console.log(`🍕 Deleting pizza with name '${pizzaName}' ...`);
    const pizza = await Pizza.findOne({ slug: pizzaName });
    
    if (!pizza) return res.sendStatus(404);

    await pizza.remove();

    res.json(pizza);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = {
  getAllPizzas,
  findPizzaByName,
  addPizza,
  removePizzaByName,
};
