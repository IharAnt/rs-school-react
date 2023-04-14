import { FC } from 'react';
import RegistrationForm from '../../components/registrationForm';
import UsersCardList from '../../components/usersCardList';
import { IUserCard } from '../../types/interfaces/IUserCard';
import './style.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addUserCard } from '../../store/userCardList/userCardListSlice';

const FormPage: FC = () => {
  const { userCards } = useAppSelector((state) => state.userCardList);
  const dispatch = useAppDispatch();

  const addUser = (card: IUserCard) => {
    dispatch(addUserCard(card));
  };

  return (
    <div className="wrapper">
      <h1>Form page</h1>
      <RegistrationForm addUserCard={addUser}></RegistrationForm>
      <UsersCardList userCards={userCards}></UsersCardList>
    </div>
  );
};

export default FormPage;
