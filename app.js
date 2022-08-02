const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // ! using ejs view engine
app.use(express.static("public")); // ! serving static file

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/the-game", (req, res) => {
    res.render("the-game");
});

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});
