import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const verifyToken = async (req, res, next) => {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({
            message: 'Unauthorized: No token provided'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        const user = await User.findById(decoded._id).select('-password -refreshToken');

        if(!user){
            return res.status(401).json({
                message: 'Unauthorized: User not found'
            });
        }

        req.user = user;
        console.log('Authenticated user:', user);
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorized: Invalid token'
        });
    }
}

export {verifyToken};