
const validateUser = (req, res, next) => {
  const { email, username, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\w).{8,}$/;
  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;

  if (!emailRegex.test(email)) return res.status(400).json({ error: "invalid email, must have the proper format." });

  if (!usernameRegex.test(username)) return res.status(400).json({ error: "letters (upper or lower case), numbers and underscores with a minimum length of 3 characters and a maximum of 15 characters." });

  if (!passwordRegex.test(password)) return res.status(400).json({ error: 'invalid password, must be a combination of letters, numbers and allowed symbols and must have at least 8 characters' });

  next();
}

module.exports = {
  validateUser,
}