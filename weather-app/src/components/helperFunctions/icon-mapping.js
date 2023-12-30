import clear_sky_day from '../../assets/weather-icons/clear sky.svg'
import clear_sky_night from '../../assets/weather-icons/clear night.svg'
import overcast from '../../assets/weather-icons/overcast.svg'
import fog from '../../assets/weather-icons/fog.svg'
import rainy from '../../assets/weather-icons/rainy.svg'
import snowFall from '../../assets/weather-icons/snow fall.svg'
import snowGrain from '../../assets/weather-icons/snow grains.svg'
import thunder from '../../assets/weather-icons/thunderstorm.svg'

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

const getMapping = (weather_code, is_day) =>{
    const link = data.find(item => weather_code === item.id);
    if(is_day){
        return link['link-day'];
    }
    return link["link-night"];
}

export default getMapping;