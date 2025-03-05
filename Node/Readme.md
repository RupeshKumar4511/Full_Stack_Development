# Node modules
node_modules is a folder where all the dependencies (packages or modules) required by our project are stored.

# package-lock.json
It provides a detailed snapshot of the entire dependency tree, including the specific versions of each installed package and their sub-dependencies. The main purpose of package-lock.json is to ensure consistent installs across different environments by "locking" the dependency versions.

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


# Learn more about Nodejs
https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

