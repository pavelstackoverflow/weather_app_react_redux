import React, {useEffect} from 'react';
import MainPage from "./components/MainPage/MainPage";
import "./App.scss"
import {initApplication} from "./store/actions/cityActions";
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";
import CityPage from "./components/CityPage/CityPage";
import Error from "./components/common/Error";

function App({initApplication}) {

    useEffect(() => {
        initApplication()
    },[]);

  return (
    <div className="App">
        <Error/>
        <Switch>
            <Route exact path="/">
                <MainPage />
            </Route>
            <Route path="/city/:cityId" component={CityPage} />
        </Switch>
    </div>
  );
}

const mapDispatchToProps = (
    {
        initApplication
    }
);

export default connect(null, mapDispatchToProps)(App);
