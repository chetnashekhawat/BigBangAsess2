import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
        setDoctors(res.data);
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
          Welcome to the Doctor Portal of Cleo Grace Hospital, Scotland
        </a>
      </nav>
      <div className="container mt-4">
        <h1>Doctor List</h1>
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
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container text-center">
          <span className="text-muted">
            Cleo Grace Hospital &copy; 2023
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Doctor;
