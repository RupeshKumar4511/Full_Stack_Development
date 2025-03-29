// Building a website server using express module. 

const express = require('express'); // import express module 
const app = express(); // Create an instance of an Express application
const path = require('path');
const port = 3000;




// application level middleware  in express 
// By default Middleware is applied to every request.
// app.use(express.static(path.join(__dirname,"public"))); 

// If index.html exists in public/, Express will automatically serve it at http://localhost:3000/.
// If there's a conflicting app.get('/'), it overrides the static file.
// we can serve static files of any folder like "css,js" files placed in a folder. 

// custom middleware
// app.use((err,req, res, next) => {
//   console.error(err.stack); // if error occurs
//   console.log('Request URL:', req.url);
//   next(); // Pass control to the next function.
// });




// Thirdparty middleware 
// const morgan = require('morgan');
// app.use(morgan('dev'))
// this middleware is a logger which logs the request made to the localhost:3000


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})


// we can make middleware for only one route 
app.get('/',(req,res)=>{
  console.log(req.url);
} ,(req, res) => {
  res.send('hello world')
})


// we can also pass parameters with the filename
// these parameters can be used to retrieve data from database.
app.get('/index/:name',(req,res)=>{
     res.send("hello"+req.params.name)
//   res.sendFile(path.join(__dirname,"index1.html"));
//   res.json({"Rupesh":21});
})


app.listen(port, () => {
    console.log(`server is running on ${port}`);
});





