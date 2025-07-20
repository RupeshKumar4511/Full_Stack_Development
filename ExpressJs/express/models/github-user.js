import mongoose from 'mongoose'

const githubUserSchema = mongoose.Schema({   
    githubId:{
        type:String,
        required:true,
        trim:true,
    },
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
    providerAccountId:{
        type:String,
        required:true,
        trim:true,
    },
    provider:{
        type:String,
        required:true,
        trim:true
    }
})

const githubUserModel = mongoose.model('users',githubUserSchema);
export default githubUserModel;