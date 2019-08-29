import * as Yup from 'yup';

export default Yup.object().shape({
  bio: Yup.string()
    .max(500, 'maximum 500 characters')
    .required('required'),
  minPrice: Yup.number()
    .min(0, "price can't be less than 0")
    .required('required'),
  maxPrice: Yup.number()
    .moreThan(
      Yup.ref('minPrice'),
      'maximum price should be greater than minimum price',
    )
    .required('required'),
  facilities: Yup.string().required('required'),
});
