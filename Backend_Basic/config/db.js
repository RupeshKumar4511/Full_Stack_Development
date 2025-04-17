const mongoose = require('mongoose');


//mongoose.connect() function is used to connect to a MongoDB database
const connection = mongoose.connect('localhost:2707//mongodb/myDatabase').then(()=>{
    console.log('Database Connected');
}).catch((error)=>{
    console.error('Database Connection Failed',error);
})

//It returns a Promise that resolves when the connection is successfully established and rejects if there is an error.
// console.log(connection) // It prints the promise object

// If the connection is successful, the Promise resolves to a Mongoose Connection object, which contains information about the database connection.

// output of console.log(connection) if success
// {
//   "connections": [
//     {
//       "readyState": 1,
//       "name": "myDatabase",
//       "host": "localhost",
//       "port": 27017,
//       "user": undefined,
//       "pass": undefined
//     }
//   ]
// }


// If the connection fails, the Promise is rejected with an Error object, which contains the reason for failure.

// output of console.log(connection) if error
// {
//     "message": "failed to connect to server [localhost:27017] on first connect",
//     "name": "MongoNetworkError",
//     "stack": "..."
//   }


module.exports = connection;
