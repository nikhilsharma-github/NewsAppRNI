import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import HomePage from "./components/HomePage"
import LoadingBar from 'react-top-loading-bar'
// import NewsItem from './components/NewsItem';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  c = "nikhil";
  pageSize=9;
  // apiKeyVal="5fe7972e1c3e4e1c8813a81c8684a888";
  apiKeyVal=process.env.REACT_APP_NEWS_API
    

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  
  render() {
    return (
      <>
        <Router>
          <Navbar></Navbar>
          <LoadingBar
        color='#f11946'
        height={4}
        shadow={true}
        progress={this.state.progress}
        
      />
          
          <Switch>
            <Route exact path="/">
              {/* <News setProgress={setProgress}  apiKey={this.apiKeyVal}  key="general" pageSize={6} country="in" category="general1"></News> */}
              <HomePage></HomePage>
            </Route>
            <Route exact path="/Home">
              <HomePage category="Home"></HomePage>
            </Route>
            <Route exact path="/General">
              <News setProgress={this.setProgress}  apiKey={this.apiKeyVal}  key="general" pageSize={this.pageSize} country="in" category="general"></News>
            </Route>
            <Route exact path="/Business">
              <News setProgress={this.setProgress}  apiKey={this.apiKeyVal}  key="business" pageSize={this.pageSize} country="in" category="business"></News>
            </Route>
            <Route exact path="/Entertainment">
              <News setProgress={this.setProgress}  apiKey={this.apiKeyVal}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"></News>
            </Route>
            <Route exact path="/Health">
              <News setProgress={this.setProgress}  apiKey={this.apiKeyVal}  key="health" pageSize={this.pageSize} country="in" category="health"></News>
            </Route>
            <Route exact path="/Science">
              <News setProgress={this.setProgress}  apiKey={this.apiKeyVal}  key="science" pageSize={this.pageSize} country="in" category="science"></News>
            </Route>
            <Route exact path="/Sports">
              <News setProgress={this.setProgress}  apiKey={this.apiKeyVal}  key="sports" pageSize={this.pageSize} country="in" category="sports"></News>
            </Route>
            <Route exact path="/Technology">
              <News setProgress={this.setProgress}  apiKey={this.apiKeyVal}  key="technology" pageSize={this.pageSize} country="in" category="technology"></News>
            </Route>

            {/* <News setProgress={setProgress}  pageSize={6} country="in" category="health"></News> */}
          </Switch>
        
        
        </Router>
      </>
    );
  }
}

// export default App;
