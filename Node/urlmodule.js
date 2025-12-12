import url from 'url';
// The url module provides utilities for URL resolution and parsing.


const myUrl = new URL("https://www.example.com");
// Creates an URL and returns an object with certain properties
// console.log(myUrl)

myUrl.pathname = '/a/b/c';
myUrl.search = '?d=e';
myUrl.hash = 'fgh'; //Hashes are typically used in web pages to point to a specific section of the document or for client-side routing (especially in Single Page Applications or SPAs).

myUrl.username = "John";
myUrl.password = 'David@123';
myUrl.port = 5000;

// console.log(myUrl);
// console.log(myUrl.href); 
//https://www.example.com/a/b/c?d=e#fgh






console.log(url.format(myUrl))
// https://John:David%40123@www.example.com:5000/a/b/c?d=e#fgh

const parsed = url.parse(myUrl.href,true);
console.log(parsed.query)



const path = url.fileURLToPath('file:///D:/Full_Stack/Stack/Node/test.txt');
console.log(path);
// Output: D:\Full_Stack\Stack\Node\test.txt (on Windows)

const fileURL = url.pathToFileURL('test.txt');
console.log(fileURL.href);
// file:///D:/Full_Stack/Stack/Node/test.txt


import querystring from 'querystring';
const str = 'name=alice&age=25&city=Delhi';
const parsed2 = querystring.parse(str);
console.log(parsed2);