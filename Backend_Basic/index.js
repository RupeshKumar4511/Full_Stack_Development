const express = require('express');
const path = require('path');
const userModel = require('./models/users');
// const dbConnection = require('./config/db.js');
const mysqlConnection = require('./config/mysql-db.js')
const studentRoutes = require('./routes/student.routes.js')
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.set('view engine','ejs');
// this set the "ejs" as default template engine
app.set('views',path.resolve('./views'))

// built in middleware
// app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
// Uses :
// Parses JSON data from the request body.
// Required when sending data as application/json.
// Stores parsed data in req.body.

app.use(express.urlencoded({extended:true}))
// Uses 
// Parses URL-encoded form data (like HTML form submissions).
// Required when sending data as application/x-www-form-urlencoded.
// extended: true allows nested objects in the request body.


app.get('/',(req,res)=>{
    // console.log(userModel);
    res.send('hello world')
})

app.get('/home',(req,res)=>{
    // console.log(userModel);
    const user = ["John","David"]
    res.render('home',{
        name:"Users",
        user:user
    });
})


app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'form.html'))
})

app.post('/register',async (req,res)=>{
    const {username,email,password} = req.body;
    const newUser = await userModel.create({
        username:username,
        email:email,
        password:password
    })

    // userModel.create({...}) is a Mongoose method that creates and inserts a new document into the MongoDB collection.
    // It returns a Promise, which resolves to the created document.
    res.send(newUser);
})
// whenever we create document then mongoose will create two more attributes in each document. Those attributes are : 
// 1. id : which is unique
// 2. __v: This shows how many times a document is updated. 




app.get('/get-user-data',(req,res)=>{
    userModel.find({
        username:'Rohan'
    }).then((users)=>{
        res.send(users);
    }).catch((error)=>{
        console.error(error);
    })
})
// Note : when the no document matches the condition then it returns an empty array. 


// userModel.findOne() : this will return only on document at a time. But when the no document matches the condition then it returns "null".


app.patch('/update-user',async(req,res)=>{
    await userModel.findOneAndUpdate({
        username:'Rohan'
    },{
        email:'rohan.kumar.123@gmail.com'
    })
    
    res.send("user updated")
})

// This method finds one document that matches the query and updates it

app.delete('/delete-user',async(req,res)=>{
    const deleteduser = await userModel.findOneAndDelete({
        username:'Rohan'
    })
    console.log(deleteduser)
    res.send("User is deleted")
})
// This method finds one document that matches the query and deletes it




app.put('/replace-user',async(req,res)=>{
    try {
        const replacedUser = await userModel.findOneAndReplace({
        username:'Akash'
    },{
        username:'AkashKumar',
        email:'akash.kumar.123@gmail.com',
        password:'Akash@123'
    },{new:true})
    console.log(replacedUser)

    res.send("user Replaced")
    
    } catch (error) {
        console.log(error)
    }
    
    
})
// This method finds one document that matches the query and replaces it with a new document.





// student routes (using mysql db)
app.use(studentRoutes);



// mysql connection
mysqlConnection.query('SELECT 1').then(()=>{
    
    console.log("Mysql connected");

    app.listen(port,()=>{
    console.log('Server is running on ',port);
    })
}
).catch((error)=>console.log(error))

// Here 
// SELECT 1 is a simple, lightweight SQL query that returns the value 1. 
// It mainly ping/test the connection. 







// mongodb connection
// dbConnection.then(()=>{
//     app.listen(port,()=>{
//     console.log('Server is running ',port);
// })
// })
