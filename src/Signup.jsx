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
        window.location.href = "/";
      })
      .catch(error => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };
  return (
    <div id="signup">
      <ul>
        {errors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="wager_amount">Name: </label>
        </div>
        <div>
          <input name="name" type="text" />
        </div>
        <div>
          <label htmlFor="wager_amount">Email: </label>
        </div>
        <div>
          <input name="email" type="email" />
        </div>
        <div>
          <label htmlFor="wager_amount">Password: </label>
        </div>
        <div>
          <input name="password" type="password" />
        </div>
        <div>
          <label htmlFor="wager_amount">Confirm password: </label>
        </div>
        <div>
          <input name="password_confirmation" type="password" />
        </div>
        <button className="btn btn-dark mt-2" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
