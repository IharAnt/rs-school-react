import { FC, useState } from 'react';
import RegistrationForm from '../../components/registrationForm';
import UsersCardList from '../../components/usersCardList';
import { IUserCard } from '../../types/interfaces/IUserCard';
import './style.scss';
//IFopmPageState
const FormPage: FC = () => {
  const [cards, setCards] = useState<IUserCard[]>([]);

  const addUserCard = (card: IUserCard) => {
    setCards([...cards, card]);
  };

  return (
    <div className="wrapper">
      <h1>Form page</h1>
      <RegistrationForm addUserCard={addUserCard}></RegistrationForm>
      <UsersCardList userCards={cards}></UsersCardList>
    </div>
  );
};

export default FormPage;
