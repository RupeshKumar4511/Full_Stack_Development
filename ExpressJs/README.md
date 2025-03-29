# Express 
Express (or Express.js) is a minimal and flexible Node.js web application framework used for building APIs and web applications. It provides a set of features to simplify handling routes, middleware, and HTTP requests/responses.

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
Middleware is useful for: ✅ Logging requests
✅ Authentication & Authorization
✅ Parsing request bodies (JSON, form-data, etc.)
✅ Error handling
✅ Modifying request & response objects
```
<br>
Generally we don render any thing inside middleware. We basically do some authentication like check and if some error found then only we render some error message. 
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

# express-validator 
express-validator is a external middleware for validating and sanitizing user input in an Express.js application. It helps prevent SQL injection, XSS attacks, and incorrect data formats.


# bcrypt :
bcrypt is a password-hashing library used to securely hash and store passwords. It helps protect against brute-force attacks, dictionary attacks, and rainbow table attacks by using salted hashing.

# cookie-parser : 
cookie-parser is a external middleware for Express.js that allows you to parse cookies from incoming HTTP requests.
<br>
We can also send a cookie from the server to the client using res.cookie().


# multer 
Multer is a middleware for handling multipart/form-data, which is primarily used for file uploads in Node.js and Express applications. It helps in storing files either on the server’s disk or in memory before processing them.

# method-override 
It is a middleware for Express.js that allows you to override the HTTP method of a request, typically for requests sent through forms. It is particularly useful when you're working with forms that only support the GET or POST methods, but you need to use other HTTP methods like PUT or DELETE for RESTful APIs.

In situations where browsers only support GET and POST methods for HTML forms, method-override allows you to send other HTTP methods by passing an additional _method field (or other custom fields) in the request body or query string.