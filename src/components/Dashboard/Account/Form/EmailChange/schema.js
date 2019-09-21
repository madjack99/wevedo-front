import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('invalid email')
    .required('required'),
  password: Yup.string()
    .min(6, 'minimum 8 characters')
    .max(50, 'maximum 50 characters')
    .required('required'),
});
