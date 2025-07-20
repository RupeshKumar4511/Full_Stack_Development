import { Router } from 'express';
import mockUsers from '../mockUsers.mjs';
import userModel from '../models/user.mjs';
import { hash, compare } from 'bcrypt';
const route = Router();



route.get('/api/users', (req, res) => {

    // console.log(req.headers.cookie);// this is not parsed
    // console.log(req.cookies) // this is parsed by the cookie-parser

    // console.log(req.signedCookies); 

    req.sessionStore.get(req.session.id, (error, sessionData) => {
        if (error) {
            console.log(error);
            throw error
        }
        console.log("sessionData", sessionData);
    })

    // sessionData are stored in some data structure in memory on server. 


    console.log("id", req.session.id);



    res.send(mockUsers)

})


route.post('/api/users/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new userModel({ username, password });
        newUser.password = await hash(password, 10);
        const savedUser = await newUser.save();
        return res.status(201).send({ message: "signup succesfully..", user: savedUser })
    } catch (error) {
        console.log(error)
    }

})


route.post('/api/users/auth', async (req, res) => {
    const { body: { username, password } } = req;

    try {
        const user = await userModel.find({ username })
        const findUser = user[0];

        if (!findUser) return res.status(403).send({ msg: "Bad Credentials" })

        const isMatch = await compare(password, findUser.password)

        if (!isMatch) {
            return res.status(403).send({ msg: "Bad Credentials" })
        }

        req.session.user = findUser.username;

        return res.status(200).send({ msg: "Authorization Completes" })
    } catch (error) {
        console.log(error)
    }
})


route.get('/api/users/auth/status', (req, res) => {
    if (!req.session.user) {
        return res.status(401).send({
            msg: "Unauthorized User"
        })
    }
    return res.status(200).send({
        msg: "Authorized User"
    })
})

export default route;