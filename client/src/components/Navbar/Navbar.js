import React from "react";
import "./Navbar.css";
import cinema from "../../images/cinema.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="row navbar navbar-expand-lg navbar-light bg-white">
      <Link to="" class="navbar-brand">
        <img src={cinema}></img>
      </Link>
      <div class="collapse navbar-collapse" id="navigasi">
        <ul class="navbar-nav ml-auto mr-3">
          <li class="nav-item mx-md-2">
            <Link to="/film" class="nav-link active">
              Film
            </Link>
          </li>
          <li class="nav-item mx-md-2">
            <Link to="/jadwal" class="nav-link">
              Jadwal
            </Link>
          </li>

          <li class="nav-item mx-md-2">
            <Link to="/kategori" class="nav-link">
              Kategori
            </Link>
          </li>
          <li class="nav-item mx-md-2">
            <Link to="/penghubung/add" class="nav-link">
              Penghubung
            </Link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0 d-none d-md-block">
          <button class="btn btn-login btn-navbar-right my-2 my-sm-0 px4">
            Masuk
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
