const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  area: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  nearbyFacilities: { type: String },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;