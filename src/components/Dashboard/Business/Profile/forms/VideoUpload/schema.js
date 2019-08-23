import * as Yup from 'yup';

export default Yup.object().shape({
  profileVideoURL: Yup.string().url('enter a valid URL'),
});
