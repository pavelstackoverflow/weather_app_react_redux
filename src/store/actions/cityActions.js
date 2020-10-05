import {ADD_CITY, CLEAR_CITY_LIST, DELETE_CITY, SET_CITY_LIST, SET_CITY_WEATHER, SET_TOKEN} from "./actionTypes";
import {cityApi} from "../../api/api";
import {hideLoader, showLoader} from "./loaderAction";
import {pushError} from "./errorAction";

export const setCityList = (cityList) => ({
    type:SET_CITY_LIST,
    payload: cityList
});

export const setToken = (token) => ({
    type:SET_TOKEN,
    payload: token
});

export const setCityWeather = (cityWeather) => ({
    type:SET_CITY_WEATHER,
    payload: cityWeather
});

export const deleteCity = (cityId) => ({
    type:DELETE_CITY,
    payload: cityId
});

export const clearCityList = () => ({
    type:CLEAR_CITY_LIST
});


export const addCity = (city) => {
    return (dispatch) => {
        dispatch({type:ADD_CITY,payload: city});
        dispatch(getCityWeather(city));
        dispatch(clearCityList());
    };
};


export const getCityList = (name) => {
    return (dispatch) => {
        if (name.length > 0) {
            dispatch(showLoader());
            cityApi.searchCity(name)
                .then(data => {
                    dispatch(hideLoader());
                    if (data.success) {
                        dispatch(setCityList(data.data))
                    } else {
                        dispatch(pushError(data.data))
                    }
                });
        } else {
            dispatch(pushError("Please enter name"))
        }
    };
};

export const initApplication = () => {
    return (dispatch, getState) => {
        dispatch(showLoader());
        dispatch(getToken());
        const { selectCityList } = getState().cityReducer;
        selectCityList.map(city => dispatch(getCityWeather(city)));
    };
};

export const getToken = () => {
    return (dispatch) => {
        cityApi.getToken()
            .then(data => {
                dispatch(hideLoader());
                if (data.success) {
                    dispatch(setToken(data.data))
                } else {
                    dispatch(pushError(data.data))
                }
            });
    };
};

export const getCityWeather = (city) => {
    return (dispatch, getState) => {
        const {token} = getState().tokenReducer.token;
        if (token) {
            cityApi.getCityWeather(city.name, token)
                .then(data => {
                    if (data.success) {
                        dispatch( setCityWeather({...city, weather: data.data}))
                    } else {
                        dispatch(pushError(data.data))
                    }
                });
        }
    };
};