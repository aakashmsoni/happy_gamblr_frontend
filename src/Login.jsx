import axios from "axios";
import { useState } from "react";
import "./Login.scoped.scss";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login(props) {
  const [errors, setErrors] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then(response => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("user", response.data.user);
        event.target.reset();
        window.location.href = "/dashboard"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch(error => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <div className="row">
        <div className="col-sm-3 ms-5 mt-5">
          <div className="card border-success text-bg-secondary text-center m-5 p-2 ps-3 pe-3">
            <ul>
              {errors.map(error => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <div className="form-floating" style={{ color: "gray" }}>
                <input className="form-control" name="email" type="email" placeholder="test@test.com" />
                <label htmlFor="email">Email: </label>
              </div>
              <div className="form-floating" style={{ color: "gray" }}>
                <input className="form-control" placeholder="password" name="password" type="password" />
                <label htmlFor="password">Password: </label>
              </div>
              <button className="btn btn-light btn-outline-success mt-2 mb-4" type="submit">
                Login
              </button>
              <br />
              <em>Don't have an account?</em>
              <br />
              <button className="btn btn-success" onClick={() => props.onSignup(true)} type="button" id="btn">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
