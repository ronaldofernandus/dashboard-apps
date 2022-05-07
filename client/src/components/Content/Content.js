import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import FilmPage from "../../pages/FilmPage/FilmPage";
import AddFilm from "../../pages/FilmPage/AddFilm";
import DaftarFilm from "../../pages/FilmPage/DaftarFilm";
import EditFilm from "../../pages/FilmPage/EditFilm";

import Kategori from "../../pages/Kategori/Kategori";
import ListKategori from "../../pages/Kategori/ListKategori";

const Content = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="film" element={<FilmPage></FilmPage>}>
          <Route path="" element={<DaftarFilm></DaftarFilm>}></Route>
          <Route path="add" element={<AddFilm></AddFilm>}></Route>
          <Route path="edit">
            <Route path=":id" element={<EditFilm></EditFilm>}></Route>
          </Route>
        </Route>
        <Route path="kategori" element={<Kategori></Kategori>}>
          <Route path="" element={<ListKategori></ListKategori>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Content;
