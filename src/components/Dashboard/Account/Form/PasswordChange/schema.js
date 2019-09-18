import * as Yup from 'yup';

export default Yup.object().shape({
  resetPassword: Yup.string()
    .min(8, 'minimum 8 characters')
    .max(50, 'maximum 50 characters')
    .required('required!'),
  confirmResetPassword: Yup.string()
    .oneOf([Yup.ref('resetPassword'), null], 'password does not match')
    .required('required'),
});
