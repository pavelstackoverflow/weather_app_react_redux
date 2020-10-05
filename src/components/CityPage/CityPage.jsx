import React from 'react'
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import CityInfo from "./CityInfo";
import day from "../../assets/icons/day.png";
import night from "../../assets/icons/night.png";
import './CityPage.scss'

const CityPage = ({selectCityList}) => {

    let {cityId} = useParams();


    const city = selectCityList.find(cityItem => cityItem.id === Number(cityId));

    let clientTimezone = new Date().getTimezoneOffset();
    let cityTimezone = city && city.weather && city.weather.timezone ? city.weather.timezone : 0 - clientTimezone;

    let timeZoneDif = (clientTimezone * 60 + cityTimezone) * 1000;

    let currentTimeDefault = new Date().getTime();

    let currentTime = new Date(currentTimeDefault + timeZoneDif);

    let sunRiseTime = city && city.weather && city.weather.sys ?
        (new Date(city.weather.sys.sunrise * 1000 + timeZoneDif)) : null;

    let sunSetTime = city && city.weather && city.weather.sys ?
        (new Date(city.weather.sys.sunset * 1000 + timeZoneDif)) : null;


    let weekDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const getDuration = (startDate, endDate) => {
        let duration = Math.floor(endDate - startDate);
        let durationText = "";
        durationText += Math.floor(duration / (3600)) + "h ";
        duration = duration % (3600);
        if (duration > 60) {
            durationText += Math.floor(duration / (60)) + "m";
        }
        return durationText;
    };


    let currentTimeString = currentTime ? weekDay[currentTime.getDay()] + ' ' +
        currentTime.getDate() + ' ' + month[currentTime.getMonth()] + ' ' + currentTime.getFullYear() + ' | ' +
        (currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours()) + ':' +
        (currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes()) : "";

    let sunRiseString = sunRiseTime ?
        (sunRiseTime.getHours() < 10 ? '0' + sunRiseTime.getHours() : sunRiseTime.getHours()) + ':' +
        (sunRiseTime.getMinutes() < 10 ? '0' + sunRiseTime.getMinutes() : sunRiseTime.getMinutes()) : "";
    let sunSetString = sunSetTime ?
        (sunSetTime.getHours() < 10 ? '0' + sunSetTime.getHours() : sunSetTime.getHours()) + ':' +
        (sunSetTime.getMinutes() < 10 ? '0' + sunSetTime.getMinutes() : sunSetTime.getMinutes()) : "";

    const weatherAvailable = city && city.weather ? true : false;
    const cityWeather = weatherAvailable ? {...city.weather} : {};
    const showDay = weatherAvailable && cityWeather.dt ?
        (currentTimeDefault > cityWeather.sys.sunrise * 1000 && currentTimeDefault < cityWeather.sys.sunset * 1000)
        : false;

    let duration = weatherAvailable ? getDuration(cityWeather.sys.sunrise, cityWeather.sys.sunset) : "";

    let temp = weatherAvailable ? Math.floor(cityWeather.main.temp) : "";
    let tempMax = weatherAvailable ? Math.floor(cityWeather.main.temp_max) : "";
    let tempMin = weatherAvailable ? Math.floor(cityWeather.main.temp_min) : "";
    let pressure = weatherAvailable ? Math.floor(cityWeather.main.pressure) : "";
    let humidity = weatherAvailable ? Math.floor(cityWeather.main.humidity) : "";
    let main = weatherAvailable ? cityWeather.weather[0].main : "";
    let wind = weatherAvailable ? Math.floor(cityWeather.wind.speed) : "";


    return (
        <div className="city-page">
            <div className="city-page-content">
                <img
                    src={showDay ? day : night}
                    alt="day"/>
                <div className="city-page-container">
                    <div className="city-page-title">
                        <div className="city-page-title-info">
                            <p className="city-page-title-time">
                                {currentTimeString}
                            </p>
                            <p className="city-page-title-name">
                                {city && city.name}
                            </p>
                        </div>
                        <Link to="/">
                <span>
                    close
                </span>
                        </Link>
                    </div>
                    {weatherAvailable ?
                        <CityInfo showDay={showDay}
                                  temp={temp}
                                  tempMax={tempMax}
                                  tempMin={tempMin}
                                  pressure={pressure}
                                  humidity={humidity}
                                  main={main}
                                  wind={wind}
                                  city={city} duration={duration} sunRiseString={sunRiseString}
                                  sunSetString={sunSetString}/>
                        :
                        <p>
                            City not selected
                        </p>
                    }
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => (
    {
        selectCityList: state.cityReducer.selectCityList
    }
);

export default connect(mapStateToProps, null)(CityPage);
