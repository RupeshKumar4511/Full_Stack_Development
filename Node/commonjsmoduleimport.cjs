const obj1 = require("./commonjsmoduleexports.cjs");
console.log("hello world",obj1);


// Here "require" is a function which accepts a string: 
// String must be a valid path otherwise it will throw error. 

// It firstly scan the file and execute the complete file and then it returns the "module.exports" 





// console.log(module)

/*

{
  id: '.',
  path: 'd:\\Full_Stack\\Stack\\Node',
  exports: {},
  filename: 'd:\\Full_Stack\\Stack\\Node\\commonjsmoduleimport.js',
  loaded: false,
  children: [
    {
      id: 'd:\\Full_Stack\\Stack\\Node\\commonjsmoduleexports.js',
      path: 'd:\\Full_Stack\\Stack\\Node',        
      exports: [Object],
      filename: 'd:\\Full_Stack\\Stack\\Node\\commonjsmoduleexports.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  ],
  paths: [
    'd:\\Full_Stack\\Stack\\Node\\node_modules',  
    'd:\\Full_Stack\\Stack\\node_modules',        
    'd:\\Full_Stack\\node_modules',
    'd:\\node_modules'
  ]
}

// Here "paths" property signifies that whether node_modules is present in any parents of the current directory, nodejs will import it. 

*/


/*

The module object represents the current module (file). It contains metadata about that file and controls what is exported from it.

A typical module object has properties like:

module.exports — what your module makes available to other files when they require it

module.id — the module identifier

module.filename — the absolute path to the module file

module.loaded — whether the module has finished loading

module.parent — the module that required this module

module.children — modules required by this module

*/


const product = require('product');
console.log(product(12,12))