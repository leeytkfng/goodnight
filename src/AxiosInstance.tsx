import axios from "axios";

const API_KEY = import.meta.env.VITE_RIOT_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://kr.api.riotgames.com/lol",
  headers: {
    "X-Riot-Token": API_KEY,
  },
  timeout: 5000,
});

export default axiosInstance;
