import { IUserCard } from '../../types/interfaces/IUserCard';

export interface IRegistrationProps {
  addUserCard: (card: IUserCard) => void;
}

export interface IRegistrationState {
  inputErrors: IRegistrationStateError;
}

export interface IRegistrationStateError {
  [key: string]: string;
}
