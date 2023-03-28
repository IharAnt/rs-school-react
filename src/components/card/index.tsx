import React, { FC } from 'react';
import './style.scss';
import { ICardProps } from './types';

const Card: FC<ICardProps> = ({ product }) => {
  return (
    <div className="card-vitrine">
      <a className="card__link" href={`#/details?id=${product.id}`}>
        <img className="card__image card-img-top" src={product.thumbnail} alt={product.title} />
      </a>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card__description card-text">{product.description}</p>
        <div className="card__info-container">
          <div className="card__info">
            <p className="card__info-item card-text">
              <small className="text-muted">Catygory: {product.category}</small>
            </p>
            <p className="card__info-item card-text">
              <small className="text-muted">Brand: {product.brand}</small>
            </p>
            <p className="card__info-item card-text">
              <small className="text-muted">Stock: {product.stock}</small>
            </p>
            <p className="card__info-item card-text">
              <small className="text-muted">Rating: {product.rating}</small>
            </p>
          </div>
        </div>
      </div>
      <div className="card__price-vitrine">
        <span className="card__price-amount card-text">
          <b>$549</b>
        </span>
        <button className="card__btn btn btn-success" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
