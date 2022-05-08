import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { lihatJadwal,deleteJadwal } from "../../axios/jadwalAxios";
import Loading from "../../helpers/Loading";
import { MdDeleteForever } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

const DaftarJadwal = () => {
  const [jadwal, setJadwal] = useState([]);

  useEffect(() => {
    lihatJadwal((result) => setJadwal(result));
  }, []);

  const deleteButton = (id) => {
deleteJadwal(id)
lihatJadwal((result) => setJadwal(result));
  };

  return (
    <div className="col-12 my-2">
        <button type="button" className="btn btn-secondary">
          <AiFillFileAdd></AiFillFileAdd>
          <Link to="/jadwal/add" className="add">
            Add
          </Link>
        </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tanggal Tayang</th>
            <th>Jam Tayang</th>
          </tr>
        </thead>
        <tbody>
          {jadwal.length > 0 ? (
            jadwal.map((jadwall, index) => {
              const { id, hariTayang, jamTayang, filmId } = jadwall;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{hariTayang}</td>
                  <td>{jamTayang}</td>
                  <td>
                    <button type="button" className="btn btn-success">
                      <AiFillEdit></AiFillEdit>
                      <Link to={`/Jadwal/edit/${id}`} className="edit">
                        Edit
                      </Link>
                    </button>
                    <button
                      onClick={() => deleteButton(+id)}
                      type="button"
                      className="btn btn-primary"
                    >
                      <MdDeleteForever></MdDeleteForever>
                      <Link to="/Jadwal/" className="delete">
                        Delete
                      </Link>
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <Loading></Loading>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarJadwal;
