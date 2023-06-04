const sequelize = require("../database")

const { user } = sequelize.models;


const userSignUp = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    await user.create({
      email, username, password
    })

    return res.json({ response: "user created!!!" })

  } catch (error) {
    return res.json(error)
  }
}


const userSignIn = async (req, res) => {
  const { email, password } = req.body;

  const userFound = await user.findOne(
    {
      where: {
        email: email
      }
    }
  )

  return userFound === null ?
    res.json({ response: null })
    :
    res.json({ response: userFound.authenticate(password) });
}

module.exports = {
  userSignUp,
  userSignIn,
}