// Building a website server using express module. 

const express = require('express'); // import express module 
const app = express(); // Create an instance of an Express application
const path = require('path');
const port = 3000;


// create our own middleware 
const custom_middleware = (req,res,next)=>{
    console.log(__dirname);
    next() // this is used to execute next middleware which forms chain.

}

//middleware  in express
// app.use(express.static(path.join(__dirname,"public")));
// app.use(custom_middleware);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})


// we can also pass parameters with the filename
// these parameters can be used to retrieve data from database.
app.get('/index/:name',(req,res)=>{
     res.send("hellow"+req.params.name)
//   res.sendFile(path.join(__dirname,"index1.html"));
//   res.json({"Rupesh":21});
})


app.listen(port, () => {
    console.log(`server is running on ${port}`);
});


// Building api using express


