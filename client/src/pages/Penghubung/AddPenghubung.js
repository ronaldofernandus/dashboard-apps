import React, { useState, useEffect } from "react";

import { lihatKategori } from "../../axios/kategoriAxios";
import { lihatFilm } from "../../axios/filmAxios";
import { lihatJadwal } from "../../axios/jadwalAxios";
import { addPenghubung } from "../../axios/penghubungAxios";
import { useNavigate } from "react-router-dom";

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
  const navigation = useNavigate();
  const submitHandler = () => {
    addPenghubung(penghubung);
    navigation("/detail");
  };

  return (
    <div className="row ">
      <div className="col-12 text-center">
        <h5>Penghubung</h5>
        <p>Berisi Halaman Form Input</p>
      </div>
      <div className="col-12 my-2">
        <div className="mb-3">
          <label className="form-label" for="customFile">
            Film{" "}
          </label>
          <div className="input-group mb-3">
            <select
              className="form-select"
              onChange={(e) =>
                setPenghubung({ ...penghubung, filmId: e.target.value })
              }
              name="filmId"
            >
              <option selected>Silahkan Pilih Film</option>
              {film.map((filmResult) => {
                return (
                  <option value={filmResult.id}>{filmResult.namaFilm}</option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label for="film" className="form-label">
              Kategori
            </label>
            <div className="input-group mb-3">
              <select
                className="form-select"
                onChange={(e) =>
                  setPenghubung({ ...penghubung, kategoriId: e.target.value })
                }
                name="kategoriId"
              >
                <option selected>Silahkan Pilih Kategori</option>

                {kategori.map((kategoriResult) => {
                  return (
                    <option value={kategoriResult.id}>
                      {kategoriResult.namaKategori}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label for="tanggal" className="form-label">
              Tanggal
            </label>
            <div className="input-group mb-3">
              <select
                className="form-select"
                onChange={(e) =>
                  setPenghubung({ ...penghubung, hariTayang: e.target.value })
                }
                name="hariTayang"
              >
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
          <div className="mb-3">
            <label for="kapal" className="form  -label">
              Jam
            </label>
            <div className="input-group mb-3">
              <select
                className="form-select"
                onChange={(e) =>
                  setPenghubung({ ...penghubung, jamTayang: e.target.value })
                }
                name="jamTayang"
              >
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
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddPenghubung;
