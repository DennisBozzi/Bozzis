import axios from "axios";
import { checkToken } from "./useAuthData";

// --- Instance
const url = "https://us.api.blizzard.com/data/wow";

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await checkToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// --- Blizzard Instance
const urlBlizzard = "https://us.api.blizzard.com/data/wow";

const axiosInstanceBlizzard = axios.create({
  baseURL: urlBlizzard,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
});

axiosInstanceBlizzard.interceptors.request.use(
  async (config) => {
    const token = await checkToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance, axiosInstanceBlizzard };
