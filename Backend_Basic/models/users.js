const mongoose = require('mongoose');

// mongoose.Schema is used to define the structure of documents stored in a MongoDB collection.
const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    // age:Number
    // gender:{
    //     type:String,
    //     enum:['male','female']
    // }
})

// It returns schema object 
// {
//     "obj": {
//       "username": {
//         "type": "String"
//       },
//       "email": {
//         "type": "String"
//       },
//       "password": {
//         "type": "String"
//       }
//     },
//     "paths": {
//       "username": {
//         "path": "username",
//         "instance": "String"
//       },
//       "email": {
//         "path": "email",
//         "instance": "String"
//       },
//       "password": {
//         "path": "password",
//         "instance": "String"
//       },
//       "_id": {
//         "path": "_id",
//         "instance": "ObjectId"
//       },
//       "__v": {
//         "path": "__v",
//         "instance": "Number"
//       }
//     }
//   }

// Here, the paths property of a schema contains metadata about each 
// field (or "path") in the schema, including their types, validation rules, 
// and other internal configurations.






//  mongoose.model() is used to create and interact with a MongoDB collection based on a defined schema. It serves as the interface for querying, inserting, updating, and deleting documents in MongoDB.
const userModel = mongoose.model('users',userSchema);

// It returns a Mongoose Model, which is a constructor function used to interact with the MongoDB users collection.
// output of console.log(userModel)
// Model { users }


module.exports = userModel;