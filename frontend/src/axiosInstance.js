import axios from "axios";

const axiosInstance = axios.create({
  //baseURL: "http://localhost:3300", // Change l'URL selon ton backend
  baseURL: "https://mountain-bookstore-backend.onrender.com",
  //timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepteur pour ajouter le token automatiquement
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
