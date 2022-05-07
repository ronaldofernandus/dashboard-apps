import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import FilmPage from "../../pages/FilmPage/FilmPage";
import AddFilm from "../../pages/FilmPage/AddFilm";
import daftarFilm from "../../pages/FilmPage/daftarFilm"

const Content = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="Film" element={<FilmPage></FilmPage>}>
          <Route path="" element={<daftarFilm></daftarFilm>}></Route>
          <Route path="add" element={<AddFilm></AddFilm>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Content;
