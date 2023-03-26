import React from 'react';
import { Component } from 'react';
import Validator from '../../helper/Validator';
import CheckInput from '../checkInput';
import TextInput from '../textInput';
import './style.scss';
import { IRegistrationProps, IRegistrationState, IRegistrationStateError } from './types';

export default class RegistrationForm extends Component<IRegistrationProps, IRegistrationState> {
  private formRefs: {
    form: React.RefObject<HTMLFormElement>;
    userName: React.RefObject<HTMLInputElement>;
    email: React.RefObject<HTMLInputElement>;
    birthday: React.RefObject<HTMLInputElement>;
    image: React.RefObject<HTMLInputElement>;
    agree: React.RefObject<HTMLInputElement>;
  };

  constructor(props: IRegistrationProps) {
    super(props);
    this.state = {
      inputErrors: {
        email: '',
        userName: '',
        birthday: '',
        image: '',
        agree: '',
      },
      addedMessages: '',
    };
    this.submit = this.submit.bind(this);

    this.formRefs = {
      form: React.createRef(),
      email: React.createRef(),
      userName: React.createRef(),
      birthday: React.createRef(),
      image: React.createRef(),
      agree: React.createRef(),
    };
  }

  submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors: IRegistrationStateError = {};
    let formIsValid = true;

    let validateResult = Validator.validateEmail(this.formRefs.email.current?.value);
    if (!validateResult.isValid) {
      errors.email = validateResult.error;
      formIsValid = false;
    }
    validateResult = Validator.validateName(this.formRefs.userName.current?.value);
    if (!validateResult.isValid) {
      errors.userName = validateResult.error;
      formIsValid = false;
    }
    validateResult = Validator.validateBirthday(10, this.formRefs.birthday.current?.value);
    if (!validateResult.isValid) {
      errors.birthday = validateResult.error;
      formIsValid = false;
    }
    validateResult = Validator.validateFiles(this.formRefs.image.current?.files);
    if (!validateResult.isValid) {
      errors.image = validateResult.error;
      formIsValid = false;
    }
    validateResult = Validator.validateAgree(this.formRefs.agree.current?.checked);
    if (!validateResult.isValid) {
      errors.agree = validateResult.error;
      formIsValid = false;
    }

    this.setState({ inputErrors: errors });

    if (formIsValid) {
      this.props.addUserCard({
        id: Math.random().toString(),
        email: this.formRefs.email.current?.value || '',
        userName: this.formRefs.userName.current?.value || '',
        birthday: this.formRefs.birthday.current?.value || '',
        agree: this.formRefs.agree.current?.checked || false,
        country: '',
        gender: 'male',
        image: this.formRefs.image.current?.files
          ? URL.createObjectURL(this.formRefs.image.current?.files[0])
          : '',
      });
      this.clearInputs();
      this.showMessage();
    }
  }

  private showMessage() {
    this.setState({ addedMessages: 'User has been added' });
    setTimeout(() => {
      this.setState({ addedMessages: '' });
    }, 3000);
  }

  private clearInputs() {
    this.formRefs.form.current?.reset();
  }

  render() {
    return (
      <form className="reg-form" ref={this.formRefs.form} onSubmit={this.submit}>
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
        <TextInput
          label="Image:"
          id="image"
          name="image"
          type="file"
          accept="image/jpeg,image/png"
          inputref={this.formRefs.image}
          error={this.state.inputErrors.image}
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
        <button type="submit" className="card__btn" role="submit-btn">
          Submit
        </button>
        <span className="reg-form__message">{this.state.addedMessages}</span>
      </form>
    );
  }
}
