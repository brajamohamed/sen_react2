import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  const navigateToLogin = useNavigate();
  const emailRef = useRef();
  const [data, setData] = useState({
    fname: "",
    phone: "",
    email: "",
    city: "",
    password: "",
    c_password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(`${name}:${value}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("validateForm").classList;

    form.add("was-validated");
    const validEmail = emailRef.current.checkValidity();
    if (
      data.fname &&
      data.phone &&
      data.email &&
      data.city &&
      data.password &&
      data.c_password
    ) {
      if (validEmail) {
        alert("Signup successful");
        navigateToLogin("/");
      }
    } else {
      alert("Please fill all required fields");
    }
  };
  return (
    <div className="container-fluid row d-fle align-items-center justify-content-center vh-100">
      <div className="card col-xl-4 col-lg-6 p-4 bg-danger">
        <form
          id="validateForm"
          className="needs-validation"
          onSubmit={handleSubmit}
          noValidate
        >
          <h5 className="text-center mb-3 text-light">
            Create your Redbus Account
          </h5>
          <div className="input-group mb-3">
            <span className="input-group-text">Name</span>
            <input
              type="text"
              className="form-control"
              name="fname"
              value={data.fname}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Enter your name</div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Phone</span>
            <input
              type="number"
              className="form-control"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Phone number requied</div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Email</span>
            <input
              type="email"
              className="form-control"
              required
              name="email"
              value={data.email}
              onChange={handleChange}
              ref={emailRef}
            />
            <div className="invalid-feedback">Provide a valid E-mail </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">City</span>
            <input
              type="text"
              className="form-control"
              name="city"
              value={data.city}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Enter your city</div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Password</span>
            <input
              type="password"
              className="form-control"
              required
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            <div className="invalid-feedback">Enter a valid password</div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Confirm Password</span>
            <input
              type="password"
              className="form-control"
              required
              name="c_password"
              value={data.c_password}
              onChange={handleChange}
            />
            <div className="invalid-feedback">Confirm your password</div>
          </div>
          <button className="btn btn-primary rounded w-100 mt-3">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
