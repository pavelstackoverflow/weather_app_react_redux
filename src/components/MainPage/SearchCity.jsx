import React, {useState} from 'react';
import {connect} from "react-redux";
import {getCityList} from "../../store/actions/cityActions";
import SearchCityItem from "./SearchCityItem";
import Loader from "../common/Loader";

import './MainPage.scss'

const SearchCity = ({cityList, getCityList, loader}) => {

    const [cityName, setCityName] = useState("");

    return (
        <div className="search-city">
            <div className="search-city-line">
            <input className="search-city-input"
                   placeholder="search"
                   value={cityName}
                   onChange={e => (setCityName(e.target.value))}
            />
            <button className="search-city-button" onClick={()=> {
                getCityList(cityName);
                setCityName("");
            }} >Search</button>
            </div>
            <div className="search-city-list">
            {loader ? <Loader/> :
                cityList.map(city => <SearchCityItem city={city} key={city.id}/>)
            }
            </div>
        </div>
    )
};

const mapStateToProps = state => (
    {
        cityList: state.cityReducer.cityList,
        loader: state.loaderReducer.loader
    }
);

const mapDispatchToProps = (
    {
        getCityList
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);