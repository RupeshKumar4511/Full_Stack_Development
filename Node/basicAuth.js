
import express from 'express'; // import express module 
import basicAuth from 'express-basic-auth';
const app = express(); // Create an instance of an Express application
const port = 3000;

app.use(basicAuth({
    users:{admin:"admin@123"},
    challenge:true
}))

app.get('/',(req,res)=>{
    res.send({msg:"you have  global auth"})
})

app.get('/',app.use(basicAuth({
    users:{testuser:"test@123"},
    challenge:true
})),(req,res)=>{
    res.send({msg:"you have route level auth"})
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});





