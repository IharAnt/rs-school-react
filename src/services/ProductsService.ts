import { generateQuery } from '../helper/generateQuery';
import { IPaginationResponse } from '../types/interfaces/IPagination';
import { IProduct } from '../types/interfaces/IProduct';
import apiClient from './ApiClient';

class ProductsService {
  searchPath = `/search`;

  async searchProducts(
    skip: number,
    limit = 100,
    search = ''
  ): Promise<IPaginationResponse<IProduct>> {
    const query = generateQuery({
      skip,
      limit,
      q: search,
    });
    const response = await apiClient.get<IPaginationResponse<IProduct>>(
      `${this.searchPath}${query}`
    );
    return response.data;
  }
}

export const productService = new ProductsService();
