import axios from "axios";

export default axios.create({
  baseURL: "https://first-cloud-app-267118.wl.r.appspot.com/api",
  headers: {
    "Content-type": "application/json"
  }
});