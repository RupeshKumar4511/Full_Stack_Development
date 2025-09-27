const path = require('path')

//Gets the last portion (file name) of a path.
console.log(path.basename("C:\\Users\\admin\\Desktop\\Node JS\\index.js"))
// index.js

// Gets the directory name of a path.
console.log(path.dirname("C:\\Users\\admin\\Desktop\\Node JS\\index.js"))
// C:\Users\admin\Desktop\Node JS


console.log(__filename) //  pathmodule.js

// Gets the extension of the file.
console.log(path.extname(__filename)) 
// .js


// Joins all given path segments into one path, and normalizes it.
console.log(path.join(__dirname,"public"));
// d:\Full_Stack\Stack\Node\public




// Resolves a sequence of paths or path segments into an absolute path.
console.log(path.resolve('docs', 'file.txt'));



// Returns a path string from an object (opposite of path.parse()).
console.log(path.format({
  dir: '/user/docs',
  name: 'file',
  ext: '.txt'
}));
// '/user/docs/file.txt'
 





// we can also make consistent path for different os 
// like for linux ,path is "/admin/this.txt"
// for window , path is "C://home//this.txt"

/*

// Command Line Utility ; 

cygpath is a command which can convert any path into unix-based path or windows path. 


cygpath -w "/c/Users/Desktop/file1.txt";
// It convert unix based path to windows path. 

cygpath -u "C:\Users\Desktop\file1.txt";
// It convert windows based path to unix based path. 

*/