import axios, { AxiosHeaders, AxiosRequestConfig } from "axios";
import { storageService } from "./storage.service";


const { VITE_BACKEND_URL } = import.meta.env;
const noAccessTokenEndPoints = ["/auth/login", "/auth/activate-account"];

function handleRequest(config: AxiosRequestConfig<any>) {
  // Do something before request is sent
  const { url } = config;
  if (!url) return config;
  const requestURl = url.slice(VITE_BACKEND_URL.length);
  if (noAccessTokenEndPoints.includes(requestURl)) return config;

  (config.headers as AxiosHeaders).set('Authorization', storageService.getUserToken());
  return config;
}

function handleRequestError(error: any) {
  // Do something with request error
  return Promise.reject(error);
}


const axiosInterceptorInstance = axios.create();
// Add a request interceptor
axiosInterceptorInstance.interceptors.request.use(
  (config) => handleRequest(config),
  (error) => handleRequestError(error)
);

// Add a response interceptor
axiosInterceptorInstance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export { axiosInterceptorInstance };