import React, { useState, useEffect } from 'react';
import axios from 'axios';
import admgif from './img/admgif.gif'
import "bootstrap/dist/css/bootstrap.min.css";

function Admin() {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [deleteDoctorMessage, setDeleteDoctorMessage] = useState('');
  const [deletePatientMessage, setDeletePatientMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    specialization: '',
    email: '',
    phoneNumber: '',
    isActive: true
  });
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    gender: '',
    phoneNumber: '',
    isActive: true
  });

  useEffect(() => {
    fetchDoctorData();
    fetchPatientData();
  }, []);

  const fetchDoctorData = () => {
    axios
      .get('https://localhost:7171/api/Doctors')
      .then(res => {
        console.log(res);
        setDoctors(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

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

  const addDoctor = () => {
    axios
      .post('https://localhost:7171/api/Doctors', newDoctor)
      .then(res => {
        console.log(res);
        setNewDoctor({
          name: '',
          specialization: '',
          email: '',
          phoneNumber: '',
          isActive: true
        });
        fetchDoctorData(); // Fetch updated data after addition
      })
      .catch(err => {
        console.log(err);
        setErrorMessage('Failed to add doctor');
      });
  };

  const addPatient = () => {
    axios
      .post('https://localhost:7171/api/Patients', newPatient)
      .then(res => {
        console.log(res);
        setNewPatient({
          name: '',
          age: '',
          gender: '',
          phoneNumber: '',
          isActive: true
        });
        fetchPatientData(); // Fetch updated data after addition
      })
      .catch(err => {
        console.log(err);
        setErrorMessage('Failed to add patient');
      });
  };

  const deleteDoctor = (doctorId) => {
    axios
      .delete(`https://localhost:7171/api/Doctors/${doctorId}`)
      .then(res => {
        console.log(res);
        setDeleteDoctorMessage('Doctor deleted successfully!');
        fetchDoctorData(); // Fetch updated data after deletion
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deletePatient = (patientId) => {
    axios
      .delete(`https://localhost:7171/api/Patients/${patientId}`)
      .then(res => {
        console.log(res);
        setDeletePatientMessage('Patient deleted successfully!');
        fetchPatientData(); // Fetch updated data after deletion
      })
      .catch(err => {
        console.log(err);
      });
  };
  const activateDoctor = (doctorId) => {
    const doctorToUpdate = doctors.find((doctor) => doctor.doctorId === doctorId);
    const updatedDoctor = {
      ...doctorToUpdate,
      status: 'Active',
    };
  
    axios
      .put(`https://localhost:7171/api/Doctors/${doctorId}`, updatedDoctor)
      .then((res) => {
        console.log(res);
        const updatedDoctors = doctors.map((doctor) =>
          doctor.doctorId === doctorId ? updatedDoctor : doctor
        );
        setDoctors(updatedDoctors);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('Failed to activate doctor');
      });
  };
  
  const deactivateDoctor = (doctorId) => {
    const doctorToUpdate = doctors.find((doctor) => doctor.doctorId === doctorId);
    const updatedDoctor = {
      ...doctorToUpdate,
      status: 'Inactive',
    };
  
    axios
      .put(`https://localhost:7171/api/Doctors/${doctorId}`, updatedDoctor)
      .then((res) => {
        console.log(res);
        const updatedDoctors = doctors.map((doctor) =>
          doctor.doctorId === doctorId ? updatedDoctor : doctor
        );
        setDoctors(updatedDoctors);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('Failed to deactivate doctor');
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
  
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Welcome to Admin Portal of Cleo Grace Hospital, Scotland
        </a>
      </nav>
      <div className="container">
      <img src={admgif} alt="docgif" width="200" height="200" className="mr-2"  />

        <h1>Add Doctor Details</h1>
        <form onSubmit={addDoctor}>
  <div className="form-group">
    <label htmlFor="doctorName">Name</label>
    <input
      type="text"
      className="form-control"
      id="doctorName"
      value={newDoctor.name}
      onChange={(e) =>
        setNewDoctor({ ...newDoctor, name: e.target.value })
      }
    />
  </div>
  <div className="form-group">
    <label htmlFor="specialization">Specialization</label>
    <input
      type="text"
      className="form-control"
      id="specialization"
      value={newDoctor.specialization}
      onChange={(e) =>
        setNewDoctor({ ...newDoctor, specialization: e.target.value })
      }
    />
  </div>
  <div className="form-group">
    <label htmlFor="doctorEmail">Email</label>
    <input
      type="email"
      className="form-control"
      id="doctorEmail"
      value={newDoctor.email}
      onChange={(e) =>
        setNewDoctor({ ...newDoctor, email: e.target.value })
      }
    />
  </div>
  <div className="form-group">
    <label htmlFor="doctorPhoneNumber">Phone Number</label>
    <input
      type="text"
      className="form-control"
      id="doctorPhoneNumber"
      value={newDoctor.phoneNumber}
      onChange={(e) =>
        setNewDoctor({ ...newDoctor, phoneNumber: e.target.value })
      }
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Add Doctor
  </button>
</form>

       
        <hr />
        <h1>Add Patient Details</h1>
        <form onSubmit={addPatient}>
  <div className="form-group">
    <label htmlFor="patientName">Name</label>
    <input
      type="text"
      className="form-control"
      id="patientName"
      value={newPatient.name}
      onChange={(e) =>
        setNewPatient({ ...newPatient, name: e.target.value })
      }
    />
  </div>
  <div className="form-group">
    <label htmlFor="patientAge">Age</label>
    <input
      type="number"
      className="form-control"
      id="patientAge"
      value={newPatient.age}
      onChange={(e) =>
        setNewPatient({ ...newPatient, age: e.target.value })
      }
    />
  </div>
  <div className="form-group">
    <label htmlFor="patientGender">Gender</label>
    <select
      className="form-control"
      id="patientGender"
      value={newPatient.gender}
      onChange={(e) =>
        setNewPatient({ ...newPatient, gender: e.target.value })
      }
    >
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  </div>
 
  <button type="submit" className="btn btn-primary">
    Add Patient 
  </button>
</form>

        <hr />
        <h1>Our Doctors</h1>
        <table className="table table-bordered mt-4 custom-table">
  <thead className="thead-light">
    <tr>
      <th>DoctorId</th>
      <th>Name</th>
      <th>Specialization</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>Status</th>
      <th>Actions</th>
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
        <td>{doctor.status}</td>
        <td>
          {doctor.status === 'Active' ? (
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deactivateDoctor(doctor.doctorId)}
            >
              Deactivate
            </button>
          ) : (
            <button
              className="btn btn-sm btn-success"
              onClick={() => activateDoctor(doctor.doctorId)}
            >
              Activate
            </button>
          )}
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteDoctor(doctor.doctorId)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>


        {deleteDoctorMessage && (
          <div className="alert alert-danger mt-4" role="alert">
            {deleteDoctorMessage}
          </div>
        )}
        <hr />
        <h1>Our Patients</h1>
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
          <button
            className={`btn btn-sm ${patient.status === 'Active' ? 'btn-danger' : 'btn-success'}`}
            onClick={() =>
              patient.status === 'Active'
                ? deactivatePatient(patient.patientId)
                : activatePatient(patient.patientId)
            }
          >
            {patient.status === 'Active' ? 'Deactivate' : 'Activate'}
          </button>
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

        {deletePatientMessage && (
          <div className="alert alert-danger mt-4" role="alert">
            {deletePatientMessage}
          </div>
        )}
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

export default Admin;
