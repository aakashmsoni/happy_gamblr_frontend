import axios from "axios";
import { useState } from "react";
import "./Login.scoped.scss";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
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
        event.target.reset();
        window.location.href = "/wagerindex"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch(error => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <ul>
        {errors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input className="form-control" name="email" type="email" placeholder="test@test.com" />
          <label htmlFor="email">Email: </label>
        </div>

        <div className="form-floating">
          <input className="form-control" placeholder="password" name="password" type="password" />
          <label htmlFor="password">Password: </label>
        </div>

        <button className="btn btn-dark mt-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
