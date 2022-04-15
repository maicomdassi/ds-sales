import axios from 'axios';
import { FilterData } from '../types';

const BASE_URL = 'http://localhost:8080';

export const makeRequest = axios.create({
  baseURL: BASE_URL
});

export const buildFilterParams = (
  filterData?: FilterData,
  extraParams?: Record<string, unknown>
) => {
  return {
    minDate: formatDateServer(filterData?.dates?.[0]),
    maxDate: formatDateServer(filterData?.dates?.[1]),
    gender: filterData?.gender,
    ...extraParams
  };
};

export const formatDateServer = (date?: Date) => {
  if (date) {
    return date?.toISOString().substring(0, 10);
  }
};
