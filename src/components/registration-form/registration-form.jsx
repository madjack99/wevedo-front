import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './registration-form.scss';

import { registerRequest } from '../../requests/auth.requests';
import { FormErrors } from './error-form';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      password: '',
      formErrors: { phoneNumber: '', password: '' },
      phoneValid: false,
      passwordValid: false,
      // formValid: false
    };
  }

  handleSubmit = e => {
    const { phoneNumber, password, formValid } = this.state;

    e.preventDefault();
    if (formValid) {
      const userSchema = {
        phoneNumber,
        password,
      };
      registerRequest(userSchema);
    }
  };

  handleUserInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value },
      () => { this.validateField(name, value); });
  }

  validateField(fieldName, value) {
    const {
      formErrors: fieldValidationErrors,
      phoneValid: phoneV,
      passwordValid: passwordV,
    } = this.state;

    let phoneValid = phoneV;
    let passwordValid = passwordV;

    switch (fieldName) {
      case 'phoneNumber':
        phoneValid = value.match(/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?(\d{4}|\d{3}))?$/);
        fieldValidationErrors.phoneNumber = phoneValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      phoneValid,
      passwordValid,
    }, this.validateForm);
  }

  validateForm() {
    const { phoneValid, passwordValid } = this.state;
    this.setState({ formValid: (phoneValid && passwordValid) });
  }

  render() {
    const { phoneNumber, password, formErrors } = this.state;
    return (
      <form className="demoForm" onSubmit={this.handleSubmit}>
        <h2>Sign up</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={formErrors} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="tel"
            required
            className="form-control"
            name="phoneNumber"
            placeholder="phone number"
            value={phoneNumber}
            onChange={this.handleUserInput}
          />
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
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Sign up
        </button>
        <p className="text-muted">
          <Link to="/login">
            Have an account?
          </Link>
        </p>
      </form>
    );
  }
}

export default RegistrationForm;
