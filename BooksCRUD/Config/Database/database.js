const env = require("../../environments/environment");
const mysql = require("mysql");

const databaseConf = env.databaseConf;
const con = mysql.createConnection({
    host: databaseConf.host,
    user: databaseConf.user,
    password: databaseConf.password,
    database: databaseConf.database
});


module.exports = con;