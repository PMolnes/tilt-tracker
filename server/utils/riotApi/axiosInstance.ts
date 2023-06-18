import axios from "axios";

const runtimeConfig = useRuntimeConfig();

const axiosInstance = axios.create({
  baseURL: runtimeConfig.riotApiBaseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["X-Riot-Token"] = runtimeConfig.apiKey;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
