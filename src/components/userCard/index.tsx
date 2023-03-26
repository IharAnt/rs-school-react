import React from 'react';
import { Component } from 'react';
import './style.scss';
import { IUserCardProps } from './types';

export default class UserCard extends Component<IUserCardProps> {
  constructor(props: IUserCardProps) {
    super(props);
  }

  render() {
    return (
      <div className="user-card-vitrine">
        <a className="user-card__link" href={`#/usercard?email=${this.props.userCard.email}`}>
          <img
            className="user-card__image card-img-top"
            src={this.props.userCard.image}
            alt={this.props.userCard.userName}
          />
        </a>
        <div className="user-card-body">
          <h3 className="user-card-title">{this.props.userCard.userName}</h3>
          <div className="user-card__info-container">
            <div className="user-card__info">
              <p className="user-card__info-item card-text">
                <small className="text-muted">Email: {this.props.userCard.email}</small>
              </p>
              <p className="user-card__info-item card-text">
                <small className="text-muted">Birthday: {this.props.userCard.birthday}</small>
              </p>
              <p className="user-card__info-item card-text">
                <small className="text-muted">Country: {this.props.userCard.country}</small>
              </p>
              <p className="user-card__info-item card-text">
                <small className="text-muted">Gender: {this.props.userCard.gender}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
