const express = require("express");
// const authRouter = require("./router/auth-router");
const router = express.Router();


// router.get("/", (req, res) => {
//   res
//         .status(200)
//         .send("Hello, Router!");
// });


router.route("/").get((req, res) => {

  res
        .status(200) 
        .send("Hello, Router!");
});

router.route("/register").get((req, res) => {
  res
        .status(200)
        .send("Registration page");
}); 
// app.get("/register", (req, res) => {
//   res.status(200).send("Registration page");
// });

module.exports = router;