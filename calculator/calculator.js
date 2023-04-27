const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/calc", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  console.log(req.body);
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num2 / num1 ** 2;
  res.send(
    `thanks for using our calculator the sum of the given numbers are ${result}`
  );
});
app.listen(port, () => {
  console.log("listening");
});
