const express = require('express')
require('dotenv').config();
const morgan = require("morgan");

const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const app = express()
//for swagger documentation
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cookies and file upload middleware
app.use(cookieParser());
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);
//morgan middleware
app.use(morgan("tiny"));
const user = require("./routes/user");


app.get('/', (req, res) => {
    res.send('Hello World!')
})


//router middleware
app.use("/api/v1", user);
// export app js
module.exports = app