# Node modules
node_modules is a folder where all the dependencies (packages or modules) required by our project are stored.

# package-lock.json
It provides a detailed snapshot of the entire dependency tree, including the specific versions of each installed package and their sub-dependencies. The main purpose of package-lock.json is to ensure consistent installs across different environments by "locking" the dependency versions.It is useful for the local system on which we are making our node application. 

# package.json
package.json is a crucial file in any Node.js project that provides metadata about the project and handles the management of its dependencies.

# Asynchronous non blocking I/O model:
It uses single thread to manage multiple concurrent task.


# Node js modules :
Node.js supports two types of modules.
1. common  js module
<br>
```bash 
function add(a, b) {
    return a + b;
}

module.exports = add; // Exporting function



const add = require('./math'); // Importing module

console.log(add(2, 3)); // Output: 5

```
<br>
Features : 
```bash 
Uses require() to import modules.

Uses module.exports or exports to export modules.

Synchronous execution (modules load at runtime).

Works in all Node.js versions.

Cannot use import/export without additional configuration
```
<br>
2. Ecmascript module
<br>
```bash
export function add(a, b) {
    return a + b;
}


import { add } from './math.mjs'; // Importing module

console.log(add(2, 3)); // Output: 5

```
<br>
Features: 
<br>
```bash 
Uses import to load modules.
Uses export to export functions/variables.
Asynchronous execution (better for performance).
Requires "type": "module" in package.json or .mjs extension.
```
<br>
In ESM, Imports are hoisted and executed before the script runs, meaning they are resolved at parse time (before execution). This improves performance by enabling tree shaking and better optimization.
<br>
Tree shaking is a technique used in JavaScript to remove unused code (dead code elimination) from the final bundle, reducing its size and improving performance (when we use node js with webpack like vite).

# Mongoose module :
Mongoose is an Object Data Modeling (ODM) library for MongoDB, used with Node.js. It helps in:
<br>
✅ Defining schemas and models for structured data.
<br>
✅ Performing CRUD operations easily.
<br>
✅ Managing data validation, relationships, and middleware.

# nodemon 
Nodemon is a command-line tool that automatically restarts a Node.js application when it detects changes to the application's js files.

# JWT 
jsonwebtoken (jwt) is a Node.js library used to create and verify JSON Web Tokens (JWTs) for authentication and secure data exchange.But it is not inbuilt, we need to install it explicitly. 


# multer-gridfs-storage:
It is a Node js modules which acts as   storage engine for multer that allows you to store files directly in MongoDB using GridFS instead of saving them on the local disk.

# gridfs-stream
It is a Node.js library that provides an interface for streaming files from MongoDB using GridFS. It is built on top of MongoDB's GridFS and allows you to read and write large files from and to MongoDB in a streaming manner.
<br>
This is useful when working with large files, as it allows chunked data processing without needing to load the entire file into memory at once.

# Learn more about Nodejs
https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

# Learn more about npm packages : 
https://www.npmjs.com/