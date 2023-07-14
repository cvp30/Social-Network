const { Router } = require("express");
const { CreatePost, GetAllPost } = require("../controllers/PostController");

const PostRouter = Router();

PostRouter.post("/", CreatePost);
PostRouter.get("/", GetAllPost);

module.exports = PostRouter;