import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";
import { Link } from "react-router-dom";
import bus from "../bus.png";
import train from "../public-transport.png";
import cab from "../taxi.png";
const Header = ({ setLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg mt-3">
      <div className="container-lg">
        <Link to="/" className="navbar-brand ms-5">
          <img src="../rdc-redbus-logo.svg" alt="redbus-logo" />
        </Link>
        <button
          className="navbar-toggler me-4"
          type="button"
          data-bs-target="#menu"
          data-bs-toggle="collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link to="/" href="/" className="nav-link">
                <div className="d-flex justify-content-center">
                  <img
                    id="nav-icon"
                    src={bus}
                    alt="bus-icon"
                    className="me-2"
                  />
                  <h5>Bus Ticket</h5>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cab" className="nav-link">
                <div className="d-flex justify-content-center">
                  <img
                    id="nav-icon"
                    src={cab}
                    alt="cab-icon"
                    className="me-2"
                  />
                  <h5>Cab Rental</h5>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/train" className="nav-link">
                <div className="d-flex justify-content-center">
                  <img
                    id="nav-icon"
                    src={train}
                    alt="train-icon"
                    className="me-2"
                  />
                  <h5>Train Tickets</h5>
                </div>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                id="logout"
                className="text-white bg-danger border-0 rounded-3 p-2 fw-bolder"
                onClick={() => setLoggedIn(false)}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
