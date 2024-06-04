import { CommonQueryParams } from '../types/fetch';

export const generateQueryParams = <T extends CommonQueryParams>(
  queryParams: T
) => {
  const newQueryParams = Object.entries(queryParams).reduce<
    Record<string, string>
  >((acc, [key, value]) => {
    if (value) {
      acc[key] = value.toString();
      return acc;
    }
    return acc;
  }, {});

  return new URLSearchParams(newQueryParams);
};
