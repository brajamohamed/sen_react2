import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";
import { Link } from "react-router-dom";
import bus from "../front-of-bus.png";
import train from "../train.png";
import cab from "../frontal-taxi-cab.png";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg mt-3">
      <Link to="/" className="navbar-brand ms-5">
        <img src="../rdc-redbus-logo.svg" alt="redbus-logo" />
      </Link>
      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <Link to="/" href="/" className="nav-link">
              <div className="d-flex align-items-center justify-content-center">
                <img id="nav-icon" src={bus} alt="" />
              </div>
              <h5>Bus Ticket</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cab" className="nav-link">
              <div className="d-flex align-items-center justify-content-center">
                <img id="nav-icon" src={cab} alt="cab logo" />
              </div>
              <h5>Cab Rental</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/train" className="nav-link">
              <div className="d-flex align-items-center justify-content-center">
                <img id="nav-icon" src={train} alt="train-icon" />
              </div>

              <h5>Train Tickets</h5>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
