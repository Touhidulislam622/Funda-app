import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contract from "./components/pages/Contract";
import Navbar from "./components/include/Navbar";
import Footer from "./components/include/Footer";


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

      <Route path = "/contract">
       <Contract></Contract>
      </Route>

    </Switch>
    <Footer></Footer>

  
   </div>
  </Router>
  
  );
};

export default App;
