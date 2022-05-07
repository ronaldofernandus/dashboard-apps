import React from "react";
import { Link } from "react-router-dom";

const ListKategori = () => {
  return (
    <div className="row ">
      <div className="col-12 text-center">
        <h5>Kategori Page</h5>
        <p>Berisi Halaman Daftar Kategori</p>
        <Link href="/kategori/add">Tambah Kategori</Link>
      </div>
      <div className="col-12 my-2">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Kategori</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>
                <Link href="/kategori/edit/<%= getKategori.id %>">Edit</Link>
                <Link href="/kategori/delete/<%= getKategori.id %>">
                  Delete
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListKategori;
