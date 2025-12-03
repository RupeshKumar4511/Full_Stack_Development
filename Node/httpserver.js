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