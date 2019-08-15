import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('enter valid email')
    .required('email is required'),
  password: Yup.string()
    .min(6, 'at least 6 symbols')
    .max(50, 'maximum 50 characters')
    .required('password is required!'),
});
