import axios from "axios";

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
    console.log(addKategori.data);
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
    console.log(editKategori.data);
  } catch (e) {
    console.log(e);
  }
};

const deleteKategori = async (id) => {
  try {
    let deleteKategori = await axios({
      method: "DELETE",
      url: URL + "/delete/" + id,
    });
    console.log(deleteKategori);
  } catch (e) {
    console.log(e);
  }
};

export { lihatKategori, deleteKategori, addKategori, editKategori };
