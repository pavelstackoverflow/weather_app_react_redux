import React from 'react';
import SearchCity from "./SearchCity";
import "./MainPage.scss";
import SelectedCity from "./SelectedCity";

const MainPage = () => {


    return (
        <div className="main-page">

            <div className="main-page-content">
            <div className="main-page-title">
                Location
            </div>
            <SearchCity/>
            <SelectedCity/>
            </div>
        </div>
    )
};

export default MainPage;