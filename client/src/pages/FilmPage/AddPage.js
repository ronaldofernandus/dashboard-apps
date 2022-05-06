import React from "react";

const AddPage = () => {
  return (
    <div class="row ">
      <div class="col-12 text-center">
        <h5>Tambah Data Film</h5>
        <p>Berisi Halaman Form Input</p>
      </div>
      <div class="col-12 my-2">
        <form action="/film/add" method="post">
          <div class="mb-3">
            <label class="form-label" for="customFile">
              Poster Film
            </label>
            <input
              type="text"
              class="form-control"
              id="customFile"
              name="image"
            />
          </div>
          <div class="mb-3">
            <label for="film" class="form-label">
              Film
            </label>
            <input type="text" class="form-control" name="namaFilm" />
          </div>
          <div class="mb-3">
            <label for="sinopsis" class="form-label">
              Sinopsis
            </label>
            <input type="integer" class="form-control" name="sinopsis" />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
