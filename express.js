const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  console.log(req);
  res.send("hello");
});
app.get("/about", (req, res) => {
  res.send("i am aditya saxena");
});

app.listen(port, () => {
  console.log("hi server is started");
});
