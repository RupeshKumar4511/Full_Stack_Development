// import url from 'url';
const myUrl = new URL("https://www.example.com");
myUrl.pathname = '/a/b/c';
myUrl.search = '?d=e';
myUrl.hash = 'fgh'; //Hashes are typically used in web pages to point to a specific section of the document or for client-side routing (especially in Single Page Applications or SPAs).

myUrl.username = "John";
myUrl.password = 'David@123';
myUrl.port = 5000;

console.log(myUrl);
console.log(myUrl.href); //https://www.example.com/a/b/c?d=e#fgh

