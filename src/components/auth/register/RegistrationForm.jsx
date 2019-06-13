import React, { Component } from 'react';
import { FormErrors } from './formErrors';
import { Link } from 'react-router-dom';
import { registerRequest } from '../../../requests/auth.requests';
import './singUp.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      password: '',
      formErrors: { phoneNumber: '', password: '' },
      phoneValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.formValid) {
      const userSchema = {
        phoneNumber: this.state.phoneNumber,
        password: this.state.password
      }
      registerRequest(userSchema);
    }
  };

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let phoneValid = this.state.phoneValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'phoneNumber':
        phoneValid = value.match(/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/);
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
      phoneValid: phoneValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.phoneValid && this.state.passwordValid });
  }

  render() {
    return (
      <form className="demoForm" onSubmit={this.handleSubmit}>
        <h2>Sign up</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group`}>
          <label 
              htmlFor="phoneNumber">Phone number
          </label>
          <input
            type="tel"
            required 
            className="form-control"
            name="phoneNumber"
            placeholder="phone number"
            value={this.state.phoneNumber}
            onChange={this.handleUserInput} />
          <p className='text-muted'>
            Right format is +447222555555   | +44 7222 555 555 | (0722) 5555555
          </p>
        </div>
        <div className={`form-group`}>
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput} />
        </div>
        <button 
          type="submit"
          className="btn btn-primary" >
            Sign up
        </button>
        <p className='text-muted'>
          <Link to='/login'>
            Have an account?
            </Link>
        </p>
      </form>
    )
  }
}

export default RegistrationForm;