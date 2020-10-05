import React from 'react';
import {connect} from "react-redux";
import './common.scss'

const Error = ({showError, text}) => {

    return (
        <div className="error-container">
            {showError && <div className="error-container-popup">
                {text}
            </div>
            }
        </div>
    )
};

const mapStateToProps = state => (
    {
        showError: state.errorReducer.showError,
        text: state.errorReducer.text
    }
);



export default connect(mapStateToProps, null)(Error);