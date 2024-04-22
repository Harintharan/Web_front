// import axios from 'axios';
// import "./DonerView.css";
// import React, { useEffect, useState } from 'react'
// import Navbar from '../layout/Navbar';
// import { Link, useParams } from 'react-router-dom';
// import "./Table.css";

// export default function DonerView() {



//     const [doners,setdoners] = useState([]);

//     const{id}=useParams()



//     useEffect(()=> {
//         loadDoners();
//     },[]);

//     const loadDoners=async()=>{
//         const result = await axios.get("http://localhost:8080/doners")
//         setdoners(result.data);

//     }


//     const deleteDoner =async (id)=>{

//       const confirmDelete = window.confirm('!!!!!! Are you sure to permenently delete the record? !!!!!!!');

//       if (confirmDelete) {
//         await axios.delete(`http://localhost:8080/doner/${id}`);
//         loadDoners();
//       }


    
     
//     }


//   return (
//     <div>
//         <Navbar/>

        
        


// <div className="Home-custom-backgroundD  ">

//     <div className="container table ">
//         <div className="py-4 ">
 

//         <table className="table border  shadow th custom-table">
//   <thead >
//     <tr  >
//         <th scope="col "  className="text-bg-dark " >No.</th>
//       <th scope="col" className="text-bg-dark">D.C</th>
//       <th scope="col" className="text-bg-dark">First name</th>
//       <th scope="col" className="text-bg-dark">B.G</th>
//       <th scope="col" className="text-bg-dark">ID</th>
//       <th scope="col" className="text-bg-dark">District</th>
//       <th scope="col" className="text-bg-dark">Contact</th>
//       <th scope="col" className="text-bg-dark">Record Actions</th>

//     </tr>
//   </thead>
//   <tbody >
//     {
//       doners.map((doner,index)=>(
//             <tr>
//                 <th  className=" bg-dark text-light" scope="row" key={index}>{index+1}</th>
//                 <td>{doner.donate_count}</td>
//                 <td>{doner.first_name}</td>
//                 <td className=" text-bg-danger">{doner.blood_group}</td>
//                 <td>{doner.identy_number}</td>
//                 <td>{doner.district_name}</td>
//                 <td>{doner.contact_number}</td>
//                 <td className="bg-secondary">
//                     <Link className="btn btn-primary mx-2 " to ={`/viewdoner/${doner.id}`}>Show</Link>
//                     <Link className="btn btn-outline-primary  mx-2" 

//                     to ={`/editdoner/${doner.id}`}
                    
//                     >Modify</Link>
//                     <button className="btn  mx-2"
//                     onClick={()=>deleteDoner(doner.id)}
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


/*----------------------*/
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Navbar from '../layout/Navbar';
// import { Link, useParams } from 'react-router-dom';
// import './DonerView.css';
// import './Table.css';

// export default function DonerView() {
//   const [doners, setDoners] = useState([]);
//   const { id } = useParams();
//   const [searchValue, setSearchValue] = useState('');
//   const [filteredDoners, setFilteredDoners] = useState([]);

//   useEffect(() => {
//     loadDoners();
//   }, []);

//   const loadDoners = async () => {
//     const result = await axios.get('http://localhost:8080/doners');
//     setDoners(result.data);
//     setFilteredDoners(result.data);
//   };

//   const deleteDoner = async (id) => {
//     const confirmDelete = window.confirm('Are you sure to permanently delete the record?');
//     if (confirmDelete) {
//       await axios.delete(`http://localhost:8080/doner/${id}`);
//       loadDoners();
//     }
//   };

//   const handleSearch = () => {
//     const lowerCaseSearchValue = searchValue.toLowerCase();

//     // Filter donors based on district or blood group
//     const filtered = doners.filter((doner) =>
//       doner.district_name.toLowerCase() === lowerCaseSearchValue ||
//       doner.blood_group.toLowerCase() === lowerCaseSearchValue
//     );

