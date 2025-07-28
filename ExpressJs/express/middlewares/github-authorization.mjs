import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
config();
export const authenticateUser = async({req,res,user,name,email})=>{
    const token = jwt.sign({
        name:user.name || name,
        email:user.email || email,
    },process.env.JWT_SECRET,{ expiresIn: '24h' })

    const cookieConfig = {
        httpOnly: true,
        secure: true,
        maxAge: 60000 * 60, // cookie expires in 1 hour
        sameSite: "lax"
    }

    res.cookie("token",token,cookieConfig);

    
}