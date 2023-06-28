const sequelize = require("../database");

const { user } = sequelize.models;

const UserRegister = async (req, res) => {
  const { email } = req.body;

  try {
    const [, created] = await user.findOrCreate({
      where: {
        id: email
      }
    })

    return res.json({ message: created })

  } catch (error) {
    return res.json({ message: error })
  }
}

module.exports = {
  UserRegister,
}