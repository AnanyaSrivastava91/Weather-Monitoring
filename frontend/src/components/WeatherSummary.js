import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherSummary = () => {
  const [summaries, setSummaries] = useState([]);
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [temp, setTemp] = useState("");
  const [timeOfUpdate, setTimeOfUpdate] = useState("");
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState("");
  const [feelslike, setFeelsLike] = useState("");

  useEffect(() => {
    getCurrectCoord();
  }, []);

  function getCurrectCoord() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  setInterval(getCurrectCoord,300000);

  async function showPosition(position) {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    console.log('hello');
    setWeather(data.data.weather[0].main);
    setTemp(parseInt(data.data.main.temp - 273));
    setFeelsLike(parseInt(data.data.main.feels_like - 273));
    const currentDateTime = new Date();
    const date = currentDateTime.toLocaleDateString();
    const time = currentDateTime.toLocaleTimeString();
    setTimeOfUpdate(`${date}, ${time}`)
  }

  return (
    <div>
      <h2>Daily Weather Summaries</h2>
      <h3>Hello, today&apos;s weather is {weather}</h3>
      <h3>Current temperature is {temp}°C</h3>
      <h3>Feels like {feelslike}°C</h3>
      <h3>Last time updated {timeOfUpdate}</h3>
    </div>
  );
};

export default WeatherSummary;
