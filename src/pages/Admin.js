// import axios from 'axios';
// import "./DonerView.css";
// import React, { useEffect, useState } from 'react'
// import Navbar4 from '../layout/Navbar4';
// import { Link, useParams } from 'react-router-dom';
// import "./Table.css";
// import { Button } from 'bootstrap';

// export default function Admin() {



//     const [users,setusers] = useState([]);

//     const{id}=useParams()



//     useEffect(()=> {
//         loadUsers();
//     },[]);

//     const loadUsers=async()=>{
//         const result = await axios.get("http://localhost:8080/users")
//         setusers(result.data);

//     }


//     const deleteUser =async (id)=>{

//       const confirmDelete = window.confirm('!!!!!! Are you sure to permenently delete the record? !!!!!!!');

//       if (confirmDelete) {
//         await axios.delete(`http://localhost:8080/user/${id}`);
//         loadUsers();
//       }


    
      
//       // await axios.delete( `http://localhost:8080/user/${id}`)

//       // loadDoners()
//     }


//   return (
//     <div>
//         <Navbar4/>
        


// <div className="Home-custom-backgroundD  ">

//     <div className="container table ">
//         <div className="py-4 ">
 

//         <table className="table border  shadow th custom-table">
//   <thead >
//     <tr  >
//         <th scope="col "  className="text-bg-dark " >No.</th>
//       <th scope="col" className="text-bg-dark">UserName</th>
//       <th scope="col" className="text-bg-dark">Password</th>
//       <th scope="col" className="text-bg-dark">Record Actions</th>
    
      

//     </tr>
//   </thead>
//   <tbody >
//     {
//       users.map((user,index)=>(
//             <tr>
//                 <th  className=" bg-dark text-light" scope="row" key={index}>{index+1}</th>
//                 <td>{user.username}</td>
//                 <td>{user.password}</td>
                
//                 <td className="bg-secondary">
                   
//                     <Link className="btn btn-outline-primary  mx-2" 

//                     to ={`/edituser/${user.id}`}
                    
//                     >Modify</Link>

//                     <button className="btn  mx-2"
//                     onClick={()=>deleteUser(user.id)}
//                     >Remove</button>
//                 </td>
                



  

//             </tr>
            
//         ))
//     }
//   </tbody>
// </table>

//         </div>
//     </div>
//     </div>
//     </div>
    
//   )
// }

/*-------------------------*/
import axios from 'axios';
import "./DonerView.css";
import React, { useEffect, useState } from 'react';
import Navbar4 from '../layout/Navbar4';
import { Link, useParams } from 'react-router-dom';
import "./Table.css";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const [searchUsername, setSearchUsername] = useState(''); 

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    const filteredUsers = result.data.filter(user => user.username.toLowerCase().includes(searchUsername.toLowerCase())); 
    setUsers(filteredUsers);
  }

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm('Are you sure to permanently delete the record?');
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers();
    }
  }

  const handleSearch = () => {
    loadUsers(); 
  }

  return (
    <div>
      <Navbar4 />
      <div className="Home-custom-backgroundD">
        <div className="container table">
          <div className="py-4">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search by Username"
                value={searchUsername}
                onChange={(e) => setSearchUsername(e.target.value)}
                className='search-input'
              />
              <button onClick={handleSearch} className='search-button'>Search</button>
            </div>
            <table className="table border shadow th custom-table">
              <thead>
                <tr>
                  <th scope="col" className="text-bg-dark">No.</th>
                  <th scope="col" className="text-bg-dark">UserName</th>
                  <th scope="col" className="text-bg-dark">Password</th>
                  <th scope="col" className="text-bg-dark">Record Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <th className="bg-dark text-light" scope="row">{index + 1}</th>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td className="bg-secondary">
                      <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Modify</Link>
                      <button className="btn mx-2" onClick={() => deleteUser(user.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

