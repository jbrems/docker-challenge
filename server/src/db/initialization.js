const Pizza = require('../pizza/pizza.model');

async function initializeData () {
  console.log('🔌 Initializing MongoDB data ...');

  await insertPizza({ name: 'Margherita', toppings: ['cheese'], description: 'Due to its very short list of toppings - just cheese, thank you - the Margherita is Yoshi\'s all time favorite, though he occasionally likes to add some Goombas for flavor.' });
  await insertPizza({ name: 'Hawaiian', toppings: ['cheese', 'bacon', 'pineapple'], description: 'Princess Peache\'s absolute favorite pizza since it reminds her of her favorite holiday on Pebbles Beach with Bowser back in \'96...' });
  await insertPizza({ name: 'Pepperoni', toppings: ['cheese', 'sausage', 'onion'], description: 'The Pepperoni is the goto pizza for both Mario brothers. As real Italian men they like to eat their Pepperoni pizzas with extra peppers!' });
  await insertPizza({ name: 'Quattro Formaggi', toppings: ['cheese', 'cheese', 'cheese', 'cheese'], description: 'This pizza has not one, not two, not three, but four different kinds of cheese, making it the all time favorite pizza for all Koopa Troopas in the Mushroom Kingdom.' });
}

async function insertPizza (pizza) {
  try {
    await new Pizza(pizza).save();
    console.log(`🍕 Added pizza ${pizza.name}.`);
  } catch (error) {
    if (error.code === 11000) {
      console.log(`🔌 Pizza ${pizza.name} already initialized.`);
      return;
    }
    console.error(error);
  }
}

module.exports = {
  initializeData,
};
