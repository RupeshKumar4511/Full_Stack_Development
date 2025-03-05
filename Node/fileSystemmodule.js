const fs = require('fs');
// console.log(fs.readFile('file.txt','utf-8',(err,data)=>{
    // if(err) throw err;
//     console.log(err,data);
// }))

// console.log("Reading a file is finished"); // this executes first because of Asynchronous nature of node js



// This also works same as the previous code does but here node js blocking the next instruction.
// const a = fs.readFileSync("file.txt");
// console.log(a.toString())
// console.log("Reading a file is finished");


// fs.writeFile('file.txt','This file contains some text',(err)=>{
    // if(err) throw err;
//     console.log("writing to file");
// })

// console.log("writing to a file is finished");


// fs.writeFileSync('file.txt','hello world');
// console.log("writing to a file is finished");







