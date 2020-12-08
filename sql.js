const mysql = require("mysql");
var sql = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Anju7***",
    database:"amal",
    multipleStatements:true
});

module.exports =sql;