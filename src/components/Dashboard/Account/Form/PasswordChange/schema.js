import * as Yup from 'yup';

export default Yup.object().shape({
  resetPassword: Yup.string()
    .min(6, 'at least 6 symbols')
    .max(50, 'maximum 50 characters')
    .required('password is required!'),
  confirmResetPassword: Yup.string()
    .oneOf([Yup.ref('resetPassword'), null], 'passwords must match')
    .required('confirm password is required'),
});
