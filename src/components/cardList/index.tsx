import React, { FC } from 'react';
import Card from '../card';
import './style.scss';
import { ICardListProps } from './types';

const CardList: FC<ICardListProps> = ({ products }) => {
  return (
    <div className="card-list">
      {products.map((product) => {
        return <Card product={product} key={product.id}></Card>;
      })}
    </div>
  );
};

export default CardList;
