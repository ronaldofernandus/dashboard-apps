import React from "react";
import "./Navbar.css";
import cinema from "../../images/cinema.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="row navbar navbar-expand-lg navbar-light bg-white">
      <Link to="" className="navbar-brand">
        <img src={cinema}></img>
      </Link>
      <div className="collapse navbar-collapse" id="navigasi">
        <ul className="navbar-nav ml-auto mr-3">
          <li className="nav-item mx-md-2">
            <Link to="/film" className="nav-link active">
              Film
            </Link>
          </li>
          <li className="nav-item mx-md-2">
            <Link to="/jadwal" className="nav-link">
              Jadwal
            </Link>
          </li>

          <li className="nav-item mx-md-2">
            <Link to="/kategori" className="nav-link">
              Kategori
            </Link>
          </li>
          <li className="nav-item mx-md-2">
            <Link to="/penghubung/add" className="nav-link">
              Penghubung
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 d-none d-md-block">
          <button className="btn btn-login btn-navbar-right my-2 my-sm-0 px4">
            Masuk
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
