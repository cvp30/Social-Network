const { DataTypes } = require("sequelize")


const User = (sequelize) => {
  sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photoURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  })
}

module.exports = User;