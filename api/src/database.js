import mongoose from "mongoose";

const MONGODB_URL = "mongodb+srv://valercarlos30:soulstrong_@cluster0.gy093a4.mongodb.net/social-media?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("db connected")
  })
  .catch(error => {
    console.log(error)
  })