import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Login';
import Doctor from './Doctor';
import Admin from './Admin';
import { Register } from './Register';
import Patient from './Patient';


const App = () => {
  return (
    <Router>
    
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register/>} />



            <Route path="/doctor" element={<Doctor/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/patient" element={<Patient/>} />




          </Routes>
    </Router>
  );
};

export default App;