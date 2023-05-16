import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then(response => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/dashboard";
      })
      .catch(error => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };
  return (
    <div id="signup">
      <div className="row">
        <div className="col">
          <div className="card border-light text-bg-light text-center">
            <ul>
              {errors.map(error => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <div className="form-floating" style={{ color: "gray" }}>
                <input className="form-control" name="name" type="text" placeholder="name" />
                <label htmlFor="wager_amount">Name: </label>
              </div>

              <div className="form-floating" style={{ color: "gray" }}>
                <input className="form-control" name="email" type="email" placeholder="test@test.com" />
                <label htmlFor="wager_amount">Email: </label>
              </div>

              <div className="form-floating" style={{ color: "gray" }}>
                <input className="form-control" placeholder="password" name="password" type="password" />
                <label htmlFor="wager_amount">Password: </label>
              </div>

              <div className="form-floating" style={{ color: "gray" }}>
                <input
                  className="form-control"
                  placeholder="password_confirmation"
                  name="password_confirmation"
                  type="password"
                />
                <label htmlFor="wager_amount">Confirm password: </label>
              </div>
              <div className="col-8 mx-auto mt-3 mb-2">
                <button className="btn btn-outline-success" type="submit">
                  Create Account
                </button>
              </div>
            </form>
            <caption>(Log in after creating account!)</caption>
          </div>
        </div>
      </div>
    </div>
  );
}
