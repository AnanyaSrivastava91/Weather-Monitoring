import React, { useEffect, useState } from "react";
import "./style.css";
import search_icon from "../Assets/search.png";
import axios from "axios";

const Search = () => {
  const [searching, setSearch] = useState("");
  const [temp, setTemp] = useState("");
  const [timeOfUpdate, setTimeOfUpdate] = useState("");
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState("");
  const [feelslike, setFeelsLike] = useState("");
  const [icon, setIcon] = useState("");

  const [show, setShow] = useState(false);
  // useEffect(() => {
  //   search();
  // }, []);
  async function search() {
    try{

      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searching}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      console.log(data.data);
      setWeather(data.data.weather[0].main);
      setTemp(parseInt(data.data.main.temp - 273));
      setFeelsLike(parseInt(data.data.main.feels_like - 273));
      const currentDateTime = new Date();
      const date = currentDateTime.toLocaleDateString();
      const time = currentDateTime.toLocaleTimeString();
      setTimeOfUpdate(`${date}, ${time}`);
      setIcon(data.data.weather[0].icon);
      setCityName(data.data.name);
      setShow(true);
    }
    catch{
      alert("City not found");
    }
  }
  return (
    <div className="main">
      <div className="weather">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={searching}
          />
          <img src={search_icon} alt="img" onClick={search}/>
        </div>
        {show ? (
          <div style={{display:"flex", justifyItems:"center", flexDirection:"column", alignItems:"center"}}>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt=""
              className="weather-icon"
            />
            <p className="temperature">{temp}°C</p>
            <p className="location">{cityName}</p>
            <div className="weather-data">
              <div className="col">
                <p>Today&apos;s weather is {weather}</p>
                <p>Feels like {feelslike}°C</p>
                <p>Last updated {timeOfUpdate}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;
