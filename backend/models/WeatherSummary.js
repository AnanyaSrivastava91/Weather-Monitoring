const mongoose = require('mongoose');

const weatherSummarySchema = new mongoose.Schema({
  city: String,
  date: String,
  avgTemp: Number,
  maxTemp: Number,
  minTemp: Number,
  humidity: Number,
  windSpeed: Number,
  dominantCondition: String,
});

module.exports = mongoose.model('WeatherSummary', weatherSummarySchema);
