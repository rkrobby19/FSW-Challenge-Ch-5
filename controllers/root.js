const { getAllData } = require("../public/export js/retrieveData");

module.exports = {
    index: (req, res) => {
        let dataUser = getAllData("data-user.json");
        let data = [];
        for (let i = 0; i < dataUser.length; i++) {
            dataUser[i].password = "******";
            data.push(dataUser[i]);
        }
        res.send(data);
    },
};
