import { Component } from 'react';
import RegistrationForm from '../../components/registrationForm';
import UsersCardList from '../../components/usersCardList';
import { IUserCard } from '../../types/interfaces/IUserCard';
import './style.scss';
import { IFopmPageState } from './types';

export default class FormPage extends Component<unknown, IFopmPageState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      cards: [],
    };
    this.addUserCard = this.addUserCard.bind(this);
  }

  addUserCard(card: IUserCard) {
    this.setState({ cards: [...this.state.cards, card] });
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Form page</h1>
        <RegistrationForm addUserCard={this.addUserCard}></RegistrationForm>
        <UsersCardList userCards={this.state.cards}></UsersCardList>
      </div>
    );
  }
}
