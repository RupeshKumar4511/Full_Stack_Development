# Express 
Express (or Express.js) is a minimal and flexible Node.js web application framework used for building APIs and web applications. It provides a set of features to simplify handling routes, middleware, and HTTP requests/responses.

<br>

```bash
//imports the Express module into your Node.js application.
const express = require('express'); 

// express() initializes an instance of an Express application.
const app = express(); 

// now "app" is the instance that will be used to configure and run the web server.
```

# Middlewares  
Middleware in Express.js is a function that runs before the final request handler. It has access to the request (req), response (res), and next() function.
we can also create middlewares in express.
<br>

```bash 
Middleware is useful for: 

Logging requests

Authentication & Authorization

Parsing request bodies (JSON, form-data, etc.)

Error handling

Modifying request & response objects

```
<br>
Generally we don't render any thing inside middleware. We basically do some authentication like check and if any error occurs only then we render some error message. 
<br>
<br>

```bash

// we can add custom properties to the req object inside middleware.
This is useful for storing user data, request metadata, or pre-processed values before passing the request to the next middleware or route handler.



const express = require('express');
const app = express();

// Custom Middleware to Add a Property
app.use((req, res, next) => {
    req.customData = "Hello from Middleware!"; // Add a custom property
    next(); // Move to the next middleware or route
});

// Route Accessing Custom Property
app.get('/', (req, res) => {
    res.send(req.customData); // Output: "Hello from Middleware!"
});

app.listen(3000, () => console.log('Server running on port 3000'));

```
# Route parameter : 
We can have many route parameter. 
<br>

```bash 
route.get('/:id',(req,res)=>{
    const parseId = parseInt(req.params.id);
    if(isNaN(parseId)){
        return res.status(404).send({msg:"Bad request. Invalid ID"})
    }
    const product = carts.find((cart)=>cart.id === parseId);
    if(!product){
        return res.status(404).send({msg:"Bad request. Invalid ID"})
    }
    return res.send(product);
})

// Multiple route example
app.get('/user/:id/:name') 

```

# Query Parameters : 
when a request comes in, Express automatically parses the query string and attaches it to "req.query" as a JavaScript object.
<br>

```bash 

// endpoint : http://localhost:3000/api/carts?filter=name&value=Butter

route.get('/',(req,res)=>{
    const {filter,value}= req.query;
    if(filter&& value){
        const result = carts.filter((cart)=>cart[filter].includes(value))
        return res.send(result);
    }

    return res.send(carts);
})

```

# POST, PUT, PATCH and DELETE http requests:
```bash

route.post('/',(request,response)=>{
    const {id,name,price,type}= request.body;
    carts.push({id,name,price,type});
    return response.status(201).send({id,name,price,type})
})


// Put Request is used when we want to update the whole data about any object.
// In the put request we need to send the whole data about any object to server
// to update even if we don't want to update whole data about any object. 

// In put request we never update "id" field. 

route.put('/:id',(req,res)=>{
    const {body,params:{id}} = req;
    const parsedId = parseInt(id);
    if(isNaN(parsedId)){
        return res.status(400);
    }

    const cartIndex = carts.findIndex((cart)=>cart.id === parsedId)

    if(cartIndex === -1){
        return res.status(404);
    }

    carts[cartIndex] = {id:parsedId,...body}

    return res.status(200).send({
        msg:"cart updated successfully.."
    })
})



// PATCH request is used when we want to update the certain field about any object. 
// In the patch request we don't need to send the whole data to server to update
// any particular field.
route.patch('/:id',(req,res)=>{
    const {body,params:{id}} = req;
    const parsedId = parseInt(id);
    if(isNaN(parsedId)){
        return res.status(400);
    }

    const cartIndex = carts.findIndex((cart)=>cart.id === parsedId)

    if(cartIndex === -1){
        return res.status(404);
    }

    carts[cartIndex] = {...carts[cartIndex],...body};

    return res.status(200).send({
        msg:"cart updated successfully.."
    })
})



route.delete('/:id',(req,res)=>{
    const {params:{id}} = req;
    const parsedId = parseInt(id);
    if(isNaN(parsedId)){
        return res.status(400);
    }

    const cartIndex = carts.findIndex((cart)=>cart.id === parsedId)

    if(cartIndex === -1){
        return res.status(404);
    }

    carts.splice(cartIndex,1);

    return res.status(200).send({
        msg:"cart deleted successfully.."
    })
})


```

