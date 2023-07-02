import React from 'react';
import cardImage1 from './img/cardImage1.jpg';
import cardImage2 from './img/cardImage2.jpg';
import cardImage5 from './img/cardImage5.jpg';
import { useState } from 'react';
import clogo from './img/clogo.jpg';
import dlogo from './img/dlogo.jpeg';
import elogo from './img/elogo.jpeg';
import emp from './img/emp.jpg';
import emp1 from './img/emp1.jpeg';
import emp4 from './img/emp4.jpeg';



const About = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'Kimera Jennings', designation: 'CEO', image: elogo },
        { id: 2, name: 'Clair Hoffman', designation: 'President', image: emp },
        { id: 3, name: 'Alex Murphy', designation: 'CTO', image: clogo },
        { id: 4, name: 'Dave glen', designation: 'Neuro-Surgeon', image: emp1 },
        { id: 5, name: 'Brockhorns Dave', designation: 'CMO', image: dlogo },
        { id: 6, name: 'Rachel Hemmings', designation: 'Cardiologist', image: emp4 }
      ]);
    
      const [filteredEmployees, setFilteredEmployees] = useState(employees);
    
      const filEmp = filteredEmployees.filter((employee) => employee.id % 2 === 0);
    
      const imgStyle = {
        maxWidth: '100px',
      };//done
    return (
        <div className="d-flex flex-column min-vh-100">
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Welcome to the Patient Portal of Cleo Grace Hospital, Scotland
        </a>
        
      </nav>


            <div className="container flex-grow-1">
                <h1 className="display-4 text-center">About Us</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filEmp.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.designation}</td>
                                <td>
                                    <img
                                        src={employee.image}
                                        alt="Emp"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: '100px' }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <img src={cardImage1} className="card-img-top" alt="Card 1" />
                            <div className="card-body">
                                <h5 className="card-title">Plastic Surgery Equipment</h5>
                                <p className="card-text">All the CEOs, CFOs gathered to celebrate Target completion party.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card">
                            <img src={cardImage2} className="card-img-top" alt="Card 2" />
                            <div className="card-body">
                                <h5 className="card-title">Our staff</h5>
                                <p className="card-text">Residents and Senior Surgeons</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card">
                            <img src={cardImage5} className="card-img-top" alt="Card 3" />
                            <div className="card-body">
                                <h5 className="card-title">Patient Room Environment</h5>
                                <p className="card-text">Team Collaborations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
);
};

export default About;
