import { FC, useEffect, useRef, useState } from 'react';
import CardList from '../../components/cardList';
import './style.scss';
import SearchInput from '../../components/searchInput';
import { productService } from '../../services/ProductsService';
import { AxiosError } from 'axios';
import { IProduct } from '../../types/interfaces/IProduct';
import ProgressSpinner from '../../components/progressSpinner';
import Message from '../../components/message';

const Main: FC = () => {
  const [searchValue, setSearch] = useState<string>(
    () => localStorage.getItem('searchValue') ?? ''
  );
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const searchRef = useRef<string>();

  useEffect(() => {
    searchRef.current = searchValue;
    localStorage.setItem('searchValue', searchRef.current ?? '');
  }, [searchValue]);

  useEffect(() => {
    search(searchRef.current || '');
    return () => {
      localStorage.setItem('searchValue', searchRef.current ?? '');
    };
  }, []);

  const search = async (value: string): Promise<void> => {
    try {
      setErrorMessage('');
      setIsLoading(true);
      const repsonse = await productService.searchProducts(0, 30, value);
      setProducts(repsonse.products);
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorMessage(error.response?.data.message || error.message);
      } else if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Unknown error');
      }
    } finally {
      setIsLoading(false);
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
      {!isLoading && products?.length > 0 && <CardList products={products}></CardList>}
      {!isLoading && products?.length === 0 && !errorMessage && (
        <Message className="products-message">Products not found</Message>
      )}
      {errorMessage && (
        <Message className="products-message" isError={true}>
          {errorMessage}
        </Message>
      )}
      <ProgressSpinner isShow={isLoading} />
    </div>
  );
};

export default Main;
