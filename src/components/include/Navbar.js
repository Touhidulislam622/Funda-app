import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        <Link to="/" className="navbar-brand " >Funda of Web IT</Link>

        <button className="navbar-toggler" type ="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item "> 
              <Link to="/Home" className="nav-link active" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link active" >About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contract" className="nav-link active" >Contract</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;