import * as yup from 'yup';

export const itemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
