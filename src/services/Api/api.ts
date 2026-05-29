import axios from "axios";

const api = axios.create({
  baseURL: "https://kaelis-park-backend.onrender.com/api/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  const publicRoutes = ["auth/login/", "auth/register/", "auth/token/refresh/"];

  const isPublicRoute = publicRoutes.some((route) =>
    config.url?.includes(route),
  );

  if (token && !isPublicRoute) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
