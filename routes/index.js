const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const { getAllData } = require("../public/export js/retrieveData");

// * Routes controllers
const user = require("../controllers/user");
const register = require("../controllers/register");
const login = require("../controllers/login");
const theGame = require("../controllers/the-game");
const main = require("../controllers/index");

const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: true }));

// * Route handler

// * Get all user data
router.get("/", (req, res) => {
    let dataUser = getAllData("data-user.json");
    res.send(dataUser);
});

// * Challenge Ch 3
router.get("/index", main.index);

// * Challenge Ch 4
router.get("/the-game", theGame.index);

// * Login Page
router.route("/login").get(login.index).post(jsonParser, login.userLogin);

// * Register Page
// TODO: edit the res send file data layout
router.route("/register").get(register.index).post(register.newUser);

// * Search user by Name / Username
router.get("/user/search", user.getUserByName);
// * Get user by Id
router.get("/user/:id", user.getUserById);

module.exports = router;
