import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { getAccessToken, getRefreshToken } from "../hooks/user.actions";

const axiosService = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosService.interceptors.request.use(async (config) => {
  config.headers.Authorization = `Bearer ${getAccessToken()}`;
  console.log('CONFIG:', config.headers.Authorization)
  return config;
});

axiosService.interceptors.response.use(
  (res) => Promise.resolve(res),
  (err) => Promise.reject(err)
);

const refreshAuthLogic = async (failedRequest) => {
  const { refresh } = JSON.parse(localStorage.getItem("auth"));
  return axios
    .post("/auth/refresh/", null, {
      baseURL: "http://localhost:8000/api",
      headers: {
        Authorization: `Bearer ${getRefreshToken()}`,
      },
    })
    .then((resp) => {
      const { access, refresh, user } = resp.data;
      failedRequest.response.config.headers["Authorization"] = "Bearer " + access;
      localStorage.setItem("auth", JSON.stringify({ access, refresh, user }));
    })
    .catch(() => {
      localStorage.removeItem("auth");
    });
};

createAuthRefreshInterceptor(axiosService, refreshAuthLogic);

export function fetcher(url) {
  return axiosService.get(url).then((res) => res.data);
}
export default axiosService;
