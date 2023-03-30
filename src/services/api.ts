import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { API_ENDPOINT, NODE_ENV } from '@/config';
import ApiResponse from '@/interfaces/response';

export class ApiService {
  public get<T = any>(url: AxiosRequestConfig['url'], params?: AxiosRequestConfig['params']): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'GET', url, params });
  }

  public post<T = any>(url: AxiosRequestConfig['url'], data: AxiosRequestConfig['data']): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'POST', url, data });
  }

  public put<T = any>(url: AxiosRequestConfig['url'], data: AxiosRequestConfig['data']): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'PUT', url, data });
  }

  public delete<T = any>(
    url: AxiosRequestConfig['url'],
    params?: AxiosRequestConfig['params']
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'DELETE', url, params });
  }

  public async request<T = any>(options: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await axios.request({
        ...options,
        ...options.params,
        baseURL: API_ENDPOINT,
        headers: {
          'Content-Type': options.data instanceof FormData ? 'multipart/form-data' : 'application/json'
        }
      });

      return (await response.data) || {};
    } catch (err) {
      return this.handleError<ApiResponse<T>>(err as AxiosError);
    }
  }

  private async handleError<T>(err: AxiosError<any>): Promise<T> {
    if (NODE_ENV === 'development') {
      console.log('api error', err.response);
    }

    throw new Error(err.message);
  }
}

axios.interceptors.response.use(undefined, async (error: AxiosError) => {
  // refresh token
  // invalidate login
  // redirect login

  return Promise.reject(error);
});

const apiService = new ApiService();
export default apiService;
