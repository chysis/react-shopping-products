import { CommonQueryParams } from '@_types/fetch';
import { HEADERS } from './common';
import { generateQueryParams } from '@_utils/generateQueryParams';

export const fetchData = async <T>(url: string, queryParams?: CommonQueryParams): Promise<T> => {
  const queryString = queryParams ? generateQueryParams(queryParams) : '';
  const response = await fetch(`${url}?${queryString}`, {
    method: 'GET',
    headers: HEADERS,
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  const data = await response.json();
  return data as T;
};
