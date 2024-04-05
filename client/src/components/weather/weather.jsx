import "./weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faMagnifyingGlass, faWind
    
 } from "@fortawesome/free-solid-svg-icons";

// import {useLocation} from "react-router-dom";
import { useState, useEffect } from "react";

const Weather = ({destination}) => {

    console.log(destination);

    let API_KEY= "b6ee5e0222d46e83366e17593d432357";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${destination}&units=Metric&appid=${API_KEY}`;


    
  const [weatherData, setWeatherData] = useState(null);
  
    useEffect(() => {
      // Fetch weather data when the component mounts
      const fetchWeather = async () => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${destination}&units=Metric&appid=${API_KEY}`
          );
          setWeatherData(response.data);
          console.log(weatherData);
          console.log(response);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
  
      if (destination) {
        fetchWeather();
      }
    }, [destination, API_KEY]);


  

    // const handleClick=()=>{

    // }


  return (

    <div className="container">
      <h3 className="wTitle">Weather</h3>
        <div className="wItem">
            <input type="text" className="cityInput" placeholder={destination} />
             {/* <button className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
             </button> */}
        </div>

        {weatherData && (
            <>

        <div className="wItem">
        
             <h2 className="wLocation">{destination}</h2>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} className="wImage" alt="iamge" />
            <h2 className="wTemp">{weatherData.main.temp}°C</h2>
            <h3  className="wDesc">{weatherData.weather[0].description.toUpperCase()}</h3>
            {/* <div className="data">
            
                <div className="humidityPerc">{weatherData.main.humidity}%</div>
                <div className="text">Humidity</div>
            </div> */}
        </div>
       

        <div className="wItem">
            <div className="wIcon">
              <FontAwesomeIcon icon={faWind} />
              </div>
                <div className="windPerc">{weatherData.wind.speed} km/h</div>
                <div className="text">Wind Speed</div>        
        </div>
        </>
        )}
    </div>
  );
    
}
export default Weather
