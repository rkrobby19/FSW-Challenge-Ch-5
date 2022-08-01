const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static("views"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});
app.get("/the-game", (req, res) => {
    res.sendFile(__dirname + "/views/the-game.html");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
