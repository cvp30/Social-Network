const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const cors = require("cors")

const server = express();


server.use(cors())
server.use(morgan("dev"));
server.use(express.json());
// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5173/'); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });

server.use("/api", router)

module.exports = server;