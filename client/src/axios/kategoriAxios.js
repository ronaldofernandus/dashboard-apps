import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:4000/kategori";

const lihatKategori = async (cb) => {
  try {
    let lihatKategori = await axios({
      method: "GET",
      url: URL,
    });
    cb(lihatKategori.data);
  } catch (e) {
    console.log(e);
  }
};
const addKategori = async (kategori) => {
  try {
    let addKategori = await axios({
      method: "POST",
      url: URL + "/add/",
      data: kategori,
    });

    Swal.fire("Add Kategori", "Kategori berhasil di tambah", "success");
  } catch (e) {
    console.log(e);
  }
};

const editKategori = async (id, kategori) => {
  try {
    let editKategori = await axios({
      method: "PUT",
      url: URL + "/edit/" + id,
      data: kategori,
    });
    Swal.fire(
      "Edit Kategori " + id,
      "Kategori " + id + " has been updated",
      "success"
    );
    console.log(editKategori.data);
  } catch (e) {
    console.log(e);
  }
};

const deleteKategori = async (id) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let result = await axios({
          method: "DELETE",
          url: URL + "/delete/" + id,
        });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    console.log(deleteKategori);
  } catch (e) {
    console.log(e);
  }
};

export { lihatKategori, deleteKategori, addKategori, editKategori };
