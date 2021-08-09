const Pizza = require('../pizza/pizza.model');

async function initializeData () {
  try {
    console.log('🔌 Initializing MongoDB data ...');

    await new Pizza({ name: 'Margherita', toppings: ['cheese'], description: 'Due to its very short list of toppings - just cheese, thank you - the Margherita is Yoshi\'s all time favorite, though he occasionally likes to add some Goombas for flavor.' }).save();
    console.log('🍕 Added pizza Margherita.');
  
    await new Pizza({ name: 'Hawaiian', toppings: ['cheese', 'bacon', 'pineapple'], description: 'Princess Peache\'s absolute favorite pizza since it reminds her of her favorite holiday on Pebbles Beach with Bowser back in \'96...' }).save();
    console.log('🍕 Added pizza Hawaiian.');
  
    await new Pizza({ name: 'Pepperoni', toppings: ['cheese', 'sausage', 'onion'], description: 'The Pepperoni is the goto pizza for both Mario brothers. As real Italian men they like to eat their Pepperoni pizzas with extra peppers!' }).save();
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
