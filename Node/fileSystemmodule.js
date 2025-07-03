// Executable File : 
// There are two types of executable file : 
// 1. Script executable file : file which contains some script. 
// 2. Binary executable file : file with ".exe" extension(in windows)

// In linux "Binary executable files" may have some other extension. 




// This is used in production .

// import  fs from 'node:fs/promises';
// const content = await fs.readFile('file.txt')
// console.log(content.toString())
// console.log("END")



// inside the async function, await pauses further statements after it, until the promise resolves.
// But the main thread (event loop) is not blocked because 
// While waiting, other tasks (like handling incoming requests) can continue.







// fs.readFile('file.txt','utf-8',(err,data)=>{
//     if(err){ 
//         console.log(err);
//         throw err;
//     }else{
//         console.log(data);
//     }
    
// })
// In this is case callback hell may be occur. so it is not recommended. 

// console.log("Reading a file is finished"); // this executes first because of Asynchronous nature of node js



// This also works same as the previous code does but here node js blocks the next instruction.
// const a = fs.readFileSync("file.txt");
// console.log(a.toString())
// console.log("Reading a file is finished");

// const content = fs.readFileSync("file.txt",'utf-8');
// console.log(content)



// fs.writeFile('file.txt','This file contains some text',(err)=>{
    // if(err) throw err;
//     console.log("writing to file");
// })

// console.log("writing to a file is finished");


// fs.writeFileSync('file.txt','hello world');
// console.log("writing to a file is finished");







