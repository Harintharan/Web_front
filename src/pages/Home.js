import React from 'react';

import "./Home.css";
import Navbar2 from '../layout/Navbar2';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div>
      <Navbar2/>
        <div className="Home-custom-background11">
         
            
       

        <h1 className="stylish-text">Give Blood Save Life</h1>
        <Link type="button" className="outline-button" to="/login">
            GET START
          </Link>
  

        
      </div>
      
        
    </div>

  )
}


