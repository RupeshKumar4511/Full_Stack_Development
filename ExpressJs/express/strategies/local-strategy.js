const passport = require('passport');
const {Strategy} =require("passport-local");
const mockUsers = require('../mockUsers')

// Registers a function used to serialize user objects into the session.
// this is called only once for user login 
passport.serializeUser((user,done)=>{
    console.log('Inside serializeuser')
    done(null,user.id);
})
// user.id will be used to find the user so it should be unique and it is saved to session
// we can acess it: 
// req.session.passport.user 

// And this "user.id" will be  passed to deserializeUser's callback function. 
// this will be called always after user login
passport.deserializeUser((id,done)=>{
     console.log('Inside deserializeuser')
    // find the user
    try{
        const findUser = mockUsers.find(user =>user.id ===id);
        if(!findUser) throw new Error("User not found");
        done(null,findUser)

    }catch(error){
        done(error,null)
    }
})


// Register a strategy for later use when authenticating requests.
module.exports = passport.use(
    new Strategy((username,password,done)=>{
        console.log(username)
        console.log(password)
        try{
            const findUser = mockUsers.find((user)=>user.username === username)
            if(!findUser) throw new Error("User not found")
            if(findUser.password !== password) throw new Error("Invalid Credentials")
            
            // user is found and password is matched. 
            done(null,findUser)

        }catch(error){
            done(error,null)  // here null is for invalid user
        }
    })
)
// Strategy is a constructor which is used to validate the user. 

