import React, { useEffect, useState } from 'react';
import Navbar1 from '../layout/Navbar1';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./Action.css";




export default function EditDoner() {

  let navigate=useNavigate();

  const{id}=useParams()


  const[doner,setDoner]=useState({

    identy_number:"",
    donate_count :"",
    first_name:"",
    last_name:"",
    age:"",
    blood_group:"",
    home_no:"",
    street_name:"",
    city_name:"",
    district_name:"",
    contact_number:""

  })

  const{identy_number,donate_count,first_name,last_name,age,blood_group,home_no,street_name,city_name,district_name,contact_number} =doner

  const onInputChange=(e)=>{
    setDoner({...doner,[e.target.name]:e.target.value});
  }

  useEffect(()=>{
    loadDoner()

  },[]);

  const onSubmit=async (e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/doner/${id}`,doner)
    navigate("/donerview")

  }


  const loadDoner =async()=>{
    const result=await axios.get(`http://localhost:8080/doner/${id}`)

    setDoner(result.data)
  }
 


  return (
    <div>
      <Navbar1/>
     
    <div className="Home-custom-backgroundAE custom-formAE custom-labelA2E">
    <div className="container">
      <diV className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow custom-formAE ">
        <h2 className="text-center m-4 custom-labelAE ">MODIFY</h2>

        <form onSubmit={ (e)=>onSubmit(e)} className="custom-labelA2E">
        <div className="mb-3">
          <label htmlFor="Identy_number" className="form-label">
            ID
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your ID Number"
          name="identy_number"
          value ={identy_number}
          onChange={(e)=> onInputChange(e)}/>
        </div>



        <div className="mb-3">
          <label htmlFor="Donated_count" className="form-label">
            D.C
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your Donated_count"
          name="donate_count"
          value={donate_count}
          onChange={(e)=> onInputChange(e)}/>
        </div>

        
        <div className="mb-3">
          <label htmlFor="First_name" className="form-label">
          First Name
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your first_name"
          name="first_name"
          value={first_name}
          onChange={(e)=> onInputChange(e)}/>
        </div>

        
        <div className="mb-3">
          <label htmlFor="Last_name" className="form-label">
          Last Name
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your Last_name"
          name="last_name"
          value={last_name}
          onChange={(e)=> onInputChange(e)}/>
        </div>

        
        <div className="mb-3">
          <label htmlFor="Age" className="form-label">
          Age
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your Age"
          name="age"
        value={age}
        onChange={(e)=> onInputChange(e)}/>
        </div>

        
        <div className="mb-3">
          <label htmlFor="Blood_group" className="form-label">
          Blood Group
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your Blood group"
          name="blood_group"
          value={blood_group}
          onChange={(e)=> onInputChange(e)}/>
        </div>

        
        <div className="mb-3">
          <label htmlFor="Home_no" className="form-label">
          Home No
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your Home_No"
          name="home_no"
          value={home_no}
          onChange={(e)=> onInputChange(e)}/>
        </div>

       

        
        <div className="mb-3">
          <label htmlFor="Street_name" className="form-label">
          Street Name
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your street_name"
          name="street_name"
          value={street_name}
          onChange={(e)=> onInputChange(e)}/>
        </div>


        
        <div className="mb-3">
          <label htmlFor="City_name" className="form-label">
          city Name
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your city_name"
          name="city_name"
          value={city_name}
          onChange={(e)=> onInputChange(e)}/>
        </div>


        <div className="mb-3">
          <label htmlFor="District_name" className="form-label">
          District Name
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your district_name"
          name="district_name"
          value={district_name}
          onChange={(e)=> onInputChange(e)}/>
        </div>

        <div className="mb-3">
          <label htmlFor="Contact_number" className="form-label">
          Contact Number
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your contact_number"
          name="contact_number"
          value={contact_number}
          onChange={(e)=> onInputChange(e)}/>
        </div>

        <button type="submit" className="btn btn-outline-primary">Submit</button>
        <Link  className="btn btn-outline-danger mx-2" to ="/donerview">Cancel</Link>

        </form>



        </div>

      </diV>
       
    </div>
    </div>
    </div>
  )
}

