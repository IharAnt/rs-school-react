import React, { FC } from 'react';
import './style.scss';
import { IMinCardProps } from './types';

const MinCard: FC<IMinCardProps> = ({ product, onClickCard }) => {
  return (
    <div className="min-card-vitrine" onClick={() => onClickCard(product.id)}>
      <a className="card__link">
        <img className="min-card__image card-img-top" src={product.thumbnail} alt={product.title} />
      </a>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <div className="card__info-container">
          <div className="card__info">
            <p className="card__info-item card-text">
              <small className="text-muted">Brand: {product.brand}</small>
            </p>
          </div>
        </div>
      </div>
      <div className="card__price-vitrine">
        <span className="card__price-amount card-text">
          <b>${product.price} </b>
        </span>
      </div>
    </div>
  );
};

export default MinCard;
