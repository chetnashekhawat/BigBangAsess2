import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Patient() {
  const [patients, setPatients] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchPatientData();
  }, []);

  const fetchPatientData = () => {
    axios
      .get('https://localhost:7171/api/Patients')
      .then(res => {
        console.log(res);
        setPatients(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const activatePatient = (patientId) => {
    const patientToUpdate = patients.find((patient) => patient.patientId === patientId);
    const updatedPatient = {
      ...patientToUpdate,
      status: 'Active',
    };

    axios
      .put(`https://localhost:7171/api/Patients/${patientId}`, updatedPatient)
      .then((res) => {
        console.log(res);
        const updatedPatients = patients.map((patient) =>
          patient.patientId === patientId ? updatedPatient : patient
        );
        setPatients(updatedPatients);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('Failed to activate patient');
      });
  };

  const deactivatePatient = (patientId) => {
    const patientToUpdate = patients.find((patient) => patient.patientId === patientId);
    const updatedPatient = {
      ...patientToUpdate,
      status: 'Inactive',
    };

    axios
      .put(`https://localhost:7171/api/Patients/${patientId}`, updatedPatient)
      .then((res) => {
        console.log(res);
        const updatedPatients = patients.map((patient) =>
          patient.patientId === patientId ? updatedPatient : patient
        );
        setPatients(updatedPatients);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('Failed to deactivate patient');
      });
  };

  const addPatient = () => {
    const name = prompt('Enter patient name:');
    const age = parseInt(prompt('Enter patient age:'), 10);
    const gender = prompt('Enter patient gender:');
    const status = prompt('Enter patient status (Active/Inactive):');

    if (!name || !age || !gender || !status) {
      setErrorMessage('Please enter all fields.');
      return;
    }

    const newPatient = {
      name,
      age,
      gender,
      status,
    };

    axios
      .post('https://localhost:7171/api/Patients', newPatient)
      .then((res) => {
        console.log(res);
        setPatients([...patients, res.data]);
        setErrorMessage('');
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('Failed to add patient');
      });
  };

  const deletePatient = (patientId) => {
    axios
      .delete(`https://localhost:7171/api/Patients/${patientId}`)
      .then((res) => {
        console.log(res);
        const updatedPatients = patients.filter((patient) => patient.patientId !== patientId);
        setPatients(updatedPatients);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('Failed to delete patient');
      });
  };

  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Welcome to the Patient Portal of Cleo Grace Hospital, Scotland
        </a>
      </nav>
      <h1>Our Patients</h1>
      <button className="btn btn-primary" onClick={addPatient}>
        Add Patient
      </button>
      <table className="table table-bordered mt-4 custom-table">
        <thead className="thead-light">
          <tr>
            <th>PatientId</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.patientId}>
              <td>{patient.patientId}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.status}</td>
              <td>
                {patient.status === 'Active' ? (
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deactivatePatient(patient.patientId)}
                  >
                    Deactivate
                  </button>
                ) : (
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => activatePatient(patient.patientId)}
                  >
                    Activate
                  </button>
                )}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deletePatient(patient.patientId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {errorMessage && (
        <div className="alert alert-danger mt-4" role="alert">
          {errorMessage}
        </div>
      )}
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

export default Patient;
