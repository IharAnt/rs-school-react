import { FC, useEffect, useRef, useState } from 'react';
import CardList from '../../components/cardList';
import './style.scss';
import SearchInput from '../../components/searchInput';
import { productService } from '../../services/ProductsService';
import { AxiosError } from 'axios';
import { IProduct } from '../../types/interfaces/IProduct';

const Main: FC = () => {
  const [searchValue, setSearch] = useState<string>(
    () => localStorage.getItem('searchValue') ?? ''
  );
  const [products, setProducts] = useState<IProduct[]>([]);

  const searchRef = useRef<string>();

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    search(searchRef.current || '');
    return () => {
      localStorage.setItem('searchValue', searchRef.current ?? '');
    };
  }, []);

  const search = async (value: string): Promise<void> => {
    try {
      const repsonse = await productService.searchProducts(0, 30, value);
      setProducts(repsonse.products);
    } catch (error) {
      if (error instanceof AxiosError) {
        // setErrorMessage(error.response?.data.message || error.message);
      } else if (error instanceof Error) {
        // setErrorMessage(error.message);
      } else {
        // setErrorMessage('Unknown error');
      }
    }
  };

  return (
    <div className="wrapper">
      <h1>Main page</h1>
      <SearchInput
        className="search-input"
        type="search"
        name="search"
        label=""
        value={searchValue}
        onChange={(e) => setSearch(e.target.value)}
        search={() => search(searchValue)}
        pressEnter={() => search(searchValue)}
        placeholder="Search..."
        aria-label="Small"
      ></SearchInput>
      <CardList products={products}></CardList>
    </div>
  );
};

export default Main;
