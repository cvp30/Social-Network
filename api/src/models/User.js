const { DataTypes } = require("sequelize")


const User = (sequelize) => {
  sequelize.define('user', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
    }
  })
}

module.exports = User;