module.exports = {
    index: (req, res) => {
        res.render("the-game", {
            title: "Rock-Paper-Scissor",
            css: "./assets/stylesheets/the-game.css",
            js: "./assets/javascripts/the-game.js",
        });
    },
};
