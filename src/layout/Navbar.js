import React from 'react';
import { Link } from 'react-router-dom';
import logol from "../assets/logol.png";
import "./Button.css";






export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container-fluid">
  <a className="navbar-brand" href="">
    <img src={logol} alt="" width="80" height="80"  />
   
      Blood Bank Management System</a>
     

      
      
      
   
    <Link className="btn btn-outline-light btn-lg" to= "/addDoner" >ADD DONER</Link>
    <Link className="btn btn-outline-light " to="/login"> LOG OUT</Link>
    <Link className="btn btn-outline-light" to="/">HOME</Link>
    
  </div>
</nav>




    </div>
  )
}
