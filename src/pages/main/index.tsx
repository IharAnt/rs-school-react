import { FC, useState } from 'react';
import CardList from '../../components/cardList';
import './style.scss';
import SearchInput from '../../components/searchInput';
import ProgressSpinner from '../../components/progressSpinner';
import Message from '../../components/message';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setSerachValue } from '../../store/search/searchSlice';
import { useSearchProductsQuery } from '../../store/api/productsApi';
import { getErrorMessage } from '../../helper/errorQuery';

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector((state) => state.search);
  const [searchInput, setSearchInput] = useState(searchValue);

  const { data, error, isFetching } = useSearchProductsQuery({ search: searchValue });

  const search = async (value: string): Promise<void> => {
    dispatch(setSerachValue(value));
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="wrapper">
      <h1>Main page</h1>
      <SearchInput
        className="search-input"
        type="search"
        name="search"
        label=""
        value={searchInput}
        onChange={onChangeSearch}
        searchClick={() => search(searchInput)}
        pressEnter={() => search(searchInput)}
        placeholder="Search..."
        aria-label="Small"
      ></SearchInput>
      {isFetching ? (
        <ProgressSpinner isShow={isFetching} />
      ) : error ? (
        <Message className="products-message" isError={true}>
          {getErrorMessage(error)}
        </Message>
      ) : data && data.products.length > 0 ? (
        <CardList products={data?.products}></CardList>
      ) : (
        <Message className="products-message">Products not found</Message>
      )}
    </div>
  );
};

export default Main;
