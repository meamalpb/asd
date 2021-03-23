const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"***",
    database:"amal",
    multipleStatements:true
});

module.exports =mysqlConnection;
