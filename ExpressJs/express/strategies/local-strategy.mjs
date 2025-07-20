import passport from 'passport';
import { Strategy } from "passport-local";
import userModel from '../models/user.mjs'
import bcrypt from 'bcrypt'

// Registers a function used to serialize user objects into the session.
// this is called only once for user login 
passport.serializeUser((user, done) => {
    console.log('Inside serializeuser')
    done(null, user.id);
    // here null for error
})
// user.id will be used to find the user so it should be unique and it is saved to session
// we can acess it: 
// req.session.passport.user 

// And this "user.id" will be  passed to deserializeUser's callback function. 
// this will be called always after user login once.
passport.deserializeUser((id, done) => {
    console.log('Inside deserializeuser')
    // find the user
    try {
        console.log(id)
        const findUser = userModel.findById(id)
        if (!findUser) throw new Error("User not found");
        done(null, findUser)

    } catch (error) {
        done(error, null)
    }
})


// Register a strategy for later use when authenticating requests.
passport.use(
    new Strategy(async (username, password, done) => {
        console.log(username)
        console.log(password)
        try {
            const findUser = await userModel.findOne({ username })
            console.log(findUser)
            if (!findUser) throw new Error("User not found")
            

            const isMatch = await bcrypt.compare(password, findUser.password)

            if (!isMatch) {
                return res.status(403).send({ msg: "Bad Credentials" })
            }

            // user is found and password is matched. 
            done(null, findUser)

        } catch (error) {
            done(error, null)  // here null is for invalid user
        }
    })
)
// Strategy is a constructor which is used to validate the user. 

