const { Router } = require("express");
const { CreatePost } = require("../controllers/PostController");

const PostRouter = Router();

PostRouter.post("/", CreatePost);


module.exports = PostRouter;