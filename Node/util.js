//util module in Node.js is a core (built-in) module that provides a set of utility functions for developers to work with objects, debugging, inheritance, and asynchronous operations.

import util from "util";

// creates a formatted string : 
console.log(util.format("Hello %s, you have %d messages", "Alice", 5));
// Output: Hello Alice, you have 5 messages

// %s -> String
// %d -> Number
// %i -> Integer
// %f -> Float
// %j -> JSON
// %o -> Object (with depth)
// %O -> Object (full)
// %% -> Literal %





const obj = { name: "Bob", nested: { value: 42 } };
const stringRepresentation = util.inspect(obj, { showHidden: false, depth: null, colors: true })
console.log(stringRepresentation)
console.log(typeof stringRepresentation); // string
// Returns a string representation of an object
// It helps to see the nested objects which is not shown by console.log() like [objects][objects]




// Useful options:

// showHidden: true -> shows non-enumerable properties
// depth: null -> unlimited recursion
// colors: true -> pretty colorized output in terminal






import fs from "node:fs";
const readFile = util.promisify(fs.readFile);

readFile("file.txt", "utf8")
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Converts a callback-style function into one that returns a Promise.




async function fetchData() {
  return "Some data";
}

const callbackStyle = util.callbackify(fetchData);

callbackStyle((err, result) => {
  if (err) throw err;
  console.log(result);
});

// converts a function that returns a Promise into one using callbacks.





console.log(util.types.isDate(new Date())); // true
console.log(util.types.isRegExp(/abc/));    // true

// Provides type-checking utilities (preferred over typeof for accuracy).





const encoder = new util.TextEncoder();
const bytes = encoder.encode("Hello");
console.log(bytes); // Uint8Array([...])

const decoder = new util.TextDecoder("utf-8");
console.log(decoder.decode(bytes)); // "Hello"

// Provides a way to encode/decode text to/from Uint8Array.






// util.debuglog(section) : create conditional debug loggers.
const debug = util.debuglog('server');
debug('Listening on port %d', 3000);
// Run with NODE_DEBUG=server node app.js to see logs



console.log(util.getSystemErrorName(-2)); // 'ENOENT'
// Returns the string name for a system error code.