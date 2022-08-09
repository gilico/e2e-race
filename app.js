const express = require("express");
 
let app = express();
 
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Service endpoint = http://localhost:${port}`);
});