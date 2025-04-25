const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.get("/about", (req, res) => {
  res.send("This is my About route..... ");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
