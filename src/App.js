
import './App.css';

  import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Spinner from './components/Spinner';
// import NewsItem from './components/NewsItem';
  
  export default class App extends Component {
    c="nikhil";
    render() {
      

      return (
        <>
         <Navbar></Navbar>

         <News pageSize={6}></News>
         
        </>
      )
    }
  }
     

// export default App;
