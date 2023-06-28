const { Router } = require("express");
const UserRouter = require("./UserRouter");
const PostRouter = require("./PostRouter")
const router = Router();

router.use("/user", UserRouter);
router.use("/post", PostRouter);
module.exports = router;