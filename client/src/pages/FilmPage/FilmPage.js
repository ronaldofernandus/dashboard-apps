import React from "react";
import { Outlet } from "react-router-dom";

import "./FilmPage.css";

const Film = () => {
  return (
    <div className="row">
      <div className="judul col-12 text-center">
        <h5>Daftar Film</h5>
        <p>Berikut adalah film yang sedang dan akan tayang</p>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Film;
