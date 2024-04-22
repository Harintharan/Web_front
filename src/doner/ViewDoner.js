import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Action.css";
import Navbar1 from '../layout/Navbar1';


export default function ViewDoner() {

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

    const{id}=useParams();
    useEffect(()=>{
        loadDoner()


    },[])

    const loadDoner=async()=>{
        const result=await axios.get(`http://localhost:8080/doner/${id}`)
        setDoner(result.data)
    }



  return (

    <diV>
        <Navbar1/>
    <div className="Home-custom-backgroundAV">
    <div className="container">
      <diV className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow  custom-formA custom-fontA custom-labelA2E ">
        <h2 className="text-center m-4 custom-fontA  custom-labelA "> Doner Information</h2>
        <div className="card ">
            <div className="card-header">
                Information of Doner ID :{doner.id}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Identy number :</b>
                        {doner.identy_number}

                    </li>
                    <li className="list-group-item">
                        <b>Donate Count :</b>
                        {doner.donate_count}
                    </li>
                    <li className="list-group-item">
                        <b>First Name :</b>
                        {doner.first_name}
                    </li>
                    <li className="list-group-item">
                        <b>Last Name :</b>
                        {doner.last_name}
                    </li>
                    <li className="list-group-item">
                        <b>Age :</b>
                        {doner.age}
                    </li>
                    <li className="list-group-item">
                        <b>Blood Group :</b>
                        {doner.blood_group}
                    </li>
                    <li className="list-group-item">
                        <b>Home No :</b>
                        {doner.home_no}
                    </li>
                    <li className="list-group-item">
                        <b>Street Name :</b>
                        {doner.street_name}
                    </li>
                    <li className="list-group-item">
                        <b>City Name :</b>
                        {doner.city_name}
                    </li>
                    <li className="list-group-item">
                        <b>District Name :</b>
                        {doner.district_name}
                    </li>
                    <li className="list-group-item">
                        <b>Contact Number :</b>
                        {doner.contact_number}
                    </li>
                </ul>
            </div>
        </div>
       <Link className="btn btn-primary my-2" to ={"/donerview"} >Back to DonerView</Link>
        </div>
        </diV>
        </div>
        </div>
        </diV>
  );
}

