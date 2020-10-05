import React from 'react';
import {connect} from "react-redux";
import SelectedCityItem from "./SelectedCityItem";

const SelectedCity = ({selectCityList}) => {

    return (
        <div className="select-city">
            <p className="select-city-title">Selected:</p>
            <div className="select-city-list">
            {selectCityList.map(
                city => <SelectedCityItem city={city} key={city.id} />
            )}
            </div>
        </div>
    )
};

const mapStateToProps = state => (
    {
        selectCityList: state.cityReducer.selectCityList
    }
);

export default connect(mapStateToProps, null)(SelectedCity);