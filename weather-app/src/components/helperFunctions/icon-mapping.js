import clear_sky_day from '../../assets/weather-icons/clear sky.svg'
import clear_sky_night from '../../assets/weather-icons/clear night.svg'
import overcast from '../../assets/weather-icons/overcast.svg'

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
        'link-day' : '../assets/weather-icons/fog.svg',
        'link-night' : '../assets/weather-icons/fog.svg'
    },{
        'id' : 48,
        'link-day' : '../assets/weather-icons/fog.svg',
        'link-night' : '../assets/weather-icons/fog.svg'
    },{
        'id' : 51,
        'link-day' : '../assets/weather-icons/rainy.svg',
        'link-night' : '../assets/weather-icons/rainy.svg'
    },{
        'id' : 53,
        'link-day' : '../assets/weather-icons/rainy.svg',
        'link-night' : '../assets/weather-icons/rainy.svg'
    },{
        'id' : 55,
        'link-day' : '../assets/weather-icons/rainy.svg',
        'link-night' : '../assets/weather-icons/rainy.svg'
    },{
        'id' : 56,
        'link-day' : '../assets/weather-icons/rainy.svg',
        'link-night' : '../assets/weather-icons/rainy.svg'
    },{
        'id' : 57,
        'link-day' : '../assets/weather-icons/rainy.svg',
        'link-night' : '../assets/weather-icons/rainy.svg'
    },{
        'id' : 61,
        'link-day' : '../assets/weather-icons/rainy.svg',
        'link-night' : '../assets/weather-icons/rainy.svg'
    },{
        'id' : 63,
        'link-day' : '../assets/weather-icons/rainy.svg',
        'link-night' : '../assets/weather-icons/rainy.svg'
    },{
        'id' : 65,
        'link-day' : '../assets/weather-icons/rainy.svg',
        'link-night' : '../assets/weather-icons/rainy.svg'
    },{
        'id' : 66,
        'link-day' : '../assets/weather-icons/rainy.svg',
        'link-night' : '../assets/weather-icons/rainy.svg'
    },{
        'id' : 67,
        'link-day' : '../assets/weather-icons/rainy.svg',
        'link-night' : '../assets/weather-icons/rainy.svg'
    },{
        'id' : 71,
        'link-day' : '../assets/weather-icons/snow fall.svg',
        'link-night' : '../assets/weather-icons/snow fall.svg'
    },{
        'id' : 73,
        'link-day' : '../assets/weather-icons/snow fall.svg',
        'link-night' : '../assets/weather-icons/snow fall.svg'
    },{
        'id' : 75,
        'link-day' : '../assets/weather-icons/snow fall.svg',
        'link-night' : '../assets/weather-icons/snow fall.svg'
    },{
        'id' : 77,
        'link-day' : '../assets/weather-icons/snow grains.svg',
        'link-night' : '../assets/weather-icons/snow grains.svg'
    },{
        'id' : 80,
        'link-day' : '../assets/weather-icons/rainy.svg',
        'link-night' : '../assets/weather-icons/rainy.svg'
    },{
        'id' : 81,
        'link-day' : '../assets/weather-icons/rainy.svg',
        'link-night' : '../assets/weather-icons/rainy.svg'
    },{
        'id' : 82,
        'link-day' : '../assets/weather-icons/rainy.svg',
        'link-night' : '../assets/weather-icons/rainy.svg'
    },{
        'id' : 85,
        'link-day' : '../assets/weather-icons/snow fall.svg',
        'link-night' : '../assets/weather-icons/snow fall.svg'
    },{
        'id' : 86,
        'link-day' : '../assets/weather-icons/snow fall.svg',
        'link-night' : '../assets/weather-icons/snow fall.svg'
    },{
        'id' : 95,
        'link-day' : '../assets/weather-icons/thunderstorm.svg',
        'link-night' : '../assets/weather-icons/thunderstorm.svg'
    },{
        'id' : 96,
        'link-day' : '../assets/weather-icons/thunderstorm.svg',
        'link-night' : '../assets/weather-icons/thunderstorm.svg'
    },{
        'id' : 99,
        'link-day' : '../assets/weather-icons/thunderstorm.svg',
        'link-night' : '../assets/weather-icons/thunderstorm.svg'
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