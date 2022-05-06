import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import FilmPage from "../../pages/FilmPage/FilmPage";

const Content = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/Film" element={<FilmPage></FilmPage>}></Route>
      </Routes>
    </div>
  );
};

export default Content;