//     setFilteredDoners(filtered);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="Home-custom-backgroundD">
//         <div className="container table">
//           <div className="py-4">
//             <div className="search-bar">
//               <input
//                 type="text"
//                 placeholder="Search by District or Blood Group"
//                 value={searchValue}
//                 onChange={(e) => setSearchValue(e.target.value)}
//               />
//               <button onClick={handleSearch}>Search</button>
//             </div>
//             <table className="table border shadow th custom-table">
//               <thead>
//                 <tr>
//                   <th scope="col" className="text-bg-dark">No.</th>
//                   <th scope="col" className="text-bg-dark">D.C</th>
//                   <th scope="col" className="text-bg-dark">First name</th>
//                   <th scope="col" className="text-bg-dark">B.G</th>
//                   <th scope="col" className="text-bg-dark">ID</th>
//                   <th scope="col" className="text-bg-dark">District</th>
//                   <th scope="col" className="text-bg-dark">Contact</th>
//                   <th scope="col" className="text-bg-dark">Record Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredDoners.map((doner, index) => (
//                   <tr key={index}>
//                     <th className="bg-dark text-light" scope="row">{index + 1}</th>
//                     <td>{doner.donate_count}</td>
//                     <td>{doner.first_name}</td>
//                     <td className="text-bg-danger">{doner.blood_group}</td>
//                     <td>{doner.identy_number}</td>
//                     <td>{doner.district_name}</td>
//                     <td>{doner.contact_number}</td>
//                     <td className="bg-secondary">
//                       <Link className="btn btn-primary mx-2" to={`/viewdoner/${doner.id}`}>Show</Link>
//                       <Link className="btn btn-outline-primary mx-2" to={`/editdoner/${doner.id}`}>Modify</Link>
//                       <button className="btn mx-2" onClick={() => deleteDoner(doner.id)}>Remove</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


/*----------------------*/
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Navbar from '../layout/Navbar';
// import { Link, useParams } from 'react-router-dom';
// import './DonerView.css';
// import './Table.css';
// import "./DonerView.css";



// export default function DonerView() {
//   const [doners, setDoners] = useState([]);
//   const { id } = useParams();
//   const [searchDistrict, setSearchDistrict] = useState('');
//   const [searchBloodGroup, setSearchBloodGroup] = useState('');
//   const [filteredDoners, setFilteredDoners] = useState([]);

//   useEffect(() => {
//     loadDoners();
//   }, []);

//   const loadDoners = async () => {
//     const result = await axios.get('http://localhost:8080/doners');
//     setDoners(result.data);
//     setFilteredDoners(result.data);
//   };

//   const deleteDoner = async (id) => {
//     const confirmDelete = window.confirm('Are you sure to permanently delete the record?');
//     if (confirmDelete) {
//       await axios.delete(`http://localhost:8080/doner/${id}`);
//       loadDoners();
//     }
//   };

//   const handleSearch = () => {
//     // Filter donors based on district and blood group
//     const filtered = doners.filter((doner) => {
//       const districtMatch = doner.district_name.toLowerCase().includes(searchDistrict.toLowerCase());
//       const bloodGroupMatch = doner.blood_group.toLowerCase().includes(searchBloodGroup.toLowerCase());
//       return districtMatch && bloodGroupMatch;
//     });

//     setFilteredDoners(filtered);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="Home-custom-backgroundD">
//         <div className="container table">
//           <div className="py-4">
//             <div className="search-bar">
//               <input
//                 type="text"
//                 placeholder="Search by District"
//                 value={searchDistrict}
//                 onChange={(e) => setSearchDistrict(e.target.value)}
//                 className='search-input'
//               />
//               <input
//                 type="text"
//                 placeholder="Search by Blood Group"
//                 value={searchBloodGroup}
//                 onChange={(e) => setSearchBloodGroup(e.target.value)}
//                 className='search-input'
//               />
//               <button onClick={handleSearch} className='search-button'>Search</button>
//             </div>
//             <table className="table border shadow th custom-table">
//               <thead>
//                 <tr>
//                   <th scope="col" className="text-bg-dark">No.</th>
//                   <th scope="col" className="text-bg-dark">D.C</th>
//                   <th scope="col" className="text-bg-dark">First name</th>
//                   <th scope="col" className="text-bg-dark">B.G</th>
//                   <th scope="col" className="text-bg-dark">ID</th>
//                   <th scope="col" className="text-bg-dark">District</th>
//                   <th scope="col" className="text-bg-dark">Contact</th>
//                   <th scope="col" className="text-bg-dark">Record Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredDoners.map((doner, index) => (
//                   <tr key={index}>
//                     <th className="bg-dark text-light" scope="row">{index + 1}</th>
//                     <td>{doner.donate_count}</td>
//                     <td>{doner.first_name}</td>
//                     <td className="text-bg-danger">{doner.blood_group}</td>
//                     <td>{doner.identy_number}</td>
//                     <td>{doner.district_name}</td>
//                     <td>{doner.contact_number}</td>
//                     <td className="bg-secondary">
//                       <Link className="btn btn-primary mx-2" to={`/viewdoner/${doner.id}`}>Show</Link>
//                       <Link className="btn btn-outline-primary mx-2" to={`/editdoner/${doner.id}`}>Modify</Link>
//                       <button className="btn mx-2" onClick={() => deleteDoner(doner.id)}>Remove</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


