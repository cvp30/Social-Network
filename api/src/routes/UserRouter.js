const { Router } = require("express");
const { UserRegister } = require("../controllers/UserController");

const UserRouter = Router();

UserRouter.post("/", UserRegister);


module.exports = UserRouter;