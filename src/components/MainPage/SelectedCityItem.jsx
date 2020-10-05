import React from 'react'
import {deleteCity} from "../../store/actions/cityActions";
import {connect} from "react-redux";
import deleteBtn from '../../assets/icons/deleteBtn.png'
import {Link} from "react-router-dom";

const SelectedCityItem = ({city, deleteCity}) => {
    return (
        <div className="select-city__item">
            <div className="select-city__item-content">
                <Link to={`/city/${city.id}`}>
                    <div className="select-city__item-info">
                        <p>
                            {city.name}
                        </p>
                        <p className="select-city__item-temp">
                            {city.weather && city.weather.main && city.weather.main.temp ? (Math.floor(city.weather.main.temp) + '°C') : ""}
                        </p>
                    </div>
                </Link>
                <div className="select-city__item-delete">
                    <img
                        src={deleteBtn}
                        alt="deleteBtn"
                        onClick={() => deleteCity(city.id)}
                    />
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = (
    {
        deleteCity
    }
);

export default connect(null, mapDispatchToProps)(SelectedCityItem);
