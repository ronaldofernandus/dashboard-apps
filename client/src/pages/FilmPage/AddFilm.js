import React, { useState } from "react";
import { addFilm } from "../../axios/filmAxios";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const [input, setInput] = useState({
    image: "",
    namaFilm: "",
    sinopsis: "",
    kategoriId: 0,
  });
  const navigation = useNavigate();
  const submitHandler = () => {
    navigation('/film');
    addFilm(input);
  };

  return (
    <div className="row ">
      <div className="col-12 text-center">
        <h5>Tambah Data Film</h5>
        <p>Berisi Halaman Form Input</p>
      </div>
      <div className="col-12 my-2">
        <div className="mb-3">
          <label className="form-label" for="customFile">
            Poster Film
          </label>
          <input
            onChange={(e) => setInput({ ...input, image: e.target.value })}
            type="text"
            className="form-control"
            id="customFile"
            name="image"
          />  
        </div>
        <div className="mb-3">
          <label for="film" className="form-label">
            Film
          </label>
          <input
            onChange={(e) => setInput({ ...input, namaFilm: e.target.value })}
            type="text"
            className="form-control"
            name="namaFilm"
          />
        </div>
        <div className="mb-3">
          <label for="sinopsis" className="form-label">
            Sinopsis
          </label>
          <input
            onChange={(e) => setInput({ ...input, sinopsis: e.target.value })}
            type="integer"
            className="form-control"
            name="sinopsis"
          />
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

export default AddPage;
