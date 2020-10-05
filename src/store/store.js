import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "./reducers/rootReducer";

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : []

const initState = {
    cityReducer: {
        selectCityList: persistedState,
        cityList:[]
    }
};

const store = createStore(rootReducer, initState, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState().cityReducer.selectCityList))
});



export default store;
