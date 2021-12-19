const express = require('express')
require('dotenv').config();

const app = express()

const user = require("./routes/user");


app.get('/', (req, res) => {
    res.send('Hello World!')
})


//router middleware
app.use("/api/v1", user);
// export app js
module.exports = app