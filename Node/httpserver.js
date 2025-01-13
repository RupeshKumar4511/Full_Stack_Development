const http = require('http');
const fs = require('fs');
const port = 3000;


const server = http.createServer((req,res)=>{
    // console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');

    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1> THis is heading  </h1> <p>This is paragraph</p>'); 
    }
    else if(req.url == '/index'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString()); 
        
    }
    
})

server.listen(port,()=>{
    console.log(`server is running on ${port}`);
});