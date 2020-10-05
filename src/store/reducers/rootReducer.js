import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import cityReducer from "./cityReducer";
import loaderReducer from "./loaderReducer";
import tokenReducer from "./tokenReducer";

const rootReducer = combineReducers({
    cityReducer,
    errorReducer,
    loaderReducer,
    tokenReducer
});

export default rootReducer;

