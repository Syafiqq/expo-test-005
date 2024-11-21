import {Env} from "@env";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: Env.APP_API_BASE_URL,
});

axiosInstance.defaults.timeout = 30000

export default axiosInstance;
