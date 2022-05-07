import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import FilmPage from "../../pages/FilmPage/FilmPage";
import AddFilm from "../../pages/FilmPage/AddFilm";
import DaftarFilm from "../../pages/FilmPage/DaftarFilm";
import EditFilm from "../../pages/FilmPage/EditFilm";

import Kategori from "../../pages/Kategori/kategori";
import ListKategori from "../../pages/Kategori/ListKategori";

const Content = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="Film" element={<FilmPage></FilmPage>}>
          <Route path="" element={<DaftarFilm></DaftarFilm>}></Route>
          <Route path="add" element={<AddFilm></AddFilm>}></Route>
          <Route path="edit">
            <Route path=":id" element={<EditFilm></EditFilm>}></Route>
          </Route>
        </Route>
        <Route path="Kategori" element={<Kategori></Kategori>}></Route>
        <Route path="" element={<ListKategori></ListKategori>}></Route>
      </Routes>
    </div>
  );
};

export default Content;
