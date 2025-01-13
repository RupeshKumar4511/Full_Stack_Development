const path = require('path')
console.log(path.basename("C:\\Users\\admin\\Desktop\\Node JS\\index.js"))
// index.js

console.log(path.dirname("C:\\Users\\admin\\Desktop\\Node JS\\index.js"))
// C:\Users\admin\Desktop\Node JS

console.log(path.extname(__filename)) // __filename is pathmodule.js
//.js

// we can also make consistent path for different os 
// like for linux ,path is "admin/this.txt"
// for window , path is "C://home//this.txt"