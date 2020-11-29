import axios from "axios";
import config from "../config";

export default {
  handleSearchPhotos: data => {
    let method = "get";
    let url = config.serverURI + "/search/photos";
    return axios({
      method,
      url,
      params: { per_page: 8, query: data },
      headers: { Authorization: "Client-ID " + config.clientAccessKey }
    });
  }
};
