import User from '../models/user.model.js';
import { sendEmail, registerMail } from '../utils/mail.js';

const generateAccessAndRefreshTokens = async (userId) => {
    try{
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});

        return { accessToken, refreshToken };
    } catch (error) {
        throw new Error('Error generating tokens');
    }
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    const existedUser = await User.findOne({
        $or : [{name}, {email}]
    })

    if(existedUser){
        return res.status(409).json({
            message : 'User already exists'
        })
    }

    const user = await User.create({
        name,
        email,
        password
    })

    // await sendEmail({
    //     email : user.email,
    //     subject : 'Welcome to TrackForge',
    //     mailgenContent : registerMail(user.name) 
    // })

    return res.status(201).json({
        message : 'User registered successfully! Email sent to user.',
        user : {
            id : user._id,
            name : user.name,
            email : user.email
        }
    })

}


export {registerUser};