import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./App.css";
import Navbar from './components/Navbar';
import Jumbo from './components/Jumbo';
import Search from "./pages/Search";
import Favs from "./pages/Favorites";

class App extends Component {

  render() {
    return (
      <>
      <Router>
         <Navbar/>
         <Jumbo/>
          <Route exact path="/" component={()=> <Search/>}/>
          <Route exact path="/favs" component={()=> <Favs/>}/>
      </Router>
      </>
    );
  }
}



export default App;
