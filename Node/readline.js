// The readline module allows reading data line by line from
// The console (stdin)

// A file

// Any readable stream


import readline from 'node:readline';

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

// A method provided by readline module.

// Used to Creates an interface object for reading lines of input from a readable stream (like stdin) and writing output (like stdout).

rl.question('what is your name ',(name)=>{
    console.log(name);
    rl.close() // Close the readline interface and frees up the input/output stream.
})
// Ask a question and get user input asynchronously.

