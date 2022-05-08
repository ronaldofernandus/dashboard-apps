import React, { useState } from "react";
import { addKategori } from "../../axios/kategoriAxios";

import { useNavigate } from "react-router-dom";

const AddKategori = () => {
  const [input, setKategori] = useState({
    namaKategori: "",
  });
  const navigation = useNavigate();

  const addHandler = () => {
    addKategori(input);
    navigation("/kategori");
  };

  return (
    <div className="row ">
      <div className="col-12 text-center">
        <h5>Tambah Data Kategori</h5>
        <p>Berisi Halaman Form Input</p>
      </div>
      <div className="col-12 my-2">
        <div className="mb-3">
          <label className="form-label" for="customFile">
            Kategori
          </label>
          <input
            onChange={(e) =>
              setKategori({ ...input, namaKategori: e.target.value })
            }
            type="text"
            className="form-control"
            id="customFile"
            name="namaKategori"
          />
        </div>

        <button
          onClick={() => addHandler()}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddKategori;
