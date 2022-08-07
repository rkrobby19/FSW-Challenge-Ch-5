const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const chalk = require("chalk");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();

const PORT = 8000;

app.set("view engine", "ejs"); // ! using ejs view engine
app.use(express.static("public")); // ! serving static file
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
    let dataUser = JSON.parse(fs.readFileSync("./data-user.json"));
    res.send(dataUser);
});
app.get("/home", (req, res) => {
    res.render("index");
});
app.get("/the-game", (req, res) => {
    res.render("the-game");
});

// ! Login Page
//     TODO: add logic to read email and pass from user data
app.get("/login", (req, res) => {
    res.render("login");
});
// * using POST method action form html
// app.post("/login", (req, res) => {

//     const ADMIN = "admin@gmail.com";
//     const PASS = "asdf";
//     let reqUserEmail = req.body.email;
//     let reqUserPass = req.body.password;
//     if (ADMIN === reqUserEmail && PASS === reqUserPass) {
//         res.render("the-game");
//     } else {
//         res.status(401).send("wrong email and pass");
//     }
// });

// ? cara dari facil
app.post("/login", jsonParser, (req, res) => {
    const ADMIN = "admin@gmail.com";
    const PASS = "admin1234";
    console.log(req.body);
    let reqUserEmail = req.body.email;
    console.log(reqUserEmail);
    let reqUserPass = req.body.password;
    console.log(reqUserPass);
    if (ADMIN === reqUserEmail && PASS === reqUserPass) {
        res.render("the-game");
    } else {
        res.status(401).send("wrong email and pass");
    }
});

app.listen(PORT, () => {
    console.log(chalk.blue(`Server is running on localhost:${PORT}`));
});
