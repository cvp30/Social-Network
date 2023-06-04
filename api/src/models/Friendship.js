const { DataTypes } = require("sequelize")

const Friendship = (sequelize) => {
  sequelize.define("friendship", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    }
  })
}

module.exports = Friendship;
