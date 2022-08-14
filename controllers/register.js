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
        res.status(201).send(req.body);
    },
};
