import React from 'react';
import {addCity} from "../../store/actions/cityActions";
import {connect} from "react-redux";

const SearchCityItem = ({city, addCity}) => {


    return (
        <div className="search-city-item">
            <div onClick={()=> addCity(city)}>
                <p>
                    {city.name}
                </p>
            </div>
        </div>
    )
};

const mapDispatchToProps = (
    {
        addCity
    }
);

export default connect(null, mapDispatchToProps)(SearchCityItem);
