import { useState, useEffect } from 'react'
import GetIcon from './helperFunctions/icon-mapping.jsx'
import Precipitation from '../assets/param-icons/precipitation.svg?react'
import WindSpeed from '../assets/param-icons/wind_speed.svg?react'
import Humidity from '../assets/param-icons/humidity.svg?react'


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
        <div className="flex p-10 m-2 h-30 backdrop-blur-xs shadow-gray-300 rounded-xl">
         { weather?
          (<>
          <div className="grid basis-1/8 font-Montserrat">
            <div className="flex text-5xl">
              {weather.current.temperature_2m}
            </div>
            <div className="flex text-2xl">
            <Precipitation className='w-5 h-5 m-1 fill-white' />
              {weather.current.relative_humidity_2m}
            </div>
            <div className="flex text-2xl align-middle">
             <Humidity className='w-5 h-5 m-1 fill-white' />
             <div> {weather.current.precipitation} </div>
              </div>
            <div className="flex text-2xl">
            <WindSpeed className='w-5 h-5 m-1 fill-white' />
              {weather.current.wind_speed_10m}
              </div>

          </div>
          <div className='w-20 h-20 basis-1/3'>
            <GetIcon weather_code={weather.current.weather_code} is_day={weather.current.is_day} size={'big'}/>
          </div>
          </>)
          :
          (<h1 className="text-5xl h-1000 font-DMSerif">Loading...</h1>)}
        </div>
      )
  
  }

export default CurrentWeather;