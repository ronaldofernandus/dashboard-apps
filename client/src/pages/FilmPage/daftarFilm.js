import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FilmPage.css";
import { MdDeleteForever } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { lihatFilm, deleteFilm } from "../../axios/filmAxios";
import Loading from "../../helpers/Loading";

const DaftarFilm = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    lihatFilm((result) => setFilm(result));
  }, []);

  const deleteButton = (id) => {
    deleteFilm(id);
    lihatFilm((result) => setFilm(result));
  };

  return (
    <>
      <div className="col-12 my-2">
        <button type="button" className="btn btn-secondary">
          <AiFillFileAdd></AiFillFileAdd>
          <Link to="/Film/add" className="add">
            Add
          </Link>
        </button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Poster</th>
              <th>Nama Film</th>
              <th>Sinopsis</th>
              <th width="300px">Action</th>
            </tr>
          </thead>
          <tbody>
            {film.length > 0 ? (
              film.map((filmm, index) => {
                const { id, image, namaFilm, sinopsis, kategoriId } = filmm;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={image} className="img-fluid" alt=""></img>
                    </td>
                    <td>{namaFilm}</td>
                    <td>{sinopsis}</td>
                    <td>
                      <button type="button" className="btn btn-success">
                        <AiFillEdit></AiFillEdit>
                        <Link to={`/Film/edit/${id}`} className="edit">
                          Edit
                        </Link>
                      </button>
                      <button
                        onClick={() => deleteButton(+id)}
                        type="button"
                        className="btn btn-primary"
                      >
                        <MdDeleteForever></MdDeleteForever>
                        <Link to="/Film/" className="delete">
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
    </>
  );
};

export default DaftarFilm;
