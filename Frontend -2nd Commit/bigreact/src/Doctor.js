import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import docgif from './img/docgif.gif';
import "bootstrap/dist/css/bootstrap.min.css";

function Doctor() {
  const [doctors, setDoctors] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('https://localhost:7171/api/Doctors')
      .then(res => {
        console.log(res);
        const updatedDoctors = res.data.map(doctor => ({
          ...doctor,
          isActive: doctor.status === 'Active' // Add this line to set the isActive property based on the status value
        }));
        setDoctors(updatedDoctors);
      })
      .catch(err => {
        console.log(err);
        setErrorMessage('Failed to fetch doctor data');
      });
  };

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Welcome to the Patient Portal of Cleo Grace Hospital, Scotland
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/specialists">
                Our Specialists
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
        <img src={docgif} alt="docgif" width="120" height="200" className="mr-2"  />
        <h1>Our Doctors</h1>
        <table className="table table-bordered mt-4 custom-table">
          <thead>
            <tr>
              <th>Doctor ID</th>
              <th>Name</th>
              <th>Specialization</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.doctorId}>
                <td>{doctor.doctorId}</td>
                <td>{doctor.name}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.email}</td>
                <td>{doctor.phoneNumber}</td>
                <td>{doctor.isActive ? 'Active' : 'Inactive'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {errorMessage && (
          <div className="alert alert-danger mt-4" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
      <footer className="footer mt-auto py-3 bg-black">
        <div className="container text-center">
          <span className="text-white">
            Cleo Grace Hospital &copy; 2023
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Doctor
