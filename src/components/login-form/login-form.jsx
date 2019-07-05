import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './login-form.scss';

import { loginRequest } from '../../requests/auth.requests';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      password: '',
      isPasswordIncorect: false,
      isPhoneIncorrect: false,
    };
    this.loginRequest = loginRequest.bind(this);
  }

    handleUserInput = e => {
      const { name } = e.target;
      const { value } = e.target;
      this.setState({ [name]: value },
        () => { this.validateField(name); });
    }

    validateField = fieldName => {
      switch (fieldName) {
        case 'phoneNumber':
          break;
        case 'password':
          break;
        default:
          break;
      }
    }

    handleSubmit = e => {
      const { phoneNumber, password } = this.state;

      e.preventDefault();
      const userSchema = {
        phoneNumber,
        password,
      };
      this.loginRequest(userSchema);
    }

    render() {
      const {
        phoneNumber, password, isPasswordIncorect, isPhoneIncorrect,
      } = this.state;

      return (
        <form
          className="demoForm"
          onSubmit={this.handleSubmit}
        >
          <h2>Sign in</h2>
          <div className="form-group ">
            <label htmlFor="phoneNumber">
              Phone number
            </label>
            <input
              type="tel"
              required
              className="form-control"
              name="phoneNumber"
              placeholder="phone number"
              value={phoneNumber}
              onChange={this.handleUserInput}
            />
            <p>
              {' '}
              {isPhoneIncorrect
                ? 'This phone number is not registered!'
                : ''}
            </p>
            <p className="text-muted">
              Right format is +447222555555   | +44 7222 555 555 | (0722) 5555555
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleUserInput}
            />
            <p>
              {' '}
              {isPasswordIncorect
                ? 'Invalid password. Please try again'
                : ''}
            </p>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
Sign in
          </button>
          <p>
            <Link to="/register">
              Don&apos;t have an account?
            </Link>
          </p>
        </form>
      );
    }
}

export default LoginForm;
