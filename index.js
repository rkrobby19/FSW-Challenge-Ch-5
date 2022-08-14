const express = require("express");
const ejs = require("ejs");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const path = require("path");

const routes = require("./routes/index");
const requestTime = require("./middleware/request");

const app = express();

const PORT = 8000;

// * Using ejs view engine
app.set("view engine", "ejs");

// * Serving static file
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

// * Middleware
app.use(requestTime);

// * Route Handler
app.use(routes);

app.listen(PORT, () => {
    console.log(chalk.blue(`Server is running on localhost:${PORT}`));
});
