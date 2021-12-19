const express = require("express");
const router = express.Router();

const { signup, signin, signout } = require("../controllers/userController")
router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/signout").get(signout);

module.exports = router;