# express-validator :
express-validator is a external middleware for validating and sanitizing user input in an Express.js application. It helps prevent SQL injection, XSS attacks, and incorrect data formats. It is used in server-side validation. 
<br>

```bash 
const { query, validationResult } = require('express-validator');


// query function (a middleware) is used to validate the query parameters.
// It mainly add validation result to the "request" object. 


// validationResult fetches the validation result of query validator. 
// It may contains error or may empty. 






// How to validate the query parameters


route.get('/',query('filter').isString().notEmpty().withMessage("Query must be not empty.").isLength({ min: 3, max: 10 }).withMessage("query must be atleast 3-10 characters."), (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({
            errors:errors.array()
        })
    }
    const { filter, value } = req.query;

    if (filter && value) {
        const result = carts.filter((cart) => cart[filter].includes(value))
        return res.send(result);
    }

    return res.send(carts);
})







// How to validate body 

 
route.post('/',[
    body('id').notEmpty().withMessage('id must not be empty.').isInt().withMessage("id must be a string.")
    .isLength({min:5,max:32}).withMessage("id should be atleast 5-32 characters long."),

    body('name').isString().withMessage("name must be string!").notEmpty().withMessage("Name must not be empty")
    

] ,(request, response) => {

    const result = validationResult(request);
    if(!result.isEmpty()){
        return response.status(400).send({
            errors: result.array()
        })
    }
    const { id, name, price, type } = request.body;
    carts.push({ id, name, price, type });
    return response.status(201).send({ id, name, price, type })
})


```





# View Engine : 
A view engine in web development is a template engine that integrates with a web framework (like Express.js) to render dynamic HTML pages based on server-side data.
<br>
Why Use a View Engine?
<br>
It allows you to write HTML templates with embedded dynamic content.
<br>
Helps separate the backend logic from the frontend presentation.
<br>
Avoids manual concatenation of strings when generating HTML.
<br>
Some of the Examples of View Engine : 
<br>
EJS, Pug, Handlebars 
<br>

# Handlebars 
Express Handlebars is a view engine for Express.js that extends Handlebars (hbs) with additional features like layouts, partials, and helpers, making it more powerful for dynamic web applications.

<br>

```bash 
// Project Structure using handlebars. 


/my-app
│── /views
│   │── /layouts
│   │   └── main.hbs  <-- Layout file
│   ├── home.hbs      <-- Page template
│── /public           <-- Static files (CSS, images, JS)
│── server.js

```

# EJS project structure :
ejs is also a template engine. 
<br>

```bash 

my-app/
├── node_modules/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   │   └── sidebar.ejs
│   ├── pages/
│   │   ├── home.ejs
│   │   ├── about.ejs
│   │   └── contact.ejs
│   └── error.ejs



```

# Ejs syntax : 

```bash 

<%- include('partials/header') %>

<h1>Welcome <%= user.name %></h1>

<ul>
  <% items.forEach(item => { %>
    <li><%= item %></li>
  <% }) %>
</ul>

<% if (user.isAdmin) { %>
  <p>You have admin access.</p>
<% } else { %>
  <p>Standard user.</p>
<% } %>

<%- include('partials/footer') %>


```


# bcrypt :
bcrypt is a password-hashing library used to securely hash and store passwords. It helps protect against brute-force attacks, dictionary attacks, and rainbow table attacks by using salted hashing.

# cookie-parser : 
cookie-parser is a external middleware for Express.js that allows you to parse cookies from incoming HTTP requests.
<br>
We send a cookie from the server to the client using "res.cookie("token","This is a token")". 
we receive the cookie from the request using "req.cookies.token".

# express-rate-limit : 
```bash 
import express from 'express';
import rateLimit from 'express-rate-limit';

const app = express();

// Rate limiter for /api/login — 5 attempts per 5 minutes
const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 5 minutes
  max: 5, // Limit each IP to 5 login requests per window
  message:  'Too many login attempts. Please try again after 5 minutes.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false,  // Disable the `X-RateLimit-*` headers
});

// Apply to only this route
app.post('/api/login', loginRateLimiter, (req, res) => {
  // your login logic
  res.json({ success: true, message: 'Login attempt received' });
});

```

