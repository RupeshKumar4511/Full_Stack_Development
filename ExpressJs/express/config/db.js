const mongoose = require('mongoose');

const connection =  mongoose.connect('mongodb://localhost:27017/test').
then(()=>console.log("Database Connected Successfully"))
.catch((error)=>console.error(error))


module.exports = connection;
