import * as Yup from "yup"

export const SignInUserSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email is required!")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Invalid email format!"
    ),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters!")
    .required("Password is required!")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+{}\[:\];<>,.?~\-]+$/,
      "Invalid password format!"
    ),
});

export const SignUpUserSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required!")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Invalid email format"
    ),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required!")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+{}\[:\];<>,.?~\-]+$/,
      "Invalid password format!"
    ),

  username: Yup.string().required('Username is required!'),
});