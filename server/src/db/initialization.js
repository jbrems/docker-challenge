const Pizza = require('../pizza/pizza.model');

async function initializeData () {
  try {
    console.log('🔌 Initializing MongoDB data ...');

    await new Pizza({ name: 'Margherita', toppings: ['cheese'] }).save();
    console.log('🍕 Added pizza Margherita.');
  
    await new Pizza({ name: 'Hawaiian', toppings: ['cheese', 'bacon', 'pineapple'] }).save();
    console.log('🍕 Added pizza Hawaiian.');
  
    await new Pizza({ name: 'Pepperoni', toppings: ['cheese', 'sausage', 'onion'] }).save();
    console.log('🍕 Added pizza Pepperoni.');
  } catch (error) {
    if (error.code === 11000) {
      console.log('🔌 Data already initialized.');
      return;
    }
    console.error(error);
  }
}

module.exports = {
  initializeData,
};
