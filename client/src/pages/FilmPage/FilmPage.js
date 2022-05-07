import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FilmPage.css";
import { MdDeleteForever } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { lihatFilm } from "../../axios/filmAxios";
import Loading from "../../helpers/Loading";

const Film = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    lihatFilm((result) => setFilm(result));
  }, []);

  return (
    <div className="row">
      <div className="judul col-12 text-center">
        <h5>Daftar Film</h5>
        <p>Berikut adalah film yang sedang dan akan tayang</p>
      </div>
      <div className="col-12 my-2">
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
                const { image, namaFilm, sinopsis, kategoriId } = filmm;
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
                        <Link to="/Film/" className="edit">
                          Edit
                        </Link>
                      </button>
                      <button type="button" className="btn btn-primary">
                        <MdDeleteForever></MdDeleteForever>
                        <Link to="" className="delete">
                          Delete
                        </Link>
                      </button>
                      <button type="button" className="btn btn-secondary">
                        <AiFillFileAdd></AiFillFileAdd>
                        <Link to="" className="add">
                          Add
                        </Link>
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : 
              <Loading></Loading>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Film;
