import * as Yup from 'yup';

export default Yup.object().shape({
  fullName: Yup.string()
    .min(6, 'at least 6 symbols')
    .max(50, 'maximum 50 characters')
    .required('name is required'),
});
