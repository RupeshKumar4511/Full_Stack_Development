# Node js : 
Node.js is a runtime environment that allows you to run JavaScript on the server side (outside of a web browser). It's built on Google's V8 JavaScript engine and is widely used to build scalable, high-performance web applications and APIs.
<br>
It was first developed by Ryan Dhal.    

# Why Nodejs : 
It is known for performance, scalability, and an extensive ecosystem. Below are some key features:
<br>
Event-Driven & Non-Blocking I/O: Handles multiple tasks simultaneously without waiting for previous ones to complete, making it efficient for real-time applications.
<br>
Single-Threaded Model: It manages numerous connections efficiently using a single thread with the help of its event loop mechanism.
<br>
Cross-Platform: NodeJS is cross-platform, which means that it can run on various operating systems like Windows, macOS, and Linux without modification.
<br>
Fast Execution: The V8 engine compiles JavaScript into machine code before execution, which helps NodeJS achieve high performance.
<br>
Package Management: npm (Node Package Manager) is a huge advantage, as it provides access to a wide range of libraries and tools that can be easily integrated into NodeJS applications.
<br>
Restful API and Microservices: It easily handles microservices and API due to its lightweight, scalable, and event-driven nature.

# Working of Nodejs : 
When a request hits a Node.js server, the single main thread running JavaScript receives it and quickly determines what needs to be done. If it's a simple task (like string concatenation), it executes immediately. If it involves I/O (like reading a file, querying a database, or calling an API), Node.js delegates that task to the libuv thread pool(if blocking request) or the OS kernel(if non blocking request), allowing the main thread to stay free and continue handling other incoming requests. Once the I/O operation completes, the result is placed in the event loop's callback queue, and when the loop reaches it, the callback (or promise/async function) is executed, sending the response back to the client — all without blocking other requests.
<br>
Read more : https://www.geeksforgeeks.org/node-js/explain-the-working-of-node-js/

# Asynchronous and non blocking I/O model:
Node.js works on these two concepts : 
<br>
In Node.js, the asynchronous non-blocking I/O model uses a single-threaded event loop to manage multiple concurrent tasks. Instead of waiting for I/O operations (like file reads, database queries, or network requests) to complete, Node.js initiates the operation and continues executing other code. When the operation finishes, a callback (or a Promise) handles the result. This makes Node.js highly efficient and scalable, especially for I/O-heavy applications.


# Node modules
node_modules is a folder where all the dependencies (packages or modules) required by our project are stored.

# package-lock.json
It provides a detailed snapshot of the entire dependency tree, including the specific versions of each installed package and their sub-dependencies. The main purpose of package-lock.json is to ensure consistent installs across different environments by "locking" the dependency versions. It is useful for the local system on which we are making our node application. 

# package.json
package.json is a crucial file in any Node.js project that provides metadata about the project and handles the management of its dependencies.
<br>

```bash 

// Semantic Versioning : 
MAJOR: Breaking changes.

MINOR: New features, backward-compatible.

PATCH: Bug fixes, backward-compatible


// package.json
 "dependencies": {
    "express": "^4.21.0",
  }


  // 4.21.0 : MAJOR:MINOR:PATCH

  // Here "^" means if the package-lock.json file is deleted then 
  // It allows updates to any version that does not change the MAJOR version, but can include newer MINOR and PATCH updates.

  // But if the package-lock.json file persist then the exact version will be installed which is present in the package-lock.json.

```



# module : 
A module is a self-contained block of code that can be exported and imported into different parts of an application.
<br>
In Node.js, every file is treated as a separate module.
<br>
When we write code in a file, Node.js wraps our code inside a special function to provide some helpful objects and variables — one of these is the module object.

# module wrapper function : 
While using "commonjs module", Node js wraps our code into a special function and this is the reason of why our variables defined comes in local scope. 
<br>

```bash 

// This is wrapper function which is written in the form of "IIFE"

(function(exports, require, module, __filename, __dirname) {

  // Your module code actually lives here

})(exports, require, module, __filename, __dirname);


```
<br>
<br>
But While Using ES6 module : 
<br>
Our code are NOT wrapped in a wrapper function.
<br>
Instead, each module is executed in strict mode and its own module scope.
<br>
Variables declared in an ES module do not leak to global scope.



# Node js modules system :
Node.js supports two types of modules.
<br>
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
<br>

