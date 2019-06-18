import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginRequest } from '../../../requests/auth.requests';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            password: '',
            isPasswordIncorect: false,
            isPhoneIncorrect: false
        }
        this.loginRequest = loginRequest.bind(this);
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name) });
    }

    validateField = (fieldName) => {
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
        e.preventDefault();
        const userSchema = {
            phoneNumber: this.state.phoneNumber,
            password: this.state.password
        }
        this.loginRequest(userSchema);
    }

    render() {
        return (
            <form
                className="demoForm"
                onSubmit={this.handleSubmit}>
                <h2>Sign in</h2>
                <div className={`form-group `}>
                    <label
                        htmlFor="phoneNumber">
                        Phone number
                        </label>
                    <input
                        type="tel"
                        required
                        className="form-control"
                        name="phoneNumber"
                        placeholder="phone number"
                        value={this.state.phoneNumber}
                        onChange={this.handleUserInput}
                    />
                    <p> {this.state.isPhoneIncorrect ?
                        'This phone number is not registered!' :
                        ''}
                    </p>
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
                        onChange={this.handleUserInput}
                    />
                    <p> {this.state.isPasswordIncorect ?
                        'Invalid password. Please try again' :
                        ''}
                    </p>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary">Sign in</button>
                <p>
                    <Link to='/register'>
                        Don't have an account?
                    </Link>
                </p>
            </form>
        );
    }
}

export default LoginForm;