/*----------------------*/


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import { Link, useParams } from 'react-router-dom';
import './DonerView.css';
import './Table.css';

export default function DonerView() {
  const [doners, setDoners] = useState([]);
  const { id } = useParams();
  const [searchDistrict, setSearchDistrict] = useState('');
  const [searchBloodGroup, setSearchBloodGroup] = useState('');
  const [searchIdentyNumber, setSearchIdentyNumber] = useState(''); 
  const [filteredDoners, setFilteredDoners] = useState([]);

  useEffect(() => {
    loadDoners();
  }, []);

  const loadDoners = async () => {
    const result = await axios.get('http://localhost:8080/doners');
    setDoners(result.data);
    setFilteredDoners(result.data);
  };

  const deleteDoner = async (id) => {
    const confirmDelete = window.confirm('Are you sure to permanently delete the record?');
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/doner/${id}`);
      loadDoners();
    }
  };

  const handleSearch = () => {
    
    const filtered = doners.filter((doner) => {
      const districtMatch = doner.district_name.toLowerCase().includes(searchDistrict.toLowerCase());
      const bloodGroupMatch = doner.blood_group.toLowerCase().includes(searchBloodGroup.toLowerCase());
      const identyNumberMatch = doner.identy_number.toLowerCase().includes(searchIdentyNumber.toLowerCase());
      return districtMatch && bloodGroupMatch && identyNumberMatch;
    });

    setFilteredDoners(filtered);
  };

  return (
    <div>
      <Navbar />
      <div className="Home-custom-backgroundD">
        <div className="container table">
          <div className="py-4">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search by District"
                value={searchDistrict}
                onChange={(e) => setSearchDistrict(e.target.value)}
                className='search-input'
              />
              <input
                type="text"
                placeholder="Search by Blood Group"
                value={searchBloodGroup}
                onChange={(e) => setSearchBloodGroup(e.target.value)}
                className='search-input'
              />
              <input
                type="text"
                placeholder="Search by IdentyNumber" 
                value={searchIdentyNumber}
                onChange={(e) => setSearchIdentyNumber(e.target.value)}
                className='search-input'
              />
              <button onClick={handleSearch} className='search-button'>Search</button>
            </div>
            <table className="table border shadow th custom-table">
              <thead>
                <tr>
                  <th scope="col" className="text-bg-dark">No.</th>
                  <th scope="col" className="text-bg-dark">D.C</th>
                  <th scope="col" className="text-bg-dark">First name</th>
                  <th scope="col" className="text-bg-dark">B.G</th>
                  <th scope="col" className="text-bg-dark">ID</th>
                  <th scope="col" className="text-bg-dark">District</th>
                  <th scope="col" className="text-bg-dark">Contact</th>
                  <th scope="col" className="text-bg-dark">Record Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDoners.map((doner, index) => (
                  <tr key={index}>
                    <th className="bg-dark text-light" scope="row">{index + 1}</th>
                    <td>{doner.donate_count}</td>
                    <td>{doner.first_name}</td>
                    <td className="text-bg-danger">{doner.blood_group}</td>
                    <td>{doner.identy_number}</td>
                    <td>{doner.district_name}</td>
                    <td>{doner.contact_number}</td>
                    <td className="bg-secondary">
                      <Link className="btn btn-primary mx-2" to={`/viewdoner/${doner.id}`}>Show</Link>
                      <Link className="btn btn-outline-primary mx-2" to={`/editdoner/${doner.id}`}>Modify</Link>
                      <button className="btn mx-2" onClick={() => deleteDoner(doner.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

