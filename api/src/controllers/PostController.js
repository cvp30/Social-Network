const sequelize = require("../database");
const { post } = sequelize.models;

const CreatePost = async (req, res) => {
  const { image_url, description, userId } = req.body;

  try {
    const newPost = await post.create({
      image_url: image_url,
      description: description,
      userId: userId,
    })
    console.log(newPost)
    return res.json({ message: true })

  } catch (error) {
    return res.json({ message: error })
  }
}

const GetAllPost = async (req, res) => {
  // const {  }
}

module.exports = {
  CreatePost,
  GetAllPost
}