import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contract from "./components/pages/Contract";
import Navbar from "./components/include/Navbar";


function App() {
  return (
    <Router>

    <div>
    <Navbar></Navbar>
    
    <Switch>

      <Route exact path = "/">
       <Home></Home>
      </Route>

      <Route path = "/about">
       <About></About>
      </Route>

      <Route path = "/contact">
       <Contract></Contract>
      </Route>

    </Switch>

  
   </div>
  </Router>
  
  );
};

export default App;
