import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:4000/film";

const lihatFilm = async (cb) => {
  try {
    let lihatFilm = await axios({
      method: "GET",
      url: URL,
    });
    cb(lihatFilm.data)
    console.log(lihatFilm);
  } catch (e) {
    console.log(e);
  }
};

export { lihatFilm };
