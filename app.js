// TODO: edit file html using view engine ejs
// TODO: clean your code
// TODO: create sign up page / add user data api
// TODO: create PUT and DELETE method

const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const path = require("path"); //?
const {
    getAllData,
    filteredDataByEmail,
    searchDataById,
    getNewUser,
} = require("./public/export js/retrieveData");

const app = express();
const jsonParser = bodyParser.json();

const PORT = 8000;

// ! using ejs view engine
app.set("view engine", "ejs");
// ! serving static file
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    let dataUser = getAllData("data-user.json");
    res.send(dataUser);
});

app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/the-game", (req, res) => {
    res.render("the-game");
});

// ! Login Page
// ? user data type
app.get("/login", (req, res) => {
    res.render("login");
});
app.post("/login", jsonParser, (req, res) => {
    let reqUserEmail = req.body.email;
    let reqUserPass = req.body.password;

    let filteredData = filteredDataByEmail(reqUserEmail);

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
// TODO: edit the res send file data layout
app.post("/register", (req, res) => {
    getNewUser(req.body);
    res.status(201).send(req.body);
});

app.get("/user/:id", (req, res) => {
    let searchId = searchDataById(req.params.id);

    if (searchId != undefined) {
        res.send(searchId);
    } else {
        res.status(404).send("DATA USER NOT FOUND");
    }
});

app.listen(PORT, () => {
    console.log(chalk.blue(`Server is running on localhost:${PORT}`));
});
