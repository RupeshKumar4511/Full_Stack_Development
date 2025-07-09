const express = require('express');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app= express();
const port = 3000;

const userRoutes = require('./userRoutes.js')
const cartRoutes = require('./cartRoutes.js')


app.use(express.json());

// app.use(cookieParser());
app.use(cookieParser('helloworld')) // "helloworld" is secret which is used to parse the signed cookie. 


app.use(session({
    secret:"helllo@90876",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:60000*60 // this means 1 hour
    }
}))

                                           

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