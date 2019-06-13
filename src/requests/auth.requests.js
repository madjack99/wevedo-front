import axios from 'axios';

const LOGIN_URL = 'http://localhost:8000/api/login';
const REGISTER_URL = 'http://localhost:8000/api/register';

function loginRequest(data) {
    axios.post(LOGIN_URL , data)
        .then(res => {
            let token = res.data;
            console.log(token)
            window.localStorage.setItem('jwtToken', token);
            this.setState({
                isPhoneIncorrect: false,
                isPasswordIncorect: false,
            })
        })
        .catch(error => {
            let CodeError = error.response.status;
            if (CodeError === 403) {
                this.setState({
                    isPasswordIncorect: true,
                    password: ''
                })
            } else if (CodeError === 404) {
                this.setState({
                    isPhoneIncorrect: true,
                    phoneNumber: ''
                })
            } else {
                console.log(error);
            }
        })
}

let registerRequest = (data) => {
    axios.post(REGISTER_URL , data)
        .then(res => {
            console.log(res);
        })
}
export { loginRequest, registerRequest }