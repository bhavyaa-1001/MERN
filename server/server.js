const express = require('express');
const app = express();
const router = require('./router/auth-router');

app.use("/api/auth", router);

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});
app.get("/register", (req, res) => {
  res.status(200).send("Registration page");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});