```bash 
Uses require() to import modules.

Uses module.exports or exports to export modules.

file loading takes place at runtime.

File extension is optional. But ".cjs" extension is considered better than other.

We can load any files by giving fullname in require() function. 

It is optional to set type: "commonjs" in package.json because commonjs is 
default module system. 

The value of "this" keyword points to "module.exports".

We cannot import/export without special configuration. 

cjs imports are not hoisted. 

Top level await is not allowed.

We can export only one value from cjs module. 

We can get the filename by "__filename" and dirname by "__dirname". 

```


<br>
2. Ecmascript module: 
<br>

In ES6 modules, Node analyzes import and export before execution, so it knows exactly what's exported and how to link modules together.

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

file is resolved and loaded before runtime begins.

File extension is mendatory.  

We can load ".mjs" or ".js" file only. 

Requires "type": "module" in package.json or .mjs extension.

In "mjs" "this" keywords points to the "undefined" bydefault. 

mjs imports are hoisted. 

Top level await is allowed.

We can export multiple value from mjs module. 

We can get the filename and dirname from "import.meta". 

```
<br>
In ESM, Imports are hoisted and executed before the script runs, meaning they are resolved at parse time (before execution). This improves performance by enabling tree shaking and better optimization.
<br>
Tree shaking is a technique used in JavaScript to remove unused code (dead code elimination) from the final bundle, reducing its size and improving performance (when we use node js with webpack like vite).
<br>

```bash 
// In ES6 module, 
"import.meta" is a special object in ES modules (ESM) that provides metadata about the current module. 
```

# Types of module in nodejs : 
1. User defined module : module define using module system like commonjs and es6. 
<br>

2. Native module / Core module : Built-in module in nodejs.
like : fs module 
<br>

3. NPM module : External module which we need to install to use it. 
or 
These are the modules which are present in the node_modules folder. 


# CLI package :
A package designed to be used from the command line. It provides commands that we can run directly in our terminal or shell. Exampe: Vite.
<br>
It generally comes under devDependecies. 


# library package :
A package meant to be imported and used in code, not directly run from a shell. like jsonwebtoken etc. 
<br>
It generally comes under dependencies. 

# global package : 
A package that is installed system-wide, so it can be used anywhere on our system, by any project.
<br>
npm install -g package-name 

# local package : 
A package that is installed only inside our current project, and not available system-wide.
<br>
npm install package-name 

# npm : node package manager 
A package manager for JavaScript, especially for Node.js projects.
<br>
A tool that helps you install, update, and manage dependencies. 
<br>
It is also a js file behind the scene. 
<br>
Important Point :
<br>

```bash

// when we write "npm create vite"
// then it act as "npx create-vite"

```


# npx : node package execute 
npx is a command-line tool that comes with npm (Node Package Manager), starting from npm version 5.2.0 and above.
<br>
Its main job is to run Node.js packages (executables) without having to install them globally.
<br>
It is only a JavaScript file behind the scene. 


# How npx works : 

```bash 
What npx does?
Searches for a file and executes it.

Example : when we type "npx hello". 

Search Step-1
    Searches for package.json in current working directory
    Searches for name key in the package.json
    Searches for bin key in the package.json

Search Step-2
    Searches for node_modules\.bin\hello in current working directory
    And executes this file

Search Step-3
    Searches for hello in global npm folder(C:\Users\admin\AppData\Roaming\npm\node_modules)
    And executes this file

Search Step-4
     Searches for hello package in npx cache(C:\Users\admin\AppData\Roaming\npm)
     And executes this file

Search Step-5
     Searches for hello CLI-package in npm registry
     Prompts to install the package if found
     Downloads and installs that package in the npx cache. 

```

# How npm works : 

```bash 
What npm does?
Searches for a file and executes it.

Example : when we type "npm install loadash". 

Search Step-1
    Searches for package.json in current working directory
    If found and lodash is not yet listed:
    Adds lodash to the dependencies section.
x
Search Step-2
    Searches for node_modules/lodash in current working directory
    If the correct version is already installed, it skips downloading
    If version mismatch, it installs the correct one

Search Step-3
     Searches for loadash package in npm cache(C:\Users\admin\AppData\Roaming\npm)
     If it's cached and matches version requirements then it
     Uses the cached copy (no network request needed).

Search Step-4
     Searches for loadash package in npm registry
     Prompts to install the package if found
     Downloads and installs that package in the npm cache. 

```


# nodemon 
Nodemon is a command-line tool that automatically restarts a Node.js application when it detects changes to the application's js files. 


# Learn more about Nodejs
https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
<br>
https://github.com/procodrr/nodejs-course

# Learn more about npm packages : 
https://www.npmjs.com/