const express = require("express");
const app = express();
const PORT = 8000;
const ejs = require("ejs");
const chalk = require("chalk");

app.set("view engine", "ejs"); // ! using ejs view engine
app.use(express.static("public")); // ! serving static file

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/the-game", (req, res) => {
    res.render("the-game");
});
app.get("/login", (req, res) => {
    res.render("login-page");
});

app.listen(PORT, () => {
    console.log(chalk.blue(`Server is running on localhost:${PORT}`));
});
