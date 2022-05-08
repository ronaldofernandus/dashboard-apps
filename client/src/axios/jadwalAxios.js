import axios from "axios";

const URL = "http://localhost:4000/jadwal";

const lihatJadwal = async (cb) => {
  try {
    let lihatJadwal = await axios({
      method: "GET",
      url: URL,
    });
    cb(lihatJadwal.data);
  } catch (e) {
    console.log(e);
  }
};

const addJadwal = async (jadwal) => {
  try {
    let addJadwal = await axios({
      method: "POST",
      url: URL + "/add/",
      data: jadwal,
    });
    console.log(addJadwal);
  } catch (e) {
    console.log(e);
  }
};

const deleteJadwal = async (id) => {
  try {
    let deleteJadwal = await axios({
      method: "DELETE",
      url: URL + "/delete/" + id,
    });
    console.log(deleteJadwal);
  } catch (e) {
    console.log(e);
  }
};

const editJadwal = async (id, jadwal) => {
  try {
    let editJadwal = await axios({
      method: "PUT",
      url: URL + "/edit/" + id,
      data: jadwal,
    });
    console.log(editJadwal)
  } catch (e) {
    console.log(e)
  }
};

export { lihatJadwal, addJadwal, deleteJadwal,editJadwal };
