import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Login';
import Doctor from './Doctor';
import Admin from './Admin';
import { Register } from './Register';
import Patient from './Patient';
import About from './About';
import Contact from './Contact';
import Specialists from './Specialists';


const App = () => {
  return (
    <Router>
    
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register/>} />



            <Route path="/doctor" element={<Doctor/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/patient" element={<Patient/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/specialists" element={<Specialists/>} />








          </Routes>
    </Router>
  );
};

export default App;