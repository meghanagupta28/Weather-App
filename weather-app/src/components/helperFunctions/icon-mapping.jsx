import ClearSkyDay  from '../../assets/weather-icons/clear sky.svg?react'
import ClearSkyNight  from '../../assets/weather-icons/clear night.svg?react'
import Overcast  from '../../assets/weather-icons/overcast.svg?react'
import  Fog  from '../../assets/weather-icons/fog.svg?react'
import  Rainy  from '../../assets/weather-icons/rainy.svg?react'
import SnowFall  from '../../assets/weather-icons/snow fall.svg?react'
import SnowGrain  from '../../assets/weather-icons/snow grains.svg?react'
import Thunder  from '../../assets/weather-icons/thunderstorm.svg?react'

const clear_sky_day = <ClearSkyDay />;
const clear_sky_night = <ClearSkyNight />;
const overcast = <Overcast />;
const fog = <Fog />
const rainy = <Rainy />
const snowFall = <SnowFall />
const snowGrain = <SnowGrain />
const thunder = <Thunder />

 
const data = [
    {
        'id' : 0,
        'link-day' : clear_sky_day,
        'link-night' : clear_sky_night
    },
    {
        'id' : 1,
        'link-day' : clear_sky_day,
        'link-night' : clear_sky_night
    },{
        'id' : 2,
        'link-day' : clear_sky_day,
        'link-night' : clear_sky_night
    },{
        'id' : 3,
        'link-day' : overcast,
        'link-night' : overcast
    },{
        'id' : 45,
        'link-day' : fog,
        'link-night' : fog
    },{
        'id' : 48,
        'link-day' : fog,
        'link-night' : fog
    },{
        'id' : 51,
        'link-day' : rainy,
        'link-night' : rainy
    },{
        'id' : 53,
        'link-day' : rainy,
        'link-night' : rainy
    },{
        'id' : 55,
        'link-day' : rainy,
        'link-night' : rainy
    },{
        'id' : 56,
        'link-day' : rainy,
        'link-night' : rainy
    },{
        'id' : 57,
        'link-day' : rainy,
        'link-night' : rainy
    },{
        'id' : 61,
        'link-day' : rainy,
        'link-night' : rainy
    },{
        'id' : 63,
        'link-day' : rainy,
        'link-night' : rainy
    },{
        'id' : 65,
        'link-day' : rainy,
        'link-night' : rainy
    },{
        'id' : 66,
        'link-day' : rainy,
        'link-night' : rainy
    },{
        'id' : 67,
        'link-day' : rainy,
        'link-night' : rainy
    },{
        'id' : 71,
        'link-day' : snowFall,
        'link-night' : snowFall
    },{
        'id' : 73,
        'link-day' : snowFall,
        'link-night' : snowFall
    },{
        'id' : 75,
        'link-day' : snowFall,
        'link-night' : snowFall
    },{
        'id' : 77,
        'link-day' : snowGrain,
        'link-night' : snowGrain
    },{
        'id' : 80,
        'link-day' : rainy,
        'link-night' : rainy
    },{
        'id' : 81,
        'link-day' : rainy,
        'link-night' : rainy
    },{
        'id' : 82,
        'link-day' : rainy,
        'link-night' : rainy
    },{
        'id' : 85,
        'link-day' : snowFall,
        'link-night' : snowFall
    },{
        'id' : 86,
        'link-day' : snowFall,
        'link-night' : snowFall
    },{
        'id' : 95,
        'link-day' : thunder,
        'link-night' : thunder
    },{
        'id' : 96,
        'link-day' : thunder,
        'link-night' : thunder
    },{
        'id' : 99,
        'link-day' : thunder,
        'link-night' : thunder
    },
];

const getMapping = ({ weather_code, is_day }) =>{
    const link = data.find(item => weather_code === item.id);
    return (
        <div className='fill-white'> 
            {is_day ? link['link-day'] : link['link-night']}
        </div>
    );
}

export default getMapping;