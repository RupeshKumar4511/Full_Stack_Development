//This is ES6 import
console.log("hello")
import simple2,{simple} from "./esmoduleexports.mjs";

simple();
simple2();



// console.log(import.meta);

/*

[Object: null prototype] {
  dirname: 'd:\\Full_Stack\\Stack\\Node',
  filename: 'd:\\Full_Stack\\Stack\\Node\\esmoduleImport.mjs',    
  resolve: [Function: resolve],
  url: 'file:///d:/Full_Stack/Stack/Node/esmoduleImport.mjs'      
}}

*/


// we can attach extra properties on "import.meta";
import.meta.a = 13;
const {filename,dirname,a} = import.meta;
console.log("filename",filename);
console.log("dirname",dirname);
console.log("extra custom property",a)




/*
Bydefault browser add only two properties : 

(i) url: Path of the particular module.

(ii) resolve function : It allows us to resolve a relative or specifier string to a full URL, just like how the module loader would resolve it.

console.log(import.meta.url);
// "http://127.0.0.1:5500/esmoduleImport.mjs"

console.log(import.meta.resolve('./other.js'));
// "http://127.0.0.1:5500/other.js"

// This helps when we want to dynamically build URLs relative to the current module.



But Node js add two more properties on "import.meta": 
(i) pathname
(ii) dirname 


*/