const express = require("express");
// const authRouter = require("./router/auth-router");
const router = express.Router();
const home = require("../controllers/auth-controller");

// router.get("/", (req, res) => {
//   res
//         .status(200)
//         .send("Hello, Router!");
// });


// router.route("/").get((req, res) => {

//   res
//         .status(200) 
//         .send("Hello, Router!");
// });

router.route("/").get(home);

router.route("/register").get((req, res) => {
  res
        .status(200)
        .send("Registration page");
}); 
// app.get("/register", (req, res) => {
//   res.status(200).send("Registration page");
// });

module.exports = router;