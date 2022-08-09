const express = require('express');

const app = express();

app.use(express.static());
app.set('view engine', 'ejs');

// app.use(express.json()); // exept jaon data from user

// const templatesPath = path.join(__dirname, "./views/");
// app.set("views", templatesPath);

// let isTrue = false;
 app.get('/', (req, res) => {
     res.render("index")
 })

const a = 200;
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})