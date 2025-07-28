import jwt from 'jsonwebtoken'
export const ensureAuthenticated = async (req, res, next) => {

    const token = req.cookies.token;
    if(!token){
        return res.status(400).send({message:"Unauthorized, JWT token required"})
    }
    try {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedData;
        next();

    } catch (error) {
        return res.status(400).send({message:"Unauthorized, JWT token is expired or wrong."})
    }

}