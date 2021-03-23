const mysql = require("mysql");
var sql = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"******",
    database:"amal",
    multipleStatements:true
});

module.exports =sql;
