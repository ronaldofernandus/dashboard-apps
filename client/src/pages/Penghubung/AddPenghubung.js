import React, { useState, useEffect } from "react";

import { lihatKategori } from "../../axios/kategoriAxios";
import { lihatFilm } from "../../axios/filmAxios";
import { lihatJadwal } from "../../axios/jadwalAxios";
import { addPenghubung } from "../../axios/penghubungAxios";

const AddPenghubung = () => {
  const [penghubung, setPenghubung] = useState({
    filmId: 0,
    kategoriId: 0,
    jadwalId: 0,
  });
  const [film, setFilm] = useState([]);
  const [jadwal, setJadwal] = useState([]);
  const [kategori, setKategori] = useState([]);

  useEffect(() => {
    lihatFilm((result) => setFilm(result));
  }, []);

  useEffect(() => {
    lihatJadwal((result) => setJadwal(result));
  }, []);

  useEffect(() => {
    lihatKategori((result) => setKategori(result));
  }, []);

  const submitHandler = () => {
    addPenghubung(penghubung);
  };

  return (
    <div class="row ">
      <div class="col-12 text-center">
        <h5>Penghubung</h5>
        <p>Berisi Halaman Form Input</p>
      </div>
      <div class="col-12 my-2">
        <div class="mb-3">
          <label class="form-label" for="customFile">
            Film{" "}
          </label>
          <div class="input-group mb-3">
            <select
              class="form-select"
              onChange={(e) =>
                setPenghubung({ ...penghubung, filmId: e.target.value })
              }
              value={penghubung.filmId}
              name="filmId"
            >
              <option selected>Silahkan Pilih Film</option>
              {film.map((filmResult) => {
                return (
                  <option value={filmResult.namaFilm}>
                    {filmResult.namaFilm}
                  </option>
                );
              })}
            </select>
          </div>
          <div class="mb-3">
            <label for="film" class="form-label">
              Kategori
            </label>
            <div class="input-group mb-3">
              <select class="form-select" name="kategoriId">
                <option selected>Silahkan Pilih Kategori</option>

                {kategori.map((kategoriResult) => {
                  return (
                    <option value={kategoriResult.namaKategori}>
                      {kategoriResult.namaKategori}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div class="mb-3">
            <label for="tanggal" class="form-label">
              Tanggal
            </label>
            <div class="input-group mb-3">
              <select class="form-select" name="hariTayang">
                <option selected>Silahkan Pilih tanggal</option>
                {jadwal.map((jadwalResult) => {
                  return (
                    <option value={jadwalResult.hariTayang}>
                      {jadwalResult.hariTayang}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div class="mb-3">
            <label for="kapal" class="form  -label">
              Jam
            </label>
            <div class="input-group mb-3">
              <select class="form-select" name="jamTayang">
                <option selected>Silahkan Pilih Jam</option>

                {jadwal.map((jadwalResult) => {
                  return (
                    <option value={jadwalResult.jamTayang}>
                      {jadwalResult.jamTayang}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={() => submitHandler()}
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddPenghubung;
