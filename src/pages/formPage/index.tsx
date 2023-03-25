import { Component } from 'react';
import RegistrationForm from '../../components/registrationForm';
import './style.scss';

export default class FormPage extends Component<unknown, unknown> {
  constructor(props: unknown) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Form page</h1>
        <RegistrationForm></RegistrationForm>
      </div>
    );
  }
}
