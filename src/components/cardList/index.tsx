import React from 'react';
import { Component } from 'react';
import Card from '../card';
import './style.scss';
import { ICardListProps } from './types';

export default class CardList extends Component<ICardListProps> {
  constructor(props: ICardListProps) {
    super(props);
  }

  render() {
    return (
      <div className={`card-list ${this.props.className || ''}`}>
        {this.props.products.map((product) => {
          return <Card product={product} key={product.id}></Card>;
        })}
      </div>
    );
  }
}
