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
    type: String
  },
  website: {
    type: String
  },
  bio: {
    type: String
  },
  location: {
    type: String
  },
  state: {
    type: Boolean,
    default: true,
  }
})

export default mongoose.model("User", userSchema)