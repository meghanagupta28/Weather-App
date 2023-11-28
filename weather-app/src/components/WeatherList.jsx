import { useState, useEffect } from 'react'


function HourlyWeather({ data }){
    const hours = [ 2, 5, 8, 11, 14, 17, 20, 23 ];
    return(
        <div className="basis-3/4 flex pd-4 ">
            {data && hours.map((element, index) =>{
                return(<div className="pd-3 flex-grow grid" key={index}>
                    <div className='text-s'>
                      {data.time[index]}
                      <span className='text-xs'> 00</span>
                    </div>
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

          let givenDate = weather.daily.time[i];
          let [year, month, day] = givenDate.split('-').map(Number);
          let dateObj = new Date(year, month - 1, day); 
          let formattedDate = dateObj.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });

            daily.push({
                'time' : formattedDate,
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
                time.push((element/10 > 1)? element : '0' + element);
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
      <div className="m-1 p-5 flex justify-center gap-2">
        {daily.map((element, index) => {
                return(
                    <div className='p-3 flex-grow border rounded-xl self-center' key={index} onClick={() => handleClick(index)}>
                        <h1 className=''>{element.time}</h1>
                        <h3>{element.temperature_max}</h3>
                        <h3>{element.temperature_min}</h3>
                        <h3>{element.precipitation}</h3>
                    </div>
                )
            })}
      </div>
    <div className="m-5 pd-3 flex border rounded-xl">
      <div className="pd-3 basis-1/4">
      {daily.map((element, index) => {
                
                  if(index == isActive){
                    return(
                    <div className='p-3 grid' key={index} onClick={() => handleClick(index)}>
                        <h1 className='text-3xl'>{element.time}</h1>
                        <h3>Temperature</h3>
                        <h3>Precipitation</h3>
                        <h3>Wind Speed</h3>
                    </div>)
                  }
            })}
      </div>
      <HourlyWeather data={hourly[isActive]} />
    </div>
    </>)
}


export default function WeatherList({ coordinates }){
    const [ weather , setWeather ] = useState(null);

    async function weatherApiCall(coordinates){
        setWeather(null);
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