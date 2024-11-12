import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://form-be.onrender.com/api/user/register",
        {
          username,
          password,
        }
      );
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      setErrorMessage(
        error.response ? error.response.data.message : "An error occurred"
      );
    }
  };

  return (
    <div>
      <h2 className="d-flex justify-content-center mt-5">Register</h2>
      <form
        onSubmit={handleSubmit}
        className=" mt-3 gap-3 border p-4 shadow p-3 mb-5 bg-body-tertiary rounded"
      >
        {errorMessage && <div className="error">{errorMessage}</div>}

        <div>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          className="btn"
          style={{ backgroundColor: "hotpink" }}
          type="submit"
        >
          Register
        </button>
        <p>
          Already a user? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
