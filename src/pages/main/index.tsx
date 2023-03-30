import { FC, useEffect, useRef, useState } from 'react';
import CardList from '../../components/cardList';
import './style.scss';
import product from '../../data/products.json';
import SearchInput from '../../components/searchInput';

const Main: FC = () => {
  const [search, setSearch] = useState<string>(() => localStorage.getItem('searchValue') ?? '');
  const searchRef = useRef<string>();

  useEffect(() => {
    searchRef.current = search;
  }, [search]);

  useEffect(() => {
    console.log('unmaunt');
    return () => {
      localStorage.setItem('searchValue', searchRef.current ?? '');
    };
  }, []);

  return (
    <div className="wrapper">
      <h1>Main page</h1>
      <SearchInput
        className="search-input"
        type="search"
        name="search"
        label=""
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        aria-label="Small"
      ></SearchInput>
      <CardList products={product.products}></CardList>
    </div>
  );
};

export default Main;
