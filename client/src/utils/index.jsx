

export const validateSignIn = ({ email, password }) => {
  const errors = [];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\w).{8,}$/;

  if (!emailRegex.test(email)) errors.push("email must have the proper format.");

  if (!passwordRegex.test(password)) {
    errors.push('password must contain at least one alphanumeric character.');
  }
  if ((password.length < 8 || password.length > 100)) {
    errors.push("must be at least 8 characters.")
  }

  return errors;
}

export const validateSignUp = ({ email, username, password }) => {
  const errors = [];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
  const passwordRegex = /^(?=.*\w).{8,}$/;

  if (!emailRegex.test(email)) errors.push("email must have the proper format.");

  if (!usernameRegex.test(username)) errors.push("username only letters, numbers and underscores with a minimum length of 3 characters and a maximum of 15 characters.")

  if (!passwordRegex.test(password)) {
    errors.push('password must contain at least one alphanumeric character.');
  }
  if ((password.length < 8 || password.length > 100)) {
    errors.push("password must be at least 8 characters.")
  }



  return errors;
}