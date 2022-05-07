import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const kategori = () => {
  return (
    <>
      <div className="container my-3">
        <div className="row text-center bg-success bg-opacity-25"></div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default kategori;
