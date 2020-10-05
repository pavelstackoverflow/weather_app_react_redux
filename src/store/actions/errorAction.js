import {HIDE_ERROR, SHOW_ERROR} from "./actionTypes";


export const showError = (text) => (
    {
        type: SHOW_ERROR,
        payload: text
    }
);

export const hideError = () => (
    {
        type: HIDE_ERROR
    }
);

export const pushError = (text) => {
    return (dispatch) => {
        dispatch(showError(text));
        setTimeout(
            () => {
                dispatch(hideError())
            }, 2000)
    }
};

