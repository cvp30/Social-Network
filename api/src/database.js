const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path")
require("dotenv").config();
const useBcrypt = require("sequelize-bcrypt");


const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT
} = process.env;

const sequelize = new Sequelize(
  `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    native: false,
    logging: false,
    define: {
      freezeTableName: true,
      timestamps: false,
    }
  }
)

const modelDefiners = [];

const basename = path.basename(__filename);


// READ ALL MODELS IN MODELS FOLDER AND CONECT TO SEQUELIZE
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });
modelDefiners.forEach(model => model(sequelize));

const { user, friendship, post, comment } = sequelize.models;

// ENCRYPT PASSWORD USER
// useBcrypt(user, {
//   field: 'password',
//   rounds: 12,
//   compare: 'authenticate',
// })

// RELATIONS BETWEEN MODELS 

// FRIENDSHIP
// user.belongsToMany(user, { as: 'friend', through: friendship })

// // USER
user.hasMany(post);
post.belongsTo(user);

// user.hasMany(comment);
// comment.belongsTo(user);


// // POST
// post.hasMany(comment);
// comment.belongsTo(post);

// // COMMENT
// comment.hasMany(comment, { as: 'children', foreignKey: 'parentId' });
// comment.belongsTo(comment, { as: 'parent', foreignKey: 'parentId' });

module.exports = sequelize;