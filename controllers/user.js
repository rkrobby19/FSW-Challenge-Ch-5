const {
    getDataById,
    searchDataByName,
} = require("../public/export js/retrieveData");

module.exports = {
    getUserById: (req, res) => {
        let searchId = getDataById(req.params.id);

        if (searchId != undefined) {
            res.send(searchId);
        } else {
            res.status(404).send("DATA USER NOT FOUND");
        }
    },
    getUserByName: (req, res) => {
        let name = req.query.name.toLowerCase();
        let filteredData = searchDataByName(name);

        if (filteredData.length != 0) {
            res.send(filteredData);
        } else {
            res.status(404).send("DATA NOT FOUND");
        }
    },
};
