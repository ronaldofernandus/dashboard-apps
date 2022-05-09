import axios from "axios";

const URL = "http://localhost:4000/detail/:id";

const lihatDetails = async (id) => {
  try {
    let lihatDetails = await axios({
      method: "GET",
      url: URL + "/detail" + id,
    });
    console.log(lihatDetails);
  } catch (e) {
    console.log(e);
  }
};

export { lihatDetails };
