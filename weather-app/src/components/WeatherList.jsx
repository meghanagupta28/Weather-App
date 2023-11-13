import { useState, useEffect } from 'react'


function HourlyWeather({ data }){
    const hours = [ 2, 5, 8, 11, 14, 17, 20, 23 ];
    return(
        <div className="hourly-weather-display">
            {data && hours.map((element, index) =>{
                return(<div className="hourly-weather-display card" key={index}>
                    <h4>{data.time[index]}</h4>
                    <h4>{data.temperature[index]}</h4>
                    <h4>{data.precipitation[index]}</h4>
                    <h4>{data.wind_speed[index]}</h4>
                </div>)
            })}
        </div>
    )
}

function WeatherItems({ weather }){
    const [ isActive, setIsActive ] = useState(0);

    function handleClick(index){
        setIsActive(index);
    }

    function modifyData(weather){

        if (weather == null) return { daily: [], hourly: [] };

        let daily = [], hourly =[];

        for(let i = 0 ; i < 7 ; i++){
            daily.push({
                'time' : weather.daily.time[i],
                'weather_code' : weather.daily.weather_code[i],
                'temperature_max' : weather.daily.temperature_2m_max[i],
                'temperature_min' :  weather.daily.temperature_2m_min[i],
                'precipitation' : weather.daily.precipitation_sum[i]
            })
        }

        const hours = [ 2, 5, 8, 11, 14, 17, 20, 23 ];

        for(let i = 0 ; i < 7; i++){
            let time = [], temp = [], precep = [], windspd = [], wcode = [];

            hours.forEach(element => {
                time.push(weather.hourly.time[i*24 + element]);
                temp.push(weather.hourly.temperature_2m[i*24 + element]);
                precep.push(weather.hourly.precipitation[i*24 + element]);
                windspd.push(weather.hourly.wind_speed_10m[i*24 + element]);
                wcode.push(weather.hourly.weather_code[i*24 + element]);
            });

            hourly.push({
                'time' : time,
                'temperature' : temp,
                'precipitation' : precep,
                'wind_speed' : windspd,
                'weather_code' : wcode 
            })
        }

        return { daily, hourly };
    }

    const { daily , hourly } = modifyData(weather);

    return(<>
    {daily.map((element, index) => {
            return(
                <div className='weather-card' key={index} onClick={() => handleClick(index)}>
                    <h1>{element.time}</h1>
                    <h3>{element.temperature_max}</h3>
                    <h3>{element.temperature_min}</h3>
                    <h3>{element.precipitation}</h3>
                </div>
            )
        })}
    <HourlyWeather data={hourly[isActive]} />
    </>)
}


export default function WeatherList({ coordinates }){
    const [ weather , setWeather ] = useState(null);

    async function weatherApiCall(coordinates){
        await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`
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
        weatherApiCall(coordinates)
    }, [coordinates])

    return(
      <div className="weatherlist">
        <WeatherItems weather={weather} />
      </div>
    )
  }