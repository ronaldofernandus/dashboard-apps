import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:4000/film";

const lihatFilm = async (cb) => {
  try {
    let lihatFilm = await axios({
      method: "GET",
      url: URL,
    });
    cb  (lihatFilm.data);
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
    Swal.fire("Add Film", "Film berhasil di tambah", "success");
  } catch (e) {
    console.log(e);
  }
};

const deleteFilm = async (id) => {
  try {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then(async (result) => {
      if (result.isConfirmed) {
          let result = await axios({
              method: "DELETE",
              url: URL + '/delete/' + id
          })

          Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
          )
      }
  })
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
    Swal.fire(
      'Edit Film ' + id,
      'Film ' + id + ' has been updated',
      'success'
  )
  } catch (e) {
    console.log(e);
  }
};

export { lihatFilm, addFilm, deleteFilm, editFilm };
