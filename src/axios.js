import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-cf1cb/us-central1/api", //API URL
});

export default instance;
