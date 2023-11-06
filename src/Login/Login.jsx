import React from "react";
import "./Login.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toBeInvalid } from "@testing-library/jest-dom/matchers";
import userEvent from "@testing-library/user-event";
const Login = ({ setLoggedIn }) => {
  let navigateToHome = useNavigate();
  let emailRef = useRef();
  let pwdRef = useRef();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("loginForm").classList;
    form.add("was-validated");
    const isValidEmail = emailRef.current.checkValidity();
    const isValidPwd = pwdRef.current.checkValidity();
    if (!formData.username == "" && !formData.password == "") {
      if (isValidEmail && isValidPwd) {
        alert("Validation successful");
        setLoggedIn(true);
        navigateToHome("/");
      }
    } else {
      alert("Required fields cannot be empty");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="form-container row d-flex justify-content-center align-items-center">
      <div className="card col-xl-4 col-lg-6 col-md-8 px-5 py-3 bg-danger rounded-5">
        <form
          id="loginForm"
          onSubmit={handleSubmit}
          className={`needs-validation`}
          noValidate
        >
          <h5 className="text-center my-4 text-white">
            Login to your Redbus Account
          </h5>
          <div className="input-group mb-3">
            <span className="input-group-text text-danger fw-bolder">
              Username
            </span>
            <input
              type="email"
              name="username"
              value={formData.username}
              className="form-control"
              id="username"
              ref={emailRef}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Enter valid Email</div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text text-danger fw-bold">
              Password
            </span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              id="password"
              ref={pwdRef}
              required
            />
            <div className="invalid-feedback">Enter valid Password</div>
          </div>

          <button type="submit" className="btn btn-primary w-100 my-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
