import { useState, useEffect } from 'react'

function CurrentWeather({ coordinates }){

    const [ weather, setWeather ] = useState(null);
  
    async function currentweathercall(coordinates){
      await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,wind_speed_10m&timezone=auto`
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
        <div className="current-weather">
         { weather?
          (<>
            <h1 className="current-weather-temp">{weather.current.temperature_2m}</h1>
            <h3 className="current-weather-relhum">{weather.current.relative_humidity_2m}</h3>
            <h3 className="current-weather-precip">{weather.current.precipitation}</h3>
            <h3 className="current-weather-windspd">{weather.current.wind_speed_10m}</h3>
          </>)
          :
          (<h1 className="current-weather-error">Loading...</h1>)}
        </div>
      )
  
  }

export default CurrentWeather;