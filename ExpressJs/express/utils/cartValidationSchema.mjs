export const cartValidationSchema = {
    id:{
        notEmpty:{
            errorMessage:"ID must not be empty."
        }
    },
    name:{
        notEmpty:{
            errorMessage:"name cannot be empty"
        },
        isString:{
            errorMessage:"Name must be a string"
        },
        isLength:{
            options:{
                min:5,
                max:32
            },
            errorMessage: "name must be atleast 5-32 characters long."
        },
    //     matches: {
    //     options: /^[A-Za-z\s]+$/,
    //     errorMessage: "Name can only contain letters and spaces."
    // }
        
    }
}

export default cartValidationSchema

