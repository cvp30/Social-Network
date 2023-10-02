import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: function () { return !this.image }
  },
  image: {
    type: String,
    required: function () { return !this.content }
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  shares: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  privacy: {
    type: String,
    enum: ["PUBLIC", "FOLLOWERS"],
    required: true
  }
})

export default mongoose.model("Post", postSchema)