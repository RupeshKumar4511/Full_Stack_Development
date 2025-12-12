import http from 'http';
import fs from 'fs';
import path from 'path';
const port = 3000;

// console.log(http)
const server = http.createServer((req,res)=>{
    // console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');

    if(req.url == '/'){
        res.statusCode = 200;
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h1> THis is heading  </h1> <p>This is paragraph</p>'); 
    }
    else if(req.url === '/index'){
        res.statusCode = 200;
        const data = readFileSync(join(__dirname,'index1.html'))
        res.end(data.toString()); 
        
    }
    
})

server.listen(port,()=>{
    console.log(`server is running on ${port}`);
});





// // http module can also send request 
// const data = JSON.stringify({
//   title: "foo",
//   body: "bar",
//   userId: 1
// });

// const options = {
//   hostname: "jsonplaceholder.typicode.com",
//   path: "/posts",
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Content-Length": data.length
//   }
// };

// const req = http.request(options, (res) => {
//   let responseBody = "";

//   res.on("data", chunk => responseBody += chunk);
//   res.on("end", () => {
//     console.log("Response:", JSON.parse(responseBody));
//   });
// });

// // Write body data
// req.write(data);

// // End the request
// req.end();





const option = {
    hostname:'localhost',
    port:'3000',
    path:'/',
    method:"GET"
}   

const req = http.request(option , (res)=>{
    let responseBody = "";
    res.on('data',(chunk)=>responseBody+=chunk)
    res.on('end',()=>console.log(responseBody))
})


req.end()