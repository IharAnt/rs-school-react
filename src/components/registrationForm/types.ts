export interface IRegistrationState {
  formErrors: IRegistrationStateError;
}

export interface IRegistrationStateError {
  [key: string]: string;
}
