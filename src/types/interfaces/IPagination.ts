export interface IPaginationResponse<T> extends IPaginationData {
  items: T[];
}

export interface IPaginationData {
  total: number;
  skip: number;
  limit: number;
}
