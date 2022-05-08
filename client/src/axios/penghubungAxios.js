import axios from "axios";

const URL = "http://localhost:4000/penghubung";

const lihatPenghubung = async (cb) => {
  try {
    let lihatPenghubung = await axios({
      method: "GET",
      url: URL,
    });
    cb(lihatPenghubung);
  } catch (e) {
    console.log(e);
  }
};

const addPenghubung = async (penghubung) => {
  try {
    let addPenghubung = await axios({
      method: "POST",
      url: URL + "/add/",
      data: penghubung,
    });
    console.log(addPenghubung.data);
  } catch (e) {
    console.log(e);
  }
};

export { lihatPenghubung, addPenghubung };
