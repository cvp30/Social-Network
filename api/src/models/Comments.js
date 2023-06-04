const { DataTypes } = require("sequelize");
// const sequelize = require("../database");

const Comments = (sequelize) => {
  sequelize.define('comment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  })
}

module.exports = Comments;