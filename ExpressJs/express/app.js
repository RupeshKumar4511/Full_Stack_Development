const express = require('express');
const cookieParser = require('cookie-parser')
const session = require('express-session');
const passport = require('passport');
require('./strategies/local-strategy.js')
const app= express();
const port = 3000;

const userRoutes = require('./userRoutes.js')
const cartRoutes = require('./cartRoutes.js')


app.use(express.json());

// app.use(cookieParser());
app.use(cookieParser('helloworld')) // "helloworld" is secret which is used to parse the signed cookie. 


app.use(session({
    secret:"helllo@90876",// secret: A string used to sign (encrypt) the session ID cookie.
    saveUninitialized:false,//  Sessions that are new but not modified (for example, no data added to req.session) won’t be saved.
    resave:false, // The session will only be saved if it is actually modified, which reduces unnecessary writes and improves performance.
    cookie:{
        maxAge:60000*60 // this means 1 hour
    }
}))

// Intializes Passport for incoming requests, allowing authentication strategies to be applied.
app.use(passport.initialize())

// Middleware that will restore login state from a session.
// this takes care of attaching and accessing the dynamic property on 
// request object
app.use(passport.session())

// for github, we use "passport.authenticate("github")"
app.post('/api/auth',passport.authenticate('local'),(req,res)=>{
    console.log('Inside /api/auth')
    res.sendStatus(200)
})

app.get('/api/auth/status',(req,res)=>{
    console.log('inside /api/auth/status');
    console.log(req.session)
    if(!req.user) return res.sendStatus(401);
    return res.send(req.user);
})

app.post('/api/auth/logout',(req,res)=>{
    if(!req.user) return res.sendStatus(401);
    //Terminate an existing login session.
    req.logOut((err)=>{
        if(err) res.sendStatus(400);
        res.sendStatus(200);
    })
})
                                           

app.get('/',(req,res,next)=>{
    next();
},(req,res)=>{
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

app.listen(port,()=>{
    console.log("server is listening at port",port)
})