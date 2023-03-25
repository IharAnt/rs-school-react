import React from 'react';
import { Component } from 'react';
import TextInput from '../textInput';
import './style.scss';
import { IRegistrationState } from './types';

export default class RegistrationForm extends Component<unknown, IRegistrationState> {
  private formRefs: {
    userName: React.RefObject<HTMLInputElement>;
    email: React.RefObject<HTMLInputElement>;
    birthday: React.RefObject<HTMLInputElement>;
  };

  constructor(props: unknown) {
    super(props);
    this.state = {
      formErrors: {
        email: '',
        userName: '',
        birthday: '',
      },
    };
    this.submit = this.submit.bind(this);

    this.formRefs = {
      email: React.createRef(),
      userName: React.createRef(),
      birthday: React.createRef(),
    };
  }

  submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.setState({ formErrors: { userName: 'Error name' } });
    this.setState({ formErrors: { email: 'Error email' } });
  }

  render() {
    return (
      <form className="reg-form" onSubmit={this.submit}>
        <TextInput
          label="Email:"
          id="email"
          inputref={this.formRefs.email}
          error={this.state.formErrors.email}
        ></TextInput>
        <div className="reg-form-group">
          <label htmlFor="userName">Username:</label>
          <input
            className="reg-form__input"
            id="userName"
            name="userName"
            type="text"
            ref={this.formRefs.userName}
          />
          {this.state.formErrors.userName && (
            <div className="reg-form__error-message">{this.state.formErrors.userName}</div>
          )}
        </div>
        <div className="reg-form-group">
          <label htmlFor="birthday">Birthday:</label>
          <input
            className="reg-form__input"
            id="birthday"
            name="birthday"
            type="date"
            ref={this.formRefs.birthday}
          />
          {this.state.formErrors.birthday && (
            <div className="reg-form__error-message">{this.state.formErrors.birthday}</div>
          )}
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      // <form onSubmit={this.submit}>
      //   <div className="form-group">
      //     <label htmlFor="email">Email</label>
      //     <input type="email" id="email" name="email" />
      //   </div>
      //   <div className="form-group">
      //     <label htmlFor="password">Password</label>
      //     <input type="password" id="password" name="password" />
      //   </div>
      //   <button>Log in</button>
      // </form>
    );
  }
}
