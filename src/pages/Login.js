// import React from 'react';
// import Navbar1 from '../layout/Navbar1';
// import './Login.css'
// import { Link } from 'react-router-dom';

// export default function Login() {
//   return (

//     <div>
//           <Navbar1/>
  
//     <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
//         <div className='form_container p-5 rounded  bg-white'>
      
//         <form>
//             <h3 className="center">
//                 SIGN IN
//             </h3>
//             <div className="mb-2">
//                 <label htmlFor="username">Username</label>
//                 <input type="text" placeholder="Enter the Username" className="form-control"></input>
//             </div>
//             <div>
//                 <label htmlFor="password">Password</label>
//                 <input type="password" placeholder="Enter the Password" className="form-control"></input>
//             </div>
//             <div  className="mb-2">
                
//                 <input type="checkbox"  className="custom-control custom-checkbox"  id="check"></input>
//                 <label htmlFor="check" className="custom-input-label ms-2">
//                     Remember me
//                 </label>
//             </div>
//             <div className="d-grid">
//                 <Link className='btn btn-primary' to ="/donerview">Sign in</Link>
//             </div>
//             <p  className='text-end mt-2'>
//                 Forgot <a href=" ">Password?</a><Link to ="/signup" className="ms-2">Sign up</Link>
//             </p>

//         </form>
//         </div>
//     </div>
//     </div>
//   )
// }


//------------------------------------------------------------------------------
import React, { useEffect, useState } from "react";
 import axios from "axios";
 import { Link, useParams, useNavigate, Form } from "react-router-dom";
 import "./Login.css";

 import Navbar1 from "../layout/Navbar1";


 function Login() {
  let navigate = useNavigate();

   const [users, setusers] = useState([]);
const [correctuser,setcorrectuser]= useState();
   const [loginUserName, setloginUserName] = useState();
   const [loginPassword, setloginPassword] = useState();
   /*---------*/

   const [showWrongMessage, setShowWrongMessage] = useState(false);
   /*---------*/
 




  useEffect(() => {
     loadUsers();
 }, []);
 const loadUsers = async () => {
     const result = await axios.get(
      "http://localhost:8080/users"
   );
   setusers(result.data);
  };

  const handleClick = () => {

    if(loginUserName==="admin" && loginPassword==="admin")
    { navigate("/admin")}
    else
   
  {const foundUser = users.find((user) => user.username === loginUserName && user.password === loginPassword);



       if (foundUser) {
       setcorrectuser(foundUser);
       
     
       navigate("/donerview");
     }
     /*---------*/

     else{ 

      setShowWrongMessage(true);

     }}
     /*---------*/
  };





  return (
    <div >
       <Navbar1/>
       <div>
 
     <div  className="login template d-flex justify-content-center align-items-center  100-w vh-100 Home-custom-background1 ">
       <div className="40-w p-5 rounded bg-white custom-font custom-label custom-form">
         <form className="needs-validation">
           <h3>SIGN IN</h3>
        
           <div className="mb-2 custom-font custom-label was-validated">
             <label htmlFor="username">UserName</label>
             <input
               type="username"
               placeholder="Enter UserName"
               className="form-control"
               name="loginUserName"
               value={loginUserName}
               onChange={(e) => setloginUserName(e.target.value)} required
             />
             <div className="invalid-feedback"></div>
           </div>
           <div className="mb-2 custom-font custom-label was-validated">
             <label htmlFor="password">Password</label>
             <input
               type="password"
               placeholder="Enter Password"
               className="form-control"
               name="loginPassword"
               value={loginPassword}
               onChange={(e) => setloginPassword(e.target.value)} required
             />
             <div className="invalid-feedback"> </div>
           </div>
          
           <div className="d-grid">
             <button
              
               className="btn btn-primary"
               onClick={handleClick}
             >
               Sign In
           </button>
         
          

           
          </div>
        
          {showWrongMessage && (
                <p className="text-danger">Username and password are wrong.</p>
              )}
           


          
        </form>
       
       </div>
     </div>
    </div>
     </div>
   
  );
 }

 export default Login;


