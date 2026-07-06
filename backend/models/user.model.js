import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema = new Schema({
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

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.isPassWordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

const User = Schema.model('User', userSchema);