const express = require('express');
const { query,body,matchedData,checkSchema, validationResult } = require('express-validator');
const cartValidationSchema = require('./utils/cartValidationSchema.js')
const cartQueryValidationSchema = require('./utils/cartQueryValidationSchema.js')
const route = express.Router();
const carts = require('./Carts')
route.get('/api/carts', (req, res) => {
     if(!req.session.user){
        return res.status(401).send({
            msg:"Unauthorized access"
        })
    }
    // res.send('<h1>Carts</h2>')
    // res.send({
    //     id:1,
    //     name:"Butter",
    //     price:45
    // })
    // res.json(
    //     {
    //     id:1,
    //     name:"Butter",
    //     price:45
    // })

    return res.send(carts)

})









// middleware
const findCartIndexById = (req, res, next) => {
    if(!req.session.user){
        return res.status(401).send({
            msg:"Unauthorized access"
        })
    }
    const { params: { id } } = req;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        return res.status(400);
    }

    const cartIndex = carts.findIndex((cart) => cart.id === parsedId)

    if (cartIndex === -1) {
        return res.status(404).send({ msg: "cart not found" });
    }

    req.cartIndex = cartIndex;
    next()
}



// route.get('/api/carts/:id', findCartIndexById, (req, res) => {
//     const { cartIndex } = req;

//     // const parseId = parseInt(req.params.id);
//     // if(isNaN(parseId)){
//     //     return res.status(404).send({msg:"Bad request. Invalid ID"})
//     // }
//     // const product = carts.find((cart)=>cart.id === parseId);



//     const product = carts[cartIndex];
//     if (!product) {
//         return res.status(404).send({ msg: "Bad request. Invalid ID" })
//     }
//     return res.send(product);
// })



// How to validate the query parameters
route.get('/api/carts',checkSchema(cartQueryValidationSchema), (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({
            errors:errors.array()
        })
    }
    const { filter, value } = req.query;

    if (filter && value) {
        const result = carts.filter((cart) => cart[filter].includes(value))
        return res.send(result);
    }

    return res.send(carts);
})



// how to validate body 
route.post('/api/carts', checkSchema(cartValidationSchema),(request, response) => {

    // checkSchema : Creates an express middleware with validations for multiple fields at once in the form of a schema object.

    const result = validationResult(request);
    if(!result.isEmpty()){
        return response.status(400).send({
            errors: result.array()
        })
    }

    // matchedData : Extracts data validated or sanitized from the request, and builds an object with them.
    
    const data = matchedData(request)
    carts.push(data);
    return response.status(201).send(data)
})


// Put Request is used when we want to update the whole data about any object.
// In the put request we need to send the whole data about any object to server
// to update even if we don't want to upadate whole data about any object. 
route.put('/api/carts/:id', findCartIndexById, (req, res) => {
    const { body, cartIndex } = req;
    // const parsedId = parseInt(id);
    // if(isNaN(parsedId)){
    //     return res.status(400);
    // }

    // const cartIndex = carts.findIndex((cart)=>cart.id === parsedId)

    // if(cartIndex === -1){
    //     return res.status(404);
    // }

    carts[cartIndex] = { id: carts[cartIndex].id, ...body }

    return res.status(200).send({
        msg: "cart updated successfully.."
    })
})



// PATCH request is used when we want to update the certain field about any object. 
// In the patch request we don't need to send the whole data to server to update
// any particular field
route.patch('/api/carts/:id', findCartIndexById, (req, res) => {
    const { body, cartIndex } = req;


    // const parsedId = parseInt(id);
    // if(isNaN(parsedId)){
    //     return res.status(400);
    // }

    // const cartIndex = carts.findIndex((cart)=>cart.id === parsedId)

    // if(cartIndex === -1){
    //     return res.status(404);
    // }

    carts[cartIndex] = { ...carts[cartIndex], ...body };

    return res.status(200).send({
        msg: "cart updated successfully.."
    })
})



route.delete('api/carts/:id', findCartIndexById, (req, res) => {
    const { cartIndex } = req;

    // const parsedId = parseInt(id);
    // if(isNaN(parsedId)){
    //     return res.status(400);
    // }

    // const cartIndex = carts.findIndex((cart)=>cart.id === parsedId)

    // if(cartIndex === -1){
    //     return res.status(404);
    // }

    carts.splice(cartIndex, 1);

    return res.status(200).send({
        msg: "cart deleted successfully.."
    })
})




module.exports = route;