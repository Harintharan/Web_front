import React from 'react';
import logol from "../assets/logol.png";
import { Link } from 'react-router-dom';




export default function Navbar1() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="">
    <img src={logol} alt="" width="80" height="80"  />
      Blood Bank Management System</a>
    
    <Link className="btn btn-outline-light" to="/">HOME</Link>
    
    
  </div>
</nav>




    </div>
  )
}