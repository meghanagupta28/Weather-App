import { useState, useEffect } from 'react'
import getMapping from './helperFunctions/icon-mapping.js'


/**
 * CurrentWeather
 * @param {object} coordinates 
 * @returns HTML for the current weather display
 */

function CurrentWeather({ coordinates }){

    const [ weather, setWeather ] = useState(null);
  
    async function currentweathercall(coordinates){
      setWeather(null);
      await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto`
      )
        .then((res) => {
          if (res.ok) {
            console.log(res.status);
            return res.json();
          } else {
            if (res.status === 404) {
              return alert("Oops, there seems to be an error!");
            }
            alert("Oops, there seems to be an error!");
            throw new Error("You have an error");
          }
        })
        .then((object) => {
          setWeather(object);
          console.log(object);
        })
        .catch((error) => console.log(error));
    }
  
    useEffect(()=>{
     currentweathercall(coordinates);
    },[coordinates]);

  
  
      return(
        <div className="flex p-10 m-10 border shadow-sm shadow-gray-300 rounded-xl">
         { weather?
          (<>
          <div className="grid basis-1/2">
            <h1 className="text-5xl">{weather.current.temperature_2m}</h1>
            <div className="current-rel-humidity">
              
              <h3 className="text-2xl">{weather.current.relative_humidity_2m}</h3>
            </div>
            <div className="current-precipitation">
              <h3 className="text-2xl">{weather.current.precipitation}</h3>
            </div>
            <div className="current-windspd">
              <h3 className="text-2xl">{weather.current.wind_speed_10m}</h3>
            </div>
          </div>
      
          <img className="h-36 w-36" src= {getMapping(weather.current.weather_code, weather.current.is_day_or_night)} alt="weather-icon" />
          </>)
          :
          (<h1 className="text-5xl">Loading...</h1>)}
        </div>
      )
  
  }

export default CurrentWeather;