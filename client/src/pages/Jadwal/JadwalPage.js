import React from "react";


import { Outlet } from "react-router-dom";

const JadwalPage = () => {
  return (
    <div className="row ">
      <div className="col-12 text-center">
        <h5>Jam Tayang</h5>
        <p>Berikut adalah daftar jam tayang film</p>
       
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default JadwalPage;
