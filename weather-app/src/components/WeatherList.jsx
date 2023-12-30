import { useState, useEffect } from 'react'
import GetIcon from './helperFunctions/icon-mapping.jsx'

function HourlyWeather({ date, data }){
    
    const hours = [ 2, 5, 8, 11, 14, 17, 20, 23 ];
    return(
      <>
            <div className='p-4 m-3 bg-black border rounded-xl bg-opacity-60'>
              <div className="flex">
                <div className='text-3xl basis-1/4 font-DMSerif'>{date}</div>
                <div className='flex font-medium basis-3/4'>
                  {data && hours.map((element, index) =>{
                    return(<div className="basis-full" key={index}>
                          {data.time[index]}
                          <span className='text-xs'> 00</span>
                    </div>)
                  })}
                </div>
              </div>

              <div className="flex">
                <div className='font-medium basis-1/4'>Temperature</div>
                <div className='flex basis-3/4'>
                    {data && hours.map((element, index) =>{
                      return(<div className="flex-grow basis-full" key={index}>
                            {data.temperature[index]}
                      </div>)
                    })}
                  </div>
              </div>
              
              <div className="flex">
                <div className='font-medium basis-1/4'>Precipitation</div>
                <div className="flex basis-3/4">
                    {data && hours.map((element, index) =>{
                      return(<div className="flex-grow basis-full" key={index}>
                            {data.precipitation[index]}
                      </div>)
                    })}
                  </div>
              </div>

              <div className="flex">
                <div className='font-medium basis-1/4'>Wind Speed</div>
                <div className="flex basis-3/4">
                    {data && hours.map((element, index) =>{
                      return(<div className="flex-grow basis-full" key={index}>
                            {data.wind_speed[index]}
                      </div>)
                    })}
                </div>
              </div>
              
            </div>
      </>
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
      <div className="flex justify-center gap-2 p-5 m-1 backdrop-blur-sm ">
        {daily.map((element, index) => {
                return(
                    <div className='flex flex-col self-center flex-grow p-3 bg-black border text-align-center bg-opacity-60 rounded-xl' key={index} onClick={() => handleClick(index)}>
                        <div className='text-xl font-DMSerif basis-full'>{element.time}</div>
                        <div className='h-7'>
                          <GetIcon weather_code={element.weather_code} is_day={1} size={'small'}/>
                        </div>
                        <div className='my-0.5'>
                          <div className='text-xs'>Max</div>
                          <div className=''>{element.temperature_max}</div>
                        </div>
                        <div className='my-0.5'>
                          <div className='text-xs'>Min</div>
                          <div className='basis-full'>{element.temperature_min}</div>
                        </div>
                        <div className='my-0.5'>
                            <div className='text-xs'>Precip.</div>
                            <div className='basis-full'>{element.precipitation}</div>
                        </div>
                    </div>
                )
            })}
      </div>
        {daily[isActive] && <HourlyWeather date ={daily[isActive].time} data={hourly[isActive]} />}
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
      <div className="bg-transparent font-Montserrat">
        <WeatherItems weather={weather} />
      </div>
    )
  }