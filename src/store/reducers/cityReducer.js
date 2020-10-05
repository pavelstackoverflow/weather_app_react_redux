import {ADD_CITY, CLEAR_CITY_LIST, DELETE_CITY, SET_CITY_LIST, SET_CITY_WEATHER} from "../actions/actionTypes";

const initialState = {
    cityList: [],
    selectCityList: []
};

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY_LIST:
            return {...state, cityList: action.payload};
        case ADD_CITY:
            let cityExist = false;
            for (let i = 0; i < state.selectCityList.length; i++) {
                if (state.selectCityList[i].id === action.payload.id) {
                    cityExist = true;
                }
            }
            if (cityExist) {
                return {...state}
            } else {
                return {...state, selectCityList: [...state.selectCityList, action.payload]};
            }
        case DELETE_CITY:
            return {...state, selectCityList: state.selectCityList.filter(city => city.id !== action.payload)};
        case SET_CITY_WEATHER:
            return {
                ...state, selectCityList: state.selectCityList.map(city => (
                    city.id === action.payload.id ? ({...city, weather: action.payload.weather}) : city
                ))
            };
        case CLEAR_CITY_LIST:
            return {...state, cityList: []};
        default:
            return state
    }
};

export default cityReducer;