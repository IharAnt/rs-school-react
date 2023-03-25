import React from 'react';
import { Component } from 'react';
import Validator from '../../helper/Validator';
import CheckInput from '../checkInput';
import TextInput from '../textInput';
import './style.scss';
import { IRegistrationState, IRegistrationStateError } from './types';

export default class RegistrationForm extends Component<unknown, IRegistrationState> {
  private formRefs: {
    userName: React.RefObject<HTMLInputElement>;
    email: React.RefObject<HTMLInputElement>;
    birthday: React.RefObject<HTMLInputElement>;
    agree: React.RefObject<HTMLInputElement>;
  };

  constructor(props: unknown) {
    super(props);
    this.state = {
      inputErrors: {
        email: '',
        userName: '',
        birthday: '',
        agree: '',
      },
    };
    this.submit = this.submit.bind(this);

    this.formRefs = {
      email: React.createRef(),
      userName: React.createRef(),
      birthday: React.createRef(),
      agree: React.createRef(),
    };
  }

  submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors: IRegistrationStateError = {};

    errors.email = Validator.validateEmail(this.formRefs.email.current?.value).error;
    errors.userName = Validator.validateName(this.formRefs.userName.current?.value).error;
    errors.birthday = Validator.validateBirthday(10, this.formRefs.birthday.current?.value).error;
    errors.agree = Validator.validateAgree(this.formRefs.agree.current?.checked).error;

    this.setState({ inputErrors: errors });
  }

  render() {
    return (
      <form className="reg-form" onSubmit={this.submit}>
        <TextInput
          label="Email:"
          id="email"
          name="email"
          type="email"
          inputref={this.formRefs.email}
          error={this.state.inputErrors.email}
        ></TextInput>
        <TextInput
          label="Username:"
          id="userName"
          name="userName"
          type="text"
          inputref={this.formRefs.userName}
          error={this.state.inputErrors.userName}
        ></TextInput>
        <TextInput
          label="Birthday:"
          id="birthday"
          name="birthday"
          type="date"
          inputref={this.formRefs.birthday}
          error={this.state.inputErrors.birthday}
        ></TextInput>
        <CheckInput
          label="I give my agree to the processing of personal data"
          id="agree"
          name="agree"
          type="checkbox"
          inputref={this.formRefs.agree}
          error={this.state.inputErrors.agree}
        ></CheckInput>
        {/* <CheckInput
          label="I give my agree to the processing of personal data"
          id="agree"
          name="agree"
          type="radio"
          inputref={this.formRefs.agree}
          error={this.state.inputErrors.agree}
        ></CheckInput> */}
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    );
  }
}
