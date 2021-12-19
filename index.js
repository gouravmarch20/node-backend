require('dotenv').config();
const app = require("./app")
port = 4000
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})