# multer 
Multer is a middleware for handling multipart/form-data, which is primarily used for file uploads in Node.js and Express applications. It helps in storing files either on the server's disk or in memory before processing them.

# method-override 
It is a middleware for Express.js that allows you to override the HTTP method of a request, typically for requests sent through forms. It is particularly useful when you're working with forms that only support the GET or POST methods, but you need to use other HTTP methods like PUT or DELETE for RESTful APIs.
<br>
In situations where browsers only support GET and POST methods for HTML forms, method-override allows you to send other HTTP methods by passing an additional _method field (or other custom fields) in the request body or query string.

# JWT 
jsonwebtoken (jwt) is a Node.js library used to create and verify JSON Web Tokens (JWTs) for authentication and secure data exchange. But it is not inbuilt, we need to install it explicitly.

# Passport.js 
Passport.js is a popular authentication middleware for Node.js.
<br>
It helps us handle user login, signup, social login (Google, Facebook, etc.), and more.

# arctic : 
Arctic is an OAuth 2.0 authentication library for JavaScript. It's designed to help us easily integrate OAuth providers (like GitHub, Google, Discord, etc.) into our app without relying on Passport.js. Built on top of the Fetch API, it's lightweight and secure by default.

# Mongoose module :
Mongoose is an Object Data Modeling (ODM) library for MongoDB, used with Node.js. It helps in:
<br>
Defining schemas and models for structured data.
<br>
Performing CRUD operations easily.
<br>
Managing data validation, relationships, and middleware.


# How to work with mongoose module:
Learn more : https://mongoosejs.com/docs/index.html
<br>


```bash 

// 1. create a schema for any particular object. 

// 2. create the model for that schema and export it. 

// 3. Import that model inside routes and use it to 
// create,read,update and delete.


// Note : Always wrap the CRUD operation in try-catch block.






// Create : 



//Ist way
const {username,password} = req.body;
const newUser = new userModel({username,password});
newUser.password = await bcrypt.hash(password,10)
await newUser.save()

//IInd way: 
const hashedPassword = await bcrypt.hash(password,10)
userModel.create({username,password:hashedPassword})





// Read : 

// find all user
const users = userModel.find({})  
//returns an array of all matching documents.

// find user by id 
const user = userModel.findById(id)  
// It returns object containing single document.

// find user using any conditions
const user = userModel.findOne({username}) 
//returns the first document that matches the condition.





// Update: 


// find the document by id and update it. 
const user = await userModel.findByIdAndUpdate(id,{username:"newusername"},{new:true})
// Returns the updated document. 

// IInd way 
const user = await userModel.updateOne({id:id},{$set:{username:"newname"}})


// update many documents 
await userModel.updateMany({role:'user'},{$set:{role:"member"}})




// Delete : 

// delete a document by using id 
await userModel.findByIdAndDelete(id)

// IInd way 
await userModel.deleteOne({id:id}) 

// delete multiple document : 
await userModel.deleteMany({isInactive:true})




await userModel.findOneAndUpdate({
        username:'Rohan'
    },
    {
        email:'rohan.kumar.123@gmail.com'
    })

// This method finds one document that matches the query and updates it
// and it also returns old documents.
// If we want replaced one then we need to pass "{new:true}" as arguments.

// If document is not found then it returns null


await userModel.findOneAndReplace({
        username:'Akash'
    },{
        username:'AkashKumar',
        email:'akash.kumar.123@gmail.com',
        password:'Akash@123'
    })

// This method finds one document that matches the query and replaces it with a new document and it also returns old documents.
// If we want replaced one then we need to pass "{new:true}" as arguments.

// If document is not found then it returns null




await userModel.findOneAndDelete({
        username:'Rohan'
    })

// This method finds one document that matches the query and deletes it
// and it also returns the deleted user.
// If document is not found then it returns null

```


# How to work with Drizzle ORM module (for sql db): 
Learn from : https://orm.drizzle.team/docs/sql-schema-declaration



