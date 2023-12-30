import { useState, useEffect } from 'react'
import WeatherList from './components/WeatherList';
import CurrentWeather from './components/CurrentWeather';
import './App.css'

const WeatherNavBar = ({ handleRefreshClick }) => {
  return(
    <ul className="flex bg-black bg-opacity-80">
      <li className="flex m-2 align-middle basis-1/2">
        <div className='text-2xl font-DMSerif text-stone-50'>Weathery</div>
      </li>
      <li className="flex justify-end m-2 basis-1/2">
      <button 
        className="px-4 py-2 text-white bg-transparent border rounded font-Montserrat hover:bg-white hover:bg-opacity-30"
        onClick={handleRefreshClick}>
          Use Current Location
      </button>
      </li>
    </ul>
  )
  
}

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
    <div className="h-full text-white bg-center bg-no-repeat bg-cover bg-wallpaper">
      
      <WeatherNavBar handleRefreshClick={handleRefreshClick}/>
      <CurrentWeather coordinates={coordinates} />
      <WeatherList coordinates={coordinates} />
      <div className='p-0 m-0 bg-black'><br /></div>
    </div>
  )
}



function App(){

  return(
    <WeatherApp />
  )
}

export default App;