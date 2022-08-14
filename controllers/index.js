module.exports = {
    index: (req, res) => {
        res.render("index", {
            title: "Home",
            css: "./assets/stylesheets/index.css",
            js: "./assets/javascripts/index.js",
        });
    },
};
