const mongose = require('mongoose')

const userSchema = mongose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        minLength:[3,"username must atleast 3-10 characters long"],
        maxLength:[10,"username must atleast 3-10 characters long"]
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength:[8,"password must atleast 8-20 characters long"]
    }
})

const userModel = mongose.model('users',userSchema);
module.exports =  userModel;