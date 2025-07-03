const vm = require('vm');
// this is virtualmachine module. 
/*
The vm module in Node.js provides APIs to compile and run code inside a virtual machine context — basically, a sandboxed JavaScript environment.

It allows you to execute code safely, separate from your main application scope.
*/




// vm.runInThisContext('var a = 2; console.log(a)') 
/*
In this case, all the things inside "runInThisContext" will be executed in global scope. 

*/


var b = 10 ;
vm.runInNewContext('console.log(b)',{b,console})

// We can run our code in global execution context by passing
//  a context which contains variables present in local scope. 



