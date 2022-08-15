const { filteredDataByEmail } = require("../public/export js/retrieveData");
module.exports = {
    index: (req, res) => {
        res.render("login", {
            title: "Login",
            css: "./assets/stylesheets/login.css",
            js: "./assets/javascripts/login.js",
        });
    },
    userLogin: (req, res) => {
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
    },
};
