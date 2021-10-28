import "./App.css";

import React, { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import HomePage from "./components/HomePage"
import LoadingBar from 'react-top-loading-bar'
// import NewsItem from './components/NewsItem';

import {BrowserRouter as  Router, Switch, Route } from "react-router-dom";

// export default class App extends Component {
const App=(props)=> {
  const pageSize=9;
  // apiKeyVal="5fe7972e1c3e4e1c8813a81c8684a888";
  // const apiKeyVal=process.env.REACT_APP_NEWS_API
  const apiKeyVal="5fe7972e1c3e4e1c8813a81c8684a888";

  // const [longitude, setlongitude] = useState(77.182732);
  // const [latitude, setlatitude] = useState(28.694566);
   
  
  //   useEffect(() => {
    
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);

  //       setlongitude(position.coords.latitude);
  //       setlatitude(position.coords.longitude);
  //     });
    
  // }, [])
        
   const [progress, setProgress] = useState(0);

  
    return (
      <>
        <Router >
          <Navbar></Navbar>
          <LoadingBar
        color='#f11946'
        height={4}
        shadow={true}
        progress={progress}
        
          />
          
          <Switch>
            <Route exact path="/">
              {/* <News setProgress={setProgress}  apiKey={apiKeyVal}  key="general" pageSize={6} country="in" category="general1"></News> */}
              <HomePage></HomePage>
            </Route>
            <Route exact path="/Home">
              <HomePage category="Home"></HomePage>
            </Route>
            <Route exact path="/General">
              <News setProgress={setProgress}  apiKey={apiKeyVal}  key="general" pageSize={pageSize} country="in" category="general"></News>
            </Route>
            <Route exact path="/Business">
              <News setProgress={setProgress}  apiKey={apiKeyVal}  key="business" pageSize={pageSize} country="in" category="business"></News>
            </Route>
            <Route exact path="/Entertainment">
              <News setProgress={setProgress}  apiKey={apiKeyVal}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"></News>
            </Route>
            <Route exact path="/Health">
              <News setProgress={setProgress}  apiKey={apiKeyVal}  key="health" pageSize={pageSize} country="in" category="health"></News>
            </Route>
            <Route exact path="/Science">
              <News setProgress={setProgress}  apiKey={apiKeyVal}  key="science" pageSize={pageSize} country="in" category="science"></News>
            </Route>
            <Route exact path="/Sports">
              <News setProgress={setProgress}  apiKey={apiKeyVal}  key="sports" pageSize={pageSize} country="in" category="sports"></News>
            </Route>
            <Route exact path="/Technology">
              <News setProgress={setProgress}  apiKey={apiKeyVal}  key="technology" pageSize={pageSize} country="in" category="technology"></News>
            </Route>

            {/* <News setProgress={setProgress}  pageSize={6} country="in" category="health"></News> */}
          </Switch>
        
        
        </Router>
      </>
    );
  }

export default App;

