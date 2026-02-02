const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
