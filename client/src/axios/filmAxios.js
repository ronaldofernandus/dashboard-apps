import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:4000/film";

const lihatFilm = async (cb) => {
  try {
    let lihatFilm = await axios({
      method: "GET",
      url: URL,
    });
    cb(lihatFilm.data);
    // console.log(lihatFilm);
  } catch (e) {
    console.log(e);
  }
};

const addFilm = async (film) => {
  try {
    let addFilm = await axios({
      method: "POST",
      url: URL + "/add",
      data: film,
    });
    console.log(addFilm.data);
  } catch (e) {
    console.log(e);
  }
};

const deleteFilm = async (id) => {
  try {
    let deleteFilm = await axios({
      method: "DELETE",
      url: URL + "/delete/" + id,
    });
    console.log(deleteFilm);
  } catch (e) {
    console.log(e);
  }
};

const editFilm = async (id, film) => {
  try {
    let editFilm = await axios({
      method: "PUT",
      url: URL + "/edit/" + id,
      data: film,
    });
    console.log(editFilm.data);
  } catch (e) {
    console.log(e);
  }
};

export { lihatFilm, addFilm, deleteFilm, editFilm };
