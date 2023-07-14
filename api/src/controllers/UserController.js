const sequelize = require("../database");

const { user } = sequelize.models;

const UserRegister = async (req, res) => {
  const { email, username, photoURL } = req.body;
  console.log(email, username, photoURL)
  try {
    const [currUser,] = await user.findOrCreate({
      where: {
        email: email
      },
      defaults: {
        username: username,
        photoURL: photoURL,
      }
    })

    return res.json(currUser)

  } catch (error) {
    return res.json({ message: error })
  }
}

const GetUser = async (req, res) => {
  const { email } = req.body;

  try {
    const currUser = await user.findByPk(email);

    return currUser ?
      res.json({ message: currUser })
      :
      res.json({ message: false })
  } catch (error) {
    res.json({ error })
  }
}

module.exports = {
  UserRegister,
  GetUser,
}