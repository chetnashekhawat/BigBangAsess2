import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    if (validate()) {
      let inputObj = {
        userName: username,
        UserEmail: useremail,
        password: password,
        Role: role,
      };
      fetch("https://localhost:7070/api/User", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(inputObj),
      })
        .then((res) => res.json())
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            window.alert("Registration failed");
          } else {
            window.alert("Registered Successfully");
            navigate("/");
          }
        })
        .catch((err) => {
          window.alert("Registration failed due to: " + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
    }
    if (password === "" || password === null) {
      result = false;
    }
    return result;
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
        <form onSubmit={handleRegister} className="container">
          <div className="card">
            <div className="card-header">
              <h2>Register</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Email <span className="errmsg">*</span>
                </label>
                <input
                  value={useremail}
                  onChange={(e) => setUseremail(e.target.value)}
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleDropdown">Role</label>
                <select
                  className="form-control"
                  id="exampleDropdown"
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">--Role--</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
