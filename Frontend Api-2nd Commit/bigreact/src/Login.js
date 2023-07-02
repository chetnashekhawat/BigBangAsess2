import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import logggImage from "./img/loggg.png";


export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      // Perform your login logic here
      // Replace the following conditional statement with your actual login implementation
      if (username === 'Bhuvi') {
        if (password === '123') {
          navigate('/highlight');
        } else {
          window.alert('Incorrect password');
        }
      } else {
        window.alert('Incorrect Username');
      }
    }
  };

  const handleLoginUsingAPI = (e) => {
    e.preventDefault();
    if (validate()) {
      let inputObj = {
        userName: username,
        password: password,
      };

      fetch('https://localhost:7171/api/Token', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(inputObj),
      })
        .then((res) => res.json())
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            window.alert('Invalid Credentials');
          } else {
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('jwttoken', resp.token);
            const decodedToken = jwt_decode(resp.token);
            const role =
              decodedToken[
                'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
              ];
            if (role === 'Admin') {
              navigate('/Admin');
            } else if (role === 'Doctor') {
              navigate('/Patient');
            } else if (role === 'Patient') {
              navigate('/Doctor');
            } else {
              navigate('/Home');
            }
          }
        })
        .catch((err) => {
          window.alert('Server failed');
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
    }
    if (password === '' || password === null) {
      result = false;
    }
    return result;
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card custom-card">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form onSubmit={handleLoginUsingAPI}>
            <div className="form-group">
              <label htmlFor="username">
                User Name <span className="errmsg">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password <span className="errmsg">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <Link className="btn btn-success" to="/Register">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="card custom-cardd image-container">
        <img src={logggImage} alt="Logo" />
      </div>
    </div>
  );
};
