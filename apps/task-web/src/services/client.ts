import axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://localhost:44302/api/',
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('auth-token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const fetchInstance = async (
  url: string,
  config: AxiosRequestConfig
) => {
  return axiosInstance.request({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  });
};
