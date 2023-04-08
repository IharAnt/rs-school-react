export interface IPaginationResponse<T> extends IPaginationData {
  products: T[];
}

export interface IPaginationData {
  total: number;
  skip: number;
  limit: number;
}
