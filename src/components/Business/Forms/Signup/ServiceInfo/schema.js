import * as Yup from 'yup';

export default Yup.object().shape({
  bio: Yup.string()
    .max(500, 'maximum 500 characters')
    .required('description is required'),
  minPrice: Yup.number()
    .min(0, "price can't be less than 0")
    .required('minimum price is required'),
  maxPrice: Yup.number()
    .moreThan(
      Yup.ref('minPrice'),
      'maximum price must be greater than minimum price',
    )
    .required('maximum price is required'),
  facilities: Yup.string().required('facilities is required'),
});
