import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';


const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        index: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password : {
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now
    },
    updatedAt : {
        type: Date,
        default: Date.now
    },
    refreshToken : {
        type: String
    }
},{timestamps: true});

userSchema.pre("save", async function(){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    // next();
})

userSchema.methods.isPassWordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function(){
    jwt.sign({
        _id:this._id,
        email:this.email
    }, 
    process.env.JWT_ACCESS_SECRET, 
    {
        expiresIn: process.env.JWT_ACCESS_EXPIRY
    })
}

userSchema.methods.generateRefreshToken = function(){
    jwt.sign({
        _id:this._id
    }, 
    process.env.JWT_REFRESH_SECRET, 
    {
        expiresIn: process.env.JWT_REFRESH_EXPIRY
    })
}



const User = mongoose.model('User', userSchema);

export default User;