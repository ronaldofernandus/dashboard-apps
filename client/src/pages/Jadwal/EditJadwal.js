import React, { useState, useEffect } from "react";

import { editJadwal, lihatJadwal } from "../../axios/jadwalAxios";
import { useNavigate, useParams } from "react-router-dom";

const AddJadwal = () => {
  const [jadwal, setJadwal] = useState({
    hariTayang: "",
    jamTayang: "",
    filmId: 0,
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

  const navigation = useNavigate();

  const editHandler = () => {
    editJadwal(+params.id, jadwal);
    navigation("/jadwal");
  };

  return (
    <div className="row ">
      <div className="col-12 text-center">
        <h5>Edit Data Jadwal</h5>
        <p>Berisi Halaman Form Edit</p>
      </div>
      <div className="col-12 my-2">
        <div className="mb-3">
          <label className="form-label" for="customFile">
            Tanggal tayang
          </label>
          <input
            value={jadwal.hariTayang}
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
            value={jadwal.jamTayang}
            onChange={(e) =>
              setJadwal({ ...jadwal, jamTayang: e.target.value })
            }
            type="time"
            className="form-control"
            name="jamTayang"
          />
        </div>

        <button
          onClick={() => editHandler()}
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
