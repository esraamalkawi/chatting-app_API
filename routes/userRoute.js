const express = require("express");
const passport = require("passport");

const router = express.Router();

const { signup, signin, usersList } = require("../controllers/userController");

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);
router.post("/signup", signup);
router.get(
  "/fetch",
  passport.authenticate("jwt", { session: false }),
  usersList
);

module.exports = router;
