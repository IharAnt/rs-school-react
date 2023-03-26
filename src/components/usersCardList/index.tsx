import React from 'react';
import { Component } from 'react';
import UserCard from '../userCard';
import './style.scss';
import { IUsersCardListProps } from './types';

export default class UsersCardList extends Component<IUsersCardListProps> {
  constructor(props: IUsersCardListProps) {
    super(props);
  }

  render() {
    return (
      <div className="users-card-list">
        {this.props.userCards.map((card) => {
          return <UserCard userCard={card} key={card.email}></UserCard>;
        })}
      </div>
    );
  }
}
