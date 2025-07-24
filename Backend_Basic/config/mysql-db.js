const mysql = require('mysql2/promise');
const mysqlConnection = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"kumarrn4511@",
    database:"ramanujan_college",
    
})

module.exports= mysqlConnection