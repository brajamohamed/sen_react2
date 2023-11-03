import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
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
              <h5>Bus Ticket</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cab" className="nav-link">
              <h5>Cab Rental</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/train" className="nav-link">
              <h5>Train Tickets</h5>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
