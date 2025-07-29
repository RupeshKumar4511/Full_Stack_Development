// common js module

obj = {
    developer : true,
    favNum:5
}

module.exports = obj;


// exports.sayHello = function(){
//   console.log("hello")
// }

// Both work because exports is just a shortcut that points to module.exports initially. But if you assign a new object to exports, it won’t change module.exports automatically and it causes error. 



// By default module.exports is an empty object. 


// Bydefault module is also an object. 

/*


{
  id: '.',
  path: 'd:\\Full_Stack\\Stack\\Node',
  exports: {},
  filename: 'd:\\Full_Stack\\Stack\\Node\\commonjsmoduleexports.js',
  loaded: false,
  children: [],
  paths: [
    'd:\\Full_Stack\\Stack\\Node\\node_modules',
    'd:\\Full_Stack\\Stack\\node_modules',  
    'd:\\Full_Stack\\node_modules',
    'd:\\node_modules'
  ]
}

*/