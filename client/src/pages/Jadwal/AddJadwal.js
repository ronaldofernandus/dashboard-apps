import React, { useState } from "react";

import { addJadwal } from "../../axios/jadwalAxios";
import { useNavigate } from "react-router-dom";

const AddJadwal = () => {
  const [jadwal, setJadwal] = useState({
    hariTayang: "",
    jamTayang: "",
    filmId: 0,
  });

  const navigation=useNavigate()

  const addHandler = () => {
    addJadwal(jadwal);
    navigation('/jadwal')
  };

  return (
    <div className="row ">
      <div className="col-12 text-center">
        <h5>Tambah Data Jadwal</h5>
        <p>Berisi Halaman Form Input</p>
      </div>
      <div className="col-12 my-2">
        <div className="mb-3">
          <label className="form-label" for="customFile">
            Tanggal tayang
          </label>
          <input
            onChange={(e) =>
              setJadwal({ ...jadwal, hariTayang: e.target.value })
            }
            type="date"
            className="form-control"
            id="customFile"
            name="hariTayang"
          />
        </div>
        <div className="mb-3">
          <label for="film" className="form-label">
            Jam Tayang
          </label>
          <input
            onChange={(e) =>
              setJadwal({ ...jadwal, jamTayang: e.target.value })
            }
            type="time"
            className="form-control"
            name="jamTayang"
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

export default AddJadwal;
