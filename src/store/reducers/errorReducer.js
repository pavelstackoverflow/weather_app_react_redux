import {SHOW_ERROR, HIDE_ERROR} from "../actions/actionTypes";

const initialState = {
    showError: false,
    text: ""
};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ERROR:
            return {showError: true, text:action.payload};
        case HIDE_ERROR:
            return {showError: false, text:""};
        default:
            return state
    }
};

export default errorReducer;