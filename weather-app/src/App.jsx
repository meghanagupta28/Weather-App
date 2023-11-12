import { useState } from 'react'

function WeatherApp({ children }){
  return(
    <div className="page">
      {children}
    </div>
  )
}

function CurrentWeather({ coordinates }){
  return(
    <div className="current-weather">
      
    </div>
  )
}

function WeatherList({ coordinates }){
  return(
    <div className="weatherlist">
      
    </div>
  )
}

function App(){
  const [ coordinates , setCoordinates ] = useState({ 'latitude' : '0' , 'longitude' : '0'});

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported");
  }
  
  function success(position) {
    setCoordinates({'latitude' : position.coords.latitude, 'longitude' :  position.coords.longitude })
    console.log(coordinates);
  }
  
  function error() {
    console.log("Unable to retrieve your location");
  }

  return(
    <>
    <WeatherApp>
    <CurrentWeather coordinates={coordinates} />
    <WeatherList coordinates={coordinates} />
    </WeatherApp>
    </>
  )
}

export default App;