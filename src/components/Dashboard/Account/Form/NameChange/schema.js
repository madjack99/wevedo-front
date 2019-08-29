import * as Yup from 'yup';

export default Yup.object().shape({
  fullName: Yup.string()
    .min(6, 'minimum 6 characters')
    .max(50, 'maximum 50 characters')
    .required('Enter a valid name'),
});
