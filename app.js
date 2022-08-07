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

    // * read user-data json
    let data = JSON.parse(fs.readFileSync("./data-user.json"));
    console.log(data);
    let filteredData = [];

    // * loop for catch data
    for (let i = 0; i < data.length; i++) {
        if (data[i].email == reqUserEmail) {
            filteredData.push(data[i]);
        }
    }

    if (filteredData.length != 0) {
        if (
            filteredData[0].email == reqUserEmail &&
            filteredData[0].password == reqUserPass
        ) {
            res.send("You are authorized");
        } else {
            res.status(401).send("wrong email or pass");
        }
        console.log(filteredData);
        res.send(filteredData);
    } else {
        res.status(404).send("Data not found");
    }
});

app.listen(PORT, () => {
    console.log(chalk.blue(`Server is running on localhost:${PORT}`));
});
