import React from "react";
import { Link } from "react-router-dom";
import "./FilmPage.css";
import { MdDeleteForever } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import {AiFillEdit} from 'react-icons/ai'

const Film = () => {
  return (
    <div class="row">
      <div class="judul col-12 text-center">
        <h5>Daftar Film</h5>
        <p>Berikut adalah film yang sedang dan akan tayang</p>
      </div>
      <div class="col-12 my-2">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Poster</th>
              <th>Nama Film</th>
              <th>Sinopsis</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <img src="" class="img-fluid" alt=""></img>
              </td>
              <td></td>
              <td></td>
              <td>
                <button type="button" class="btn btn-success">
                <AiFillEdit></AiFillEdit>
                  <Link to="/Film/" className="edit">
                    Edit
                  </Link>
                </button>
                <button type="button" class="btn btn-primary">
                  <MdDeleteForever></MdDeleteForever>
                  <Link to="" className="delete">
                    Delete
                  </Link>
                </button>
                <button type="button" class="btn btn-secondary">
                <AiFillFileAdd></AiFillFileAdd>
                  <Link to="" className="add">
                    Add
                  </Link>
                  
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Film;