require('dotenv').config();

const app = require("./app")
const connectWithDb = require("./config/db");
const cloudinary = require("cloudinary");

// connect with databases
connectWithDb();

port = process.env.PORT || 4000

//cloudinary config goes here
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  // console.log(`Example app listening at http://localhost:${port}`)
})