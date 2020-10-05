import React from 'react'
import cloudy from "../../assets/icons/cloudy.svg";
import sunny from "../../assets/icons/sunny.svg";
import humidityIcon from "../../assets/icons/humidity.svg";
import pressureIcon from "../../assets/icons/pressure.svg";
import windIcon from "../../assets/icons/wind.svg";
import sunriseIcon from "../../assets/icons/sunrise.svg";
import sunsetIcon from "../../assets/icons/sunset.svg";
import daytimeIcon from "../../assets/icons/daytime.svg";

const CityInfo = ({showDay, temp, tempMax, tempMin, pressure, humidity, main, wind, duration, sunRiseString, sunSetString}) => {

    return (
        <div className="city-page-info">
            <div className="city-page-info-col">
                <img
                    className="cloud-icon"
                    src={showDay ? sunny : cloudy}
                    alt="showDay"
                />
                <p className="city-page-info-col-cloud-value">
                    {main}
                </p>
            </div>
            <div className="city-page-info-col">
                <p className="city-page-info-col-temp-value">
                    {temp}
                </p>
                <p className="city-page-info-col-temp-measure">
                    °C
                </p>
            </div>
            <div className="city-page-info-col">
                <p className="city-page-info-col-temp-max">
                    {tempMax}°C
                </p>
                <p className="city-page-info-col-temp-min">
                    {tempMin}°C
                </p>
            </div>
            <div className="city-page-info-col">
                <img
                    className="grid-top common-icon"
                    src={humidityIcon}
                    alt="humidityIcon"
                />
                <p className="grid-middle font-app-card-middle">
                    {humidity}%
                </p>
                <p className="grid-bottom font-app-card-bottom">
                   Humidity
                </p>
            </div>
            <div className="city-page-info-col">
                <img
                    className="grid-top common-icon"
                    src={pressureIcon}
                    alt="pressureIcon"
                />
                <p className="grid-middle font-app-card-middle">
                    {pressure} mBar
                </p>
                <p className="grid-bottom font-app-card-bottom">
                    Pressure
                </p>
            </div>
            <div className="city-page-info-col">
                <img
                    className="grid-top common-icon"
                    src={windIcon}
                    alt="windIcon"
                />
                <p className="grid-middle font-app-card-middle">
                    {wind} km/h
                </p>
                <p className="grid-bottom font-app-card-bottom">
                    Wind
                </p>
            </div>
            <div className="city-page-info-col">
                <img
                    className="grid-top common-icon"
                    src={sunriseIcon}
                    alt="sunriseIcon"
                />
                <p className="grid-middle font-app-card-middle">
                    {sunRiseString}
                </p>
                <p className="grid-bottom font-app-card-bottom">
                    Sunrise
                </p>
            </div>
            <div className="city-page-info-col">
                <img
                    className="grid-top common-icon"
                    src={sunsetIcon}
                    alt="sunsetIcon"
                />
                <p className="grid-middle font-app-card-middle">
                    {sunSetString}
                </p>
                <p className="grid-bottom font-app-card-bottom">
                    Sunset
                </p>
            </div>
            <div className="city-page-info-col">
                <img
                    className="grid-top common-icon"
                    src={daytimeIcon}
                    alt="daytimeIcon"
                />
                <p className="grid-middle font-app-card-middle">
                    {duration}
                </p>
                <p className="grid-bottom font-app-card-bottom">
                    Daytime
                </p>
            </div>
        </div>
    )
};

export default CityInfo;
