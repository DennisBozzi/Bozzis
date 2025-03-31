import axios from "axios";

const url = "https://us.api.blizzard.com/data/wow";

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
});

export default axiosInstance;
