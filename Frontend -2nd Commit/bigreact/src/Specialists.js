import React, { useState } from 'react';

const Specialists = () => {
  const [isDeveloper, setIsDeveloper] = useState(false);

 
  return (
    <div className="container services-container">
         
      <h2 className="mt-4 mb-3">Our Specialists</h2>
      <ul className="list-group mb-3">
        <li className="list-group-item list-group-item-action list-group-item-info">Radiologist</li>
        <li className="list-group-item list-group-item-action list-group-item-primary">Internal Medicine</li>
        <li className="list-group-item list-group-item-action list-group-item-success">Pediatrician</li>
        <li className="list-group-item list-group-item-action list-group-item-warning">Orthopedist</li>
        <li className="list-group-item list-group-item-action list-group-item-danger">Dermatologist</li>
      </ul>
      <p className="mb-4">Our hospital boasts a team of highly skilled and experienced specialists who are experts in their respective fields.</p>
      <p className="mb-4">With a focus on delivering exceptional healthcare services, our specialists are dedicated to providing the highest quality care to our patients.
From renowned surgeons to top-notch physicians, our specialists are at the forefront of medical advancements, ensuring the best possible treatments and outcomes.</p>
      <p>At Cleo Grace Hospital, you can trust that your health is in the hands of the most competent and compassionate specialists in Scotland.</p>

    
    </div>
  );
};

export default Specialists;
