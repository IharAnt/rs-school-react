import { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default class NotFound extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>404</h1>
        <Link to="/main">Go main page</Link>
      </div>
    );
  }
}
