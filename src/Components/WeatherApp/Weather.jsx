import React from "react";
import { useState } from "react";
import "./Style.css";

import searchIcon from "../WeatherIcon/Search.png";
import cloud from "../WeatherIcon/Cloud.png";
import humidity from "../WeatherIcon/Humidity.png";
import rain from "../WeatherIcon/Rain.png";
import snow from "../WeatherIcon/Snow.png";
import sun from "../WeatherIcon/Sun.png";
import drizzle from "../WeatherIcon/drizzle.png";
import wind from "../WeatherIcon/Wind.png";
import weatherall from "../WeatherIcon/wicons.png";
import clearsky from "../WeatherIcon/clearsky.png";
import haze from "../WeatherIcon/hazee.png";


function Weather() {
  const [wicon, setWicon] = useState(weatherall);



  let apiKey = "c2f4631d6232f7482a500327629564a9";

  const search = async () => {
    const city = document.getElementsByClassName("cityInput");
    if (city[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&units=Metric&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json(); //get url data into json format

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    // change for adding weather type
    const wtype = document.getElementsByClassName("weather-text");

    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed;
    temprature[0].innerHTML = (data.main.temp).toFixed(0)+'°C';
    location[0].innerHTML = data.name;
    wtype[0].innerHTML = data.weather[0].main;

    if(data.weather[0].icon==='01d' || data.weather[0].icon==='01n'){
        setWicon(sun);
    }else if(data.weather[0].icon==='02d' || data.weather[0].icon==='02n'){
        setWicon(cloud);
    }else if(data.weather[0].icon==='03d' || data.weather[0].icon==='03n'){
        setWicon(drizzle);
    }else if(data.weather[0].icon==='09d' || data.weather[0].icon==='09n'){
        setWicon(rain);
    }else if(data.weather[0].icon==='04d' || data.weather[0].icon==='04n'){
        setWicon(drizzle);
    }else if(data.weather[0].icon==='10d' || data.weather[0].icon==='10n'){
        setWicon(rain);
    }else if(data.weather[0].icon==='13d' || data.weather[0].icon==='13n'){
        setWicon(snow);
    }else if(data.weather[0].icon==='50d' || data.weather[0].icon==='50n'){
        setWicon(haze);
    }else{
        setWicon(clearsky);
    }

  };

  return (

    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search City"  onSubmit={() =>{search()}} />
        <div className="search-icon">
          <img
            className="s-icon"
            src={searchIcon}
            onClick={() => {
              search();
            }}
          />
        </div>
      </div>
      <div className="weather-image">
        <img className="wall-icon" src={wicon} alt="" />
      </div>
      <div className="weather-temp">27°C</div>
      <div className="weather-location">Lucknow</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} className="icon" alt="" />
          <div className="data">
            <div className="humidity-percent">58%</div>
            <div className="humidity-text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} className="icon" alt="" />
          <div className="data">
            <div className="wind-rate">7 km/h</div>
            <div className="humidity-text">Wind Speed</div>
          </div>
        </div>
        {/* begin here */}
        <div className="element">
          {/* <img src={wind} className="icon" alt="" /> */}
          <div className="data">
            <div className="weather-text">Weather</div>
          </div>
        </div>
        {/* its inside changes */}
      </div>
    </div>
  );
}

export default Weather;
