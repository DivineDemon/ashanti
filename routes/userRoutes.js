const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const {
  getUser,
  updateUser
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getUser).patch(verifyToken, updateUser);

module.exports = router;