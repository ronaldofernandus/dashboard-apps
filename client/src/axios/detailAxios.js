import axios from "axios";

const URL = "http://localhost:4000";

const lihatDetails = async (id,cb) => {
  try {
    let lihatDetails = await axios({
      method: "GET",
      url: URL + "/detail/" + id,
    });
    // cb(lihatDetails.data);
    console.log(lihatDetails.data);
  } catch (e) {
    console.log(e);
  }
};

export { lihatDetails };
