const mongoose = require('mongoose');

const CreditSchema = new mongoose.Schema({
  name: String,
  credits: Number,
  classId: String
}, { index: true });

const Credit = mongoose.model('credits', CreditSchema);

module.exports = Credit;
// module.exports = mongoose.model('Credit', CreditSchema);