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
    // fetchSummaries();
  }, []);

  function getCurrectCoord() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  setInterval(getCurrectCoord,300000);

  async function showPosition(position) {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=31f820e3b1218f74b06a47f0d17181f2`
    );
    // console.log(data.data);
    console.log('hello');
    setWeather(data.data.weather[0].main);
    setTemp(parseInt(data.data.main.temp - 273));
    setFeelsLike(parseInt(data.data.main.feels_like - 273));
    // const timestamp = data.data.dt;
    // const date = new Date(timestamp * 1000);
    // const istOffset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
    // const istDate = new Date(date.getTime() + istOffset);
    // // console.log(istDate)
    // setTimeOfUpdate(istDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

    const currentDateTime = new Date();
    const date = currentDateTime.toLocaleDateString();
    const time = currentDateTime.toLocaleTimeString();
    setTimeOfUpdate(`${date}, ${time}`)
    // console.log(date,time)
  }

  //   const fetchSummaries = async () => {
  //     const data = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=31f820e3b1218f74b06a47f0d17181f2`
  //     );
  //     console.log(data.data);
  //   };

  return (
    <div>
      <h2>Daily Weather Summaries</h2>
      {/* {summaries.map((summary) => (
        <div key={summary.city}>
          <h3>{summary.city}</h3>
          <p>Average Temp: {summary.avgTemp.toFixed(2)}°C</p>
          <p>Max Temp: {summary.maxTemp}°C</p>
          <p>Min Temp: {summary.minTemp}°C</p>
          <p>Dominant Condition: {summary.dominantCondition}</p>
        </div>
      ))} */}
      <h3>Hello, today&apos;s weather is {weather}</h3>
      <h3>Current temperature is {temp}°C</h3>
      <h3>Feels like {feelslike}°C</h3>
      <h3>Last time updated {timeOfUpdate}</h3>
    </div>
  );
};

export default WeatherSummary;
