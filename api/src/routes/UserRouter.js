const { Router } = require("express");
const { userSignUp, userSignIn } = require("../controllers/UserController");
const { validateUser } = require("../middlewares");

const UserRouter = Router();

UserRouter.post("/signup", validateUser, userSignUp);
UserRouter.post("/signin", userSignIn);


module.exports = UserRouter;