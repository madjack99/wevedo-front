import * as Yup from 'yup';

const phoneRegex = /^\+?((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default Yup.object().shape({
  email: Yup.string()
    .email('invalid email')
    .required('required'),
  phoneNumber: Yup.string()
    .matches(phoneRegex, 'invalid mobile number')
    .required('required'),
  password: Yup.string()
    .min(8, 'minimum 8 characters')
    .max(50, 'maximum 50 characters')
    .required('required'),
});
