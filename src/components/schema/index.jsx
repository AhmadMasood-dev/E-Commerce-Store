import * as Yup from 'yup';

export const registerSchema = Yup.object({
  name: Yup.string().min(2, 'Too short').max(25).required('Please enter your name'),
  email: Yup.string().email('invalid email').required('Please enter your email'),
  password: Yup.string().min(8).required('Please enter your password 0-8 characters'),
});



