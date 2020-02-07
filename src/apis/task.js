import qs from 'querystring';
import AxiosService from '../commons/Axios';
import { API_ENDPOINT } from '../constants';

const url = 'tasks';

export const getAll = (params = {}) => {
  const queryParams = Object.keys(params).length > 0 ? qs.stringify(params) : '';
  return AxiosService.get(`${API_ENDPOINT}/${url}?${queryParams}`);
};

export const createOne = data => {
  return AxiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateOne = (id, data) => {
  return AxiosService.put(`${API_ENDPOINT}/${url}/${id}`, data);
};

export const deleteOne = id => {
  return AxiosService.delete(`${API_ENDPOINT}/${url}/${id}`);
};
