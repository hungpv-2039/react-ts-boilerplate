import axios, { AxiosInstance } from 'axios';
import _get from 'lodash/get';

const BASE_API_URL: string = 'https://google.com';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${BASE_API_URL}/api/v1/`,
  withCredentials: false,
});

async function requestHelper({ method, options }): Promise<any> {
  try {
    const response = await axiosInstance({
      ...options,
      method,
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
}

export default requestHelper;
