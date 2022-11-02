const fs = require("fs");
const PORT = 3000;

const express = require("express");
const cors = require("cors");

const app = express();
const dataSet = fs.readFileSync("data.json");
const items = JSON.parse(dataSet);

app.use(cors());

app.get("/", (req, res) => {
  res.send(items);
});

app.listen(PORT, () => {
  console.log(`Server is on http://localhost:${PORT}`);
  console.log({ items });
});
