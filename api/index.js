const sequelize = require("./src/database.js");
const server = require("./src/app");
require("dotenv").config();
const { PORT } = process.env;

const port = PORT || 3000;

sequelize.sync({ force: true }).then(() => {

  server.listen(port, () => {
    console.log('listening on port %s', port);
  })
})
