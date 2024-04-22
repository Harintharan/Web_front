import React, { useState ,useEffect } from 'react';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import Navbar1 from '../layout/Navbar1';




export default function Signup() {

  
        /*------------------*/
        
        

 
  
        /*------------------*/
  

  let navigate=useNavigate()

  const[user,setUser]=useState({

    username:"",
    password :"",
    email:""

  })

  const{username,password,email} =user

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

   /*------------------------------------------*/
   const [allusers, setallusers] = useState();
   useEffect(() => {
    loadusers();
  }, []);
  const loadusers = async () => {
    const result = await axios.get(
      `http://localhost:8080/users`
    );
    setallusers(result.data);
  };

    /*------------------------------------------*/

  const onSubmit=async (e)=>{
    e.preventDefault();
    console.log(username.length)
   let submit=true;
    if (username.length <4 || password.length <4 || email.length<4 ) {
      alert("Username, password and email must contain at least 4 characters");



      /*------------------------------------------*/
    }
      else{

        if (
          allusers.find(
            (alluser) =>
              alluser.username === user.username &&
              alluser.password === user.password
          )
        ) {
          submit = false;
        }
        if (submit) {
          await axios.post("http://localhost:8080/user", user);
          alert("created");
          navigate("/login");
        } else {
          alert("Already username exist");
        }




    
    
 



  //  await axios.post("http://localhost:8080/user",user);
  // navigate("/login");
  // alert("created");
   
      }

    }
 


  return (
    <div >
      <Navbar1/>
      
     
    <div className="Home-custom-background custom-label custom-font ">
    <div className="container " >
      <diV className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow custom-form ">
        <h2 className="text-center m-4">SIGN UP</h2>

        <form onSubmit={ (e)=>onSubmit(e)}  >
       




        
        <div className="mb-3">
          <label htmlFor="username" className="form-label custom-label custom-font">
          User Name
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter Username"
          name="username"
          value={username}
          onChange={(e)=> onInputChange(e)}/>
        </div>

        
        <div className="mb-3">
          <label htmlFor="password" className="form-label custom-label custom-font">
          Password
          </label>
          <input
          type={"password"}
          className="form-control"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={(e)=> onInputChange(e)}/>
        </div>



        <div className="mb-3">
          <label htmlFor="email" className="form-label custom-label custom-font">
          Email
          </label>
          <input
          type={"email"}
          className="form-control"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e)=> onInputChange(e)}/>
        </div>

        <button type="submit" className="btn btn-outline-primary ">Sign Up</button>
        <Link  className="btn btn-outline-danger mx-2" to ="/login">Cancel</Link>

        </form>



        </div>

      </diV>
       
    </div>
    </div>
    </div>
    
  )
}




