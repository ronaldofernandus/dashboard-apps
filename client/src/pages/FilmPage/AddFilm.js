import React from "react";

const AddPage = () => {
  return (
    <div className="row ">
      <div className="col-12 text-center">
        <h5>Tambah Data Film</h5>
        <p>Berisi Halaman Form Input</p>
      </div>
      <div className="col-12 my-2">
        <form action="/film/add" method="post">
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Poster Film
            </label>
            <input
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
            <input type="text" className="form-control" name="namaFilm" />
          </div>
          <div className="mb-3">
            <label for="sinopsis" className="form-label">
              Sinopsis
            </label>
            <input type="integer" className="form-control" name="sinopsis" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
