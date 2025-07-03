// current working directory
console.log(process.cwd())

// channge current working dir 
process.chdir('./temp');
console.log(process.cwd())

// process.exit(0);
/*
The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code. If code is omitted, exit uses either the 'success' code 0 or the value of process.exitCode if it has been set. Node.js will not terminate until all the 'exit' event listeners are called.

*/

console.log(process.uptime());
/*
process.uptime() is a method that returns the number of seconds the current Node.js process has been running.
*/

// process id 
console.log(process.pid)


// Kill the process
// process.kill(process.pid);

// Memory usage
console.log(process.memoryUsage()) 