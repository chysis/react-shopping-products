export type URLSearchParamsArgs =
  | string
  | Record<string, string>
  | string[][]
  | URLSearchParams
  | undefined;

export interface CommonQueryParams {
  [key: string]: boolean | number | string | undefined;
}
