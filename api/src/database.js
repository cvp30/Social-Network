import mongoose from "mongoose";
import 'dotenv/config'

const { MONGODB_URL } = process.env

mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("db connected")
  })
  .catch(error => {
    console.log(error)
  })