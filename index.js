const express = require("express");
const ejs = require("ejs");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const path = require("path");

const routes = require("./routes/index");

const app = express();
// const jsonParser = bodyParser.json();

const PORT = 8000;

// * Using ejs view engine
app.set("view engine", "ejs");

// * Serving static file
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// * Route Handler
app.use(routes);

app.listen(PORT, () => {
    console.log(chalk.blue(`Server is running on localhost:${PORT}`));
});
