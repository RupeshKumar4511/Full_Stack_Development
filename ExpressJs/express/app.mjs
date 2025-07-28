import express from 'express';
import cookieParser from 'cookie-parser'
import session from 'express-session';
import MongoStore from 'connect-mongo';
import Oauth from './routes/github.auth.js'
import passport from 'passport';
import './strategies/local-strategy.mjs'
import './config/db.mjs';
const app = express();
import { config } from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import path from 'path'
import mongoose from 'mongoose';
import db from './config/mysql.db.mjs'
import { users } from './models/github-user.js';

config()
const port = process.env.PORT;


app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))


app.use(cookieParser());
// app.use(cookieParser('helloworld')) // "helloworld" is secret which is used to parse the signed cookie. 



// for mysql db
app.get('/create-user', async (req, res) => {
    try {
        const insertedUser = await db.insert(users).values({ id: 1, username: "RupeshKumar", email: "rupesh.kumar.rcdu@gmail.com", password: "rupesh@098765" })
        console.log(insertedUser)
        return res.status(200).send(insertedUser.insertedId)

    } catch (error) {
        console.log(error)
    }
})






// for ejs testing
app.get('/', (req, res) => {
    res.render('index');
})


app.use(session({
    secret: "helllo@90876",// secret: A string used to sign (encrypt) the session ID cookie.
    saveUninitialized: false,//  Sessions that are new but not modified (for example, no data added to req.session) won’t be saved.
    resave: false, // The session will only be saved if it is actually modified, which reduces unnecessary writes and improves performance.
    cookie: {
        maxAge: 60000 * 60 // this means 1 hour
    },
    store: MongoStore.create({
        client: mongoose.connection.getClient()
    })

}))

// Intializes Passport for incoming requests, allowing authentication strategies to be applied.
app.use(passport.initialize())

// Middleware that will restore login state from a session.
// this takes care of attaching and accessing the dynamic property on 
// request object
app.use(passport.session())

// Example : For github, we use "passport.authenticate("github")"
app.post('/api/auth', passport.authenticate('local'), (req, res) => {
    console.log('Inside /api/auth');
    req.session.user = req.user
    res.sendStatus(200)
})

app.get('/api/auth/status', (req, res) => {
    console.log('inside /api/auth/status');
    console.log(req.session.user)
    if (!req.session.user) return res.status(401).send({ message: "Unauthorized" })
    return res.send(req.session.user);
})

app.post('/api/auth/logout', (req, res) => {
    if (!req.session.user) return res.sendStatus(401);
    //Terminate an existing login session.
    req.logOut((err) => {
        if (err) return res.sendStatus(400);

    })
    return res.sendStatus(200);
})


app.get('/home', (req, res, next) => {
    next();
}, (req, res) => {
    console.log(req.params);
    // res.cookie("hello","world",{maxAge:60000*60});
    // console.log(req.session.id);
    req.session.visited = true;
    // res.cookie("hello","express",{maxAge:60000*60,signed:true})
    res.send('<h1>Home Page</h1>')
})

// app.use((err, req, res, next) => {
//     console.log(err.message);
//     res.status(500).send("Internal Server Error");
// });


app.use(userRoutes)
app.use(cartRoutes)
app.use(Oauth);

app.listen(port, () => {
    console.log("server is listening at port", port)
})