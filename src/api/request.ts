import type { AxiosRequestConfig } from 'axios';
import { api } from './instance';

export const getCat = (options?: AxiosRequestConfig) =>
  api.get<CatImage[]>('images/search', options);
