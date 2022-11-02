const fs = require("fs");
const PORT = 3000;

const express = require("express");
const cors = require("cors");

const app = express();
const dataSet = fs.readFileSync("data.json");

app.use(cors());

app.get("/", (req, res) => {
  const items = JSON.parse(dataSet);
  res.send(items);
});

app.listen(PORT, () => {
  console.log(`Server is on http://localhost:${PORT}`);
});
