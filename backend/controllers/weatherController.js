const axios = require('axios');
const WeatherSummary = require('../models/WeatherSummary');
const API_KEY = process.env.API_KEY || '31f820e3b1218f74b06a47f0d17181f2';
const CITIES = [
  { name: 'Delhi', id: 1273294 },
  { name: 'Mumbai', id: 1275339 },
  { name: 'Chennai', id: 1264527 },
  { name: 'Bangalore', id: 1277333 },
  { name: 'Kolkata', id: 1275004 },
  { name: 'Hyderabad', id: 1269843 },
];

const fetchWeatherData = async () => {
  try {
    const responses = await Promise.all(
      CITIES.map(({ id }) =>
        axios.get(`http://api.openweathermap.org/data/2.5/forecast`, {
          params: {
            id,
            appid: API_KEY,
          },
        })
      )
    );

    // Process the forecast data for each city
    return responses.map((res) => {
      const { city, list } = res.data;
      const forecast = list[0]; // Taking the most recent forecast update
      const { main, weather, wind, dt } = forecast;

      return {
        city: city.name,
        date: new Date(dt * 1000).toISOString().split('T')[0],
        temp: main.temp - 273.15, // Kelvin to Celsius
        feelsLike: main.feels_like - 273.15,
        humidity: main.humidity,
        windSpeed: wind.speed,
        condition: weather[0].main,
      };
    });
  } catch (error) {
    console.error('Error fetching weather forecast:', error.message);
    return [];
  }
};

const saveDailySummary = async (weatherData) => {
  try {
    const summaries = weatherData.map((data) => ({
      ...data,
      avgTemp: data.temp,
      maxTemp: data.temp,
      minTemp: data.temp,
      dominantCondition: data.condition,
    }));

    await WeatherSummary.insertMany(summaries);
    console.log('Daily weather summaries saved successfully');
  } catch (error) {
    console.error('Error saving weather summary:', error.message);
  }
};

module.exports = { fetchWeatherData, saveDailySummary };
