var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dashboardSchema = new Schema({
  name: { type: String, required: true, unique: true },
  location: String,
  width: Number,
  theme: String,
  responsive: Boolean,
});

var Dashboard = mongoose.model('dashboard', dashboardSchema);

module.exports = Dashboard;
