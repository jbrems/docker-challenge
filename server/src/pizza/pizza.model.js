const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
  name: { type: String, required: true, set: setSlug },
  slug: { type: String, unique: true },
  toppings: [String],
});

function setSlug (name) {
  this.slug = name.trim().toLowerCase().replace(/\s/g, '-');
  return name;
}

module.exports = mongoose.model('Pizza', PizzaSchema);