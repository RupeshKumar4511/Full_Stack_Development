import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        minLength:[3,"username must atleast 3-10 characters long"],
        maxLength:[10,"username must atleast 3-10 characters long"]
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        maxLength:[70,"Length of the email must not exceeds 70 characters"]
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength:[8,"password must atleast 8-20 characters long"]
    }
})

const userModel = mongoose.model('users',userSchema);
export default userModel;