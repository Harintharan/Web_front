import React, { useEffect, useState } from 'react';
import Navbar1 from '../layout/Navbar1';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./Action2.css";




export default function EditUser() {

  let navigate=useNavigate();

  const{id}=useParams()


  const[user,setUser]=useState({

    username:"",
    password :""
   

  })

  const{username,password} =user

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }


  /*----------------*/
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
  

  useEffect(()=>{
    loadUser()

  },[]);
  
  
  const onSubmit=async (e)=>{
    e.preventDefault();

    if (allusers.find((allusers) =>
            allusers.username !== user.username ))

        
        { await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/admin")
           
        }
        else{
            alert("modify username exist already try another username");
        }




   
      



    }


   

  


  const loadUser =async()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`)

    setUser(result.data)
  }
 


  return (
    <div>
      <Navbar1/>
     
    <div className="Home-custom-backgroundAE1 custom-formAE1 custom-labelA2E1">
    <div className="container">
      <diV className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow custom-formAE1 ">
        <h2 className="text-center m-4 custom-labelAE1 ">MODIFY</h2>

        <form onSubmit={ (e)=>onSubmit(e)} className="custom-labelA2E1">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
          UserName
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter Name"
          name="username"
          value ={username}
          onChange={(e)=> onInputChange(e)}/>
        </div>



        <div className="mb-3">
          <label htmlFor="password" className="form-label">
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

        
  

    

        

        


       

       



      




        <button type="submit" className="btn btn-outline-primary">Submit</button>
        <Link  className="btn btn-outline-danger mx-2" to ="/admin">Cancel</Link>

        </form>



        </div>

      </diV>
       
    </div>
    </div>
    </div>
  )


  }

