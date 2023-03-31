import { IUserCard } from '../../types/interfaces/IUserCard';

export interface IRegistrationProps {
  addUserCard: (card: IUserCard) => void;
}

export interface IRegistrationState {
  inputErrors: IRegistrationStateError;
  addedMessages: string;
}

export interface IRegistrationStateError {
  [key: string]: string;
}

export interface IFormInputs {
  email: string;
  userName: string;
  birthday: string;
  image: FileList;
  country: string;
}
