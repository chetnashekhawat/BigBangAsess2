import React from 'react';
import { BsEnvelope, BsPhone, BsChatSquareDots } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="container  contact-container">
        
      <h2 className="mt-4 mb-3">Contact Us</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 assistant-card">
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <p className="card-text"><BsEnvelope className="mr-2" /> cleograce@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4  phone-card">
            <div className="card-body">
              <h5 className="card-title">Phone</h5>
              <p className="card-text"><BsPhone className="mr-2" />+1 123 456 7890</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4  assistant-card">
            <div className="card-body">
              <h5 className="card-title">Assistant</h5>
              <p className="card-text">
                <BsChatSquareDots className="mr-2" />
                Chat with our assistant
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="form-container" style={{ backgroundColor: '#f8f9fa' }}>
            <h4 className="text-center">Send us a Message</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
