import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('invalid email or mobile number')
    .required('required'),
  password: Yup.string()
    .min(6, 'minimum 6 characters')
    .max(50, 'maximum 50 characters')
    .required('required'),
});
