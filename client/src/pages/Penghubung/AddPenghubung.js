import React, { useState, useEffect } from "react";

import { lihatKategori } from "../../axios/kategoriAxios";
import { lihatFilm } from "../../axios/filmAxios";
import { lihatJadwal } from "../../axios/jadwalAxios";
import { addPenghubung } from "../../axios/penghubungAxios";
import { useParams } from "react-router-dom";

const AddPenghubung = () => {
  const [penghubung, setPenghubung] = useState({
    filmId: 0,
    kategoriId: "",
    jadwalId: 0,
  });
  const [input, setInput] = useState({
    image: "",
    namaFilm: "",
    sinopsis: "",
    kategoriId: 0,
  });
  const [jadwal, setJadwal] = useState({
    hariTayang: "",
    jamTayang: "",
    filmId: 0,
  });
  const [kategori, setKategori] = useState({
    namaKategori: "",
  });

  const params = useParams();
  useEffect(() => {
    const { id } = params;
    lihatJadwal(
      (+id,
      (result) => {
        setJadwal({
          hariTayang: result[0].hariTayang,
          jamTayang: result[0].jamTayang,

          filmId: result[0].filmId,
        });
      })
    );
  }, []);
  useEffect(() => {
    const { id } = params;
    lihatFilm(
      (+id,
      (result) => {
        setInput({
          image: result[0].image,
          namaFilm: result[0].namaFilm,
          sinopsis: result[0].sinopsis,
          kategoriId: result[0].kategoriId,
        });
      })
    );
  }, []);
  useEffect(() => {
    const { id } = params;

    lihatKategori(+id, (result) => {
      setKategori({
        namaKategori: result[0].namaKategori,
      });
    });
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
            <select class="form-select" name="filmId">
              <option selected>Silahkan Pilih Film</option>
              {input.map((filmResult) => {
                console.log(input);
              })}
            </select>
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
