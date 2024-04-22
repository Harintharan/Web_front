
import './App.css';
import axios from 'axios';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import DonerView from './pages/DonerView';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import AddDoner from './doner/AddDoner';
import EditDoner from './doner/EditDoner';
import ViewDoner from './doner/ViewDoner';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './layout/Footer';
import Admin from './pages/Admin';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';




function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route exact  path ="/donerview" element ={<DonerView/>} />
          <Route exact  path ="/addDoner" element ={<AddDoner/>} />
          <Route exact path="/editdoner/:id" element={<EditDoner/>}/>
          <Route exact path="/viewdoner/:id" element={<ViewDoner/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/admin" element={<Admin/>}/>
          <Route exact path="/addUser" element={<AddUser/>}/>
          <Route exact path="/edituser/:id" element={<EditUser/>}/>
       
          
        </Routes>
     
      </Router>
    <div>
      <Footer/>

    </div>
     
    </div>
  );
}

export default App;
