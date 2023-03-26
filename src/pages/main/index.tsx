import { Component } from 'react';
import CardList from '../../components/cardList';
import './style.scss';
import product from '../../data/products.json';
import SearchInput from '../../components/searchInput';
import { IMainState } from './types';

export default class Main extends Component<unknown, IMainState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Main page</h1>
        <SearchInput
          className="search-input"
          type="search"
          name="search"
          label=""
          value={this.state.searchValue}
          onChange={(e) => this.setState({ searchValue: e.target.value })}
          placeholder="Search..."
          aria-label="Small"
        ></SearchInput>
        <CardList products={product.products}></CardList>
      </div>
    );
  }
}
