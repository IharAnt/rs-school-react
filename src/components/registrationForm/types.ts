export interface IRegistrationState {
  inputErrors: IRegistrationStateError;
}

export interface IRegistrationStateError {
  [key: string]: string;
}
