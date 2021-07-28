const express = require("express");
const passport = require("passport");
const upload = require("../middleware/multer"); //Remove unused import
const router = express.Router();

const { signup, signin } = require("../controllers/userController");

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);
router.post("/signup", signup);

module.exports = router;
