import Jwt from "jsonwebtoken";
import { User } from "../models/usersModel.js";

export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies; 
    if (!token) return res.status(404).json({
        success: false,
        message: 'Token Not Found, Please Login'
    })

    const secretToken = process.env.TOKEN;
    const decode = Jwt.verify(token, secretToken);
    req.user = await User.findById(decode._id);
    next();
}

// findById in details 
// here, decode._id,  _id is not from mongodb  but from json web token
// what does Jwt.verify () return 