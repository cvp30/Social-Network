import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  username: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  photoURL: {
    type: String,
  },
  coverPhoto: {
    type: String,
  },
  website: {
    type: String,
  },
  bio: {
    type: String,
    maxlength: 160,
  },
  location: {
    type: String,
  }
})

export default mongoose.model("User", userSchema)