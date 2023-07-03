import axios, { AxiosInstance} from "axios";
const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000/',
});

api.interceptors.request.use(
  (config) => {
    const tokenString = localStorage.getItem("token");
    if (tokenString) {
        // const token = JSON.parse(tokenString);
      config.headers.Authorization = `Bearer ${tokenString}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;