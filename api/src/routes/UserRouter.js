const { Router } = require("express");
const { UserRegister, GetUser } = require("../controllers/UserController");

const UserRouter = Router();

UserRouter.post("/", UserRegister);
UserRouter.get("/", GetUser);

module.exports = UserRouter;