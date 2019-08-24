const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan("combined"));

app.use(cors());

const PORT = process.env.PORT || 5000;

let earthPoints = 8240;

app.get("/", (req, res) => {
  res.send("GreenVision API");
});

app.get("/add/:points", (req, res) => {
  const points = req.params.points;

  earthPoints = earthPoints + Number(points);

  res.sendStatus(200);
});

app.get("/points", (req, res) => {
  res.send(earthPoints.toString());
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
