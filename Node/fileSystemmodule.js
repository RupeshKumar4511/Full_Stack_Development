const fs = require('fs');
// console.log(fs.readFile('file.txt','utf-8',(err,data)=>{
//     console.log(err,data);
// }))

// console.log("Reading a file is finished"); // this executes first becouse of Asynchronous nature of node js



// This also works same as the previos code does but her node js blocking the next instruction.
// const a = fs.readFileSync("file.txt");
// console.log(a.toString())
// console.log("Reading a file is finished");


// fs.writeFile('file.txt','This file contains some text',()=>{
//     console.log("writing to file");
// })

// console.log("writing to a file is finished");


fs.writeFileSync('file.txt','hello world');
console.log("writing to a file is finished");



