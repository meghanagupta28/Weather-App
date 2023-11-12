import { useState, useEffect } from 'react'
import WeatherList from './components/WeatherList';
import CurrentWeather from './components/CurrentWeather';
import './App.css'



function WeatherApp(){
  const [ coordinates , setCoordinates ] = useState({ 'latitude' : '0' , 'longitude' : '0'});

  function handleRefreshClick(){
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
  }
  
  return(
    <div className="page">
      <button 
        className="refresh-button"
        onClick={handleRefreshClick}>
          Refresh
      </button>
      <CurrentWeather coordinates={coordinates} />
      <WeatherList coordinates={coordinates} />
    </div>
  )
}



function App(){

  return(
    <WeatherApp />
  )
}

export default App;