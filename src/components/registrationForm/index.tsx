import React, { FC, useState } from 'react';
import { Component } from 'react';
import Validator from '../../helper/Validator';
import CheckInput from '../checkInput';
import RadioSet from '../radioSet';
import RegistrationSelect from '../registrationSelect';
import TextInput from '../textInput';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import './style.scss';
import {
  IFormInputs,
  IRegistrationProps,
  IRegistrationState,
  IRegistrationStateError,
} from './types';

const RegistrationForm: FC<IRegistrationProps> = ({ addUserCard }) => {
  const [addedMessages, setAddedMessages] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data, e) => {
    e?.preventDefault();

    if (addUserCard) {
      addUserCard({
        id: Date.now().toString(),
        email: data.email || '',
        userName: data.userName || '',
        birthday: data.birthday || '',
        agree: false || false,
        country: '' || '',
        gender: 'this.formRefs.gender.find((opt) => opt.current?.checked)?.current?.value' || '',
        image: data.image[0] ? URL.createObjectURL(data.image[0]) : '',
      });
      clearInputs();
      showMessage();
    }
  };

  const showMessage = () => {
    setAddedMessages('User has been added');
    setTimeout(() => {
      setAddedMessages('');
    }, 3000);
  };

  const clearInputs = () => {
    // this.formRefs.form.current?.reset();
  };

  return (
    <form className="reg-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextInput
        label="Email:"
        id="email"
        type="email"
        useRegister={register('email', {
          required: {
            value: true,
            message: 'Please enter your email',
          },
          pattern: {
            value:
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            message: 'Email is not valid',
          },
        })}
        error={errors.email}
      ></TextInput>
      <TextInput
        label="Username:"
        id="userName"
        type="text"
        useRegister={register('userName', {
          required: {
            value: true,
            message: 'Please enter your Username',
          },
          minLength: {
            value: 3,
            message: 'At least 3 chars',
          },
          pattern: {
            value: /^[A-ZА-Я]/,
            message: 'Name should start from uppercase',
          },
        })}
        error={errors.userName}
      ></TextInput>
      <TextInput
        label="Birthday:"
        id="birthday"
        type="date"
        useRegister={register('birthday', {
          required: {
            value: true,
            message: 'Please enter your Birthday',
          },
          validate: (dateValue) =>
            Validator.validateBirthdayForHookForm(10, dateValue) ||
            'You should be older then 10 years',
        })}
        error={errors.birthday}
      ></TextInput>
      <TextInput
        label="Image:"
        id="image"
        type="file"
        accept="image/jpeg,image/png"
        useRegister={register('image', {
          required: {
            value: true,
            message: 'You should add image',
          },
        })}
        error={errors.image}
      ></TextInput>
      <button type="submit" className="card__btn" role="submit-btn">
        Submit
      </button>
      <span className="reg-form__message">{addedMessages}</span>
    </form>
  );
};

export default RegistrationForm;
