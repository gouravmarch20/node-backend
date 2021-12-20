const express = require("express");
const router = express.Router();

const { signup, signin, signout, forgotPassword, passwordReset, getLoggedInUserDetails, changePassword, updateUserDetails,adminAllUser, admingetOneUser, adminUpdateOneUserDetails, adminDeleteOneUser } = require("../controllers/userController")
const { isLoggedIn, customRole } = require("../middlewares/user");



router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/signout").get(signout);
router.route("/forgotPassword").post(forgotPassword);
router.route("/password/reset/:token").post(passwordReset);
router.route("/userdashboard").get(isLoggedIn, getLoggedInUserDetails);
router.route("/password/update").post(isLoggedIn, changePassword);
router.route("/userdashboard/update").post(isLoggedIn, updateUserDetails);
//admin only routes
router.route("/admin/users").get(isLoggedIn, customRole("admin"), adminAllUser);
router
    .route("/admin/user/:id")
    .get(isLoggedIn, customRole("admin"), admingetOneUser)
    .put(isLoggedIn, customRole("admin"), adminUpdateOneUserDetails)
    .delete(isLoggedIn, customRole("admin"), adminDeleteOneUser);

module.exports = router;
