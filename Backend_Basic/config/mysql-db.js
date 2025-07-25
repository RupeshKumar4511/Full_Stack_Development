const mysql = require('mysql2/promise');
require('dotenv').config();
const mysqlConnection = mysql.createPool({
    host:process.env.HOST_NAME,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    
})


// createPool method is mostly used in our production level app because it reuses a pool of connections instead of opening/closing new ones repeatedly.

module.exports= mysqlConnection;