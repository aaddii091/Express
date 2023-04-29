const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/", (req, res) => {
  const city = req.body.cityName;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=235a5beb062429cc74a359ac7464e8df&units=metric";
  https.get(url, (res) => {
    res.on("data", (data) => {
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      console.log(temp);
      res.write("<p>The Weather" + weatherData.main.temp + " <p>");
      +res.send();
    });
  });
});

app.listen(3000, () => {
  console.log("Server is Live !!!");
});
