const express = require('express');

const app = express();

app.get('/pizzas', (req, res) => {
  res.json([
    { name: 'Margherita', toppings: ['cheese'] },
    { name: 'Bolognese', toppings: ['cheese', 'meatballs'] },
    { name: 'Hawaii', toppings: ['cheese', 'Bacon', 'Pineapple'] },
  ]);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});