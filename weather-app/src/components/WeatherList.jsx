import { useState, useEffect } from 'react'

function WeatherItem(){
    return(<>
    <div className="weather-list-card">

    </div>
    
    </>)
}


export default function WeatherList({ coordinates }){
    return(
      <div className="weatherlist"> 
        <WeatherItem />
      </div>
    )
  }