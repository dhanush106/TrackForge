import User from '../models/user.model.js';
import { sendEmail, registerMail } from '../utils/mail.js';

const generateAccessAndRefreshTokens = async (userId) => {
    try{
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});
        // console.log('Access Token:', accessToken);
        // console.log('Refresh Token:', refreshToken);
        return { accessToken, refreshToken };
    } catch (error) {
        console.error('Error generating tokens',error);
        throw error;
    }
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const normalizedEmail = email?.toLowerCase().trim();

    const existedUser = await User.findOne({ email: normalizedEmail })

    if(existedUser){
        return res.status(409).json({
            message : 'User already exists'
        })
    }

    const user = await User.create({
        name,
        email: normalizedEmail,
        password
    })

    // await sendEmail({
    //     email : user.email,
    //     subject : 'Welcome to TrackForge',
    //     mailgenContent : registerMail(user.name) 
    // })

    return res.status(201).json({
        message : 'User registered successfully',
        user : {
            id : user._id,
            name : user.name,
            email : user.email
        }
    })

}

const login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            message : 'Email and password are required'
        })
    }

    const user = await User.findOne({email: email.toLowerCase().trim()});

    if(!user){
        return res.status(401).json({
            message : 'Invalid email or password'
        })
    }

    const isPasswordValid = await user.isPassWordCorrect(password);

    if(!isPasswordValid){
        return res.status(401).json({
            message : 'Invalid email or password'
        })
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

    const loggedInUser = await User.findById(user._id).select('-password -refreshToken');

    const isProduction = process.env.NODE_ENV === 'production';
    const options = {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'none' : 'lax'
    }

    return res
        .status(200)
        .cookie('accessToken', accessToken, options)
        .cookie('refreshToken', refreshToken, options)
        .json({
        message : 'User logged in successfully',
        user : loggedInUser,
        tokens : {
            accessToken,
            refreshToken
        }
    })
}

const logout = async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        { $set: { 
            refreshToken: ""
          } 
        },
        { new: true }
    );
    const isProduction = process.env.NODE_ENV === 'production';
    const options = {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'none' : 'lax'
    }
    return res
        .status(200)
        .clearCookie('accessToken', options)
        .clearCookie('refreshToken', options)
        .json({
            message : 'User logged out successfully'
        })
}
export {registerUser, login, logout};