import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { lihatKategori, deleteKategori } from "../../axios/kategoriAxios";
import Loading from "../../helpers/Loading";
import { MdDeleteForever } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

const ListKategori = () => {
  const [kategori, setKategori] = useState([]);

  useEffect(() => {
    lihatKategori((result) => setKategori(result));
  }, []);

  const deleteButton = (id) => {
    deleteKategori(id);
  };

  return (
    <div className="row ">
      <div className="col-12 text-center">
        <h5>Kategori Page</h5>
        <p>Berisi Halaman Daftar Kategori</p>
      </div>
      <div className="col-12 my-2">
        <button type="button" className="btn btn-secondary">
          <AiFillFileAdd></AiFillFileAdd>
          <Link to="/Kategori/add" className="add">
            Add
          </Link>
        </button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>NO</th>
              <th>Kategori</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {kategori.length > 0 ? (
              kategori.map((hasil, index) => {
                const { id, namaKategori } = hasil;

                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{namaKategori}</td>
                    <td>
                      <button type="button" className="btn btn-success">
                        <AiFillEdit></AiFillEdit>
                        <Link to={`/Kategori/edit/${id}`} className="edit">
                          Edit
                        </Link>
                      </button>
                      <button
                        onClick={() => deleteButton(+id)}
                        type="button"
                        className="btn btn-primary"
                      >
                        <MdDeleteForever></MdDeleteForever>
                        <Link to="/Kategori/" className="delete">
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
    </div>
  );
};

export default ListKategori;
