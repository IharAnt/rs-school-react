import React from 'react';
import { Component } from 'react';
import './style.scss';
import { ICardProps } from './types';

export default class Card extends Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }

  render() {
    return (
      <div className={`card-vitrine ${this.props.className || ''}`}>
        <a className="card__link" href={`/details?id=${this.props.product.id}`}>
          <img
            className="card__image card-img-top"
            src={this.props.product.thumbnail}
            alt={this.props.product.title}
          />
        </a>
        <div className="card-body">
          <h3 className="card-title">{this.props.product.title}</h3>
          <p className="card__description card-text">{this.props.product.description}</p>
          <div className="card__info-container">
            <div className="card__info">
              <p className="card__info-item card-text">
                <small className="text-muted">Catygory: {this.props.product.category}</small>
              </p>
              <p className="card__info-item card-text">
                <small className="text-muted">Brand: {this.props.product.brand}</small>
              </p>
              <p className="card__info-item card-text">
                <small className="text-muted">Stock: {this.props.product.stock}</small>
              </p>
              <p className="card__info-item card-text">
                <small className="text-muted">Rating: {this.props.product.rating}</small>
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
  }
}
