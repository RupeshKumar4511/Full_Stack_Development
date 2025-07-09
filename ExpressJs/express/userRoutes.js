const express = require('express');
const mockUsers = require('./mockUsers')
const route = express.Router();



route.get('/api/users',(req,res)=>{
    
    // console.log(req.headers.cookie);// this is not parsed
    // console.log(req.cookies) // this is parsed by the cookie-parser

    // console.log(req.signedCookies); 

    req.sessionStore.get(req.session.id,(error,sessionData)=>{
        if(error){
            console.log(error);
            throw error
        }
        console.log("sessionData", sessionData);
    })

    // sessionData are stored in some data structure in memory on server. 


    console.log("id",req.session.id);



    res.send(mockUsers)
    
})


route.post('/api/users/auth',(req,res)=>{
    const {body:{username,password}} = req;

    const findUser = mockUsers.find(user=>user.username === username)
    if(!findUser) return res.status(403).send({msg:"Bad Credentials"})
    
    if(findUser.password && findUser.password !== password){
     return res.status(403).send({msg:"Bad Credentials"})   
    }

    req.session.user = findUser.username;
    
    return res.status(200).send({msg:"Authorization Completes"})
})


route.get('/api/users/auth/status',(req,res)=>{
    if(!req.session.user){
        return res.status(401).send({
            msg:"Unauthorized User"
        })
    }
    return res.status(200).send({
            msg:"Authorized User"
        })
})

module.exports = route;