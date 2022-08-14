const fs = require("fs");

const getAllData = (source) => {
    return JSON.parse(fs.readFileSync(source, "utf-8"));
};

const filteredDataByEmail = (email) => {
    let data = getAllData("data-user.json");
    let filteredData = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].email == email) {
            filteredData.push(data[i]);
        }
    }

    return filteredData;
};

const getNewUser = (params) => {
    let data = getAllData("data-user.json");
    let newId = data[data.length - 1].id + 1;
    params.id = newId;
    data.push(params);
    fs.writeFileSync("./data-user.json", JSON.stringify(data));
};

const searchDataByName = (username) => {
    let data = getAllData("data-user.json");
    let filteredData = [];

    for (let i = 0; i < data.length; i++) {
        if (
            data[i].name.toLowerCase().includes(username) ||
            data[i].username.toLowerCase().includes(username)
        ) {
            filteredData.push(data[i]);
        }
    }

    return filteredData;
};

const getDataById = (params) => {
    let searchData;
    let data = getAllData("data-user.json");

    for (let i = 0; i < data.length; i++) {
        if (data[i].id == params) {
            searchData = data[i];
        }
    }

    return searchData;
};

module.exports = {
    getAllData,
    filteredDataByEmail,
    getNewUser,
    getDataById,
    searchDataByName,
};
