import React, { FC, useState } from 'react';
import Validator from '../../helper/Validator';
import CheckInput from '../checkInput';
import RadioSet from '../radioSet';
import RegistrationSelect from '../registrationSelect';
import TextInput from '../textInput';
import { useForm, SubmitHandler } from 'react-hook-form';
import './style.scss';
import { IFormInputs, IRegistrationProps } from './types';

const RegistrationForm: FC<IRegistrationProps> = ({ addUserCard }) => {
  const [addedMessages, setAddedMessages] = useState('');
  const {
    register,
    handleSubmit,
    reset,
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
        agree: data.agree || false,
        country: data.country || '',
        gender: data.gender || '',
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
    reset();
  };

  return (
    <form className="reg-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextInput
        label="Email:"
        id="email"
        type="email"
        aria-label="email"
        formRegister={register('email', {
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
        aria-label="userName"
        formRegister={register('userName', {
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
        aria-label="birthday"
        formRegister={register('birthday', {
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
      <RegistrationSelect
        label="Country:"
        id="country"
        aria-label="country"
        values={[
          { value: 'Belarus', content: 'Belarus' },
          { value: 'Canada', content: 'Canada' },
          { value: 'Ukraine', content: 'Ukraine' },
          { value: 'USA', content: 'USA' },
          { value: 'Russia', content: 'Russia' },
        ]}
        formRegister={register('country', {
          validate: (country) => !country || country !== 'default' || 'Please, select country',
        })}
        error={errors.country}
      ></RegistrationSelect>
      <TextInput
        label="Image:"
        id="image"
        type="file"
        aria-label="image"
        accept="image/jpeg,image/png"
        formRegister={register('image', {
          required: {
            value: true,
            message: 'You should add image',
          },
        })}
        error={errors.image}
      ></TextInput>
      <RadioSet
        label="Gender:"
        id="gender"
        values={[
          { value: 'male', content: 'Male' },
          { value: 'female', content: 'Female' },
        ]}
        formRegister={register('gender', {
          required: {
            value: true,
            message: 'Please, select gender',
          },
        })}
        error={errors.gender}
      ></RadioSet>
      <CheckInput
        label="I give my agree to the processing of personal data"
        id="agree"
        type="checkbox"
        aria-label="agree"
        formRegister={register('agree', {
          required: {
            value: true,
            message: 'You should give agree to the processing of personal data',
          },
        })}
        error={errors.agree}
      ></CheckInput>
      <button type="submit" className="card__btn" role="submit-btn">
        Submit
      </button>
      <span className="reg-form__message">{addedMessages}</span>
    </form>
  );
};

export default RegistrationForm;
