const chalk = require("chalk");

const requestTime = function (req, res, next) {
    const time = new Date();
    console.log(chalk.bgYellow("===  Information  ==="));
    console.log(
        `You are accessing the ${chalk.bold.greenBright.italic(
            req.method
        )} - ${chalk.bold.cyan.underline(req.url)} , at ${chalk.bgCyan(
            time.toLocaleString()
        )} `
    );
    next();
};

module.exports = requestTime;
