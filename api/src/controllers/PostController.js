const sequelize = require("../database");
const { post } = sequelize.models;

const CreatePost = async (req, res) => {
  const { image_url, description, likes, userId } = req.body;

  try {
    const newPost = await post.create({
      image_url: image_url,
      description: description,
      likes: likes,
      userId: userId,
    })
    console.log(newPost)
    return res.json({ message: true })

  } catch (error) {
    return res.json({ message: error })
  }
}

module.exports = {
  CreatePost,
}