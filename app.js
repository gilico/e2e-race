const express = require("express");
const raceRoute = require('./routes/raceRoute');
const saveDataRoute = require('./routes/saveDataRoute');
let app = express();


app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
  });
});

app.use('/api/race',raceRoute);
app.use('/api/save-data',saveDataRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Service endpoint = http://localhost:${port}`);
});