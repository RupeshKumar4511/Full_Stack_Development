const {Pool} = require('pg')

const postgreSqlConnection = new Pool({
    host:"localhost",
    user:"postgres",
    database:"mydb",
    password:"root",
    port:5432

})

module.exports = postgreSqlConnection;