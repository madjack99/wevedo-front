import * as Yup from 'yup';

export default Yup.object().shape({
  resetPassword: Yup.string()
    .min(6, 'minimum 6 characters')
    .max(50, 'maximum 50 characters')
    .required('password is required!'),
  confirmResetPassword: Yup.string()
    .oneOf([Yup.ref('resetPassword'), null], 'passwords must match')
    .required('confirm password is required'),
});
