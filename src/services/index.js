import axios from "axios";

export const BASE_URL = "http://localhost:8000/api/v1";

const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export default api;
