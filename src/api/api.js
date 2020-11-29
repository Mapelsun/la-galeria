import axios from "axios";
import config from "../config";

export default {
  pingUnsplash: () => {
    let method = "post";
    let url = config.serverURI + "/ping";
    return axios({
      method,
      url,
      headers: { Authorization: "Client-ID " + config.clientKey }
    });
  }
};
