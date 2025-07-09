const cartQueryValidationSchema = {
    filter:{
        in: ['query'],
        isString:true,
        notEmpty:{
            errorMessage:"Query must not be empty."
        },
        isLength:{
            options:{
                min:3,
                max:10
            },
            errorMessage:"Query must be atleast 3-10 characters long."
        }
    },
    value:{
        in: ['query'],
        notEmpty:true
    }

}

module.exports = cartQueryValidationSchema