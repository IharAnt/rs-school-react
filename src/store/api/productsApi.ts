import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import appConfig from '../../config/AppConfig';
import { IProduct } from '../../types/interfaces/IProduct';
import { IPaginationResponse } from '../../types/interfaces/IPagination';
import { ISearchQuery } from '../../types/interfaces/ISearchQuery';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.apiUrl,
  }),
  endpoints: (build) => ({
    searchProducts: build.query<IPaginationResponse<IProduct>, ISearchQuery>({
      query: ({ skip = 0, limit = 100, search = '' }) => ({
        url: 'search',
        params: {
          limit,
          skip,
          q: search,
        },
      }),
    }),
    getProduct: build.query<IProduct, number>({
      query: (id) => ({
        url: `${id}`,
      }),
    }),
  }),
});

export const { useSearchProductsQuery, useLazyGetProductQuery } = productsApi;
