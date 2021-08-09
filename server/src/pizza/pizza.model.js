const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true },
  description: String,
  toppings: [String],
});

PizzaSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = this.name.trim().toLowerCase().replace(/\s/g, '-'); 
  }
  next();
});

module.exports = mongoose.model('Pizza', PizzaSchema);