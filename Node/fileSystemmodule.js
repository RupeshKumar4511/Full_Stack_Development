// Executable File : 
// There are two types of executable file : 
// 1. Script executable file : file which contains some script. 
// 2. Binary executable file : file with ".exe" extension(in windows)

// In linux "Binary executable files" may have some other extension. 

// import fs from 'fs'


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



// try{
//     await fs.writeFile('file.txt','This is a simple text file');
// }catch(err){
//     await fs.appendFile('error.log',`\n${new Date().toLocaleTimeString()}\n${err.message}\n${err.stack}`)
//     console.log(err);
//     console.log("To see full error Go to error.log file")
// }
// It overrites in the file. 



// fs.appendFile('file.txt',"\nHello Nodejs");
// It append in the file. 


// If the file does not exist then both writeFile and appendFile
// method first create the file. 
// This is suitable for small file. But for large file we use stream. Because let say a file of 4GB and when we write it to another file then all data will be loaded into memory first and if our RAM is also of 4GB then laptop may stop working. 




// fs.writeFile('file.txt','This file contains some text',(err)=>{
    // if(err) throw err;
//     console.log("writing to file");
// })

// console.log("writing to a file is finished");


// fs.writeFileSync('file.txt','hello world');
// console.log("writing to a file is finished");




// writeFile method is used to create and write file. 

// fs.rename('fileSystemmodule.js','FileSystemModule.js')
// fs.rename('temp','test');
// fs.rename('test','../Mongodb/test')
// fs.rename('file.txt','../Mongodb/file.txt')

// rename method is used to rename and move file/folder



// fs.copyFile('file.txt','copy-file.txt') 
// used to copy file


// fs.cp('temp','test',{recursive:true})
// used to copy directory 


// fs.rm('copy-file.txt');
// remove file 

// fs.rm('test',{recursive:true});
// remove folder


// const fileStats = await fs.stat('file.txt');
// const folderStats = await fs.stat('test');
// console.log(fileStats)
// used to know the files and folder stats 

// import fs from 'node:fs'
// fs.watch("file.txt", function (eventType,filename) {
//     console.log(eventType,filename)
// });