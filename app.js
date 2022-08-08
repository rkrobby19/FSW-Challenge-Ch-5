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

app.get("/index", (req, res) => {
    res.render("index");
});
app.get("/the-game", (req, res) => {
    res.render("the-game");
});
app.get("/", (req, res) => {
    let dataUser = JSON.parse(fs.readFileSync("./data-user.json"));
    res.send(dataUser);
});

// ! Login Page
// TODO: create sign up page / add user data api
// ! user data type
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
    let reqUserEmail = req.body.email;
    let reqUserPass = req.body.password;

    // * read user-data json
    let data = JSON.parse(fs.readFileSync("./data-user.json"));
    let filteredData = [];

    // * loop for catch user data
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
    } else {
        res.status(404).send("Data not found");
    }
});

// ! Register
app.get("/register", (req, res) => {
    res.render("register");
});
app.post("/register", jsonParser, (req, res) => {
    console.log(req.body);
    let data = JSON.parse(fs.readFileSync("./data-user.json", "utf-8"));
    let newId = data[data.length - 1].id + 1;
    req.body.id = newId;
    data.push(req.body);
    fs.writeFileSync("./data-user.json", JSON.stringify(data));
    console.log(data);
    // TODO: edit the res send file data layout
    res.status(201).send(data);
});

app.listen(PORT, () => {
    console.log(chalk.blue(`Server is running on localhost:${PORT}`));
});
