import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://form-be.onrender.com/api/user/login",
        {
          username,
          password,
        }
      );

      const { token, user } = response.data;
      login(token, user);
      alert("login successfully");
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(
        error.response ? error.response.data.message : "An error occurred"
      );
    }
  };

  return (
    <div>
      <h2 className="d-flex justify-content-center mt-5">Login</h2>
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
          Login
        </button>
        <p>
          Need an account? <Link to={"/"}>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
