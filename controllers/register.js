const { getNewUser } = require("../public/export js/retrieveData");

module.exports = {
    index: (req, res) => {
        res.render("register", {
            title: "Register",
            css: "./assets/stylesheets/login.css",
            js: "./assets/javascripts/register.js",
        });
    },
    newUser: (req, res) => {
        getNewUser(req.body);
        res.status(201).render("new-user", {
            title: "Register",
            css: "./assets/stylesheets/login.css",
            js: "./assets/javascripts/register.js",
            id: req.body.id,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
    },
};
