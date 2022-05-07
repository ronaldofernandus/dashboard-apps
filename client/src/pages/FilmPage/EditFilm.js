import React, { useState, useEffect } from "react";
import { editFilm, lihatFilm } from "../../axios/filmAxios";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const [input, setInput] = useState({
    image: "",
    namaFilm: "",
    sinopsis: "",
    kategoriId: 0,
  });
  const navigation = useNavigate();

  const params = useParams();

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

  const submitHandler = () => {
    navigation("/film");
    editFilm(+params.id,input);
  };

  return (
    <div className="row ">
      <div className="col-12 text-center">
        <h5>Edit Data Film</h5>
        <p>Berisi Halaman Form Edit</p>
      </div>
      <div className="col-12 my-2">
        <div className="mb-3">
          <label className="form-label" for="customFile">
            Poster Film
          </label>
          <input
            value={input.image}
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
            value={input.namaFilm}
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
            value={input.sinopsis}
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

export default EditPage;
