const express = require('express');
const { fetchWeatherData, saveDailySummary } = require('../controllers/weatherController');
const router = express.Router();

router.get('/daily', async (req, res) => {
  const data = await fetchWeatherData();
  await saveDailySummary(data);
  res.json(data);
});

module.exports = router;
