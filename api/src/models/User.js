import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  photoURL: {
    type: String
  },
  state: {
    type: Boolean,
    default: true,
  }
})

export default mongoose.model("User", userSchema)