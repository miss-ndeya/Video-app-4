import React from "react";
import "./style.css";
import { FaBars, FaBell } from "react-icons/fa";
import { FaCloudArrowDown } from "react-icons/fa6";
import cercle from "../images/cercle.png";
import Tof from "../images/tof1.webp";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-3">
      <FaBars />
      <img src={cercle} alt="/" style={{width:" 40px", marginLeft: "35px"}} />
      <form className="custom-form">
        <input
          className="form-control"
          type="search"
          placeholder="Type in to search..."
        />
      </form>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link"  href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Categories
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Subscriptions
            </a>
          </li>
        </ul>

        <div className="ml-auto align-items-center">
          <button className="btn btn-outline-danger rounded-pill me-4">
            <FaCloudArrowDown className=" me-2" />
            Upload
          </button>
          <span>
            <FaBell className="me-4 fs-5"/>
          </span>
          <span className="navbar-text">
            <img
              src={Tof}
              alt="/"
              style={{width: "30px", height: "30px", borderRadius: "50%"}}
            />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
