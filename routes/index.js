const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const {
    getAllData,
    filteredDataByEmail,
    searchDataById,
    getNewUser,
} = require("../public/export js/retrieveData");

const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: true }));

// * Route handler

// * Get all user data
router.get("/", (req, res) => {
    let dataUser = getAllData("data-user.json");
    res.send(dataUser);
});

// * Challenge Ch 3
router.get("/index", (req, res) => {
    res.render("index", {
        title: "Home",
        css: "./assets/stylesheets/index.css",
        js: "./assets/javascripts/index.js",
    });
});

// * Challenge Ch 4
router.get("/the-game", (req, res) => {
    res.render("the-game", {
        title: "Rock-Paper-Scissor",
        css: "./assets/stylesheets/the-game.css",
        js: "./assets/javascripts/the-game.js",
    });
});

// * Login Page
router
    .route("/login")
    .get((req, res) => {
        res.render("login", {
            title: "Login",
            css: "./assets/stylesheets/login.css",
            js: "./assets/javascripts/login.js",
        });
    })
    .post(jsonParser, (req, res) => {
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

// * Register
// TODO: edit the res send file data layout
router
    .route("/register")
    .get((req, res) => {
        res.render("register", {
            title: "Register",
            css: "./assets/stylesheets/login.css",
            js: "./assets/javascripts/register.js",
        });
    })
    .post((req, res) => {
        getNewUser(req.body);
        res.status(201).send(req.body);
    });

// * get user by Id
router.get("/user/:id", (req, res) => {
    let searchId = searchDataById(req.params.id);

    if (searchId != undefined) {
        res.send(searchId);
    } else {
        res.status(404).send("DATA USER NOT FOUND");
    }
});

module.exports = router;
