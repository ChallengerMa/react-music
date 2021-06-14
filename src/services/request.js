import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  timeout: TIMEOUT,
  baseURL: BASE_URL,
});

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {}
);

export default instance;
