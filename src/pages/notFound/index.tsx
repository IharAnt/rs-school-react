import { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class NotFound extends Component {
  render() {
    return (
      <>
        <h1>404</h1>
        <Link to="/">Go main page</Link>
      </>
    );
  }
}
